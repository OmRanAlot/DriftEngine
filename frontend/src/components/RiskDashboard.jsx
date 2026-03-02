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
//
// UI layout:
//   Grid of stat cards, each showing:
//     - Metric name
//     - Value (formatted as percentage)
//     - Short description
//
// Cards:
//   1. "Probability of Gain"   — prob_positive as %
//   2. "VaR (95%)"             — var_95 as % (red)
//   3. "VaR (99%)"             — var_99 as % (red)
//   4. "Expected Shortfall"    — cvar_95 as % (red, "worst 5% average loss")
//   5. "Median Max Drawdown"   — max_drawdown_median as % (orange)
//
// TODO: Implement stat card grid. Format numbers as e.g. "-12.4%" or "68.3%"

import React from 'react'

function StatCard({ label, value, description, color = '#e2e8f0' }) {
  return (
    <div style={{ background: '#0f172a', borderRadius: 6, padding: '16px 20px' }}>
      <p style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </p>
      <p style={{ fontSize: 24, fontWeight: 700, color, margin: '4px 0' }}>
        {value}
      </p>
      <p style={{ fontSize: 11, color: '#475569' }}>{description}</p>
    </div>
  )
}

export default function RiskDashboard({ metrics }) {
  // TODO: format metrics values and render StatCard grid

  return (
    <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#e2e8f0' }}>
        Risk Metrics
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {/* TODO: render StatCard for each metric */}
        <StatCard
          label="Probability of Gain"
          value="—"
          description="Paths ending above entry price"
          color="#34d399"
        />
        <StatCard
          label="VaR (95%)"
          value="—"
          description="Max loss, 95% confidence"
          color="#f87171"
        />
        <StatCard
          label="VaR (99%)"
          value="—"
          description="Max loss, 99% confidence"
          color="#f87171"
        />
        <StatCard
          label="Expected Shortfall"
          value="—"
          description="Avg loss in worst 5% of paths"
          color="#fb923c"
        />
      </div>
    </div>
  )
}
