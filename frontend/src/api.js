// api.js — all HTTP calls to the FastAPI backend
//
// Base URL: proxied through Vite dev server to http://localhost:8000
// In production, set VITE_API_BASE_URL env variable.

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

/**
 * Run a Monte Carlo simulation for a given ticker and forecast horizon.
 *
 * @param {string} ticker      - Stock ticker symbol, e.g. "AAPL"
 * @param {number} horizonDays - Forecast horizon in trading days, e.g. 60
 * @returns {Promise<SimulationResult>}
 *
 * SimulationResult shape — see CLAUDE.md API Contract section.
 */
export async function simulate(ticker, horizonDays) {
  const response = await fetch(`${BASE_URL}/simulate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ticker, horizon_days: horizonDays })
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.detail || `Request failed: ${response.status}`)
  }

  return response.json()
}
