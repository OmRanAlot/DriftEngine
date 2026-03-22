# services/results_aggregator.py — Step 7: Results Aggregation
#
# Purpose:
#   Post-process raw C++ simulation output into the structured SimulationResult
#   response format expected by the frontend.
#
# Main function to implement:
#   aggregate(
#       raw_output: dict,        # output from pybind11 C++ run_simulation()
#       S0: float,               # current price
#       horizon_days: int,
#       current_regime_id: int,
#       regime_params: list[dict],
#       transition_matrix: list[list[float]],
#       ticker: str
#   ) -> dict   (matches SimulationResult schema)
#
# raw_output from C++ contains (see results.h):
#   percentiles: dict with keys p5, p25, p50, p75, p95 — each a list of length (num_steps+1)
#   terminal_prices: list[float] — final price for each of the 10,000 paths
#   max_drawdowns: list[float]   — max drawdown fraction for each path (negative values)
#
# Computations to perform in Python (using numpy/scipy):
#
#   fan_chart:
#     days = [0, 1, ..., horizon_days]
#     p5, p25, p50, p75, p95 = percentiles from raw_output (already computed by C++)
#
#   terminal_distribution:
#     Compute histogram of terminal_prices with ~50 bins
#     Normalize to get probability density
#     Return bin centers and probabilities
#
#   risk_metrics:
#     var_95 = percentile(terminal_returns, 5) where terminal_return = (P_T - S0) / S0
#     var_99 = percentile(terminal_returns, 1)
#     cvar_95 = mean of terminal_returns below var_95 threshold
#     prob_positive = fraction of paths where terminal_price > S0
#     max_drawdown_median = median(max_drawdowns)
#
#   regime context:
#     Build RegimeInfo dict from current_regime_id and regime_params
#
# TODO: Implement aggregate()

import numpy as np
from scipy import stats
import pandas as pd

REGIME_NAMES = ["Low-Vol Bull", "High-Vol Bull", "High-Vol Bear", "Sideways"]
REGIME_DESCRIPTIONS = [
    "Market is calmly grinding higher with steady upward drift and low volatility.",
    "Market is rallying aggressively or recovering with elevated volatility.",
    "Market is selling off with panic — high volatility, negative drift, jump risk.",
    "Market is going sideways, waiting for a catalyst — near-zero drift, moderate vol."
]

_INDICATOR_COLS = ["rsi", "macd_hist", "bb_width", "hvr", "sma_spread", "atr"]


def aggregate(
    raw_output: dict,
    S0: float,
    horizon_days: int,
    current_regime_id: int,
    regime_params: list[dict],
    transition_matrix: list[list[float]],
    ticker: str,
    work_df: pd.DataFrame,
) -> dict:
    terminal_prices = np.asarray(raw_output["terminal_prices"], dtype=float)
    terminal_prices = terminal_prices[np.isfinite(terminal_prices)]
    max_drawdowns = np.asarray(raw_output["max_drawdowns"], dtype=float)
    max_drawdowns = max_drawdowns[np.isfinite(max_drawdowns)]
    if terminal_prices.size == 0:
        raise ValueError("Simulation produced no finite terminal prices — check regime parameters.")

    # ── Fan chart ────────────────────────────────────────────────────────────
    def _clean_series(values: list, fallback: float) -> list[float]:
        """Forward-fill NaN/inf with the last valid value (or `fallback` for leading gaps).
        Ensures the schema always receives List[float] with no None entries."""
        cleaned: list[float] = []
        last_valid = fallback
        for v in values:
            if v is not None and np.isfinite(v):
                last_valid = float(v)
            cleaned.append(last_valid)
        return cleaned

    fan_chart = {
        "days": list(range(horizon_days + 1)),
        "p5":  _clean_series(raw_output["p5"],  S0),
        "p25": _clean_series(raw_output["p25"], S0),
        "p50": _clean_series(raw_output["p50"], S0),
        "p75": _clean_series(raw_output["p75"], S0),
        "p95": _clean_series(raw_output["p95"], S0),
    }

    # ── Terminal distribution ─────────────────────────────────────────────────
    counts, bin_edges = np.histogram(terminal_prices, bins=50, density=True)
    bin_centers = 0.5 * (bin_edges[:-1] + bin_edges[1:])
    bin_width = bin_edges[1] - bin_edges[0]
    probabilities = counts * bin_width  # normalize so values sum to ~1
    terminal_distribution = {
        "prices": [float(v) for v in bin_centers],
        "probabilities": [float(v) for v in probabilities],
    }

    # ── Risk metrics ──────────────────────────────────────────────────────────
    terminal_returns = (terminal_prices - S0) / S0
    var_95 = float(np.percentile(terminal_returns, 5))
    var_99 = float(np.percentile(terminal_returns, 1))
    below_var95 = terminal_returns[terminal_returns <= var_95]
    cvar_95 = float(below_var95.mean()) if len(below_var95) > 0 else var_95
    prob_positive = float(np.mean(terminal_prices > S0))
    max_drawdown_median = float(np.median(max_drawdowns))
    risk_metrics = {
        "var_95": var_95,
        "var_99": var_99,
        "cvar_95": cvar_95,
        "prob_positive": prob_positive,
        "max_drawdown_median": max_drawdown_median,
    }

    # ── Current regime ────────────────────────────────────────────────────────
    latest = work_df.iloc[0]
    indicators = {
        col: float(latest[col])
        for col in _INDICATOR_COLS
        if col in work_df.columns and pd.notna(latest[col])
    }
    current_regime = {
        "id": current_regime_id + 1,
        "name": REGIME_NAMES[current_regime_id],
        "description": REGIME_DESCRIPTIONS[current_regime_id],
        "indicators": indicators,
    }

    # ── Regime stats ──────────────────────────────────────────────────────────
    regime_stats = {
        REGIME_NAMES[i]: {
            "mu": regime_params[i].get("mu", 0.0),
            "sigma": regime_params[i].get("sigma", 0.0),
            "n_days": regime_params[i].get("n_days", 0),
        }
        for i in range(len(regime_params))
    }

    return {
        "ticker": ticker,
        "current_price": float(S0),
        "horizon_days": horizon_days,
        "current_regime": current_regime,
        "fan_chart": fan_chart,
        "terminal_distribution": terminal_distribution,
        "risk_metrics": risk_metrics,
        "transition_matrix": transition_matrix,
        "regime_stats": regime_stats,
    }
