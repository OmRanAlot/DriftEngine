// TickerInput — form for entering a stock ticker and forecast horizon
//
// Props:
//   onSimulate(ticker: string, horizonDays: number) — called on form submit
//   loading: boolean — disables the submit button while simulation runs
//
// UI:
//   - Text input: ticker symbol (uppercase, max 5 chars, e.g. "AAPL")
//   - Number input or select: forecast horizon (30 / 60 / 90 days)
//   - Submit button: "Run Simulation"
//   - Validation: ticker must not be empty

import React, { useState } from 'react'

export default function TickerInput({ onSimulate, loading }) {
  const [ticker, setTicker] = useState('')
  const [horizon, setHorizon] = useState(60)

  function handleSubmit(e) {
    e.preventDefault()
    if (!ticker.trim()) return
    onSimulate(ticker.trim().toUpperCase(), Number(horizon))
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 12, color: '#94a3b8' }}>Ticker Symbol</label>
        <input
          type="text"
          value={ticker}
          onChange={e => setTicker(e.target.value.toUpperCase())}
          placeholder="AAPL"
          maxLength={5}
          required
          style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: 6,
            color: '#e2e8f0',
            padding: '8px 12px',
            fontSize: 16,
            width: 120,
            textTransform: 'uppercase'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <label style={{ fontSize: 12, color: '#94a3b8' }}>Forecast Horizon</label>
        <select
          value={horizon}
          onChange={e => setHorizon(e.target.value)}
          style={{
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: 6,
            color: '#e2e8f0',
            padding: '8px 12px',
            fontSize: 14
          }}
        >
          <option value={30}>30 days</option>
          <option value={60}>60 days</option>
          <option value={90}>90 days</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading || !ticker.trim()}
        style={{
          background: loading ? '#4c1d95' : '#7c3aed',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '9px 20px',
          fontSize: 14,
          fontWeight: 600,
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? 'Simulating...' : 'Run Simulation'}
      </button>
    </form>
  )
}
