# models/schemas.py — Pydantic request/response models
#
# These define the API contract between the React frontend and FastAPI backend.
# See CLAUDE.md API Contract section for field-by-field descriptions.
#
# TODO: Implement all models below

from pydantic import BaseModel, Field
from typing import List, Optional, Literal


# ─── Request ───────────────────────────────────────────────────────────────

class SimulationRequest(BaseModel):
    ticker: str = Field(..., min_length=1, max_length=5, description="Stock ticker symbol")
    horizon_days: int = Field(..., ge=1, le=252, description="Forecast horizon in trading days")
    interval: Literal["daily", "hourly", "minutely"] = Field("daily", description="Interval of the data")
    num_paths: int = Field(10_000, ge=1_000, le=500_000, description="Number of Monte Carlo simulation paths")

# ─── Sub-models ────────────────────────────────────────────────────────────

class RegimeInfo(BaseModel):
    id: int                    # 1–4
    name: str                  # e.g. "Low-Vol Bull"
    description: str
    indicators: dict           # indicator name → value dict


class FanChartData(BaseModel):
    days: List[int]            # [0, 1, ..., horizon_days]
    p5:   List[float]
    p25:  List[float]
    p50:  List[float]          # median
    p75:  List[float]
    p95:  List[float]


class TerminalDistribution(BaseModel):
    prices: List[float]        # bin center prices
    probabilities: List[float] # probability for each bin (sums to ~1)


class RiskMetrics(BaseModel):
    var_95: float              # Value at Risk at 95% confidence (as decimal, e.g. -0.12)
    var_99: float
    cvar_95: float             # Conditional VaR / Expected Shortfall at 95%
    prob_positive: float       # Probability of positive return (0–1)
    max_drawdown_median: float # Median max drawdown across paths (negative decimal)


# ─── Response ──────────────────────────────────────────────────────────────

class SimulationResult(BaseModel):
    ticker: str
    current_price: float
    horizon_days: int
    current_regime: RegimeInfo
    fan_chart: FanChartData
    terminal_distribution: TerminalDistribution
    risk_metrics: RiskMetrics
    transition_matrix: List[List[float]]  # 4×4
    regime_stats: dict                    # per-regime μ, σ, sample size
    paths: List[List[float]]              # all simulated paths, each length (horizon_days+1)
