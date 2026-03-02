// TODO: Implement the full application layout
//
// App is the root component. It owns:
//   - simulationResult state (null until a simulation runs)
//   - isLoading state (true while waiting for the API)
//   - error state
//
// Layout (top to bottom):
//   1. Header bar — project name + disclaimer text
//   2. TickerInput — form for ticker symbol + forecast horizon; on submit calls runSimulation()
//   3. Loading indicator (conditional)
//   4. Error message (conditional)
//   5. Results grid (conditional, shown after simulation completes):
//        Row 1: FanChart (full width)
//        Row 2: TerminalDist | RiskDashboard
//        Row 3: RegimePanel (full width)
//
// runSimulation(ticker, horizonDays) calls api.simulate() and sets simulationResult

import React, { useState } from 'react'
import TickerInput from './components/TickerInput.jsx'
import FanChart from './components/FanChart.jsx'
import TerminalDist from './components/TerminalDist.jsx'
import RiskDashboard from './components/RiskDashboard.jsx'
import RegimePanel from './components/RegimePanel.jsx'
import { simulate } from './api.js'

export default function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSimulate(ticker, horizonDays) {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const data = await simulate(ticker, horizonDays)
      setResult(data)
    } catch (err) {
      setError(err.message || 'Simulation failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
      {/* Header */}
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#7c3aed' }}>
          DriftEngine
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 13, marginTop: 4 }}>
          Probabilistic scenario generation tool — not a price predictor.
          Past statistical patterns do not guarantee future results.
        </p>
      </header>

      {/* Input Form */}
      <TickerInput onSimulate={handleSimulate} loading={loading} />

      {/* Loading */}
      {loading && (
        <p style={{ color: '#94a3b8', marginTop: 24 }}>
          Running 10,000 Monte Carlo paths...
        </p>
      )}

      {/* Error */}
      {error && (
        <p style={{ color: '#f87171', marginTop: 24 }}>{error}</p>
      )}

      {/* Results */}
      {result && (
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <FanChart data={result.fan_chart} currentPrice={result.current_price} ticker={result.ticker} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <TerminalDist data={result.terminal_distribution} currentPrice={result.current_price} />
            <RiskDashboard metrics={result.risk_metrics} />
          </div>

          <RegimePanel regime={result.current_regime} transitionMatrix={result.transition_matrix} />
        </div>
      )}
    </div>
  )
}
