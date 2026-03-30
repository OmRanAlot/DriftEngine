# DriftEngine

Probabilistic stock scenario generation tool. Enter a ticker and a forecast horizon, and DriftEngine runs **10,000 to 500,000 Monte Carlo simulations** using an enhanced Geometric Brownian Motion model — with regime-switching, GARCH(1,1) volatility, Student-t fat tails, and jump-diffusion — then visualises the full distribution of outcomes.

> **This is a probabilistic scenario tool, not a price predictor. _NOT FINANCIAL ADVICE!_**

---

## What It Does

1. Fetches ~1,000 days of historical OHLCV data via yfinance (cached in Supabase)
2. Computes 8 technical indicators (SMA50/200, MACD, RSI-14, Bollinger Band Width, ATR-14, HVR, OBV)
3. Classifies every historical day into one of 4 market regimes using rule-based logic (no ML)
4. Fits per-regime parameters: GARCH(1,1) volatility, Student-t degrees of freedom, Poisson jump intensity
5. Builds a 4×4 regime transition probability matrix from the historical sequence
6. Passes everything to a **C++ Monte Carlo engine** (via pybind11) which runs 10,000 paths
7. Returns fan chart percentile bands, terminal price distribution, VaR/CVaR, drawdown stats, and all raw paths for visualisation

### The 4 Market Regimes

| # | Name | Characteristics |
|---|------|----------------|
| 1 | Low-Vol Bull | Steady uptrend, SMA50 > SMA200, low BBW, HVR < 1.0 |
| 2 | High-Vol Bull | Aggressive rally or recovery, elevated volatility, RSI > 65 |
| 3 | High-Vol Bear | Selloff with panic, SMA50 < SMA200, high BBW, RSI < 35 |
| 4 | Sideways | Consolidation, tight SMA spread, RSI 40–60, MACD near zero |

---

## Architecture

```
Browser (React + Vite — port 5173)
    │
    │  POST /simulate { ticker, horizon_days, num_paths }
    ▼
FastAPI backend (port 8000)
    │
    ├── Step 1  Fetch OHLCV from yfinance  →  cache in Supabase
    ├── Step 2  Compute 8 technical indicators
    ├── Step 3  Classify days into regimes (rule-based)
    ├── Step 4  Fit GARCH + Student-t + jump params per regime
    ├── Step 5  Build 4×4 transition matrix
    │
    ▼
C++ simulation engine  (compiled pybind11 module)
    │
    │  Per path, per step:
    │    regime transition → GARCH variance update →
    │    Student-t shock → Poisson jump → log price update
    │
    ▼
Results aggregator (Python)
    │
    └── Fan chart bands, terminal distribution, VaR/CVaR,
        regime context, all 10,000 raw paths
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite, Tailwind CSS, shadcn/ui, Canvas API |
| Backend | Python 3.13, FastAPI, Uvicorn |
| Data | yfinance, pandas, numpy, scipy, arch (GARCH) |
| Simulation | C++17, compiled as pybind11 module |
| Cache | Supabase (PostgreSQL) |

---

## Prerequisites

Install all of these before starting.

### Required

| Tool | Minimum version | Check |
|------|----------------|-------|
| Python | 3.11+ | `python --version` |
| Node.js | 18+ | `node --version` |
| npm | 9+ | `npm --version` |
| CMake | 3.15+ | `cmake --version` |
| C++ compiler | GCC 11+ / Clang 13+ | `g++ --version` |

### Windows-specific

- **MinGW-w64** — recommended via [winlibs.com](https://winlibs.com) (choose UCRT, 64-bit, with POSIX threads)
- After installing, add `C:\mingw64\bin` to your system `PATH`
- If MinGW is at a different path, update the `os.add_dll_directory()` call in `backend/main.py`

### Supabase

You need a free [Supabase](https://supabase.com) project for data caching. The backend will fail to start without credentials.

---

## Step-by-Step Setup

### Step 1 — Clone the repository

```bash
git clone https://github.com/your-username/DriftEngine.git
cd DriftEngine
```

---

### Step 2 — Build the C++ simulation engine

The pybind11 module must be built **before** starting the backend. This produces `drift_engine_sim.pyd` (Windows) or `drift_engine_sim.so` (Linux/Mac).

```bash
cd simulation
mkdir build
cd build
```

**Windows (MinGW):**
```bash
cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release
mingw32-make
```

**Linux / Mac:**
```bash
cmake .. -DCMAKE_BUILD_TYPE=Release
make
```

**Verify the module was built:**
```bash
# Windows
ls drift_engine_sim.*.pyd

