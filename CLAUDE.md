# DriftEngine — Claude Code Reference

## Project Purpose

**DriftEngine** is a probabilistic stock scenario generation tool, NOT a price predictor.
Given a ticker and forecast horizon, it runs 10,000 Monte Carlo simulations using an
enhanced Geometric Brownian Motion model and displays probabilistic risk/return scenarios.

**Target audience:** Quant/SWE internship portfolio piece.

---

## Tech Stack

| Layer              | Technology                            |
|--------------------|---------------------------------------|
| Frontend           | React JS (Vite)                       |
| Backend API        | Python FastAPI                        |
| Data / Analytics   | Python (yfinance, pandas, numpy, arch)|
| Simulation Engine  | C++ (compiled, called via pybind11)   |
| Python ↔ C++       | pybind11                              |

---

## Monorepo Structure

```
DriftEngine/
├── CLAUDE.md                    ← This file
├── frontend/                    ← React JS (Vite)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── index.jsx            ← React entry point
│   │   ├── App.jsx              ← Root component, layout, routing
│   │   ├── api.js               ← All fetch/axios calls to FastAPI
│   │   └── components/
│   │       ├── TickerInput.jsx  ← Ticker symbol + horizon form
│   │       ├── FanChart.jsx     ← Main fan chart (confidence bands)
│   │       ├── TerminalDist.jsx ← Terminal price histogram/KDE
│   │       ├── RiskDashboard.jsx← VaR, CVaR, drawdown, probabilities
│   │       └── RegimePanel.jsx  ← Current regime + transition probs
│   ├── package.json
│   └── vite.config.js
│
├── backend/                     ← Python FastAPI
│   ├── main.py                  ← FastAPI app, CORS, router registration
│   ├── requirements.txt
│   ├── routers/
│   │   └── simulation.py        ← POST /simulate endpoint
│   ├── services/
│   │   ├── data_ingestion.py    ← yfinance fetch, log return calc
│   │   ├── feature_engineering.py ← All 8 technical indicators
│   │   ├── regime_classifier.py ← Rule-based regime logic + transition matrix
│   │   ├── parameter_builder.py ← Per-regime μ, GARCH, ν, jump params
│   │   └── results_aggregator.py← Post-process C++ output → JSON
│   └── models/
│       └── schemas.py           ← Pydantic request/response models
│
└── simulation/                  ← C++ Monte Carlo engine
    ├── CMakeLists.txt
    ├── src/
    │   ├── monte_carlo.h        ← SimulationParams struct, run_simulation()
    │   ├── monte_carlo.cpp      ← Main simulation loop
    │   ├── garch.h              ← GarchParams struct
    │   ├── garch.cpp            ← GARCH(1,1) variance update
    │   ├── regime.h             ← RegimeParams struct, transition logic
    │   ├── distributions.h      ← Student-t sampler, Poisson draw
    │   └── results.h            ← SimulationResults struct
    └── bindings/
        └── pybind_wrapper.cpp   ← pybind11 module exposing run_simulation()
```

---

## Full Data Pipeline (8 Steps)

### Step 1 — Data Ingestion (`services/data_ingestion.py`)
- Fetch 1,000 trading days of OHLCV data via `yfinance`
- Use **Adjusted Close** for all price calculations
- Compute daily log returns: `r(t) = ln(AdjClose(t) / AdjClose(t-1))`
- Output: pandas DataFrame with columns `[date, open, high, low, close, adj_close, volume, log_return]`

### Step 2 — Statistical Features (`services/feature_engineering.py`)
- Compute over the full 1,000-day window:
  - `μ_global` = mean daily log return
  - `σ_global` = stdev of daily log returns
  - Skewness and kurtosis (sanity checks / fallback values only)
- These are NOT used directly in simulation; regime-specific params take over

### Step 3 — Technical Indicators (`services/feature_engineering.py`)
Compute all 8 indicators for every day in the window:

