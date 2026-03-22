# DriftEngine

Probabilistic stock scenario generation tool using 10,000 Monte Carlo simulations with regime-switching GARCH, Student-t fat tails, and jump-diffusion.

**This is a probabilistic scenario tool, not a price predictor.**

---

## Architecture

```
Frontend (React/Vite :5173)
    │  POST /api/simulate {ticker, horizon_days}
    ▼
Backend (FastAPI :8000)
    │  1. Fetch OHLCV data (yfinance → Supabase cache)
    │  2. Compute 8 technical indicators
    │  3. Classify market regime (rule-based, 4 regimes)
    │  4. Fit GARCH(1,1) + Student-t + jump params per regime
    │  5. Build transition matrix
    ▼
C++ Simulation Engine (pybind11)
    │  10,000 paths × N steps
    │  Per step: regime transition → GARCH → fat-tail shock → jump → price update
    ▼
Results → Fan chart, terminal distribution, VaR/CVaR, regime context
```

---

## Prerequisites

- **Python 3.13+** (with pip)
- **Node.js 18+** (with npm)
- **CMake 3.15+**
- **C++ compiler** — MinGW-w64 (GCC) on Windows, or GCC/Clang on Linux/Mac
- **Supabase account** — for data caching (set up tables for stock_daily, stock_daily_tas, etc.)

---

## Setup & Run

### 1. C++ Simulation Engine

The pybind11 module must be built first. It produces `drift_engine_sim.pyd` (Windows) or `.so` (Linux/Mac).

```bash
cd simulation
mkdir build && cd build

# Windows (MinGW)
cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release
mingw32-make

# Linux/Mac
cmake .. -DCMAKE_BUILD_TYPE=Release
make
```

Verify the module exists:
```bash
# Windows
ls simulation/build/drift_engine_sim.*.pyd

# Linux/Mac
ls simulation/build/drift_engine_sim.*.so
```

### 2. Backend (FastAPI)

```bash
cd backend

# Create and activate virtual environment
python -m venv .venv
# Windows
.venv\Scripts\activate
# Linux/Mac
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables (create .env file)
# Required:
#   SUPABASE_URL=https://your-project.supabase.co
#   SUPABASE_SECRET_KEY=your-service-role-key

# Run the server
uvicorn main:app --reload --port 8000
```

The API is now at http://localhost:8000. Check http://localhost:8000/docs for the Swagger UI.

**Verify it works:**
```bash
curl http://localhost:8000/health
# → {"status":"ok"}
```

### 3. Frontend (React + Vite)

```bash
cd frontend

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open http://localhost:5173 in your browser.

The Vite dev server proxies `/api/*` requests to the backend at `localhost:8000`, so no CORS issues during development.

---

## How It Works

1. **Enter a ticker** (e.g., AAPL) and select a forecast horizon (30/60/90/120 days)
2. The backend fetches ~1,000 days of historical data via yfinance (cached in Supabase)
3. 8 technical indicators are computed: SMA50/200, MACD, RSI-14, BBW, ATR-14, HVR, OBV
4. Each day is classified into one of 4 market regimes:
   - **Low-Vol Bull** — steady uptrend, low volatility
   - **High-Vol Bull** — aggressive rally, elevated volatility
   - **High-Vol Bear** — selloff with panic, high vol, negative drift
   - **Sideways** — consolidation, near-zero drift
5. Per-regime parameters are fitted: GARCH(1,1) volatility, Student-t degrees of freedom, jump intensity
6. The C++ engine runs 10,000 Monte Carlo paths with regime switching
7. Results are aggregated: fan chart (percentile bands), terminal distribution, VaR/CVaR, drawdown stats

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SUPABASE_URL` | Yes | Your Supabase project URL |
| `SUPABASE_SECRET_KEY` | Yes | Service role key (or `SUPABASE_KEY`) |

Create a `.env` file in the `backend/` directory.

---

## API

### `POST /simulate`

**Request:**
```json
{
  "ticker": "AAPL",
  "horizon_days": 60,
  "interval": "daily"
}
```

**Response:** Fan chart percentiles, terminal price distribution, risk metrics (VaR, CVaR, P(gain), max drawdown), current regime info, 4x4 transition matrix, per-regime stats.

See `backend/models/schemas.py` for the full response schema.

---

## Logs

The backend prints step-by-step logs during simulation:
```
Step 1 — fetching price data
Step 2 — computing technical indicators
Step 3 — merging price + TA data
Step 4 — classifying regimes
Step 5 — building regime params / transition matrix
Step 6 — running Monte Carlo simulation
Steps 7-8 — aggregating results
```

---

## Project Structure

See `CLAUDE.md` for the full architecture reference, data pipeline details, and API contract.

---

## Troubleshooting

- **`ModuleNotFoundError: drift_engine_sim`** — The C++ module isn't built or not on `sys.path`. Rebuild it and ensure `simulation/build/` contains the `.pyd`/`.so` file.
- **`EnvironmentError: SUPABASE_URL...`** — Create a `.env` file in `backend/` with your Supabase credentials.
- **MinGW DLL errors on Windows** — `main.py` expects MinGW at `C:/mingw64/bin`. Adjust the `os.add_dll_directory()` path if yours is different.
- **yfinance rate limiting** — First run for a ticker may be slow; subsequent runs use cached data from Supabase.
- **Frontend shows "Simulation failed"** — Check the backend terminal for error logs. Common issues: Supabase not configured, ticker not found, or C++ module not built.
