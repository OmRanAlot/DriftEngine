// RiskDashboard — key risk metrics displayed as a stat card grid
//
// Props:
//   metrics: {
//     var_95: number,              // Value at Risk at 95% confidence (e.g. -0.12 = -12%)
//     var_99: number,              // VaR at 99% confidence
//     cvar_95: number,             // Conditional VaR / Expected Shortfall at 95%
//     prob_positive: number,       // Probability of positive return (0–1)
//     max_drawdown_median: number, // Median max drawdown across all paths
//   }

import React from 'react'

function fmtPct(n, { signed = false } = {}) {
  if (n == null || isNaN(n)) return '—'
  const val = `${(n * 100).toFixed(1)}%`
  return signed && n > 0 ? `+${val}` : val
}

function StatCard({ label, value, description, color = '#e2e8f0' }) {
  return (
    <div style={{
      background: '#0f172a',
      borderRadius: 8,
      padding: '18px 20px',
      border: '1px solid rgba(255,255,255,0.04)',
    }}>
      <p style={{
        fontSize: 10,
        color: '#64748b',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 6,
        fontFamily: 'monospace',
      }}>
        {label}
      </p>
      <p style={{
        fontSize: 26,
        fontWeight: 700,
        color,
        margin: '0 0 6px',
        fontFamily: 'monospace',
        letterSpacing: '-0.02em',
      }}>
        {value}
      </p>
      <p style={{ fontSize: 11, color: '#475569', lineHeight: 1.4 }}>{description}</p>
    </div>
  )
}

export default function RiskDashboard({ metrics }) {
  if (!metrics) {
    return (
      <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
        <p style={{ color: '#475569', textAlign: 'center' }}>No simulation data available</p>
      </div>
    )
  }

  const cards = [
    {
      label: 'Probability of Gain',
      value: fmtPct(metrics.prob_positive),
      description: 'Share of paths finishing above entry price',
      color: metrics.prob_positive >= 0.5 ? '#4ade80' : '#f87171',
    },
    {
      label: 'VaR (95%)',
      value: fmtPct(metrics.var_95),
      description: 'Max loss at 95% confidence — 1-in-20 scenario',
      color: '#f87171',
    },
    {
      label: 'VaR (99%)',
      value: fmtPct(metrics.var_99),
      description: 'Max loss at 99% confidence — 1-in-100 scenario',
      color: '#f87171',
    },
    {
      label: 'Expected Shortfall',
      value: fmtPct(metrics.cvar_95),
      description: 'Average loss in the worst 5% of paths (CVaR)',
      color: '#fb923c',
    },
    {
      label: 'Median Max Drawdown',
      value: fmtPct(metrics.max_drawdown_median),
      description: 'Largest peak-to-trough drop on the typical path',
      color: '#94a3b8',
    },
  ]

  return (
    <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#e2e8f0' }}>
        Risk Metrics
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: 12,
      }}>
        {cards.map(card => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  )
}