| Indicator             | Formula / Detail                                    |
|-----------------------|-----------------------------------------------------|
| SMA50, SMA200         | Simple moving averages; SMA_spread = (SMA50-SMA200)/SMA200 |
| MACD (12,26,9)        | MACD line, signal line, histogram                   |
| RSI (14-day)          | Relative Strength Index, 0–100 scale                |
| Bollinger Band Width  | BBW = (Upper - Lower) / Middle (20-day, 2σ)        |
| ATR (14-day)          | Average True Range (captures gaps)                  |
| HVR                   | σ_10day / σ_60day (Historical Volatility Ratio)     |
| OBV                   | On-Balance Volume (cumulative)                      |

### Step 4 — Regime Classification (`services/regime_classifier.py`)
**Rule-based conditional logic only — no ML.**

#### 4a. Calibrate thresholds from historical data
- Compute percentile distributions for BBW, HVR, RSI, SMA_spread over 1,000 days
- Set thresholds at meaningful percentiles (e.g., BBW > 65th pct = "high vol")
- Thresholds are per-stock adaptive, not hardcoded

#### 4b. Classify each day into one of 4 regimes

| Regime | Name                    | Conditions                                                             |
|--------|-------------------------|------------------------------------------------------------------------|
| 1      | Low-Vol Bull            | SMA50>SMA200, BBW<median, HVR<1.0, OBV confirming price trend         |
| 2      | High-Vol Bull           | SMA50>SMA200, BBW>median OR HVR>1.2, RSI>65 possible                  |
| 3      | High-Vol Bear           | SMA50<SMA200, BBW>median, HVR>1.2, RSI<35, OBV diverging from price   |
| 4      | Sideways/Consolidation  | SMA spread tight, RSI 40–60, BBW≤median, MACD histogram near zero     |

#### 4c. Compute per-regime parameters
For each regime, compute from days classified into that regime:
- `μ_regime` — mean daily log return
- `σ_regime` — stdev of daily log returns
- GARCH(1,1): fit `ω, α, β` using Python `arch` library
- Student's t `ν` — fit degrees of freedom by MLE
- Jump params: `λ` (intensity), `μ_J` (mean jump), `σ_J` (jump stdev)
  - Estimate by identifying outlier returns beyond GARCH predictions

#### 4d. Build 4×4 transition probability matrix
- Count day-over-day regime transitions in historical data
- Normalize each row → transition probabilities
- Example: P(Regime1 → Regime1) = 0.92, P(Regime1 → Regime4) = 0.05, etc.

#### 4e. Classify CURRENT day → starting regime for simulation

### Step 5 — Package Parameters (`services/parameter_builder.py`)
Serialize into a struct/dict passed to C++:
```
SimulationParams:
  S0              float     — current stock price
  current_regime  int       — starting regime (0–3)
  transition_matrix float[4][4]
  regimes[4]:
    mu            float
    omega         float     — GARCH ω
    alpha         float     — GARCH α
    beta          float     — GARCH β
    nu            float     — Student-t df
    lambda_j      float     — jump intensity
    mu_j          float     — mean jump size
    sigma_j       float     — jump size stdev
    sigma0        float     — initial GARCH variance
  num_paths       int       = 10,000
  num_steps       int       = forecast horizon (days)
  dt              float     = 1/252
```

### Step 6 — Monte Carlo Simulation (`simulation/src/`)
**C++ simulation loop — the computational core.**

Per path, per time step:
1. **Regime transition** — draw `u ~ U(0,1)`, use transition matrix row to advance regime
2. **GARCH update** — `σ²(t) = ω + α·ε²(t-1) + β·σ²(t-1)`
3. **Fat-tailed shock** — draw `z ~ t(ν)`, scale: `ε(t) = σ(t) · z · √((ν-2)/ν)`
4. **Jump component** — if `u < λ·dt`: draw `J ~ N(μ_J, σ_J)`, else `J = 0`
5. **Price update** — `log_return = (μ - 0.5·σ²)·dt + ε·√dt + J`, `S(t) = S(t-1)·exp(log_return)`

