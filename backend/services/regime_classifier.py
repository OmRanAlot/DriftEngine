# services/regime_classifier.py — Step 4: Regime Classification
#
# Regime IDs (0-indexed internally, 1-indexed in API responses):
#   0 — Low-Vol Bull
#   1 — High-Vol Bull
#   2 — High-Vol Bear
#   3 — Sideways / Consolidation (default; Low-Vol Bear maps here)

from __future__ import annotations

import logging
import pandas as pd
import numpy as np
from scipy import stats
from supabase_helpers import (
    get_from_supabase,
    get_ta_from_supabase,
    push_regime_columns_to_supabase,
)

logger = logging.getLogger(__name__)

# Canonical TA column names (match `push_ta_to_supabase` / `stock_*_tas`)
REQUIRED_INDICATOR_COLUMNS = [
    "sma_50",
    "sma_200",
    "sma_spread",
    "macd_line",
    "macd_signal",
    "macd_hist",
    "rsi_14",
    "bb_upper",
    "bb_lower",
    "bbw",
    "atr_14",
    "hvr",
    "obv",
]

REGIME_LABELS = {
    0: "Low-Vol Bull",
    1: "High-Vol Bull",
    2: "High-Vol Bear",
    3: "Sideways",
}


def ensure_indicator_columns(df: pd.DataFrame) -> pd.DataFrame:
    """
    If any indicator columns are missing from `df`, compute them from OHLCV + log_return
    using `feature_engineering.compute_indicators` (in-memory).
    """
    df = df.copy()
    missing = [c for c in REQUIRED_INDICATOR_COLUMNS if c not in df.columns]
    if not missing:
        return df

    from services.feature_engineering import compute_indicators

    computed = compute_indicators(df.copy())
    for col in missing:
        if col in computed.columns:
            df[col] = computed[col]
        else:
            logger.warning("ensure_indicator_columns: compute_indicators did not produce %s", col)
    return df


def add_derived_features(df: pd.DataFrame, lookback: int = 20) -> pd.DataFrame:
    """
    Rolling ATR z-score, RSI moving average, OBV rate-of-change and its rolling mean.
    Mutates a copy of `df` and returns it.
    """
    out = df.copy()
    atr = out["atr_14"]
    atr_mean = atr.rolling(window=lookback, min_periods=lookback).mean()
    atr_std = atr.rolling(window=lookback, min_periods=lookback).std()
    atr_std = atr_std.replace(0, np.nan)
    out["atr_z"] = (atr - atr_mean) / atr_std
    out["atr_z"] = out["atr_z"].replace([np.inf, -np.inf], np.nan).fillna(0.0)

    out["rsi_ma"] = out["rsi_14"].rolling(window=lookback, min_periods=lookback).mean()
    out["obv_roc"] = out["obv"].pct_change(periods=3)
    out["obv_roc_mean"] = out["obv_roc"].rolling(window=lookback, min_periods=lookback).mean()
    return out


