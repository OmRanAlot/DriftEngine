import logging
import os
import dotenv
import numpy as np
import pandas as pd
from supabase import create_client, Client

logger = logging.getLogger(__name__)

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


def get_from_supabase(
    interval: str = "daily",
    ticker: str | None = None,
    *,
    include_regimes: bool = False,
) -> pd.DataFrame:
    table = _get_table(interval)
    base_select = "id, ticker, timestamp, open, high, low, close, volume, log_return"
    regime_select = (
        "regime_id, regime_label, atr_z, rsi_ma, obv_roc, obv_roc_mean, net_regime_score"
    )
    select_clause = f"{base_select}, {regime_select}" if include_regimes else base_select

    query = _get_client().table(table).select(select_clause)
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
        "bb_upper, bb_lower, bbw, atr_14, hvr, obv, stock_daily_id"
    )
    if ticker is not None:
        query = query.eq("ticker", ticker)
    return pd.DataFrame(query.execute().data)

def add_column_to_table(table: str, column: str, value: pd.Series):
    client = _get_client()
    client.table(table).update({column: value}).execute()
    print(f"Added column {column} to table {table}")
    return pd.DataFrame(client.table(table).select(column).execute().data)


# Columns written by `regime_classifier.classify_regimes(..., add_columns=True)` — add via SQL migration first.
REGIME_UPSERT_COLUMNS = [
    "regime_id",
    "regime_label",
    "atr_z",
    "rsi_ma",
    "obv_roc",
    "obv_roc_mean",
    "net_regime_score",
]


def push_regime_columns_to_supabase(
    df: pd.DataFrame,
    ticker: str,
    interval: str = "daily",
) -> None:
    """
    Upsert regime + derived columns into the main `stock_*` table for `(ticker, timestamp)`.

    Only includes columns that exist on `df`. If the database table has not been migrated
    to include these columns, the upsert fails gracefully (logged, no exception to caller).
    """
    table = _get_table(interval)
    if "timestamp" not in df.columns:
        logger.warning(
            "push_regime_columns_to_supabase: missing required column 'timestamp'; skipping backfill",
        )
        return

    extra = [c for c in REGIME_UPSERT_COLUMNS if c in df.columns]
    cols = ["timestamp"] + extra
    sub = df[cols].copy()
    sub["ticker"] = ticker

    ts = pd.to_datetime(sub["timestamp"], utc=True)
    sub["timestamp"] = ts.map(lambda x: x.isoformat() if pd.notna(x) else None)
    sub = sub.replace({np.nan: None})

    records = sub.to_dict(orient="records")
    if not records:
        return

    try:
        upsert_records(table, records, interval=interval)
    except Exception as e:
        logger.warning(
            "push_regime_columns_to_supabase: upsert failed (add columns via migration?): %s",
            e,
        )


# for testing
if __name__ == "__main__":
    df = get_from_supabase(ticker="AAPL", interval="daily")
    df_ta = get_ta_from_supabase(ticker="AAPL", interval="daily")
    print(df.head())
    print(df_ta.head())
    