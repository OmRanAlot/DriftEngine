# services/regime_classifier.py — Step 4: Regime Classification
#
# Purpose:
#   Classify each historical day into one of 4 market regimes using rule-based
#   conditional logic. Build per-regime parameter sets and the 4×4 transition matrix.
#
# Regime IDs (0-indexed internally, 1-indexed in API responses):
#   0 (Regime 1) — Low-Vol Bull
#   1 (Regime 2) — High-Vol Bull
#   2 (Regime 3) — High-Vol Bear
#   3 (Regime 4) — Sideways / Consolidation
#
# Functions to implement:
#
# calibrate_thresholds(df) -> dict
#   Compute per-stock percentile thresholds from historical data.
#   Returns dict with keys like:
#     bbw_median, bbw_p65, hvr_p60, rsi_low (35th pct), rsi_high (65th pct),
#     sma_spread_threshold (small spread = abs value below 20th pct)
#
# classify_regimes(df, thresholds) -> pd.Series
#   Apply regime rules to each row. Returns a Series of regime IDs (0–3).
#   Classification rules (see CLAUDE.md for full details):
#     Regime 0 (Low-Vol Bull):   sma_spread > 0, bbw < bbw_median, hvr < 1.0,
#                                obv trend matches price trend
#     Regime 1 (High-Vol Bull):  sma_spread > 0, (bbw > bbw_median OR hvr > 1.2),
#                                rsi > rsi_high possible
#     Regime 2 (High-Vol Bear):  sma_spread < 0, bbw > bbw_median, hvr > 1.2,
#                                rsi < rsi_low, obv diverging
#     Regime 3 (Sideways):       |sma_spread| < sma_spread_threshold,
#                                rsi between rsi_low and rsi_high,
#                                bbw <= bbw_median, |macd_hist| near zero
#   Note: assign regime 3 (Sideways) as the fallback for unclassified rows.
#
# compute_regime_params(df, regimes) -> list[dict]
#   For each regime, filter df to rows in that regime and compute:
#     mu           = mean(log_return)
#     sigma        = std(log_return)
#     nu           = Student's t df fitted by MLE (scipy.stats.t.fit)
#     garch_params = fit GARCH(1,1) using arch library → {omega, alpha, beta}
#     jump_params  = estimate {lambda_j, mu_j, sigma_j} from outlier returns
#                    (outliers = |log_return| > 3*sigma after GARCH filtering)
#     sigma0       = last GARCH conditional variance (starting value for simulation)
#     n_days       = number of days classified into this regime
#
# build_transition_matrix(regimes: pd.Series) -> list[list[float]]
#   Count day-over-day transitions between regimes.
#   Normalize each row so probabilities sum to 1.
#   Returns 4×4 list of lists.
#
# get_current_regime(df, regimes) -> int
#   Return the regime ID of the most recent (last) row in df.
#
# TODO: Implement all functions above.

import pandas as pd
import numpy as np
from scipy import stats
from arch import arch_model