def _score_evidence(df: pd.DataFrame, _lookback: int) -> tuple[np.ndarray, np.ndarray, pd.Series]:
    """Bull/bear point scores and net_score (vectorized)."""
    n = len(df)
    bull = np.zeros(n, dtype=float)
    bear = np.zeros(n, dtype=float)

    sma50 = df["sma_50"].to_numpy()
    sma200 = df["sma_200"].to_numpy()
    rsi = df["rsi_14"].to_numpy()
    rsi_ma = df["rsi_ma"].to_numpy()
    macd = df["macd_line"].to_numpy()
    sig = df["macd_signal"].to_numpy()
    obv = df["obv"].to_numpy()
    obv_roc_mean = df["obv_roc_mean"].to_numpy()
    atr_z = df["atr_z"].to_numpy()

    bull += np.where((sma50 > sma200) & ~np.isnan(sma50) & ~np.isnan(sma200), 2.0, 0.0)
    bear += np.where((sma50 < sma200) & ~np.isnan(sma50) & ~np.isnan(sma200), 2.0, 0.0)

    bull += np.where((rsi > rsi_ma) & ~np.isnan(rsi) & ~np.isnan(rsi_ma), 1.0, 0.0)
    bull += np.where((macd > sig) & ~np.isnan(macd) & ~np.isnan(sig), 1.0, 0.0)
    bear += np.where((rsi < rsi_ma) & ~np.isnan(rsi) & ~np.isnan(rsi_ma), 1.0, 0.0)
    bear += np.where((macd < sig) & ~np.isnan(macd) & ~np.isnan(sig), 1.0, 0.0)

    bull += np.where(obv > obv_roc_mean, 1.0, 0.0)
    bear += np.where(obv < obv_roc_mean, 1.0, 0.0)


    bull += np.where(atr_z > 0.0, 1.0, 0.0)
    bear += np.where(atr_z < 0.0, 1.0, 0.0)

    net = pd.Series(bull - bear, index=df.index)
    return bull, bear, net


def _regime_ids_from_scores(
    net_score: pd.Series,
    df: pd.DataFrame,
    thresholds: dict,
) -> pd.Series:
    """Map evidence + volatility context to regime IDs 0–3."""
    ns = net_score.to_numpy(dtype=float)

    # Threshold-driven volatility + consolidation context.
    # Note: `calibrate_thresholds()` is percentile/adaptive, not hardcoded cutoffs.
    bbw = df["bbw"].to_numpy(dtype=float)
    hvr = df["hvr"].to_numpy(dtype=float)
    atr_z = df["atr_z"].to_numpy(dtype=float)
    rsi = df["rsi_14"].to_numpy(dtype=float)
    sma_spread = df["sma_spread"].to_numpy(dtype=float)

    bbw_median = float(thresholds["bbw_median"])
    hvr_p60 = float(thresholds["hvr_p60"])
    rsi_low = float(thresholds["rsi_low"])
    rsi_high = float(thresholds["rsi_high"])
    sma_spread_threshold = float(thresholds["sma_spread_threshold"])
    atr_z_threshold = float(thresholds["atr_z_threshold"])

    # "Low-vol / compressing" means: volatility is low AND ATR is in the lower tail.
    # This is intentionally stricter than just using a single indicator.
    low_vol = (bbw <= bbw_median) & (hvr < hvr_p60) & (atr_z <= atr_z_threshold)
    low_vol = np.nan_to_num(low_vol, nan=False).astype(bool)

    # Sideways/consolidation: evidence is weak AND trend/RSI are neutral and tight.
    weak_evidence = (ns >= -2) & (ns <= 2)
    tight_spread = np.abs(sma_spread) <= sma_spread_threshold
    neutral_rsi = (rsi >= rsi_low) & (rsi <= rsi_high)
    tight_spread = np.nan_to_num(tight_spread, nan=False).astype(bool)
    neutral_rsi = np.nan_to_num(neutral_rsi, nan=False).astype(bool)
    sideways = weak_evidence & tight_spread & neutral_rsi
    sideways = np.nan_to_num(sideways, nan=False).astype(bool)

    strong_bull = ns >= 3
    strong_bear = ns <= -3

    #better than if-else
    regime = np.select(
        [
            np.isnan(ns),
            sideways,
            strong_bull & low_vol,
            strong_bull & ~low_vol,
            strong_bear & low_vol,
            strong_bear & ~low_vol,
            weak_evidence & low_vol,
            weak_evidence & ~low_vol & (ns > 0),
            weak_evidence & ~low_vol & (ns < 0),
            weak_evidence & ~low_vol & (ns == 0),
        ],
        [3, 3, 0, 1, 3, 2, 3, 1, 2, 3],
        default=3,
    )
    return pd.Series(regime, index=net_score.index, dtype=int)


