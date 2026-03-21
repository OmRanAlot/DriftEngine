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


def build_params(regime_params: list[dict], 
                transition_matrix: list[list[float]], 
                current_regime: int, 
                S0: float, 
                horizon_days: int, 
                num_paths: int = NUM_PATHS_DEFAULT, 
                dt: float = DT) -> dict:
    
   
    
    return {
        "S0": S0,
        "current_regime": current_regime,
        "transition_matrix": transition_matrix,
        "num_paths": num_paths,
        "num_steps": horizon_days,
        "dt": dt,
        "regimes": regime_params,
    }


if __name__ == "__main__":
    from regime_classifier import compute_regime_params, add_derived_features, calibrate_thresholds, classify_regimes, build_transition_matrix, get_current_regime, classify_and_prepare
    import pandas as pd
    import numpy as np
    from supabase_helpers import get_from_supabase, get_ta_from_supabase
    import json
    import os
    df = get_from_supabase(ticker="AAPL", interval="daily")
    ta = get_ta_from_supabase(interval="daily", ticker="AAPL")
    df = pd.merge(df, ta, left_on="id", right_on="stock_daily_id", how="left")
    df = add_derived_features(df, lookback=20)
    thresholds = calibrate_thresholds(df)
    regimes = classify_regimes(df, thresholds=thresholds)
    regime_params = compute_regime_params(df, regimes)
    transition_matrix = build_transition_matrix(regimes)
    info = build_params(regime_params, transition_matrix, get_current_regime(regimes), df["close"].iloc[0], 30) #type: ignore
    print(info)
    with open("params.json", "w") as f:
        json.dump(info, f)
    #first regimes is regime 0: Low-Volatility Bull
    #second regimes is regime 1: High-Volatility Bull
    #third regimes is regime 2: Low-Volatility Bear
    #fourth regimes is regime 3: High-Volatility Bear