# Linux/Mac
ls drift_engine_sim.*.so
```

You should see a file like `drift_engine_sim.cp313-win_amd64.pyd`. If it's missing, the build failed — check the CMake output for errors.

Go back to the project root when done:
```bash
cd ../..
```

---

### Step 3 — Configure the backend environment

Create a `.env` file inside the `backend/` directory:

```bash
cd backend
```

Create `backend/.env` with the following content (fill in your own values):

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-anon-public-key
SUPABASE_SECRET_KEY=your-service-role-key
```

**Where to find these values:**
1. Go to your Supabase project → **Settings** → **API**
2. `SUPABASE_URL` — the "Project URL" field
3. `SUPABASE_KEY` — the `anon` / `public` key
4. `SUPABASE_SECRET_KEY` — the `service_role` key (keep this secret)

> **Never commit your `.env` file.** It is already listed in `.gitignore`.

---

### Step 4 — Set up Supabase tables

The backend expects the following tables in your Supabase project. Run this SQL in the Supabase **SQL Editor**:

```sql
-- Daily OHLCV price data
create table if not exists stock_daily (
  ticker       text,
  date         date,
  open         float8,
  high         float8,
  low          float8,
  close        float8,
  adj_close    float8,
  volume       float8,
  log_return   float8,
  primary key (ticker, date)
);

-- Technical indicators
create table if not exists stock_daily_tas (
  ticker           text,
  date             date,
  sma50            float8,
  sma200           float8,
  sma_spread       float8,
  macd             float8,
  macd_signal      float8,
  macd_hist        float8,
  rsi              float8,
  bb_upper         float8,
  bb_lower         float8,
  bb_width         float8,
  atr              float8,
  hvr              float8,
  obv              float8,
  primary key (ticker, date)
);

-- Regime classifications
create table if not exists stock_daily_regimes (
  ticker      text,
  date        date,
  regime      int,
  primary key (ticker, date)
);
```

---

### Step 5 — Install backend dependencies

Still inside the `backend/` directory:

```bash
# Create a virtual environment
python -m venv .venv

# Activate it
# Windows:
.venv\Scripts\activate
# Linux/Mac:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

The key packages installed are: `fastapi`, `uvicorn`, `pybind11`, `yfinance`, `pandas`, `numpy`, `scipy`, `arch`, `supabase`.

---

### Step 6 — Start the backend

With the virtual environment still active:

```bash
uvicorn main:app --reload --port 8000
```

You should see output like:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

**Verify it's working:**
```bash
curl http://localhost:8000/health
# Expected: {"status":"ok"}
```

The interactive API docs are at **http://localhost:8000/docs**.

> Keep this terminal running. Open a new terminal for the next step.

---

### Step 7 — Install and start the frontend

```bash
cd frontend
npm install
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in Xms

  ➜  Local:   http://localhost:5173/
```

Open **http://localhost:5173** in your browser.

---

### Step 8 — Run a simulation

1. Type a ticker symbol (e.g. `AAPL`, `NVDA`, `TSLA`) in the search box
2. Select a forecast horizon (30 / 60 / 90 / 120 days)
3. Select the number of simulation paths (10K default; more paths = slower but more accurate)
4. Click **Run Simulation**

The first run for a ticker will take longer (fetching ~4 years of data from yfinance). Subsequent runs use the Supabase cache and are much faster.

---

## Project Structure

```
DriftEngine/
├── CLAUDE.md                        ← Full architecture reference for Claude Code
├── README.md
│
├── frontend/                        ← React + Vite app
│   ├── src/
│   │   ├── App.jsx                  ← Root component + routing
│   │   ├── api.js                   ← All API calls to FastAPI
│   │   ├── screens/
│   │   │   ├── LandingTickerSelection.jsx
│   │   │   ├── StockForecastDashboard.jsx
│   │   │   └── MethodologyScreen.jsx
│   │   └── components/
│   │       ├── FanChartCanvas.jsx   ← Canvas-based animated fan chart (main viz)
│   │       ├── MonteCarloChart.jsx  ← Demo animation on landing page
│   │       ├── SimulationLoader.jsx
│   │       ├── FanChart.jsx         ← Recharts version (standalone)
│   │       ├── TerminalDist.jsx     ← Terminal price histogram (Recharts)
│   │       ├── RiskDashboard.jsx    ← VaR/CVaR stat cards
│   │       ├── RegimePanel.jsx      ← Regime badge + transition matrix heatmap
│   │       └── ui/                  ← shadcn/ui primitives
│   ├── package.json
│   └── vite.config.js
│
├── backend/                         ← Python FastAPI
│   ├── main.py                      ← App entry point, CORS, router registration
│   ├── requirements.txt
│   ├── .env                         ← Your Supabase credentials (not committed)
│   ├── routers/
│   │   └── simulation.py            ← POST /simulate — orchestrates 8-step pipeline
│   ├── services/
│   │   ├── data_ingestion.py        ← yfinance fetch + Supabase cache
│   │   ├── feature_engineering.py  ← All 8 technical indicators
│   │   ├── regime_classifier.py    ← Rule-based regime logic + GARCH fitting
│   │   ├── parameter_builder.py    ← Assembles C++ SimulationParams dict
│   │   ├── results_aggregator.py   ← Post-processes C++ output → JSON response
│   │   └── supabase_helpers.py     ← DB read/write helpers
│   └── models/
│       └── schemas.py               ← Pydantic request/response models
│
└── simulation/                      ← C++ Monte Carlo engine
    ├── CMakeLists.txt
    ├── src/
    │   ├── monte_carlo.h / .cpp     ← Main simulation loop (10,000 paths)
    │   ├── garch.h / .cpp           ← GARCH(1,1) variance update
    │   ├── regime.h                 ← RegimeParams struct
    │   ├── distributions.h / .cpp  ← Student-t sampler, Poisson jump draw
    │   └── results.h               ← SimulationResults struct
    └── bindings/
        └── pybind_wrapper.cpp       ← pybind11 module (drift_engine_sim)
