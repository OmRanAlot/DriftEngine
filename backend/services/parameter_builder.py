# services/parameter_builder.py — Step 5: Package Parameters for C++ Engine
#
# Purpose:
#   Assemble all regime parameters, transition matrix, and simulation config
#   into a single Python dict that matches the C++ SimulationParams struct
#   exposed via pybind11.
#
# Main function to implement:
#   build_params(
#       regime_params: list[dict],    # from regime_classifier.compute_regime_params()
#       transition_matrix: list[list[float]],  # 4×4
#       current_regime: int,          # 0–3
#       S0: float,                    # current stock price
#       horizon_days: int,
#       num_paths: int = 10_000,
#       dt: float = 1/252
#   ) -> dict
#
# Output dict structure (must exactly match SimulationParams in monte_carlo.h):
#   {
#     "S0": float,
#     "current_regime": int,
#     "transition_matrix": [[float x4] x4],
#     "num_paths": int,
#     "num_steps": int,
#     "dt": float,
#     "regimes": [
#       {
#         "mu": float,
#         "omega": float,      ← GARCH ω
#         "alpha": float,      ← GARCH α
#         "beta": float,       ← GARCH β
#         "nu": float,         ← Student-t degrees of freedom
#         "lambda_j": float,   ← jump intensity (jumps per day)
#         "mu_j": float,       ← mean jump log-size
#         "sigma_j": float,    ← jump log-size stdev
#         "sigma0": float      ← initial GARCH variance for simulation start
#       }
#       × 4  (one per regime)
#     ]
#   }
#
# TODO: Implement build_params()

import numpy as np

NUM_PATHS_DEFAULT = 10_000
DT = 1 / 252
