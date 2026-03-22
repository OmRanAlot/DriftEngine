# Implementation Plan: Connect Frontend → Backend → C++

## Task Type
- [x] Fullstack

## Current State Analysis

### What's Already Working
- **C++ ↔ Python**: Fully connected. `drift_engine_sim.cp313-win_amd64.pyd` is built and `main.py` adds it to `sys.path`. The router calls `drift_engine_sim.run_simulation(params)`.
- **Backend Pipeline**: Complete 8-step pipeline: data_ingestion → feature_engineering → regime_classifier → parameter_builder → C++ simulation → results_aggregator. All services implemented. Uses Supabase for data storage.
- **Vite Proxy**: Configured in `vite.config.js` — `/api/*` → `http://localhost:8000` (strips `/api` prefix).
- **API Client**: `frontend/src/api.js` has `simulate(ticker, horizonDays)` that POSTs to `/api/simulate`.

### What's Broken / Missing (The Gaps)

1. **Frontend never calls the API**: `StockForecastDashboard` uses **hardcoded placeholder data** — never calls `simulate()` from `api.js`.
2. **Missing `interval` field**: `SimulationRequest` schema requires `interval` (Literal["daily", "hourly", "minutely"]) but `api.js` doesn't send it, and `LandingTickerSelection` doesn't provide horizon selection.
3. **Import error in regime_classifier.py**: Line 15 uses `from supabase_helpers import ...` instead of `from services.supabase_helpers import ...`. This will fail when run from FastAPI (which runs from `backend/` root).
4. **Dashboard doesn't use API response shape**: The beautiful dashboard UI has inline hardcoded values that need to be replaced with dynamic data from the API response.
5. **No loading/error states**: Dashboard shows no loading spinner or error handling during the 1-3 second simulation.
6. **No horizon selection**: Landing page only captures ticker, not forecast horizon.
7. **Logging not configured**: `main.py` doesn't set up Python logging (the `logger.info()` calls in the router won't print).
8. **S0 wrong index**: In `simulation.py:103`, `S0 = float(work_df["close"].iloc[0])` — should be `iloc[-1]` for the most recent (current) price, since data is ordered by timestamp ascending.

---

## Implementation Steps

### Step 1 — Fix Backend Import & S0 Bug
**Files**: `backend/services/regime_classifier.py`, `backend/routers/simulation.py`

- Fix `from supabase_helpers import ...` → `from services.supabase_helpers import ...` (line 15)
- Fix `S0 = float(work_df["close"].iloc[0])` → `iloc[-1]` (line 103) to get the **most recent** price

### Step 2 — Default `interval` in Schema
**File**: `backend/models/schemas.py`

- Change `interval` field to have a default: `interval: Literal["daily", "hourly", "minutely"] = "daily"`
- This allows the frontend to omit `interval` and default to daily data

### Step 3 — Configure Logging in `main.py`
**File**: `backend/main.py`

- Add `logging.basicConfig(level=logging.INFO, format="%(asctime)s %(name)s %(levelname)s %(message)s")` before app creation
- This makes all the `logger.info(...)` calls in the router visible in the console

### Step 4 — Add Horizon Selection to Landing Page
**File**: `frontend/src/screens/LandingTickerSelection.jsx`

- Add a horizon selector (30 / 60 / 90 / 120 days) below the search bar
- Change `onTickerSelect` callback to pass `{ ticker, horizonDays }` instead of just ticker string

### Step 5 — Update App.jsx to Pass Horizon
**File**: `frontend/src/App.jsx`

- Update state to store `{ ticker, horizonDays }` from landing selection
- Pass both `ticker` and `horizonDays` to `StockForecastDashboard`

### Step 6 — Wire Dashboard to API (Core Integration)
**File**: `frontend/src/screens/StockForecastDashboard.jsx`

This is the biggest step. Replace all hardcoded data with live API data:

- Import `simulate` from `api.js`
- Add `useEffect` that calls `simulate(ticker, horizonDays)` on mount
- Add loading state (spinner/skeleton) while waiting for response
- Add error state (retry button) if simulation fails
- Map API response fields to existing UI sections:
  - `response.fan_chart` → fan chart SVG (convert percentile arrays to SVG paths)
  - `response.risk_metrics` → stat cards (P(Gain), Median Return, VaR, Max Drawdown)
  - `response.terminal_distribution` → histogram bars
  - `response.current_regime` → regime badge + description
  - `response.transition_matrix` → transition probability grid
  - `response.current_price` → spot price display
  - `response.ticker` → headline
- Wire "Re-run" button to re-fetch simulation

### Step 7 — Add `interval` to API Call
**File**: `frontend/src/api.js`

- Add optional `interval` parameter (default `"daily"`) to `simulate()` function
- Include in request body: `{ ticker, horizon_days: horizonDays, interval }`

### Step 8 — Create README with Run Instructions
**File**: `README.md` (project root)

Content:
- Project overview (probabilistic scenario tool)
- Prerequisites (Python 3.13, Node.js, MinGW/GCC, CMake, Supabase credentials)
- Step-by-step: build C++ → set up backend → run frontend
- Environment variables needed (SUPABASE_URL, SUPABASE_SECRET_KEY)
- How to verify each layer is working

---

## Key Files

| File | Operation | Description |
|------|-----------|-------------|
| `backend/services/regime_classifier.py:15` | Fix | Import path: `supabase_helpers` → `services.supabase_helpers` |
| `backend/routers/simulation.py:103` | Fix | S0 index: `iloc[0]` → `iloc[-1]` for current price |
| `backend/models/schemas.py:17` | Modify | Default `interval` to `"daily"` |
| `backend/main.py` | Modify | Add logging configuration |
| `frontend/src/App.jsx` | Modify | Pass horizonDays through to dashboard |
| `frontend/src/screens/LandingTickerSelection.jsx` | Modify | Add horizon selector UI |
| `frontend/src/screens/StockForecastDashboard.jsx` | Major rewrite | Replace hardcoded data with API call + dynamic rendering |
| `frontend/src/api.js` | Modify | Add `interval` parameter |
| `README.md` | Create | Full run instructions |

## Risks and Mitigation

| Risk | Mitigation |
|------|------------|
| Supabase credentials not configured | README documents required env vars; backend returns clear 500 error |
| MinGW DLL path hardcoded in main.py | Document in README; consider env var fallback |
| Simulation takes 1-3 seconds | Loading state in dashboard prevents blank screen |
| yfinance rate limiting on repeated calls | Backend already caches in Supabase; first call may be slow |
| Fan chart SVG generation from data arrays | Use existing SVG structure; compute viewBox-relative coordinates from percentile data |
| regime_classifier.py also has `from supabase_helpers` in `__main__` block (line 488) | Only affects direct script execution, not FastAPI — low priority |

## Execution Order
Steps 1-3 (backend fixes) can be done in parallel.
Step 4-5 (frontend landing/app) can be done in parallel.
Step 6 depends on steps 1-5.
Step 7 is a minor addition alongside step 6.
Step 8 (README) can be done last.
