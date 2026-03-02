# services/feature_engineering.py — Steps 2 & 3: Statistical Features + Technical Indicators
#
# Purpose:
#   Compute all 8 technical indicators for every day in the 1,000-day window,
#   plus global statistical summary metrics.
#
# Main function to implement:
#   compute_indicators(df: pd.DataFrame) -> pd.DataFrame
#     Input: DataFrame from data_ingestion (must have adj_close, high, low, volume, log_return)
#     Output: same DataFrame with these added columns:
#
#   Global stats (scalar, stored as metadata — not per-row):
#     mu_global    = mean(log_return)
#     sigma_global = std(log_return)
#     skewness     = scipy.stats.skew(log_return)
#     kurtosis     = scipy.stats.kurtosis(log_return)
#
#   Per-row indicator columns:
#     sma_50         — 50-day simple moving average of adj_close
#     sma_200        — 200-day simple moving average of adj_close
#     sma_spread     — (sma_50 - sma_200) / sma_200
#     macd_line      — EMA(12) - EMA(26) of adj_close
#     macd_signal    — 9-day EMA of macd_line
#     macd_hist      — macd_line - macd_signal
#     rsi_14         — 14-day Relative Strength Index (0–100)
#     bb_upper       — SMA(20) + 2 * std(20) of adj_close
#     bb_lower       — SMA(20) - 2 * std(20) of adj_close
#     bb_mid         — SMA(20) of adj_close
#     bbw            — (bb_upper - bb_lower) / bb_mid  (Bollinger Band Width)
#     atr_14         — 14-day Average True Range
#     hvr            — std(log_return, 10) / std(log_return, 60)  (Historical Vol Ratio)
#     obv            — On-Balance Volume (cumulative)
#
# Implementation notes:
#   - Implement all indicators manually with pandas (no ta-lib dependency)
#   - RSI formula: RS = mean(gains, 14) / mean(losses, 14); RSI = 100 - 100/(1+RS)
#     Use Wilder's smoothing (exponential, min_periods=14)
#   - ATR True Range = max(high-low, |high-prev_close|, |low-prev_close|)
#   - OBV: starts at 0; add volume on up days, subtract on down days
#   - Drop rows with NaN (first ~200 rows will be NaN due to SMA200 lookback)
#   - Return (df_with_indicators, global_stats_dict)
#
# TODO: Implement compute_indicators()

import pandas as pd
import numpy as np
from scipy import stats
