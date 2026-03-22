import sys
import os

# Backend root (for services.*, models.*, routers.*)
sys.path.insert(0, os.path.normpath(os.path.join(os.path.dirname(__file__), "..")))

# C++ pybind11 module
sys.path.insert(0, os.path.normpath(
    os.path.join(os.path.dirname(__file__), "..", "..", "simulation", "build")
))

import dotenv
dotenv.load_dotenv()

# MinGW runtime DLLs are required for the pybind11 module (built with GCC).
os.add_dll_directory("C:/mingw64/bin")

import pprint
import drift_engine_sim  # type: ignore[import]
from services.data_ingestion import fetch_data
from services.feature_engineering import compute_indicators
from services.supabase_helpers import get_ta_from_supabase
from services.regime_classifier import (
    build_transition_matrix,
    classify_and_prepare,
    compute_regime_params,
    get_current_regime,
)
from services.parameter_builder import build_params
from services.results_aggregator import aggregate

TICKER = "NVDA"
INTERVAL = "1d"
HORIZON_DAYS = 30

print(f"\n{'='*60}")
print(f"DriftEngine — End-to-End Pipeline Test")
print(f"Ticker: {TICKER}  |  Interval: {INTERVAL}  |  Horizon: {HORIZON_DAYS} days")
print(f"{'='*60}\n")

# ── Step 1: Fetch OHLCV + log_return ─────────────────────────────────────────
print("Step 1 — Fetching price data...")
price_df = fetch_data(TICKER, INTERVAL)
price_df = price_df.reset_index()
print(f"  {len(price_df)} rows | columns: {list(price_df.columns)}\n")

# ── Step 2: Fetch / compute technical indicators ──────────────────────────────
# Try Supabase first; compute in-memory if nothing is there (avoids upsert constraint issues).
print("Step 2 — Fetching / computing technical indicators...")
ta_df = get_ta_from_supabase(interval="daily", ticker=TICKER)
if ta_df.empty:
    print("  No TA in DB — computing in-memory...")
    ta_df = compute_indicators(price_df.set_index("timestamp") if "timestamp" in price_df.columns else price_df)
    ta_df = ta_df.reset_index()
    ta_df["ticker"] = TICKER
print(f"  {len(ta_df)} TA rows | columns: {list(ta_df.columns)}\n")

# ── Step 3: Merge price + TA ──────────────────────────────────────────────────
print("Step 3 — Merging price + TA...")
ta_clean = ta_df.drop(columns=["id", "ticker"], errors="ignore")
merged = price_df.merge(ta_clean, left_on="id", right_on="stock_daily_id", how="left")
merged = merged.drop(columns=["stock_daily_id"], errors="ignore")
print(f"  Merged shape: {merged.shape}")
print(f"  NaN counts (TA cols): {ta_clean.drop(columns=['stock_daily_id'], errors='ignore').isna().sum().sum()} cells\n")

if merged.empty:
    raise RuntimeError(f"No data available for ticker '{TICKER}'.")

# ── Step 4: Regime classification ────────────────────────────────────────────
print("Step 4 — Classifying regimes...")
work_df, regimes = classify_and_prepare(
    merged,
    interval=INTERVAL,
    ticker=TICKER,
    use_supabase_cache=True,
    push_regimes=True,
)
print(f"  {len(regimes)} days classified")
print(f"  Regime distribution:\n{regimes.value_counts().sort_index().to_string()}\n")

# ── Step 5: Build params ──────────────────────────────────────────────────────
print("Step 5 — Building regime params / transition matrix...")
transition_matrix = build_transition_matrix(regimes)
current_regime = get_current_regime(regimes)
regime_params = compute_regime_params(work_df, regimes)

S0 = float(work_df["close"].iloc[-1])   # most recent close price

print(f"  current_regime = {current_regime}")
print(f"  S0 = {S0:.4f}")
print(f"  Transition matrix:")
for i, row in enumerate(transition_matrix):
    print(f"    Regime {i}: {[f'{v:.3f}' for v in row]}")
print()

params = build_params(
    regime_params, transition_matrix, current_regime, S0, HORIZON_DAYS
)

# ── Step 6: Run C++ Monte Carlo simulation ────────────────────────────────────
print(f"Step 6 — Running C++ Monte Carlo ({params['num_paths']:,} paths × {params['num_steps']} steps)...")
raw_output = drift_engine_sim.run_simulation(params)

n_terminal = len(raw_output["terminal_prices"])
n_drawdowns = len(raw_output["max_drawdowns"])
print(f"  terminal_prices: {n_terminal} paths")
print(f"  max_drawdowns:   {n_drawdowns} paths")
print(f"  p50 at step 0:   {raw_output['p50'][0]:.4f}  (should equal S0={S0:.4f})")
print(f"  p50 at step {HORIZON_DAYS}: {raw_output['p50'][-1]:.4f}\n")

# ── Steps 7–8: Aggregate results ──────────────────────────────────────────────
print("Steps 7–8 — Aggregating results...")
result = aggregate(
    raw_output,
    S0,
    HORIZON_DAYS,
    current_regime,
    regime_params,
    transition_matrix,
    TICKER,
    work_df,
)

print(f"\n{'='*60}")
print("SIMULATION RESULT SUMMARY")
print(f"{'='*60}")
print(f"  ticker:          {result['ticker']}")
print(f"  current_price:   {result['current_price']:.4f}")
print(f"  horizon_days:    {result['horizon_days']}")
print(f"  current_regime:  {result['current_regime']['name']} (id={result['current_regime']['id']})")
print(f"  description:     {result['current_regime']['description']}")

print(f"\n  Fan chart (day 0 -> {HORIZON_DAYS}):")
fc = result["fan_chart"]
print(f"    p5:  {fc['p5'][0]:.2f}  ->  {fc['p5'][-1]:.2f}")
print(f"    p25: {fc['p25'][0]:.2f}  ->  {fc['p25'][-1]:.2f}")
print(f"    p50: {fc['p50'][0]:.2f}  ->  {fc['p50'][-1]:.2f}")
print(f"    p75: {fc['p75'][0]:.2f}  ->  {fc['p75'][-1]:.2f}")
print(f"    p95: {fc['p95'][0]:.2f}  ->  {fc['p95'][-1]:.2f}")

rm = result["risk_metrics"]
print(f"\n  Risk metrics:")
print(f"    VaR  95%:            {rm['var_95']:.4f}  ({rm['var_95']*100:.2f}%)")
print(f"    VaR  99%:            {rm['var_99']:.4f}  ({rm['var_99']*100:.2f}%)")
print(f"    CVaR 95%:            {rm['cvar_95']:.4f}  ({rm['cvar_95']*100:.2f}%)")
print(f"    Prob positive:       {rm['prob_positive']:.4f}  ({rm['prob_positive']*100:.1f}%)")
print(f"    Max drawdown (med):  {rm['max_drawdown_median']:.4f}  ({rm['max_drawdown_median']*100:.2f}%)")

print(f"\n  Regime stats:")
for name, stats in result["regime_stats"].items():
    print(f"    {name}: mu={stats['mu']:.6f}, sigma={stats['sigma']:.6f}, n_days={stats['n_days']}")

print(f"\n{'='*60}")
print("Pipeline completed successfully.")
print(f"{'='*60}\n")
