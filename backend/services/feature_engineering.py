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
from services.supabase_helpers import get_from_supabase, get_ta_from_supabase, push_ta_to_supabase


def sma_50(df: pd.DataFrame) -> pd.DataFrame:
    return df["close"].rolling(window=50).mean()

def sma_200(df: pd.DataFrame) -> pd.DataFrame:
    return df["close"].rolling(window=200).mean()
    
def sma_spread(df: pd.DataFrame) -> pd.DataFrame:
    sma50 = sma_50(df)
    sma200 = sma_200(df)
    return (sma50 - sma200) / sma200

def ema_12(df: pd.DataFrame) -> pd.DataFrame:
    return df["close"].ewm(span=12, adjust=False).mean()

def ema_26(df: pd.DataFrame) -> pd.DataFrame:
    return df["close"].ewm(span=26, adjust=False).mean()

def MACD(df: pd.DataFrame) -> pd.DataFrame:
    ema12 = ema_12(df)
    ema26 = ema_26(df)
    macdline = ema12 - ema26
    macdsignal = macdline.ewm(span=9, adjust=False).mean()
    macdhist = macdline - macdsignal
    return macdline, macdsignal, macdhist

def rsi_14(df: pd.DataFrame) -> pd.DataFrame:
    close = df["close"]
    delta = close.diff()
    gain = (delta.where(delta > 0, 0)).rolling(window=14).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=14).mean()
    rs = gain / loss
    rsi = 100 - (100 / (1 + rs))
    return rsi

def bbands(df: pd.DataFrame) -> pd.DataFrame:
    sma = df["close"].rolling(window=20).mean()
    std = df["close"].rolling(window=20).std()
    bb_upper = sma + 2 * std
    bb_lower = sma - 2 * std
    bbw = (bb_upper - bb_lower) / sma
    return bb_upper, bb_lower, bbw

def true_range(df: pd.DataFrame) -> pd.DataFrame:
    high = df["high"]
    low = df["low"]
    close = df["close"]
    trueRange = np.maximum(np.maximum(high - low, np.abs(high - close.shift(1))), np.abs(low - close.shift(1)))
    return trueRange

def atr(df: pd.DataFrame) -> pd.DataFrame:
    trueRange = true_range(df)
    return trueRange.rolling(window=14).mean()

def hvr(df: pd.DataFrame) -> pd.DataFrame:
    log_return = df["log_return"]
    return log_return.rolling(window=10).std() / log_return.rolling(window=60).std()

def obv(df: pd.DataFrame) -> pd.DataFrame:
    volume = df["volume"]
    return volume.where(df["close"].diff() > 0, 0).cumsum()

def compute_indicators(df: pd.DataFrame) -> pd.DataFrame:
    macd_line, macd_signal, macd_hist = MACD(df)
    bb_upper, bb_lower, bbw = bbands(df)
    indicators = {
        "sma_50": sma_50(df),
        "sma_200": sma_200(df),
        "sma_spread": sma_spread(df),
        "macd_line": macd_line,
        "macd_signal": macd_signal,
        "macd_hist": macd_hist,
        "rsi_14": rsi_14(df),
        "bb_upper": bb_upper,
        "bb_lower": bb_lower,
        "bbw": bbw,
        "atr_14": atr(df),
        "hvr": hvr(df),
        "obv": obv(df),
    }

    df = df.assign(**indicators)

    return df

def fetch_or_compute_indicators(ticker: str, interval: str = "1d") -> pd.DataFrame:
    """
    Ensure technical indicators exist in `stock_{interval}_tas` for `ticker`.

    - If TA rows already exist for a stock row (`stock_daily_id`), they are reused.
    - Missing TA rows are computed from the existing OHLCV data in `stock_{interval}` and upserted.
    - Returns the full TA DataFrame for the ticker after any backfill.
    """
    match interval:
        case "1m" | "minutely":
            interval = "minutely"
        case "1h" | "hourly":
            interval = "hourly"
        case "1d" | "daily":
            interval = "daily"
        case _:
            raise ValueError(f"Invalid interval: {interval!r}")

    stock_df = get_from_supabase(interval=interval, ticker=ticker)
    if stock_df.empty:
        raise ValueError(f"No OHLCV data found in DB for ticker={ticker!r}, interval={interval!r}")

    ta_df = get_ta_from_supabase(interval=interval, ticker=ticker)
    if ta_df.empty:
        # No TA at all yet – compute for all price rows
        computed = compute_indicators(stock_df)
        push_ta_to_supabase(computed, interval=interval)
        return get_ta_from_supabase(interval=interval, ticker=ticker)

    # We already have some TA rows; recompute and upsert for all price rows to
    # keep things consistent with the current indicator definitions.
    computed = compute_indicators(stock_df)
    push_ta_to_supabase(computed, interval=interval)
    return get_ta_from_supabase(interval=interval, ticker=ticker)

#for testing ONLY
if __name__ == "__main__":
    print("running")
    import sys
    import os
    sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
    ta_df = fetch_or_compute_indicators("AAPL", interval="daily")
    print(ta_df.head())