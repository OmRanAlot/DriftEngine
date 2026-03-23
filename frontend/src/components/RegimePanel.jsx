// RegimePanel — current market regime context + transition probability matrix
//
// Props:
//   regime: {
//     id: number,           // 1–4
//     name: string,
//     description: string,
//     indicators: {
//       sma_spread: number,
//       rsi: number,
//       bbw_percentile: number,
//       hvr: number,
//       macd_histogram: number,
//     }
//   }
//   transitionMatrix: number[][]  // 4×4 row = current regime, col = next regime

import React from 'react'

const REGIME_COLORS = {
  1: { bg: 'rgba(34,197,94,0.15)',  border: 'rgba(34,197,94,0.4)',  text: '#4ade80',  label: 'Low-Vol Bull' },
  2: { bg: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.4)',  text: '#facc15',  label: 'High-Vol Bull' },
  3: { bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.4)',  text: '#f87171',  label: 'High-Vol Bear' },
  4: { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.4)', text: '#60a5fa', label: 'Sideways' },
}

const REGIME_NAMES_SHORT = ['LV Bull', 'HV Bull', 'HV Bear', 'Sideways']
const REGIME_NAMES_FULL  = ['Low-Vol Bull', 'High-Vol Bull', 'High-Vol Bear', 'Sideways']

const INDICATORS = [
  { key: 'sma_spread',      label: 'SMA Spread',     fmt: v => `${(v * 100).toFixed(2)}%`,  tip: '>0 = SMA50 above SMA200 (bullish trend)' },
  { key: 'rsi',             label: 'RSI (14)',         fmt: v => v.toFixed(1),                tip: '<30 oversold, >70 overbought' },
  { key: 'bbw_percentile',  label: 'BBW Percentile',  fmt: v => `${(v * 100).toFixed(0)}%`, tip: 'Bollinger Band Width vs history; >65% = high vol' },
  { key: 'hvr',             label: 'HVR',              fmt: v => v.toFixed(3),                tip: 'σ₁₀ / σ₆₀ — recent vol vs long-run vol; >1.2 = elevated' },
  { key: 'macd_histogram',  label: 'MACD Histogram',  fmt: v => v.toFixed(4),                tip: '>0 = bullish momentum, <0 = bearish momentum' },
]

function indicatorInterpretation(key, value) {
  if (value == null || isNaN(value)) return '—'
  switch (key) {
    case 'sma_spread':     return value > 0 ? 'Bullish trend' : 'Bearish trend'
    case 'rsi':            return value > 70 ? 'Overbought' : value < 30 ? 'Oversold' : 'Neutral'
    case 'bbw_percentile': return value > 0.65 ? 'High volatility' : value < 0.35 ? 'Low volatility' : 'Moderate'
    case 'hvr':            return value > 1.2 ? 'Elevated vol' : value < 0.8 ? 'Suppressed vol' : 'Normal'
    case 'macd_histogram': return value > 0 ? 'Bullish' : value < 0 ? 'Bearish' : 'Flat'
    default:               return ''
  }
}

// Map a probability 0–1 to a heatmap cell background (dark blue → purple → bright)
function heatmapColor(prob) {
  if (prob >= 0.7) return `rgba(139,92,246,${0.5 + prob * 0.4})`  // bright purple for high prob
  if (prob >= 0.3) return `rgba(99,102,241,${0.15 + prob * 0.5})` // indigo for medium
  return `rgba(255,255,255,${0.03 + prob * 0.08})`                // near-invisible for low
}

function heatmapTextColor(prob) {
  return prob >= 0.3 ? '#e2e8f0' : '#475569'
}

