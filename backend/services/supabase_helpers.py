import os
import dotenv
import pandas as pd
from supabase import create_client, Client

dotenv.load_dotenv()

_client: Client | None = None

BATCH_SIZE = 1000


def _get_client() -> Client:
    global _client
    if _client is None:
        url = os.getenv("SUPABASE_URL")
        key = os.getenv("SUPABASE_SECRET_KEY") or os.getenv("SUPABASE_KEY")
        if not url or not key:
            raise EnvironmentError("SUPABASE_URL and SUPABASE_SECRET_KEY (or SUPABASE_KEY) must be set.")
        _client = create_client(url, key)
    return _client


def _get_table(interval: str) -> str:
    match interval:
        case "daily" | "1d":
            return "stock_daily"
        case "hourly" | "1h":
            return "stock_hourly"
        case "minutely" | "1m":
            return "stock_minutely"
        case _:
            raise ValueError(f"Invalid interval: {interval!r}. Must be 'daily', 'hourly', or 'minutely'.")


def _get_ta_table(interval: str) -> str:
    return f"{_get_table(interval)}_tas"


def upsert_records(table: str, records: list[dict], interval: str = "daily"):
    """Upsert a list of dicts into `table` in batches of BATCH_SIZE.

    Conflict targets:
    - price tables `stock_*`         → unique on (ticker, timestamp)
    - daily TA table `stock_daily_tas` → unique on stock_daily_id
    - intraday TA tables (`stock_minutely_tas`, `stock_hourly_tas`) → no explicit conflict target
    """
    client = _get_client()

    on_conflict: str | None
    if table.endswith("_tas"):
        # Only the daily TA table has a stock_daily_id FK; intraday TAS tables don't.
        on_conflict = "stock_daily_id" if interval in ("daily", "1d") else None
    else:
        on_conflict = "ticker,timestamp"

    for i in range(0, len(records), BATCH_SIZE):
        batch = records[i : i + BATCH_SIZE]
        query = client.table(table).upsert(batch) if on_conflict is None else client.table(table).upsert(batch, on_conflict=on_conflict)
        query.execute()
        print(f"Upserted {min(i + BATCH_SIZE, len(records))}/{len(records)} rows into {table}")
    print(f"Upsert complete: {table}")


def get_from_supabase(interval: str = "daily", ticker: str | None = None) -> pd.DataFrame:
    table = _get_table(interval)
    query = _get_client().table(table).select(
        "id, ticker, timestamp, open, high, low, close, volume, log_return"
    )
    if ticker is not None:
        query = query.eq("ticker", ticker)
    return pd.DataFrame(query.order("timestamp").execute().data)


def push_to_supabase(df: pd.DataFrame, interval: str = "daily"):
    table = _get_table(interval)
    records = df.rename(columns={"id": "stock_daily_id"}).to_dict(orient="records")
    upsert_records(table, records)


def push_ta_to_supabase(df: pd.DataFrame, interval: str = "daily"):
    ta_columns = [
        "sma_50", "sma_200", "sma_spread",
        "macd_line", "macd_signal", "macd_hist",
        "rsi_14", "bb_upper", "bb_lower", "bbw",
        "atr_14", "hvr", "obv",
    ]
    table = _get_ta_table(interval)
    cols = [c for c in ["id", "ticker"] if c in df.columns] + [c for c in ta_columns if c in df.columns]
    ta_df = df[cols].reset_index(drop=True).dropna()
    # For daily TAS tables, it's useful to keep a FK; intraday TAS tables don't have it.
    if interval in ("daily", "1d"):
        records = ta_df.rename(columns={"id": "stock_daily_id"}).to_dict(orient="records")
    else:
        records = ta_df.to_dict(orient="records")
    upsert_records(table, records, interval=interval)


def get_ta_from_supabase(interval: str, ticker: str | None = None) -> pd.DataFrame:
    table = _get_ta_table(interval)
    # Do not assume presence of stock_*_id columns for intraday TAS tables.
    query = _get_client().table(table).select(
        "id, ticker, sma_50, sma_200, sma_spread, "
        "macd_line, macd_signal, macd_hist, rsi_14, "
        "bb_upper, bb_lower, bbw, atr_14, hvr, obv"
    )
    if ticker is not None:
        query = query.eq("ticker", ticker)
    return pd.DataFrame(query.execute().data)