def classify_regimes(
    df: pd.DataFrame,
    thresholds: dict | None = None,
    lookback: int = 20,
    *,
    add_columns: bool = True,
) -> pd.Series:
    """
    Classify each row into regime IDs 0–3 using evidence scoring + volatility context.

    If `add_columns` is True, `df` is expected to be a copy or the caller accepts
    in-place addition of derived columns (`atr_z`, `rsi_ma`, `obv_roc`, `obv_roc_mean`,
    `net_regime_score`, `regime_id`, `regime_label`).

    `thresholds` is optional; use `calibrate_thresholds` when you need percentile
    thresholds for reporting or future rule variants.
    """
    work = ensure_indicator_columns(df)
    work = add_derived_features(work, lookback=lookback)

    # `calibrate_thresholds()` currently depends on derived `atr_z`, so we must
    # compute derived features before calibrating.
    if thresholds is None:
        thresholds = calibrate_thresholds(work)

    _, _, net_score = _score_evidence(work, lookback)
    if add_columns:
        work["net_regime_score"] = net_score

    regime_series = _regime_ids_from_scores(net_score, work, thresholds=thresholds)

    # Rows with insufficient lookback / NaN core indicators → sideways
    core_nan = (
        work["rsi_14"].isna()
        | work["macd_line"].isna()
        | work["sma_50"].isna()
        | work["hvr"].isna()
    )
    regime_series = regime_series.where(~core_nan, 3)

    if add_columns:
        for k, v in work.items():
            df[k] = v
        df["regime_id"] = regime_series
        df["regime_label"] = df["regime_id"].map(REGIME_LABELS)

    return regime_series


def build_transition_matrix(regimes: pd.Series) -> list[list[float]]:
    """4×4 row-stochastic transition matrix from day-over-day regime changes."""
    mat = np.zeros((4, 4), dtype=float)
    r = regimes.dropna().astype(int).to_numpy()
    for a, b in zip(r[:-1], r[1:]):
        if 0 <= a < 4 and 0 <= b < 4:
            mat[a, b] += 1.0
    for i in range(4):
        row_sum = mat[i].sum()
        if row_sum > 0:
            mat[i] /= row_sum
        else:
            mat[i, i] = 1.0
    return mat.tolist()


def get_current_regime(regimes: pd.Series) -> int:
    """Regime ID of the last valid row."""
    s = regimes.dropna()
    if s.empty:
        return 3
    v = int(s.iloc[-1])
    return v if 0 <= v < 4 else 3