export default function RegimePanel({ regime, transitionMatrix }) {
  const regimeColor = regime ? (REGIME_COLORS[regime.id] || REGIME_COLORS[4]) : null

  return (
    <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 20, color: '#e2e8f0' }}>
        Current Market Regime
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>

        {/* ── Left: Regime info + indicator table ─────────────────────────── */}
        <div>
          {/* Regime badge */}
          {regime && regimeColor ? (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: regimeColor.bg,
              border: `1px solid ${regimeColor.border}`,
              borderRadius: 6,
              padding: '5px 12px',
              marginBottom: 10,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: regimeColor.text,
                boxShadow: `0 0 8px ${regimeColor.text}`,
                display: 'inline-block',
              }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: regimeColor.text }}>
                Regime {regime.id}: {regime.name}
              </span>
            </div>
          ) : (
            <div style={{ color: '#475569', fontSize: 13, marginBottom: 10 }}>No regime data</div>
          )}

          {/* Description */}
          <p style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.6, marginBottom: 16 }}>
            {regime?.description || 'Run a simulation to see regime context.'}
          </p>

          {/* Indicator table */}
          {regime?.indicators && (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
              <thead>
                <tr>
                  {['Indicator', 'Value', 'Signal'].map(h => (
                    <th key={h} style={{
                      textAlign: 'left',
                      color: '#475569',
                      fontWeight: 500,
                      paddingBottom: 8,
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontSize: 10,
                    }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {INDICATORS.map(({ key, label, fmt }) => {
                  const val = regime.indicators[key]
                  const hasValue = val != null && !isNaN(val)
                  const signal = indicatorInterpretation(key, val)
                  const isPositive = ['Bullish', 'Bullish trend', 'Low volatility', 'Oversold', 'Suppressed vol'].includes(signal)
                  const isNegative = ['Bearish', 'Bearish trend', 'High volatility', 'Overbought', 'Elevated vol'].includes(signal)

                  return (
                    <tr key={key}>
                      <td style={{ padding: '7px 0', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                        {label}
                      </td>
                      <td style={{
                        padding: '7px 8px',
                        fontFamily: 'monospace',
                        color: '#e2e8f0',
                        borderBottom: '1px solid rgba(255,255,255,0.03)',
                      }}>
                        {hasValue ? fmt(val) : '—'}
                      </td>
                      <td style={{
                        padding: '7px 0',
                        fontSize: 10,
                        color: isPositive ? '#4ade80' : isNegative ? '#f87171' : '#64748b',
                        borderBottom: '1px solid rgba(255,255,255,0.03)',
                      }}>
                        {signal}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* ── Right: Transition matrix heatmap ────────────────────────────── */}
        <div>
          <p style={{
            fontSize: 10,
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: 12,
          }}>
            Regime Transition Probabilities
          </p>

          {transitionMatrix?.length === 4 ? (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 3, fontSize: 11 }}>
                <thead>
                  <tr>
                    <th style={{ color: '#475569', fontWeight: 400, fontSize: 9, textAlign: 'left', padding: '0 4px 6px', width: 60 }}>
                      From \ To
                    </th>
                    {REGIME_NAMES_SHORT.map(name => (
                      <th key={name} style={{
                        color: '#64748b',
                        fontWeight: 500,
                        fontSize: 9,
                        textAlign: 'center',
                        padding: '0 2px 6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}>
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {transitionMatrix.map((row, ri) => (
                    <tr key={ri}>
                      <td style={{
                        color: '#64748b',
                        fontSize: 9,
                        padding: '2px 4px',
                        whiteSpace: 'nowrap',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}>
                        {REGIME_NAMES_SHORT[ri]}
                      </td>
                      {row.map((prob, ci) => (
                        <td key={ci} style={{
                          background: heatmapColor(prob),
                          borderRadius: 4,
                          textAlign: 'center',
                          padding: '8px 4px',
                          fontFamily: 'monospace',
                          fontSize: 11,
                          fontWeight: ri === ci ? 700 : 400,
                          color: heatmapTextColor(prob),
                          outline: ri === ci ? '1px solid rgba(139,92,246,0.4)' : 'none',
                          outlineOffset: '-1px',
                          transition: 'background 0.2s',
                        }}>
                          {(prob * 100).toFixed(0)}%
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              <p style={{ fontSize: 10, color: '#334155', marginTop: 12, lineHeight: 1.5 }}>
                Row = current regime. Column = next regime. Diagonal = probability of staying.
              </p>
            </div>
          ) : (
            <div style={{ color: '#475569', fontSize: 12 }}>
              No transition data available.
            </div>
          )}

          {/* Current regime highlight */}
          {regime && transitionMatrix?.length === 4 && (
            <div style={{
              marginTop: 16,
              background: regimeColor?.bg || 'rgba(255,255,255,0.03)',
              border: `1px solid ${regimeColor?.border || 'rgba(255,255,255,0.06)'}`,
              borderRadius: 6,
              padding: '10px 12px',
            }}>
              <p style={{ fontSize: 10, color: '#64748b', marginBottom: 4 }}>Most likely next regime</p>
              {(() => {
                const row = transitionMatrix[regime.id - 1] || []
                const maxIdx = row.reduce((best, v, i) => (i !== regime.id - 1 && v > (row[best] || 0)) ? i : best, (regime.id - 1 + 1) % 4)
                const maxProb = row[maxIdx] || 0
                return (
                  <p style={{ fontSize: 12, color: regimeColor?.text || '#e2e8f0', fontWeight: 600 }}>
                    {REGIME_NAMES_FULL[maxIdx]} — {(maxProb * 100).toFixed(0)}%
                  </p>
                )
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
