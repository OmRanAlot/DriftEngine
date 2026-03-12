import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// ─── Static placeholder data ─────────────────────────────────────────────────
// Wire to the POST /simulate response when the backend is live.

const PERCENTILES = [
  { label: 'Upper 99%',  value: '$1,024.11', pct: 95, color: '#4ade80', trackColor: 'rgba(74,222,128,0.55)'  },
  { label: 'Upper 75%',  value: '$882.40',   pct: 75, color: '#4ade80', trackColor: 'rgba(74,222,128,0.35)'  },
  { label: 'Median P50', value: '$812.45',   pct: 50, color: '#f5f2f0', trackColor: 'rgba(245,242,240,0.18)' },
  { label: 'Lower 25%',  value: '$720.15',   pct: 25, color: '#f87171', trackColor: 'rgba(248,113,113,0.35)' },
  { label: 'Lower 1%',   value: '$598.88',   pct: 5,  color: '#f87171', trackColor: 'rgba(248,113,113,0.55)' },
]

const MODEL_PARAMS = [
  { label: 'Volatility σ', value: '42.8%',   color: ''                        },
  { label: 'Drift μ',      value: '0.021',   color: ''                        },
  { label: 'VaR (99%)',    value: '-$143.30', color: 'text-[var(--de-red)]'   },
  { label: 'Sharpe Ratio', value: '1.82',    color: 'text-[var(--de-green)]' },
]