```

---

## API Reference

### `POST /simulate`

**Request:**
```json
{
  "ticker": "AAPL",
  "horizon_days": 60,
  "interval": "daily",
  "num_paths": 10000
}
```

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ticker` | string | required | Stock ticker (1–5 chars) |
| `horizon_days` | int | required | Forecast horizon in trading days (1–252) |
| `interval` | string | `"daily"` | Data interval (`"daily"`, `"hourly"`) |
| `num_paths` | int | `10000` | Number of simulation paths (1,000–500,000) |

**Response fields:**

| Field | Description |
|-------|-------------|
| `current_price` | Entry price (S₀) |
| `current_regime` | Detected regime `{ id, name, description, indicators }` |
| `fan_chart` | Percentile bands `{ days, p5, p25, p50, p75, p95 }` |
| `paths` | All simulated price paths `number[][]` (num_paths × horizon_days+1) |
| `terminal_distribution` | Histogram of terminal prices `{ prices, probabilities }` |
| `risk_metrics` | `{ var_95, var_99, cvar_95, prob_positive, max_drawdown_median }` |
| `transition_matrix` | 4×4 regime transition probability matrix |
| `regime_stats` | Per-regime historical μ, σ, sample size |

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SUPABASE_URL` | Yes | Your Supabase project URL |
| `SUPABASE_KEY` | Yes | Anon/public key |
| `SUPABASE_SECRET_KEY` | Yes | Service role key |

All variables go in `backend/.env`.

---

## Troubleshooting

### `ModuleNotFoundError: No module named 'drift_engine_sim'`
The C++ module is not built or not on `sys.path`. Go to `simulation/build/` and check that a `.pyd` (Windows) or `.so` (Linux/Mac) file exists. If not, redo Step 2.

### `EnvironmentError: SUPABASE_URL not set`
The `backend/.env` file is missing or malformed. Check Step 3.

### MinGW DLL errors on Windows at startup
`main.py` calls `os.add_dll_directory('C:/mingw64/bin')`. If your MinGW is installed elsewhere, update that path. Common alternatives: `C:/msys64/mingw64/bin`, `C:/mingw/bin`.

### First simulation is very slow (30–60 seconds)
yfinance is fetching ~4 years of daily data. After the first run the data is cached in Supabase and subsequent simulations for the same ticker complete in 2–5 seconds.

### Frontend shows "Simulation failed"
1. Make sure the backend is running: `curl http://localhost:8000/health`
2. Check the backend terminal for the step-by-step log and look for the error
3. Common causes: Supabase credentials wrong, ticker not found on yfinance, C++ module not built

### `yfinance` rate limit / no data returned
yfinance occasionally rate-limits. Wait 60 seconds and retry. For very new tickers or pink-sheet stocks, data may not be available.

### Canvas chart is blank after simulation
The `paths` field in the API response may be empty if the C++ price matrix was not generated. Check that `simulation/build/` contains the compiled module and that it loaded successfully (look for `drift_engine_sim loaded` in backend startup logs).

---

## Methodology

The full pipeline is documented in:
- `CLAUDE.md` — complete architecture reference, all formulas, and API contract
- The in-app **Methodology** screen (accessible from the dashboard footer)

Key model choices:
- **GARCH(1,1)** per regime captures volatility clustering
- **Student-t with ν ≈ 4–5 df** captures fat tails (extreme moves more likely than Gaussian)
- **Jump-diffusion** (Poisson intensity λ) captures gap opens and flash crashes
- **Rule-based regime classification** (no ML) keeps the model transparent and auditable
- **dt = 1/252** — one trading day; 1,000 trading days of history (~4 years)