Compute on C++ side (avoid re-iteration in Python):
- Per-step percentiles: 5th, 25th, 50th, 75th, 95th
- Path-wise max drawdown
- Terminal price distribution

### Step 7 — Results Aggregation (`services/results_aggregator.py`)
Receive C++ output and compute:
- **Distributions:** terminal price histogram + KDE, prob of positive return, prob of >X% return
- **Confidence intervals:** 50% CI (P25–P75) and 90% CI (P5–P95) at each time step
- **Risk metrics:** VaR 95%/99%, CVaR (Expected Shortfall), max drawdown distribution
- **Regime context:** current regime, historical stats for that regime, likely transitions

### Step 8 — Frontend Display (`frontend/src/`)
Four main panels:
1. **Fan Chart** — shaded 50%/90% CI bands, median path, current price marked
2. **Terminal Distribution** — histogram/density of final day prices, percentile markers
3. **Risk Dashboard** — VaR, CVaR, prob of gain/loss, max drawdown
4. **Regime Panel** — current regime, indicator values, transition probabilities

---

## API Contract

### `POST /simulate`

**Request body:**
```json
{
  "ticker": "AAPL",
  "horizon_days": 60
}
```

**Response body:**
```json
{
  "ticker": "AAPL",
  "current_price": 185.50,
  "horizon_days": 60,
  "current_regime": {
    "id": 1,
    "name": "Low-Vol Bull",
    "description": "..."
  },
  "fan_chart": {
    "days": [0, 1, ..., 60],
    "p5":  [...],
    "p25": [...],
    "p50": [...],
    "p75": [...],
    "p95": [...]
  },
  "terminal_distribution": {
    "prices": [...],
    "probabilities": [...]
  },
  "risk_metrics": {
    "var_95": -0.12,
    "var_99": -0.18,
    "cvar_95": -0.15,
    "prob_positive": 0.68,
    "max_drawdown_median": -0.08
  },
  "transition_matrix": [[...], [...], [...], [...]],
  "regime_stats": {...}
}
```

---

## Key Conventions

- **Framing:** Always "probabilistic scenario tool," never "price predictor"
- **dt = 1/252** — one trading day
- **10,000 simulation paths** minimum
- **1,000 trading days** (~4 years) of historical data
- Python handles orchestration; C++ handles the simulation loop
- pybind11 is the preferred Python ↔ C++ bridge (not subprocess)
- All thresholds for regime rules are calibrated per-stock from historical percentiles
- Student's t-distribution with ν ≈ 4–5 df for fat tails
- GARCH(1,1) per regime, fitted with Python `arch` library

## What Is NOT Implemented

- Mean-reversion (not relevant for 30–90 day stock path simulation)
- Heston stochastic volatility (GARCH captures the same intuition more simply)
- ML-based regime classification (rules are more transparent and defensible)
- Ichimoku, Elliott Wave, Fibonacci (no statistical grounding)

---

## Running the Project

### Frontend
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
# API at http://localhost:8000
# Docs at http://localhost:8000/docs
```

### C++ Simulation Engine
```bash
cd simulation
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make
# Produces pybind11 .so / .pyd module imported by backend
```

---

## Important Notes for Implementation

1. The C++ engine is called from `services/parameter_builder.py` via the pybind11 module
2. CORS must be configured in `main.py` to allow `http://localhost:5173`
3. The `arch` library is used for GARCH fitting: `from arch import arch_model`
4. yfinance may rate-limit; add caching of fetched data (e.g., simple file cache or Redis)
5. The simulation can take 1–3 seconds for 10k paths × 60 steps — show a loading state in the frontend
6. Add a disclaimer banner: "This is a probabilistic scenario tool, not a price prediction."
