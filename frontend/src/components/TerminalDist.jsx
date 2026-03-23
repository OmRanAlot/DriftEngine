// TerminalDist — terminal price distribution (histogram)
//
// Props:
//   data: {
//     prices: number[],        // bin center prices
//     probabilities: number[], // probability for each bin (sums to 1)
//   }
//   currentPrice: number       // S₀ — vertical reference line here

import React, { useMemo } from 'react'
import {
  BarChart, Bar, XAxis, YAxis,
  Tooltip, ReferenceLine, ResponsiveContainer, Cell
} from 'recharts'

function fmtPrice(v) {
  if (v == null || isNaN(v)) return ''
  return `$${Number(v).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}

function fmtPct(v) {
  if (v == null || isNaN(v)) return ''
  return `${(v * 100).toFixed(2)}%`
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0]?.payload
  if (!d) return null
  return (
    <div style={{
      background: '#0f172a',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 8,
      padding: '10px 14px',
      fontSize: 12,
      fontFamily: 'monospace',
    }}>
      <p style={{ color: '#e2e8f0', fontWeight: 600, marginBottom: 4 }}>{fmtPrice(d.price)}</p>
      <p style={{ color: '#94a3b8' }}>Probability: {fmtPct(d.probability)}</p>
    </div>
  )
}

export default function TerminalDist({ data, currentPrice }) {
  const chartData = useMemo(() => {
    if (!data?.prices) return []
    return data.prices.map((price, i) => ({
      price,
      probability: data.probabilities[i],
    }))
  }, [data])

  if (!chartData.length) {
    return (
      <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
        <div style={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
          No simulation data available
        </div>
      </div>
    )
  }

  const maxProb = Math.max(...chartData.map(d => d.probability))

  return (
    <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, color: '#e2e8f0' }}>
          Terminal Price Distribution
        </h2>
        <div style={{ display: 'flex', gap: 12, fontSize: 11, color: '#64748b', fontFamily: 'monospace' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 10, height: 10, background: 'rgba(74,222,128,0.5)', borderRadius: 2, display: 'inline-block' }} />
            Gain
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 10, height: 10, background: 'rgba(248,113,113,0.5)', borderRadius: 2, display: 'inline-block' }} />
            Loss
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 8, right: 16, bottom: 8, left: 16 }} barCategoryGap={1}>
          <XAxis
            dataKey="price"
            tickFormatter={fmtPrice}
            tick={{ fill: '#64748b', fontSize: 10, fontFamily: 'monospace' }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
            // Only show a few ticks to avoid crowding
            interval={Math.floor(chartData.length / 5)}
          />
          <YAxis
            tickFormatter={v => `${(v * 100).toFixed(1)}%`}
            tick={{ fill: '#64748b', fontSize: 10, fontFamily: 'monospace' }}
            tickLine={false}
            axisLine={false}
            width={48}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />

          <Bar dataKey="probability" radius={[2, 2, 0, 0]}>
            {chartData.map((entry, i) => {
              const isAbove = entry.price > currentPrice
              const intensity = entry.probability / maxProb
              return (
                <Cell
                  key={i}
                  fill={isAbove
                    ? `rgba(74,222,128,${0.15 + intensity * 0.6})`
                    : `rgba(248,113,113,${0.15 + intensity * 0.6})`
                  }
                />
              )
            })}
          </Bar>

          {currentPrice != null && (
            <ReferenceLine
              x={currentPrice}
              stroke="rgba(255,255,255,0.35)"
              strokeDasharray="4 3"
              strokeWidth={1.5}
              label={{ value: 'Entry', fill: '#94a3b8', fontSize: 10, position: 'insideTopRight' }}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
