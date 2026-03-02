// FanChart — main probabilistic fan chart with confidence interval bands
//
// Props:
//   data: {
//     days: number[],         // [0, 1, ..., horizon_days]
//     p5:   number[],         // 5th percentile prices
//     p25:  number[],         // 25th percentile prices
//     p50:  number[],         // median prices
//     p75:  number[],         // 75th percentile prices
//     p95:  number[],         // 95th percentile prices
//   }
//   currentPrice: number      // S₀ — current price (day 0)
//   ticker: string            // for chart title
//
// Visualization (using Recharts ComposedChart):
//   - Shaded area between P5 and P95 (90% CI) — light purple, low opacity
//   - Shaded area between P25 and P75 (50% CI) — purple, medium opacity
//   - Solid line for P50 (median path) — white/light
//   - Reference line at currentPrice (day 0)
//   - X-axis: trading days
//   - Y-axis: price in $
//   - Tooltip showing all 5 percentiles on hover
//
// TODO: Implement using recharts ComposedChart with Area and Line components.
//       Transform `data` into recharts format: array of {day, p5, p25, p50, p75, p95}

import React from 'react'
import {
  ComposedChart, Area, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, ReferenceLine, ResponsiveContainer, Legend
} from 'recharts'

export default function FanChart({ data, currentPrice, ticker }) {
  // TODO: transform data prop into recharts-compatible array format
  // TODO: render ComposedChart with shaded bands and median line

  return (
    <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#e2e8f0' }}>
        {ticker} — 10,000-Path Monte Carlo Fan Chart
      </h2>
      {/* Chart goes here */}
      <div style={{ height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
        Fan chart — implement with Recharts ComposedChart
      </div>
    </div>
  )
}
