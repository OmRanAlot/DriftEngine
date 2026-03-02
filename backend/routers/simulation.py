# routers/simulation.py — simulation endpoint
#
# Endpoint: POST /simulate
#
# Request:  SimulationRequest  (models/schemas.py)
#   - ticker: str         e.g. "AAPL"
#   - horizon_days: int   e.g. 60
#
# Response: SimulationResult  (models/schemas.py)
#   - See CLAUDE.md API Contract for full response shape
#
# Pipeline (calls into services/ in order):
#   1. data_ingestion.fetch_data(ticker)              → DataFrame
#   2. feature_engineering.compute_indicators(df)    → DataFrame with indicators
#   3. regime_classifier.classify_regimes(df)        → df with regime column + regime_params
#   4. regime_classifier.build_transition_matrix(df) → 4×4 matrix
#   5. regime_classifier.get_current_regime(df)      → int (0–3)
#   6. parameter_builder.build_params(regime_params, current_regime, S0, horizon_days)
#      → SimulationParams dict/struct
#   7. Call C++ engine via pybind11:
#      simulation_engine.run_simulation(params) → raw SimulationOutput
#   8. results_aggregator.aggregate(raw_output, S0, horizon_days) → SimulationResult
#
# Error handling:
#   - Invalid ticker → 422 with detail message
#   - yfinance fetch failure → 502 with detail message
#   - Simulation engine error → 500 with detail message
#
# TODO: Implement the full pipeline. Import and call each service in order.

from fastapi import APIRouter, HTTPException
from models.schemas import SimulationRequest, SimulationResult

router = APIRouter()


@router.post("/simulate", response_model=SimulationResult)
async def simulate(request: SimulationRequest):
    # TODO: call pipeline steps 1–8 as described above
    raise HTTPException(status_code=501, detail="Simulation not yet implemented")
