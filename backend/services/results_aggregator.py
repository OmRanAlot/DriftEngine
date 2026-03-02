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

REGIME_NAMES = ["Low-Vol Bull", "High-Vol Bull", "High-Vol Bear", "Sideways"]
REGIME_DESCRIPTIONS = [
    "Market is calmly grinding higher with steady upward drift and low volatility.",
    "Market is rallying aggressively or recovering with elevated volatility.",
    "Market is selling off with panic — high volatility, negative drift, jump risk.",
    "Market is going sideways, waiting for a catalyst — near-zero drift, moderate vol."
]
