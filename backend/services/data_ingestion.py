import os
import pandas as pd
import numpy as np
import yfinance as yf
import dotenv
dotenv.load_dotenv()
from datetime import timezone
from services.supabase_helpers import upsert_records, _get_client

def _get_table(interval: str) -> str:
    match interval:
        case "1m" | "minutely":
            return "stock_minutely"
        case "1h" | "hourly":
            return "stock_hourly"
        case "1d" | "daily":
            return "stock_daily"
        case _:
            raise ValueError(f"Invalid interval: {interval}")


_YF_INTERVAL = {"daily": "1d", "hourly": "1h", "minutely": "1m"}

def fetch_data(ticker: str, interval: str = "1d") -> pd.DataFrame:
    # Normalize "daily"→"1d" etc. so yfinance and DB helpers both work
    yf_interval = _YF_INTERVAL.get(interval, interval)
    existing_timestamps = get_existing_timestamps(ticker, interval)
    
    table = _get_table(interval)
    
    if existing_timestamps:
        last_ts = max(existing_timestamps)
        # Include last_ts as start so the row after it gets a valid log_return
        print(f"[{ticker}] Fetching new data from yfinance starting at {last_ts}...")
        df = yf.download(ticker, start=last_ts, interval=yf_interval, auto_adjust=False, progress=False)
    else:
        default_periods = {"1m": "7d", "1h": "730d", "1d": "1000d"}
        period = default_periods.get(yf_interval, "1000d")
        print(f"[{ticker}] Fetching historical data from yfinance (period: {period})...")
        df = yf.download(ticker, period=period, interval=yf_interval, auto_adjust=False, progress=False)

    if df.empty:
        if not existing_timestamps:
            raise ValueError(f"No data returned for ticker '{ticker}'")
        return _load_from_db(ticker, interval)

    # Flatten MultiIndex columns (yfinance returns these for single tickers in newer versions)
    if isinstance(df.columns, pd.MultiIndex):
        df.columns = df.columns.get_level_values(0)

    # Normalize index to UTC
    if df.index.tz is None:
        df.index = df.index.tz_localize("UTC")
    else:
        df.index = df.index.tz_convert("UTC")

    # Compute log_return BEFORE filtering so the first new row has a valid value
    df["log_return"] = np.log(df["Adj Close"] / df["Adj Close"].shift(1))

    # Keep only rows not already in the DB
    new_df = df[~df.index.isin(existing_timestamps)]

    if not new_df.empty:
        records = [
            {
                "ticker": ticker,
                "timestamp": ts.isoformat(),
                "open": float(row["Open"]),
                "high": float(row["High"]),
                "low": float(row["Low"]),
                "close": float(row["Close"]),
                "volume": int(row["Volume"]),
                "log_return": float(row["log_return"]),
            }
            for ts, row in new_df.iterrows()
            if not pd.isna(row["log_return"])  # drop first row where prior close is unknown
        ]

        if records:
            print(f"[{ticker}] Upserting {len(records)} new {interval} rows to DB...")
            upsert_records(table, records)

    return _load_from_db(ticker, interval)


def _load_from_db(ticker: str, interval: str) -> pd.DataFrame:
    print(f"[{ticker}] Loading final {interval} dataset from DB...")
    table = _get_table(interval)
    res = (
        _get_client().table(table)
        .select("*")
        .eq("ticker", ticker)
        .order("timestamp")
        .execute()
    )
    if not res.data:
        raise ValueError(f"No data in DB for ticker '{ticker}' ({interval})")
    df = pd.DataFrame(res.data)
    df["timestamp"] = pd.to_datetime(df["timestamp"], utc=True)
    df = df.set_index("timestamp")
    return df


def get_existing_timestamps(ticker: str, interval: str) -> set:
    print(f"[{ticker}] Checking DB for existing {interval} timestamps...")
    table = _get_table(interval) 
    res = (
        _get_client().table(table)
        .select("timestamp")
        .eq("ticker", ticker)
        .execute()
    )
    return {pd.Timestamp(row["timestamp"], tz="UTC") for row in res.data}

#for testing ONLY
if __name__ == "__main__":
    df = fetch_data("AAPL", interval="1h")
    print(df.head())
    print("="*60)

    df2 = fetch_data("AAPL", interval="1m")
    print(df2.head())
    print("="*60)

    df3 = fetch_data("AAPL", interval="1d")
    print(df3.head())
