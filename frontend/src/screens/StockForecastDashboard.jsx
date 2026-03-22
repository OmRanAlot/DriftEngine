import React, { useEffect, useState, useCallback } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, RefreshCw, Download, Loader2 } from 'lucide-react'
import { simulate } from '@/api'
import SimulationLoader from '@/components/SimulationLoader'

const REGIME_BADGE_VARIANT = {
  0: 'bullish',
  1: 'bullish',
  2: 'destructive',
  3: 'secondary',
}

const REGIME_BADGE_COLOR = {
  0: 'bg-[var(--de-green)]',
  1: 'bg-white',
  2: 'bg-[var(--de-red)]',
  3: 'bg-white/50',
}

function fmt(n, decimals = 1) {
  if (n == null || isNaN(n)) return '—'
  return Number(n).toFixed(decimals)
}

function fmtPct(n) {
  if (n == null || isNaN(n)) return '—'
  return `${(n * 100).toFixed(1)}%`
}

function fmtDollar(n) {
  if (n == null || isNaN(n)) return '—'
  return `$${Number(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

// Build SVG path string from a percentile array mapped to viewBox coordinates
function toSvgPath(values, viewW, viewH, minY, maxY) {
  if (!values || values.length === 0) return ''
  const n = values.length
  return values.map((v, i) => {
    const x = (i / (n - 1)) * viewW
    const y = viewH - ((v - minY) / (maxY - minY)) * viewH
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')
}

function toSvgArea(upper, lower, viewW, viewH, minY, maxY) {
  if (!upper || !lower || upper.length === 0) return ''
  const n = upper.length
  const topPoints = upper.map((v, i) => {
    const x = (i / (n - 1)) * viewW
    const y = viewH - ((v - minY) / (maxY - minY)) * viewH
    return `${x.toFixed(1)},${y.toFixed(1)}`
  })
  const bottomPoints = [...lower].reverse().map((v, i) => {
    const x = ((n - 1 - i) / (n - 1)) * viewW
    const y = viewH - ((v - minY) / (maxY - minY)) * viewH
    return `${x.toFixed(1)},${y.toFixed(1)}`
  })
  return `M${topPoints.join(' L')} L${bottomPoints.join(' L')} Z`
}

// ─── InfoTooltip ─────────────────────────────────────────────────────────────
function InfoTooltip({ text, side = 'top' }) {
  const [open, setOpen] = useState(false)
  return (
    <span className="relative inline-flex shrink-0 items-center">
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(v => !v)}
        onBlur={() => setOpen(false)}
        className="flex h-3.5 w-3.5 cursor-help items-center justify-center rounded-full border border-white/20 font-sans text-[9px] font-bold italic text-white/30 transition-all hover:border-white/50 hover:text-white/60"
        aria-label="More info"
      >
        i
      </button>
      {open && (
        <span
          className={`pointer-events-none absolute z-[200] w-52 rounded-lg border border-white/10 bg-zinc-950 px-3 py-2.5 text-[11px] font-normal normal-case leading-relaxed tracking-normal text-white/70 shadow-2xl ${
            side === 'top'
              ? 'bottom-full left-1/2 mb-2 -translate-x-1/2'
              : 'top-full left-1/2 mt-2 -translate-x-1/2'
          }`}
        >
          {text}
          <span className={`absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border bg-zinc-950 border-white/10 ${
            side === 'top' ? '-bottom-1 border-t-0 border-l-0' : '-top-1 border-b-0 border-r-0'
          }`} />
        </span>
      )}
    </span>
  )
}

const REGIME_STRIP_COLORS = ['#4ade80', '#fb923c', '#f87171', '#94a3b8']
const REGIME_SHORT_LABELS = ['LV Bull', 'HV Bull', 'HV Bear', 'Sideways']

// Walk transition matrix forward; return dominant regime index for each day 0..numDays
function computeRegimePath(startId, transMatrix, numDays) {
  let p = [0, 0, 0, 0]
  p[startId] = 1.0
  const path = [startId]
  for (let d = 1; d <= numDays; d++) {
    const next = [0, 0, 0, 0]
    for (let j = 0; j < 4; j++)
      for (let i = 0; i < 4; i++)
        next[j] += p[i] * (transMatrix[i]?.[j] ?? 0)
    p = next
    path.push(p.indexOf(Math.max(...p)))
  }
  return path
}

// Collapse path into contiguous segments [{startFrac, endFrac, regime}]
function regimeSegments(path) {
  const segs = []
  const n = path.length - 1
  if (n <= 0) return segs
  let segStart = 0
  for (let d = 1; d <= n; d++) {
    if (path[d] !== path[segStart]) {
      segs.push({ startFrac: segStart / n, endFrac: d / n, regime: path[segStart] })
      segStart = d
    }
  }
  segs.push({ startFrac: segStart / n, endFrac: 1, regime: path[segStart] })
  return segs
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function StockForecastDashboard({ ticker, horizonDays = 60, numPaths = 10000, onBack }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const runSimulation = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [result] = await Promise.all([
        simulate(ticker, horizonDays, 'daily', numPaths),
        new Promise(resolve => setTimeout(resolve, 10000)),
      ])
      setData(result)
    } catch (err) {
      setError(err.message || 'Simulation failed')
    } finally {
      setLoading(false)
    }
  }, [ticker, horizonDays, numPaths])

  const handleExport = useCallback(() => {
    if (!data) return
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${data.ticker ?? ticker}_${horizonDays}d_simulation.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [data, ticker, horizonDays])

  useEffect(() => {
    runSimulation()
  }, [runSimulation])

  // ─── Loading state ─────────────────────────────────────────────────────────
  if (loading) {
    return <SimulationLoader numPaths={numPaths} ticker={ticker} />
  }

  // ─── Error state ───────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className="relative min-h-screen bg-black text-[var(--de-text)] font-sans flex items-center justify-center">
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 de-grid-bg opacity-30" />
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-md text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--de-red)]/10 border border-[var(--de-red)]/20">
            <span className="text-2xl text-[var(--de-red)]">!</span>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">Simulation failed</p>
            <p className="mt-2 text-sm text-white/40">{error}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onBack} className="border-white/10 bg-transparent text-white/60 hover:bg-white/5 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <Button variant="outline" onClick={runSimulation} className="border-white/20 bg-white/5 text-white hover:bg-white/10">
              <RefreshCw className="h-4 w-4 mr-1" /> Retry
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // ─── Data extraction ───────────────────────────────────────────────────────
  const {
    current_price: currentPrice,
    current_regime: regime,
    fan_chart: fanChart,
    terminal_distribution: termDist,
    risk_metrics: risk,
    transition_matrix: transMatrix,
    regime_stats: regimeStats,
  } = data

  const medianTerminal = fanChart.p50[fanChart.p50.length - 1]
  const medianReturn = ((medianTerminal - currentPrice) / currentPrice)
  const regimeId = regime.id - 1 // 0-indexed internally

  // Regime path along forecast horizon
  const regimePath = computeRegimePath(regimeId, transMatrix, horizonDays)
  const regSegs = regimeSegments(regimePath)

  // Fan chart SVG bounds
  const allPrices = [...fanChart.p5, ...fanChart.p95]
  const minPrice = Math.min(...allPrices) * 0.98
  const maxPrice = Math.max(...allPrices) * 1.02
  const viewW = 1000
  const viewH = 100

  // Y-axis labels
  const priceRange = maxPrice - minPrice
  const yLabels = [maxPrice, maxPrice - priceRange / 3, maxPrice - 2 * priceRange / 3, minPrice].map(v => fmtDollar(v))

  // X-axis labels + regime at each tick
  const steps = fanChart.days.length - 1
  const xTickDays = [0, Math.round(steps / 4), Math.round(steps / 2), Math.round(3 * steps / 4), steps]
  const xLabels = ['TODAY', `T+${xTickDays[1]}`, `T+${xTickDays[2]}`, `T+${xTickDays[3]}`, `T+${steps}`]
  const xTickRegimes = xTickDays.map(d => regimePath[Math.min(d, regimePath.length - 1)])

  // Stat cards
  const STAT_CARDS = [
    { label: 'P(Gain)', value: fmtPct(risk.prob_positive), sub: `T+${horizonDays}`, color: 'text-[var(--de-green)]', tooltip: `Out of all ${numPaths.toLocaleString()} simulated paths, this is the share where the stock finishes higher than today's price. Think of it as the raw odds of being in the green by day T+${horizonDays}.` },
    { label: 'Median Return', value: `${medianReturn >= 0 ? '+' : ''}${fmtPct(medianReturn)}`, sub: 'Expected', color: medianReturn >= 0 ? 'text-[var(--de-green)]' : 'text-[var(--de-red)]', tooltip: 'Sort every simulated outcome from worst to best — the median is the one in the exact middle. Half the simulations did better than this, half did worse.' },
    { label: 'VaR (95%)', value: fmtPct(risk.var_95), sub: 'Value at Risk', color: 'text-[var(--de-red)]', tooltip: 'Value at Risk: in the worst 5% of simulated scenarios, the loss would be at least this big. E.g. −12% means there\'s a 5% chance of losing 12% or more by the end of the forecast.' },
    { label: 'Max Drawdown', value: fmtPct(risk.max_drawdown_median), sub: 'Median Path', color: 'text-[var(--de-text)]', tooltip: 'The biggest peak-to-trough drop on the typical simulated path. E.g. −8% means the stock fell 8% from its high point before recovering, on the median simulation.' },
  ]

  // Histogram bars from terminal distribution
  const maxProb = Math.max(...termDist.probabilities)
  const histBars = termDist.probabilities.map(p => (p / maxProb) * 100)

  // Terminal distribution summary
  const termPrices = termDist.prices
  const p5Price = fanChart.p5[fanChart.p5.length - 1]
  const p95Price = fanChart.p95[fanChart.p95.length - 1]

  // Transition probabilities for current regime
  const currentTransRow = transMatrix[regimeId] || [0.25, 0.25, 0.25, 0.25]
  const REGIME_NAMES = ['Low-Vol Bull', 'HV Bull', 'HV Bear', 'Sideways']
  const stayProb = currentTransRow[regimeId]
  const otherTransitions = REGIME_NAMES.map((name, i) => ({
    label: name,
    value: `${(currentTransRow[i] * 100).toFixed(0)}%`,
  })).filter((_, i) => i !== regimeId)

  // Model parameters from regime stats
  const currentRegimeStats = regimeStats[regime.name] || {}
  const MODEL_PARAMS = [
    { label: 'Volatility sigma', value: currentRegimeStats.sigma != null ? `${(currentRegimeStats.sigma * 100 * Math.sqrt(252)).toFixed(1)}%` : '—', color: '', tooltip: 'Annualized volatility — how much the stock price typically swings in a year in the current market regime. Higher = more uncertainty. Most stocks sit between 15–40%.' },
    { label: 'Drift mu', value: currentRegimeStats.mu != null ? fmt(currentRegimeStats.mu, 4) : '—', color: '', tooltip: 'The average daily return tendency in the current regime, fitted from historical data. Positive = slight upward bias, negative = slight downward bias. Very small numbers are normal.' },
    { label: 'VaR (99%)', value: fmtPct(risk.var_99), color: 'text-[var(--de-red)]', tooltip: 'Value at Risk at 99% — in the worst 1 in 100 simulated scenarios, the loss would be at least this amount. More extreme and rare than the 95% VaR.' },
    { label: 'CVaR (95%)', value: fmtPct(risk.cvar_95), color: 'text-[var(--de-red)]', tooltip: 'Conditional VaR, also called Expected Shortfall. Instead of just the cutoff loss, this is the average loss across the worst 5% of scenarios — giving a clearer picture of how bad the bad outcomes really are.' },
  ]

  // Simulation percentiles at terminal
  const PERCENTILES = [
    { label: 'Upper 95%', value: fmtDollar(p95Price), pct: 95, color: '#4ade80', trackColor: 'rgba(74,222,128,0.55)', tooltip: '95% of simulated paths ended at or below this price. Only 1 in 20 simulations beat this — it\'s an optimistic but realistic ceiling.' },
    { label: 'Upper 75%', value: fmtDollar(fanChart.p75[fanChart.p75.length - 1]), pct: 75, color: '#4ade80', trackColor: 'rgba(74,222,128,0.35)', tooltip: '75% of simulated paths ended below this price. A solid bullish outcome — better than 3 out of 4 simulations.' },
    { label: 'Median P50', value: fmtDollar(medianTerminal), pct: 50, color: '#f5f2f0', trackColor: 'rgba(245,242,240,0.18)', tooltip: 'The middle outcome — exactly half of all simulated paths finished above this price, and half below. This is the most unbiased single price to look at.' },
    { label: 'Lower 25%', value: fmtDollar(fanChart.p25[fanChart.p25.length - 1]), pct: 25, color: '#f87171', trackColor: 'rgba(248,113,113,0.35)', tooltip: '25% of simulated paths ended below this price. A bearish but not extreme outcome — 1 in 4 simulations landed here or worse.' },
    { label: 'Lower 5%', value: fmtDollar(p5Price), pct: 5, color: '#f87171', trackColor: 'rgba(248,113,113,0.55)', tooltip: 'Only 5% of simulated paths ended this low — a near worst-case scenario. Think of this as the floor of realistic bad outcomes.' },
  ]

  return (
    <div className="relative min-h-screen bg-black text-[var(--de-text)] font-sans">

      {/* Subtle grid background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 de-grid-bg opacity-30" />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <header className="de-slide-down sticky top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-5">
            <button
              onClick={onBack}
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </button>

            <div className="h-5 w-px bg-white/10" />

           
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={handleExport} disabled={!data} className="border-white/10 bg-transparent text-white/60 hover:bg-white/5 hover:text-white disabled:opacity-30">
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Export</span>
            </Button>
            <Button variant="outline" size="sm" onClick={runSimulation} className="border-white/10 bg-transparent text-white/60 hover:bg-white/5 hover:text-white">
              <RefreshCw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Re-run</span>
            </Button>
          </div>
        </div>
      </header>

      {/* ── Main content ────────────────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-6 py-8 md:px-8">

        {/* ── Ticker headline ─────────────────────────────────────────────── */}
        <div className="de-fade-in flex flex-wrap items-end justify-between gap-6" style={{ animationDelay: '0.05s' }}>
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                T+{horizonDays} Forecast
              </span>
              <Badge variant={REGIME_BADGE_VARIANT[regimeId] || 'secondary'}>
                <span className={`h-1.5 w-1.5 rounded-full ${REGIME_BADGE_COLOR[regimeId] || 'bg-white/50'}`} />
                {regime.name}
              </Badge>
            </div>
            <h2 className="text-4xl font-bold leading-none tracking-tight text-white">
              {ticker}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono">
            <div>
              <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">Spot Price</p>
              <p className="text-xl font-semibold text-white">{fmtDollar(currentPrice)}</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="mb-1 flex items-center gap-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">Projected Median</p>
                <InfoTooltip text="The middle simulated price at the end of the forecast — half of all paths finished above this, half below." />
              </div>
              <p className={`text-xl font-semibold ${medianReturn >= 0 ? 'text-[var(--de-green)]' : 'text-[var(--de-red)]'}`}>
                {fmtDollar(medianTerminal)}
              </p>
            </div>
            <div>
              <div className="mb-1 flex items-center gap-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">Drift Ratio</p>
                <InfoTooltip text="How much the median simulated path moved relative to today's price. Positive = the model expects an upward drift on average across all paths." />
              </div>
              <p className={`text-xl font-semibold ${medianReturn >= 0 ? 'text-[var(--de-green)]' : 'text-[var(--de-red)]'}`}>
                {medianReturn >= 0 ? '+' : ''}{fmtPct(medianReturn)}
              </p>
            </div>
            <span className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/30">
              {numPaths.toLocaleString()} paths &middot; T+{horizonDays}
            </span>
          </div>
        </div>

        {/* ── Fan chart ───────────────────────────────────────────────────── */}
        <Card className="de-fade-in overflow-hidden border-white/[0.06] bg-white/[0.02]" style={{ animationDelay: '0.15s' }}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white/80">{horizonDays}-Day Price Projection</CardTitle>
              <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-wider text-white/30">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-[2px] w-6 bg-white" />
                  Median
                  <InfoTooltip side="bottom" text="The middle of all simulated paths. At every point in time, half the simulations are above this line and half below." />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 rounded-sm border border-purple-500/40 bg-purple-500/30" />
                  50% CI
                  <InfoTooltip side="bottom" text="Confidence Interval — the purple zone where the middle 50% of all paths traveled. Any path inside here is a typical outcome." />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 rounded-sm border border-indigo-500/30 bg-indigo-500/15" />
                  90% CI
                  <InfoTooltip side="bottom" text="The wider blue zone covering 90% of all paths. Only the most extreme 10% of simulations went outside this band." />
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="24" height="4" className="overflow-visible">
                    <line x1="0" y1="2" x2="24" y2="2" stroke="rgba(74,222,128,0.75)" strokeWidth="1.5" strokeDasharray="4 2" />
                  </svg>
                  Max
                  <InfoTooltip side="bottom" text="The 95th percentile boundary — only 5% of simulated paths went above this green line at any given point." />
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="24" height="4" className="overflow-visible">
                    <line x1="0" y1="2" x2="24" y2="2" stroke="rgba(248,113,113,0.75)" strokeWidth="1.5" strokeDasharray="4 2" />
                  </svg>
                  Min
                  <InfoTooltip side="bottom" text="The 5th percentile boundary — only 5% of simulated paths went below this red line at any given point." />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative h-72">
              {/* Y-axis labels */}
              <div className="absolute bottom-10 left-0 top-0 flex w-14 flex-col justify-between pr-2 text-right font-mono text-[10px] text-white/25">
                {yLabels.map((l, i) => <span key={i}>{l}</span>)}
              </div>

              {/* Chart SVG area */}
              <div className="absolute bottom-10 left-14 right-0 top-0 border-b border-l border-white/[0.06]">
                <div className="absolute top-0 w-full border-t border-white/[0.04]" />
                <div className="absolute top-1/3 w-full border-t border-white/[0.04]" />
                <div className="absolute top-2/3 w-full border-t border-white/[0.04]" />
                <svg className="de-draw-in h-full w-full" preserveAspectRatio="none" viewBox={`0 0 ${viewW} ${viewH}`}>
                  <path className="fan-90" d={toSvgArea(fanChart.p95, fanChart.p5, viewW, viewH, minPrice, maxPrice)} />
                  <path className="fan-50" d={toSvgArea(fanChart.p75, fanChart.p25, viewW, viewH, minPrice, maxPrice)} />
                  <path className="fan-p95" d={toSvgPath(fanChart.p95, viewW, viewH, minPrice, maxPrice)} />
                  <path className="fan-p5"  d={toSvgPath(fanChart.p5,  viewW, viewH, minPrice, maxPrice)} />
                  <path className="fan-median" d={toSvgPath(fanChart.p50, viewW, viewH, minPrice, maxPrice)} />
                  <circle cx="0" cy={viewH - ((currentPrice - minPrice) / (maxPrice - minPrice)) * viewH} r="4" fill="var(--de-text)" />
                  <circle cx={viewW} cy={viewH - ((medianTerminal - minPrice) / (maxPrice - minPrice)) * viewH} r="4" fill="#ffffff" />
                </svg>
              </div>

              {/* Regime strip */}
              <div className="absolute bottom-[24px] left-14 right-0 flex h-[10px] overflow-hidden rounded-sm">
                {regSegs.map((seg, i) => (
                  <div
                    key={i}
                    title={REGIME_SHORT_LABELS[seg.regime]}
                    style={{
                      width: `${(seg.endFrac - seg.startFrac) * 100}%`,
                      background: REGIME_STRIP_COLORS[seg.regime],
                      opacity: 0.45,
                    }}
                  />
                ))}
              </div>

              {/* X-axis labels with regime dots */}
              <div className="absolute bottom-0 left-14 right-0 flex h-6 items-center justify-between px-1">
                {xLabels.map((l, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: REGIME_STRIP_COLORS[xTickRegimes[i]], opacity: 0.85 }}
                    />
                    <span className="font-mono text-[9px] text-white/25">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Stat cards row ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          {STAT_CARDS.map((s, i) => (
            <Card key={s.label} className="de-fade-in border-white/[0.06] bg-white/[0.02]" style={{ animationDelay: `${0.25 + i * 0.07}s` }}>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-1.5">
                  <p className="text-xs font-medium text-white/40">{s.label}</p>
                  <InfoTooltip text={s.tooltip} />
                </div>
                <div className="flex items-end justify-between">
                  <span className={`de-pop font-mono text-3xl font-medium ${s.color}`} style={{ animationDelay: `${0.5 + i * 0.07}s` }}>{s.value}</span>
                  <span className="font-mono text-[10px] uppercase text-white/25">{s.sub}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ── Middle row: Distribution + Regime ───────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* Terminal price distribution */}
          <Card className="de-fade-in border-white/[0.06] bg-white/[0.02]" style={{ animationDelay: '0.55s' }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-white/80">Terminal Price Distribution</CardTitle>
                  <InfoTooltip text="Shows how often the stock price landed at each level across all simulated paths at the end of the forecast period. The tallest bar is the most common final price. Green = above today's price, red = below." />
                </div>
                <span className="font-mono text-[10px] text-white/25">N={numPaths.toLocaleString()}</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <div className="flex h-28 items-end gap-[1px]">
                {histBars.map((h, i) => {
                  const price = termPrices[i]
                  const isAbove = price > currentPrice
                  const distFromCenter = Math.abs(i - histBars.length / 2) / (histBars.length / 2)
                  return (
                    <div
                      key={i}
                      className="de-bar-grow flex-1 rounded-t-sm"
                      style={{
                        height: `${Math.max(h, 1)}%`,
                        animationDelay: `${0.7 + i * 0.02}s`,
                        background: h === 100
                          ? '#ffffff'
                          : isAbove
                          ? `rgba(74,222,128,${0.1 + (1 - distFromCenter) * 0.4})`
                          : `rgba(248,113,113,${0.1 + (1 - distFromCenter) * 0.4})`,
                      }}
                    />
                  )
                })}
              </div>
              <div className="flex justify-between border-t border-white/[0.06] pt-2.5 font-mono text-[10px] text-white/25">
                <div>
                  <div className="text-white/40">{fmtDollar(p5Price)}</div>
                  <div>5th %ile</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white">{fmtDollar(medianTerminal)}</div>
                  <div>Median</div>
                </div>
                <div className="text-right">
                  <div className="text-white/40">{fmtDollar(p95Price)}</div>
                  <div>95th %ile</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regime analysis */}
          <Card className="de-fade-in border-white/[0.06] bg-white/[0.02]" style={{ animationDelay: '0.65s' }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-white/80">Regime Analysis</CardTitle>
                  <InfoTooltip text="Based on technical indicators, the model identifies which 'market mood' is currently active. Each regime has different volatility, drift, and jump risk baked into the simulation." />
                </div>
                <Badge variant={REGIME_BADGE_VARIANT[regimeId] || 'secondary'}>
                  <span className={`h-1.5 w-1.5 rounded-full ${REGIME_BADGE_COLOR[regimeId] || 'bg-white/50'}`} />
                  {regime.name}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-1.5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/25">
                  Transition probabilities (T+{horizonDays})
                </p>
                <InfoTooltip text="Based on historical data, these are the odds of the market shifting from its current mood to a different one by the end of the forecast period. Higher % = more likely to stay or move to that regime." />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1 flex flex-col items-center justify-center rounded-lg border border-[var(--de-green)]/20 bg-[var(--de-green-dim)] p-4">
                  <span className="de-pop font-mono text-2xl font-bold text-[var(--de-green)]" style={{ animationDelay: '0.9s' }}>
                    {(stayProb * 100).toFixed(0)}%
                  </span>
                  <span className="mt-1 text-center text-[9px] text-white/40">Stay Current</span>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-2">
                  {otherTransitions.map((t, i) => (
                    <div
                      key={t.label}
                      className="de-fade-in flex flex-col items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] p-3"
                      style={{ animationDelay: `${0.95 + i * 0.06}s` }}
                    >
                      <span className="font-mono text-sm font-semibold text-white/40">{t.value}</span>
                      <span className="mt-0.5 text-[9px] text-white/25">{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
                <p className="text-xs leading-relaxed text-white/40">
                  {regime.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Bottom row: Percentiles + Model Params ──────────────────────── */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* Simulation percentiles */}
          <Card className="de-fade-in border-white/[0.06] bg-white/[0.02]" style={{ animationDelay: '0.75s' }}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle className="text-white/80">Simulation Percentiles</CardTitle>
                <InfoTooltip text="Where the simulated stock price ended up after the forecast period, sorted by rank. Upper = better outcomes, Lower = worse outcomes." />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {PERCENTILES.map((p, i) => (
                  <div key={p.label} className="de-fade-in" style={{ animationDelay: `${0.9 + i * 0.08}s` }}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wide text-white/25">
                        {p.label}
                        <InfoTooltip text={p.tooltip} />
                      </span>
                      <span
                        className="font-mono text-base font-bold"
                        style={{ color: p.color }}
                      >
                        {p.value}
                      </span>
                    </div>
                    <div className="h-0.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${p.pct}%`,
                          background: p.trackColor,
                          animation: `de-bar-grow 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.95 + i * 0.08}s both`,
                          transformOrigin: 'left',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Model parameters + Insight */}
          <div className="flex flex-col gap-4">
            <Card className="de-fade-in border-white/[0.06] bg-white/[0.02]" style={{ animationDelay: '0.85s' }}>
              <CardHeader>
                <div className="flex items-center gap-2">
                <CardTitle className="text-white/80">Model Parameters</CardTitle>
                <InfoTooltip text="Statistical values fitted from historical price data for the current market regime. These drive how the simulation behaves — volatility, direction, and tail risk." />
              </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {MODEL_PARAMS.map((p, i) => (
                    <div
                      key={p.label}
                      className="de-fade-in rounded-lg border border-white/[0.06] bg-white/[0.03] p-3"
                      style={{ animationDelay: `${1.0 + i * 0.06}s` }}
                    >
                      <div className="mb-1 flex items-center gap-1">
                        <p className="font-mono text-[9px] uppercase tracking-wide text-white/25">{p.label}</p>
                        <InfoTooltip text={p.tooltip} />
                      </div>
                      <p className={`font-mono text-sm font-semibold ${p.color || 'text-white'}`}>
                        {p.value}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Insight callout */}
            <div className="de-fade-in rounded-xl border border-white/10 bg-white/[0.03] p-4" style={{ animationDelay: '1.1s' }}>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5 shrink-0 text-[16px] text-white/60">
                  insights
                </span>
                <p className="text-xs leading-relaxed text-white/50">
                  {risk.prob_positive > 0.6 ? (
                    <>Simulation suggests an <span className="font-bold text-white">asymmetric upside bias</span>. {fmtPct(risk.prob_positive)} of paths close above entry price.</>
                  ) : risk.prob_positive < 0.4 ? (
                    <>Simulation indicates <span className="font-bold text-white">downside risk dominance</span>. Only {fmtPct(risk.prob_positive)} of paths close above entry price.</>
                  ) : (
                    <>Simulation shows <span className="font-bold text-white">balanced risk/reward</span>. {fmtPct(risk.prob_positive)} of paths close above entry price.</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer className="de-fade-in mt-4 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 pb-4 md:flex-row" style={{ animationDelay: '1.2s' }}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white/25">
                Engine: Live
              </span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/25">
              Monte Carlo GARCH(1,1) &middot; {numPaths.toLocaleString()} Paths
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/25">
            Probabilistic scenario tool — not a price predictor &middot; Not financial advice
          </p>
        </footer>
      </main>
    </div>
  )
}