def compute_regime_params(df: pd.DataFrame, regimes: pd.Series) -> list[dict]:
    """
    Per-regime parameter dicts for the C++ engine (minimal robust implementation).
    """
    out: list[dict] = []
    log_ret = df["log_return"] if "log_return" in df.columns else None
    if log_ret is None:
        raise ValueError("compute_regime_params: log_return column required")

    for rid in range(4):
        mask = regimes == rid
        sub = log_ret[mask].dropna()
        n_days = int(sub.shape[0])
        if n_days < 30: # doesnt fit student t model(not enough data)
            mu = float(sub.mean()) if n_days else 0.0
            sigma = float(sub.std(ddof=1)) if n_days > 1 else 1e-6
            out.append(
                {
                    "mu": mu,
                    "sigma": sigma,
                    "nu": 5.0,
                    "omega": 1e-8,
                    "alpha": 0.05,
                    "beta": 0.9,
                    "lambda_j": 0.0,
                    "mu_j": 0.0,
                    "sigma_j": 0.0,
                    "sigma0": max(sigma**2, 1e-12),
                    "n_days": n_days,
                }
            )
            continue

        mu = float(sub.mean())
        sigma = float(sub.std(ddof=1)) or 1e-6

        #Student's t model
        #more likely to get more extreme values than normal distribution
        nu = 5.0
        try:
            nu_fit = stats.t.fit(sub.to_numpy())[0]
            if np.isfinite(nu_fit) and nu_fit > 2.1:
                nu = float(nu_fit)
        except Exception:
            pass

        omega, alpha, beta = 1e-8, 0.05, 0.9
        sigma0 = sigma**2
        try:
            from arch import arch_model

            am = arch_model(sub * 100, mean="Zero", vol="Garch", p=1, q=1, rescale=False)
            res = am.fit(disp="off", show_warning=False)
            p = res.params
            omega = float(max(p.get("omega", 1e-8), 1e-12))
            alpha = float(max(p.get("alpha[1]", 0.05), 1e-8))
            beta = float(max(p.get("beta[1]", 0.9), 1e-8))
            sigma0 = float(max(res.conditional_volatility.iloc[-1] ** 2, 1e-12))
        except Exception:
            pass

        lam_j, mu_j, sig_j = 0.0, 0.0, 0.0
        try:
            resid = sub - mu
            thresh = 3 * sigma
            jumps = resid[np.abs(resid) > thresh]
            if len(jumps) > 0:
                lam_j = min(len(jumps) / max(len(sub), 1), 1.0)
                mu_j = float(jumps.mean())
                sig_j = float(jumps.std(ddof=1) or 1e-6)
        except Exception:
            pass

        out.append(
            {
                "mu": mu,
                "sigma": sigma,
                "nu": nu,
                "omega": omega,
                "alpha": alpha,
                "beta": beta,
                "lambda_j": lam_j,
                "mu_j": mu_j,
                "sigma_j": sig_j,
                "sigma0": sigma0,
                "n_days": n_days,
            }
        )
    return out


def classify_and_prepare(
    df: pd.DataFrame,
    interval: str = "daily",
    lookback: int = 20,
    *,
    use_supabase_cache: bool = True,
    min_regime_coverage: float = 0.8,
    push_regimes: bool = True,
    ticker: str | None = None,
) -> tuple[pd.DataFrame, pd.Series]:
    """
    End-to-end: ensure indicators, classify, and push regime columns to Supabase.

    Flow:
      1. If `use_supabase_cache` is True and `ticker` is given, fetch regime + derived
         columns from Supabase.  If all 7 regime/derived columns have >= `min_regime_coverage`
         fraction of rows fully populated, use those cached values and return immediately
         (no recompute, no Python work).
      2. Otherwise, compute regimes locally from price + TA data.
      3. If `push_regimes` is True and `ticker` is given, write regime + derived columns
         back to Supabase so the next call can hit the cache.

    `df` must include:
      - `timestamp` as a regular column (call `df.reset_index()` if it is the index).
      - `id` (price-row primary key) for reliable join.
      - `log_return` column.
      - Merged TA columns (or they will be computed in-memory via ensure_indicator_columns).
    """
    # All columns written to / read from Supabase for regime caching.
    REGIME_COLS = [
        "regime_id",
        "regime_label",
        "atr_z",
        "rsi_ma",
        "obv_roc",
        "obv_roc_mean",
        "net_regime_score",
    ]

    work = df.copy()

    # ── Fast path: pull cached regime columns from Supabase ──────────────────
    if use_supabase_cache and ticker:
        try:
            cached = get_from_supabase(interval=interval, ticker=ticker, include_regimes=True)

            if not cached.empty:
                present_cols = [c for c in REGIME_COLS if c in cached.columns]
                if present_cols:
                    # Coverage = fraction of rows where ALL present regime columns are non-null.
                    fully_populated = cached[present_cols].notna().all(axis=1)
                    coverage = fully_populated.sum() / max(len(cached), 1)

                    if coverage >= min_regime_coverage:
                        logger.info(
                            "classify_and_prepare [%s %s]: cache HIT (%.0f%% rows fully populated)"
                            " — skipping recompute.",
                            ticker, interval, coverage * 100,
                        )
                        # Merge cached regime cols into work, preferring join on `id`.
                        join_key = "id" if "id" in work.columns and "id" in cached.columns else "timestamp"
                        if join_key == "timestamp":
                            cached["timestamp"] = pd.to_datetime(
                                cached["timestamp"], utc=True, errors="coerce"
                            )
                            work["timestamp"] = pd.to_datetime(
                                work["timestamp"], utc=True, errors="coerce"
                            )

                        cols_to_merge = [join_key] + [c for c in present_cols if c in cached.columns]
                        work = work.merge(
                            cached[cols_to_merge],
                            on=join_key,
                            how="left",
                            suffixes=("", "_c"),
                        )
                        # Consolidate any conflicting columns from the merge suffix.
                        for col in REGIME_COLS:
                            if f"{col}_c" in work.columns:
                                if col in work.columns:
                                    work[col] = work[col].where(work[col].notna(), work[f"{col}_c"])
                                else:
                                    work = work.rename(columns={f"{col}_c": col})
                                work = work.drop(columns=[f"{col}_c"], errors="ignore")

                        regimes = work["regime_id"].fillna(3).astype(int)
                        if "regime_label" not in work.columns or work["regime_label"].isna().all():
                            work["regime_label"] = regimes.map(REGIME_LABELS)
                        return work, regimes
                    else:
                        logger.info(
                            "classify_and_prepare [%s %s]: cache MISS (%.0f%% rows populated,"
                            " need >= %.0f%%) — recomputing.",
                            ticker, interval, coverage * 100, min_regime_coverage * 100,
                        )
        except Exception as e:
            logger.warning(
                "classify_and_prepare [%s %s]: Supabase cache read failed (%s). Recomputing.",
                ticker, interval, e,
            )

    # ── Cache miss: compute locally and optionally backfill Supabase ─────────
    logger.info(
        "classify_and_prepare [%s %s]: computing regime classifications locally.",
        ticker or "unknown", interval,
    )
    regimes = classify_regimes(work, lookback=lookback, add_columns=True)

    if push_regimes and ticker:
        logger.info(
            "classify_and_prepare [%s %s]: pushing %d regime rows to Supabase.",
            ticker, interval, len(work),
        )
        push_regime_columns_to_supabase(work, ticker=ticker, interval=interval)

    return work, regimes

