// RegimePanel — current market regime context + transition probability matrix
//
// Props:
//   regime: {
//     id: number,           // 1–4
//     name: string,         // e.g. "Low-Vol Bull"
//     description: string,  // human-readable explanation
//     indicators: {         // indicator values that drove regime classification
//       sma_spread: number,
//       rsi: number,
//       bbw_percentile: number,
//       hvr: number,
//       macd_histogram: number,
//     }
//   }
//   transitionMatrix: number[][]  // 4×4 matrix of transition probabilities
//
// UI layout:
//   Left panel:
//     - Regime badge (colored by regime type)
//     - Regime name and description
//     - Indicator values table (name | value | interpretation)
//   Right panel:
//     - 4×4 transition probability matrix as a heatmap table
//     - Row = current regime, Column = next regime
//     - Cell color intensity based on probability value
//
// Regime colors:
//   1 (Low-Vol Bull)     → green (#22c55e)
//   2 (High-Vol Bull)    → yellow (#eab308)
//   3 (High-Vol Bear)    → red (#ef4444)
//   4 (Sideways)         → blue (#3b82f6)
//
// TODO: Implement indicator table and transition matrix heatmap

import React from 'react'

const REGIME_NAMES = [
  'Low-Vol Bull',
  'High-Vol Bull',
  'High-Vol Bear',
  'Sideways'
]

const REGIME_COLORS = ['#22c55e', '#ffffff', '#ef4444', '#ffffff']

export default function RegimePanel({ regime, transitionMatrix }) {
  // TODO: render regime badge, indicator table, and transition matrix

  return (
    <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#e2e8f0' }}>
        Current Market Regime
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Left: Regime info */}
        <div>
          <div style={{
            display: 'inline-block',
            background: regime ? REGIME_COLORS[regime.id - 1] : '#334155',
            color: '#fff',
            borderRadius: 4,
            padding: '3px 10px',
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 8
          }}>
            {regime ? `Regime ${regime.id}: ${regime.name}` : '—'}
          </div>
          <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>
            {regime?.description || 'Run a simulation to see regime context.'}
          </p>
          {/* TODO: render indicators table */}
        </div>

        {/* Right: Transition matrix */}
        <div>
          <p style={{ fontSize: 12, color: '#64748b', marginBottom: 8 }}>
            Regime Transition Probabilities
          </p>
          {/* TODO: render 4×4 heatmap table */}
          <div style={{ fontSize: 12, color: '#475569' }}>
            Transition matrix heatmap — implement as a color-coded 4×4 table
          </div>
        </div>
      </div>
    </div>
  )
}
