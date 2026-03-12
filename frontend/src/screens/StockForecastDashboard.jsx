import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// ─── Static placeholder data ─────────────────────────────────────────────────
// Wire these to the POST /simulate API response when the backend is live.

const STAT_CARDS = [
  { label: 'P(Gain)',       value: '72.3%',  sub: 'T+60',         color: 'text-[var(--de-green)]'  },
  { label: 'Median Return', value: '+8.4%',  sub: 'Expected',     color: 'text-[var(--de-orange)]' },
  { label: 'VaR (95%)',     value: '-14.2%', sub: 'Value at Risk', color: 'text-[var(--de-red)]'   },
  { label: 'Max Drawdown',  value: '-22.1%', sub: 'Worst Path',   color: 'text-[var(--de-text)]'   },
]

// Histogram bar heights for the terminal distribution (static mock)
const HIST_BARS = [8, 18, 32, 55, 82, 100, 78, 48, 28, 14, 6]

// Regime transition probabilities
const TRANSITIONS = [
  { label: 'Stay Bull', value: '84%', variant: 'bullish', big: true  },
  { label: 'HV Bull',   value: '12%', variant: null,      big: false },
  { label: 'HV Bear',   value: '3%',  variant: null,      big: false },
  { label: 'Sideways',  value: '1%',  variant: null,      big: false },
]

