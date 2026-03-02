# services/data_ingestion.py — Step 1: Data Ingestion
#
# Purpose:
#   Fetch 1,000 trading days of OHLCV historical data for a given ticker
#   and compute daily log returns.
#
# Main function to implement:
#   fetch_data(ticker: str) -> pd.DataFrame
#
# Output DataFrame columns:
#   date, open, high, low, close, adj_close, volume, log_return
#
# Implementation notes:
#   - Use yfinance: yf.download(ticker, period="4y", auto_adjust=False)
#   - Use Adjusted Close (adj_close) for all price calculations
#   - Compute log returns: log_return = ln(adj_close[t] / adj_close[t-1])
#   - Drop the first row (NaN log_return)
#   - Raise ValueError if ticker is invalid or insufficient data returned
#   - Consider adding a simple file-based cache to avoid repeated API calls
#     during development (cache by ticker + date, invalidate after 1 day)
#
# TODO: Implement fetch_data()

import pandas as pd
import numpy as np
import yfinance as yf
