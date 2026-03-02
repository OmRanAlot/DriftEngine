// TerminalDist — terminal price distribution (histogram + KDE)
//
// Props:
//   data: {
//     prices: number[],        // bin center prices
//     probabilities: number[], // probability for each bin (sums to 1)
//   }
//   currentPrice: number       // S₀ — draw a vertical reference line here
//
// Visualization (using Recharts BarChart):
//   - Bar chart: x = price, y = probability density
//   - Vertical reference line at currentPrice
//   - Color gradient: bins left of currentPrice in red (loss), right in green (gain)
//   - X-axis: price in $
//   - Y-axis: probability
//   - Tooltip: show price range and probability
//
// TODO: Implement using recharts BarChart with a ReferenceLine for currentPrice.
//       Use Cell fill based on whether bin price > currentPrice.

import React from 'react'

export default function TerminalDist({ data, currentPrice }) {
  // TODO: render terminal price distribution chart

  return (
    <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: '#e2e8f0' }}>
        Terminal Price Distribution
      </h2>
      {/* Chart goes here */}
      <div style={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
        Terminal distribution — implement with Recharts BarChart
      </div>
    </div>
  )
}