// ─── Component ───────────────────────────────────────────────────────────────
export default function AdvancedForecastAnalysis() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[var(--de-bg)] p-4 font-sans text-[var(--de-text)] md:p-8">

      {/* Subtle grid in background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 de-grid-bg opacity-40" />

      {/* ── Modal shell ─────────────────────────────────────────────────────
          Max-width / max-height keeps it from overflowing on large screens.
          ──────────────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full max-h-[880px] w-full max-w-[1400px] flex-col overflow-hidden rounded-2xl border border-[var(--de-border-2)] bg-[var(--de-surface)] shadow-[0_0_80px_rgba(0,0,0,0.8)]">

        {/* ── Modal header ────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between border-b border-[var(--de-border)] bg-[var(--de-bg)]/50 px-8 py-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Badge variant="default" className="font-mono">Simulation Engine v4.2</Badge>
              <h1 className="text-xl font-semibold tracking-tight">Advanced Analysis</h1>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--de-text-subtle)]">
              NVDA Equity Cluster · Monte Carlo GARCH(1,1) · 10k Paths
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <span className="material-symbols-outlined text-[14px]">download</span>
              Export
            </Button>
            <Button variant="ghost" size="icon">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </Button>
          </div>
        </div>

        {/* ── Modal body ──────────────────────────────────────────────────── */}
        <div className="flex min-h-0 flex-1 overflow-hidden">

          {/* Main content area */}
          <div className="thin-scrollbar flex flex-1 flex-col gap-5 overflow-y-auto p-6">

            {/* Price header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-8">
                <div>
                  <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--de-text-subtle)]">
                    Spot Price
                  </p>
                  <p className="font-mono text-2xl font-semibold">$742.18</p>
                </div>

                <div className="h-10 w-px bg-[var(--de-border-2)]" />

                <div>
                  <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--de-text-subtle)]">
                    Projected Mean
                  </p>
                  <p className="font-mono text-2xl font-semibold text-[var(--de-green)]">$834.21</p>
                </div>

                <div>
                  <p className="mb-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--de-text-subtle)]">
                    Drift Ratio
                  </p>
                  <p className="font-mono text-2xl font-semibold text-[var(--de-orange)]">+12.4%</p>
                </div>
              </div>

              {/* View toggle */}
              <div className="flex items-center rounded-md border border-[var(--de-border)] bg-[var(--de-bg)] p-1">
                <Button variant="default" size="sm" className="text-[11px]">
                  <span className="material-symbols-outlined text-[12px]">waves</span>
                  GARCH Vol
                </Button>
                <Button variant="ghost" size="sm" className="text-[11px]">
                  <span className="material-symbols-outlined text-[12px]">texture</span>
                  Regimes
                </Button>
              </div>
            </div>

            {/* ── Fan chart ─────────────────────────────────────────────────
                Replace SVG paths with a live Recharts <LineChart> / <AreaChart>
                when simulation data is available.
                ──────────────────────────────────────────────────────────── */}
            <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-xl border border-[var(--de-border)] bg-black/30 p-6">

              {/* Y-axis */}
              <div className="absolute bottom-10 right-4 top-6 z-10 flex flex-col justify-between text-right font-mono text-[10px] text-[var(--de-text-subtle)]">
                <span>$1,050</span>
                <span>$950</span>
                <span>$850</span>
                <span className="font-bold text-[var(--de-orange)]">$742</span>
                <span>$650</span>
                <span>$550</span>
              </div>

              {/* Simulation path SVG */}
              <svg
                className="absolute inset-0 h-[calc(100%-2.5rem)] w-full"
                preserveAspectRatio="none"
                viewBox="0 0 1000 400"
              >
                {/* Sample paths (thin, semi-transparent) */}
                <g stroke="var(--de-orange)" fill="none" strokeOpacity="0.3" strokeWidth="0.75">
                  <path d="M0,220 Q100,180 200,190 T400,140 T600,160 T800,110 T1000,90" />
                  <path d="M0,220 Q100,240 200,230 T400,270 T600,250 T800,300 T1000,320" />
                  <path d="M0,220 Q150,150 300,180 T600,140 T900,100 T1000,80" />
                  <path d="M0,220 Q150,270 300,240 T600,280 T900,320 T1000,340" />
                  <path d="M0,220 L100,210 L200,220 L300,200 L400,220 L500,190 L600,200 L700,180 L800,195 L900,170 L1000,165" />
                  <path d="M0,220 C200,160 400,260 600,160 S800,210 1000,130" />
                  <path d="M0,220 C200,280 400,160 600,280 S800,230 1000,300" />
                </g>
                {/* Median path (bold) */}
                <path
                  d="M0,220 L100,210 L200,200 L300,185 L400,175 L500,165 L600,155 L700,150 L800,140 L900,135 L1000,120"
                  fill="none"
                  stroke="var(--de-orange)"
                  strokeWidth="2"
                />
              </svg>

              {/* Static hover tooltip — replace with interactive Recharts tooltip */}
              <div className="pointer-events-none absolute left-[55%] top-[18%] z-20">
                <div className="min-w-[140px] rounded-lg border border-[var(--de-border-2)] bg-[var(--de-surface)] p-3 shadow-2xl">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-[var(--de-text-subtle)]">
                    T+18 Objective
                  </p>
                  <div className="space-y-1.5 font-mono text-[10px]">
                    <div className="flex justify-between gap-6">
                      <span className="text-[var(--de-text-muted)]">Mean</span>
                      <span className="font-bold text-[var(--de-text)]">$812.45</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-[var(--de-text-muted)]">P95</span>
                      <span className="font-bold text-[var(--de-green)]">$944.20</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-[var(--de-text-muted)]">P05</span>
                      <span className="font-bold text-[var(--de-red)]">$681.12</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-2 left-4 right-12 z-10 flex justify-between font-mono text-[10px] text-[var(--de-text-subtle)]">
                <span>START</span>
                <span>SEP 08</span>
                <span>SEP 15</span>
                <span>SEP 22</span>
                <span>END</span>
              </div>
            </div>
          </div>

          {/* ── Sidebar ───────────────────────────────────────────────────── */}
          <aside className="thin-scrollbar flex w-72 flex-col overflow-y-auto border-l border-[var(--de-border)] bg-[var(--de-bg)]/20">
            <div className="flex flex-col gap-6 p-6">

              {/* Simulation percentiles */}
              <div>
                <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--de-text-subtle)]">
                  Simulation Percentiles
                </p>
                <div className="space-y-4">
                  {PERCENTILES.map((p) => (
                    <div key={p.label}>
                      <div className="mb-1.5 flex items-baseline justify-between">
                        <span className="font-mono text-[9px] uppercase tracking-wide text-[var(--de-text-subtle)]">
                          {p.label}
                        </span>
                        <span
                          className="font-mono text-base font-bold"
                          style={{ color: p.color }}
                        >
                          {p.value}
                        </span>
                      </div>
                      <div className="h-0.5 overflow-hidden rounded-full bg-[var(--de-border)]">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${p.pct}%`, background: p.trackColor }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[var(--de-border)]" />

              {/* Model parameters */}
              <div>
                <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--de-text-subtle)]">
                  Model Parameters
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {MODEL_PARAMS.map((p) => (
                    <div
                      key={p.label}
                      className="rounded-lg border border-[var(--de-border)] bg-[var(--de-surface-2)] p-3"
                    >
                      <p className="mb-1 font-mono text-[9px] uppercase tracking-wide text-[var(--de-text-subtle)]">
                        {p.label}
                      </p>
                      <p className={`font-mono text-sm font-semibold ${p.color || 'text-[var(--de-text)]'}`}>
                        {p.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insight callout */}
              <div className="mt-auto rounded-lg border border-[var(--de-orange)]/20 bg-[var(--de-orange-dim)] p-3">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-[16px] text-[var(--de-orange)]">
                    insights
                  </span>
                  <p className="text-[10px] leading-relaxed text-[var(--de-text-muted)]">
                    Convexity analysis suggests an{' '}
                    <span className="font-bold text-[var(--de-text)]">asymmetric upside bias</span>.
                    74% of simulated paths close above current resistance.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Modal footer ────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between border-t border-[var(--de-border)] bg-[var(--de-bg)]/50 px-8 py-3.5">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--de-orange)] shadow-[0_0_6px_var(--de-orange-glow)]" />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--de-text-subtle)]">
                Engine: Live
              </span>
            </div>
            <div className="h-4 w-px bg-[var(--de-border-2)]" />
            <button className="font-mono text-[9px] uppercase tracking-wider text-[var(--de-text-subtle)] transition-colors hover:text-[var(--de-text)]">
              Methodology
            </button>
            <button className="font-mono text-[9px] uppercase tracking-wider text-[var(--de-text-subtle)] transition-colors hover:text-[var(--de-text)]">
              License
            </button>
          </div>

          <div className="flex items-center gap-4 font-mono text-[9px] uppercase tracking-wider text-[var(--de-text-subtle)]">
            <span>50 Representative Paths</span>
            <span className="text-[var(--de-orange)]/70">Seed: FF-029-A</span>
          </div>
        </div>
      </div>
    </div>
  )
}
