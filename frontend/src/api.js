// api.js — all HTTP calls to the FastAPI backend
//
// Base URL: proxied through Vite dev server to http://localhost:8000
// In production, set VITE_API_BASE_URL env variable.

import { log } from '@/lib/logger'

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
export async function simulate(ticker, horizonDays, interval = 'daily', numPaths = 10000) {
  const endpoint = `${BASE_URL}/simulate`
  const payload = { ticker, horizon_days: horizonDays, interval, num_paths: numPaths }
  log.apiRequest(endpoint, payload)

  const t0 = performance.now()
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    const elapsed = Math.round(performance.now() - t0)
    const error = new Error(err.detail || `Request failed: ${response.status}`)
    log.apiError(endpoint, error, elapsed)
    throw error
  }

  const data = await response.json()
  const elapsed = Math.round(performance.now() - t0)
  log.apiResponse(endpoint, data, elapsed)
  return data
}
