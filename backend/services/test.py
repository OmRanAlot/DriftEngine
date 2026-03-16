import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

import dotenv
dotenv.load_dotenv()

from services.feature_engineering import fetch_or_compute_indicators
from services.data_ingestion import fetch_data

ticker = "NVDA"
interval = "1h"

df = fetch_data(ticker, interval)
print(df.head())
print("=" * 60)

ta_df = fetch_or_compute_indicators(ticker, interval)
print(ta_df.head())
print("=" * 60)
