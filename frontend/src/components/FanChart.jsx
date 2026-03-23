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

import React, { useMemo } from 'react'
import {
  ComposedChart, Area, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, ReferenceLine, ResponsiveContainer
} from 'recharts'

function fmtPrice(v) {
  if (v == null || isNaN(v)) return ''
  return `$${Number(v).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function CustomTooltip({ active, payload, label }) {
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
      <p style={{ color: '#64748b', marginBottom: 8, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Day {label}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <p style={{ color: '#4ade80' }}>P95: {fmtPrice(d.p95)}</p>
        <p style={{ color: '#a78bfa' }}>P75: {fmtPrice(d.p75)}</p>
        <p style={{ color: '#f5f2f0', fontWeight: 600 }}>P50: {fmtPrice(d.p50)}</p>
        <p style={{ color: '#fb923c' }}>P25: {fmtPrice(d.p25)}</p>
        <p style={{ color: '#f87171' }}>P5:  {fmtPrice(d.p5)}</p>
      </div>
    </div>
  )
}

export default function FanChart({ data, currentPrice, ticker }) {
  // Transform into Recharts stacked-area format for clean CI bands.
  // band90_base = P5 (invisible stack base), band90_height = P95 - P5 (colored fill)
  // band50_base = P25 (invisible stack base), band50_height = P75 - P25 (colored fill)
  const chartData = useMemo(() => {
    if (!data?.days) return []
    return data.days.map((day, i) => ({
      day,
      p5:           data.p5[i],
      p25:          data.p25[i],
      p50:          data.p50[i],
      p75:          data.p75[i],
      p95:          data.p95[i],
      band90_base:  data.p5[i],
      band90_height: data.p95[i] - data.p5[i],
      band50_base:  data.p25[i],
      band50_height: data.p75[i] - data.p25[i],
    }))
  }, [data])

  if (!chartData.length) {
    return (
      <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
        <div style={{ height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
          No simulation data available
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#1e293b', borderRadius: 8, padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600, color: '#e2e8f0' }}>
          {ticker} — Monte Carlo Fan Chart
        </h2>
        <div style={{ display: 'flex', gap: 16, fontSize: 11, color: '#64748b', fontFamily: 'monospace' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 20, height: 2, background: '#f5f2f0', display: 'inline-block' }} />
            Median
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 12, height: 12, background: 'rgba(139,92,246,0.3)', borderRadius: 2, display: 'inline-block' }} />
            50% CI
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 12, height: 12, background: 'rgba(99,102,241,0.15)', borderRadius: 2, display: 'inline-block' }} />
            90% CI
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={chartData} margin={{ top: 8, right: 24, bottom: 8, left: 16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
          <XAxis
            dataKey="day"
            tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'monospace' }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(255,255,255,0.06)' }}
            label={{ value: 'Trading Days', position: 'insideBottomRight', offset: -4, fill: '#475569', fontSize: 10 }}
          />
          <YAxis
            tickFormatter={fmtPrice}
            tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'monospace' }}
            tickLine={false}
            axisLine={false}
            width={75}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* 90% CI band: stacked (base invisible + height colored) */}
          <Area
            type="monotone"
            dataKey="band90_base"
            stackId="ci90"
            stroke="none"
            fill="transparent"
            dot={false}
            activeDot={false}
            legendType="none"
          />
          <Area
            type="monotone"
            dataKey="band90_height"
            stackId="ci90"
            stroke="none"
            fill="rgba(99,102,241,0.13)"
            dot={false}
            activeDot={false}
            legendType="none"
          />

          {/* 50% CI band: stacked (base invisible + height colored) */}
          <Area
            type="monotone"
            dataKey="band50_base"
            stackId="ci50"
            stroke="none"
            fill="transparent"
            dot={false}
            activeDot={false}
            legendType="none"
          />
          <Area
            type="monotone"
            dataKey="band50_height"
            stackId="ci50"
            stroke="none"
            fill="rgba(139,92,246,0.28)"
            dot={false}
            activeDot={false}
            legendType="none"
          />

          {/* Boundary dashed lines */}
          <Line type="monotone" dataKey="p95" stroke="rgba(74,222,128,0.55)" strokeWidth={1.5} strokeDasharray="4 3" dot={false} activeDot={false} legendType="none" />
          <Line type="monotone" dataKey="p5"  stroke="rgba(248,113,113,0.55)" strokeWidth={1.5} strokeDasharray="4 3" dot={false} activeDot={false} legendType="none" />

          {/* Median path */}
          <Line type="monotone" dataKey="p50" stroke="#f5f2f0" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: '#f5f2f0' }} legendType="none" />

          {/* Current price reference */}
          {currentPrice != null && (
            <ReferenceLine
              y={currentPrice}
              stroke="rgba(255,255,255,0.2)"
              strokeDasharray="4 3"
              label={{ value: `Entry ${fmtPrice(currentPrice)}`, fill: '#64748b', fontSize: 10, position: 'insideTopLeft' }}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