// ─── Component ───────────────────────────────────────────────────────────────
export default function StockForecastDashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--de-bg)] font-sans text-[var(--de-text)]">

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[var(--de-border)] bg-[var(--de-bg)]/90 px-8 py-4 backdrop-blur-md">
        {/* Logo + Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--de-orange)]">
              <span className="material-symbols-outlined text-[16px] text-black">timeline</span>
            </div>
            <span className="text-sm font-semibold tracking-tight">DriftEngine</span>
          </div>

          <nav className="hidden items-center gap-5 font-medium text-[var(--de-text-muted)] md:flex">
            <a href="#" className="text-xs font-semibold text-[var(--de-text)]">Dashboard</a>
            <a href="#" className="text-xs transition-colors hover:text-[var(--de-text)]">Models</a>
            <a href="#" className="text-xs transition-colors hover:text-[var(--de-text)]">Portfolios</a>
          </nav>
        </div>

        {/* Search + Avatar */}
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-[var(--de-text-muted)]">
              search
            </span>
            <input
              placeholder="Search ticker…"
              className="w-52 rounded-md border border-[var(--de-border-2)] bg-[var(--de-surface)] py-1.5 pl-8 pr-3 text-xs text-[var(--de-text)] placeholder:text-[var(--de-text-subtle)] transition-colors focus:border-[var(--de-orange)]/40 focus:outline-none"
            />
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--de-border-2)] bg-[var(--de-surface-2)] font-mono text-xs font-bold text-[var(--de-text-muted)] transition-colors hover:text-[var(--de-text)]">
            JD
          </button>
        </div>
      </header>

      {/* ── Main ──────────────────────────────────────────────────────────── */}
      <main className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-5 p-8">

        {/* Ticker headline row */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--de-text-muted)]">
                T+60 Forecast
              </span>
              <Badge variant="bullish">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--de-green)]" />
                Low-Vol Bull
              </Badge>
            </div>
            <h2 className="text-4xl font-bold leading-none tracking-tight">
              AAPL
              <span className="ml-3 text-2xl font-normal text-[var(--de-text-muted)]">Apple Inc.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded border border-[var(--de-border)] bg-[var(--de-surface)] px-2 py-1 font-mono text-xs text-[var(--de-text-subtle)]">
              10,000 paths · N=252
            </span>
            <Button variant="outline" size="sm">
              <span className="material-symbols-outlined text-[14px]">refresh</span>
              Re-run
            </Button>
          </div>
        </div>

        {/* ── Fan chart ───────────────────────────────────────────────────── */}
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>60-Day Price Projection</CardTitle>

              {/* Legend */}
              <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-wider text-[var(--de-text-muted)]">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-[2px] w-6 bg-[var(--de-orange)]" />
                  Median
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 rounded-sm border border-[var(--de-orange)]/20 bg-[var(--de-orange-dim)]" />
                  50% CI
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block h-3 w-3 rounded-sm border border-white/10 bg-white/[0.03]" />
                  90% CI
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="relative h-72">
              {/* Y-axis labels */}
              <div className="absolute bottom-6 left-0 top-0 flex w-14 flex-col justify-between pr-2 text-right font-mono text-[10px] text-[var(--de-text-subtle)]">
                <span>$220</span>
                <span>$200</span>
                <span>$180</span>
                <span>$160</span>
              </div>

              {/* Chart canvas */}
              <div className="absolute bottom-6 left-14 right-0 top-0 border-b border-l border-[var(--de-border)]">
                {/* Horizontal grid lines */}
                <div className="absolute top-0 w-full border-t border-[var(--de-border)]/40" />
                <div className="absolute top-1/3 w-full border-t border-[var(--de-border)]/40" />
                <div className="absolute top-2/3 w-full border-t border-[var(--de-border)]/40" />

                {/* SVG fan chart — replace with Recharts <AreaChart> when data is live */}
                <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
                  <path className="fan-90" d="M0,60 L200,55 L400,45 L600,40 L800,30 L1000,10 L1000,90 L800,80 L600,75 L400,70 L200,65 L0,60 Z" />
                  <path className="fan-50" d="M0,60 L200,58 L400,52 L600,50 L800,42 L1000,30 L1000,70 L800,65 L600,62 L400,60 L200,62 L0,60 Z" />
                  <path className="fan-median" d="M0,60 L200,60 L400,56 L600,55 L800,52 L1000,48" />
                  <circle cx="0"    cy="60" r="4" fill="var(--de-text)" />
                  <circle cx="1000" cy="48" r="4" fill="var(--de-orange)" />
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-14 right-0 flex h-6 items-end justify-between px-1 font-mono text-[10px] text-[var(--de-text-subtle)]">
                <span>TODAY</span>
                <span>T+15</span>
                <span>T+30</span>
                <span>T+45</span>
                <span>T+60</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Stat cards row ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          {STAT_CARDS.map((s) => (
            <Card key={s.label}>
              <CardContent className="p-6">
                <p className="mb-3 text-xs font-medium text-[var(--de-text-muted)]">{s.label}</p>
                <div className="flex items-end justify-between">
                  <span className={`font-mono text-3xl font-medium ${s.color}`}>{s.value}</span>
                  <span className="font-mono text-[10px] uppercase text-[var(--de-text-subtle)]">{s.sub}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ── Bottom row: distribution + regime ───────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* Terminal price distribution */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Terminal Price Distribution</CardTitle>
                <span className="font-mono text-[10px] text-[var(--de-text-subtle)]">N=10,000</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {/* Bar chart — replace with Recharts <BarChart> when data is live */}
              <div className="flex h-28 items-end gap-1">
                {HIST_BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 5
                          ? 'var(--de-orange)'
                          : i >= 3 && i <= 7
                          ? `rgba(255,107,43,${0.12 + (1 - Math.abs(i - 5) / 3) * 0.28})`
                          : 'var(--de-surface-2)',
                    }}
                  />
                ))}
              </div>

              {/* Percentile markers */}
              <div className="flex justify-between border-t border-[var(--de-border)] pt-2.5 font-mono text-[10px] text-[var(--de-text-subtle)]">
                <div>
                  <div className="text-[var(--de-text-muted)]">$165.00</div>
                  <div>5th %ile</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-[var(--de-orange)]">$182.45</div>
                  <div>Median</div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--de-text-muted)]">$210.00</div>
                  <div>95th %ile</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regime analysis */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Regime Analysis</CardTitle>
                <Badge variant="bullish">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--de-green)]" />
                  Low-Vol Bull
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--de-text-subtle)]">
                Transition probabilities (T+30)
              </p>

              {/* Transition grid */}
              <div className="grid grid-cols-3 gap-3">
                {/* Big "stay" box */}
                <div className="col-span-1 flex flex-col items-center justify-center rounded-lg border border-[var(--de-green)]/20 bg-[var(--de-green-dim)] p-4">
                  <span className="font-mono text-2xl font-bold text-[var(--de-green)]">84%</span>
                  <span className="mt-1 text-center text-[9px] text-[var(--de-text-muted)]">Stay Current</span>
                </div>

                {/* Smaller transition boxes */}
                <div className="col-span-2 grid grid-cols-2 gap-2">
                  {TRANSITIONS.slice(1).map((t) => (
                    <div
                      key={t.label}
                      className="flex flex-col items-center justify-center rounded-lg border border-[var(--de-border)] bg-[var(--de-surface-2)] p-3"
                    >
                      <span className="font-mono text-sm font-semibold text-[var(--de-text-muted)]">{t.value}</span>
                      <span className="mt-0.5 text-[9px] text-[var(--de-text-subtle)]">{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regime commentary */}
              <div className="rounded-lg border border-[var(--de-border)] bg-[var(--de-surface-2)] p-3">
                <p className="text-xs leading-relaxed text-[var(--de-text-muted)]">
                  Current regime exhibits high structural stability. Quantitative signals suggest
                  significant institutional absorption at current price levels.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