def calibrate_thresholds(df: pd.DataFrame) -> dict:
    """
    Calibrate percentile thresholds from historical data (requires indicator columns).
    """
    df = ensure_indicator_columns(df)
    sub = df[["bbw", "hvr", "rsi_14", "sma_spread", "atr_z"]].dropna(how="any")
    return {
        "atr_z_threshold": sub["atr_z"].quantile(0.25),
        "bbw_median": sub["bbw"].median(),
        "hvr_p60": sub["hvr"].quantile(0.60),
        "rsi_low": sub["rsi_14"].quantile(0.35),
        "rsi_high": sub["rsi_14"].quantile(0.65),
        "sma_spread_threshold": sub["sma_spread"].abs().quantile(0.25),
    }

if __name__ == "__main__":
    import sys, os

    # Allow running directly from backend/services/ without installing the package.
    sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

    _df = get_from_supabase(ticker="AAPL", interval="daily")
    _ta = get_ta_from_supabase(interval="daily", ticker="AAPL")
    # Merge price + TA; drop TA's own id and ticker to avoid column conflicts.
    _ta_clean = _ta.drop(columns=["id", "ticker"], errors="ignore")
    _all = pd.merge(_df, _ta_clean, left_on="id", right_on="stock_daily_id", how="left")
    _all = _all.drop(columns=["stock_daily_id"], errors="ignore")
    _all_work = add_derived_features(_all, lookback=20)
    _th = calibrate_thresholds(_all_work)
    _reg = classify_regimes(_all, thresholds=_th, add_columns=True)
    assert set(_reg.dropna().unique()).issubset({0, 1, 2, 3})
    print(_reg.value_counts())
    print(_th)
