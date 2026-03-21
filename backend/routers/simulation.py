# routers/simulation.py — simulation endpoint
#
# Endpoint: POST /simulate
#
# Pipeline:
#   1. data_ingestion.fetch_data(ticker, "1d")
#        → OHLCV + log_return from Supabase / yfinance (timestamp as index → reset_index())
#   2. feature_engineering.fetch_or_compute_indicators(ticker, "daily")
#        → TA columns from Supabase / compute if missing
#   3. Merge price + TA on price.id == ta.stock_daily_id
#   4. regime_classifier.classify_and_prepare(merged, ticker, …)
#        → cache read from Supabase → recompute + push if cache miss
#   5. build_transition_matrix, get_current_regime, compute_regime_params
#   6. parameter_builder.build_params → SimulationParams (TODO)
#   7. C++ simulation engine via pybind11 (TODO)
#   8. results_aggregator.aggregate → SimulationResult (TODO)

import logging

from fastapi import APIRouter, HTTPException

from models.schemas import SimulationRequest, SimulationResult
from services.data_ingestion import fetch_data
from services.feature_engineering import fetch_or_compute_indicators
from services.regime_classifier import (
    build_transition_matrix,
    classify_and_prepare,
    compute_regime_params,
    get_current_regime,
)

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post("/simulate", response_model=SimulationResult)
async def simulate(request: SimulationRequest):
    ticker = request.ticker.upper().strip()
    horizon_days = request.horizon_days

    # ── Step 1: Ensure OHLCV + log_return are in Supabase ────────────────────
    logger.info("[%s] Step 1 — fetching price data.", ticker)
    try:
        price_df = fetch_data(ticker, "1d")
    except ValueError as exc:
        raise HTTPException(status_code=422, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"Failed to fetch price data: {exc}")

    # fetch_data() sets `timestamp` as the index; we need it as a column for downstream writes.
    price_df = price_df.reset_index()

    # ── Step 2: Ensure TA columns are in Supabase ────────────────────────────
    logger.info("[%s] Step 2 — fetching / computing technical indicators.", ticker)
    try:
        ta_df = fetch_or_compute_indicators(ticker, "daily")
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"Failed to compute indicators: {exc}")

    # ── Step 3: Merge price + TA ──────────────────────────────────────────────
    # TA table has its own `id` and a `stock_daily_id` FK → price table's `id`.
    # Drop TA's own `id` and `ticker` to avoid column conflicts after merge.
    logger.info("[%s] Step 3 — merging price + TA data.", ticker)
    ta_clean = ta_df.drop(columns=["id", "ticker"], errors="ignore")
    merged = price_df.merge(ta_clean, left_on="id", right_on="stock_daily_id", how="left")
    merged = merged.drop(columns=["stock_daily_id"], errors="ignore")

    if merged.empty:
        raise HTTPException(status_code=422, detail=f"No data available for ticker '{ticker}'.")

    # ── Step 4: Regime classification + Supabase backfill ────────────────────
    # classify_and_prepare will:
    #   - Try to read cached regime_id + derived cols from Supabase.
    #   - If coverage is insufficient, compute locally and push to Supabase.
    logger.info("[%s] Step 4 — classifying regimes.", ticker)
    try:
        work_df, regimes = classify_and_prepare(
            merged,
            interval="daily",
            ticker=ticker,
            use_supabase_cache=True,
            push_regimes=True,
        )
    except Exception as exc:
        logger.exception("[%s] Regime classification failed.", ticker)
        raise HTTPException(status_code=500, detail=f"Regime classification failed: {exc}")

    # ── Step 5: Downstream regime outputs ────────────────────────────────────
    logger.info("[%s] Step 5 — building regime params / transition matrix.", ticker)
    transition_matrix = build_transition_matrix(regimes)
    current_regime = get_current_regime(regimes)
    regime_params = compute_regime_params(work_df, regimes)

    logger.info(
        "[%s] Regime backfill complete. current_regime=%d, %d historical days classified.",
        ticker, current_regime, len(regimes),
    )

    # ── Steps 6–8: Monte Carlo simulation (not yet implemented) ──────────────
    # TODO: call parameter_builder.build_params() → C++ engine → results_aggregator.aggregate()
    raise HTTPException(
        status_code=501,
        detail=(
            "Regime columns have been updated in Supabase. "
            "Monte Carlo simulation (steps 6–8) is not yet implemented."
        ),
    )
