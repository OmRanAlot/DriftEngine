/**
 * DriftEngine — Console Logger
 * Structured, color-coded logs for debugging the Monte Carlo pipeline.
 */

const S = {
  badge:   'background:#18181b;color:#4ade80;font-weight:700;font-family:monospace;padding:1px 6px;border-radius:3px;border:1px solid #4ade8044',
  label:   'color:#94a3b8;font-family:monospace;font-size:11px',
  value:   'color:#f5f2f0;font-weight:600;font-family:monospace;font-size:11px',
  key:     'color:#7dd3fc;font-family:monospace;font-size:11px',
  warn:    'background:#451a03;color:#fbbf24;font-weight:700;font-family:monospace;padding:1px 6px;border-radius:3px',
  error:   'background:#450a0a;color:#f87171;font-weight:700;font-family:monospace;padding:1px 6px;border-radius:3px',
  dim:     'color:rgba(255,255,255,0.2);font-family:monospace;font-size:10px',
  timing:  'color:#a78bfa;font-family:monospace;font-size:11px',
  section: 'color:#e2e8f0;font-weight:700;font-family:monospace;font-size:12px;border-bottom:1px solid #27272a',
  red:     'color:#f87171;font-family:monospace;font-size:11px',
  green:   'color:#4ade80;font-family:monospace;font-size:11px',
  amber:   'color:#fbbf24;font-family:monospace;font-size:11px',
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function ts() {
  return new Date().toISOString().split('T')[1].slice(0, 12)
}

function pct(n) {
  return n != null ? `${(n * 100).toFixed(2)}%` : '—'
}

function dollar(n) {
  return n != null ? `$${Number(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '—'
}

// ─── Public API ───────────────────────────────────────────────────────────────

export const log = {

  // ── App lifecycle ───────────────────────────────────────────────────────────

  boot() {
    console.groupCollapsed(
      '%c DRIFTENGINE %c v1.0  Monte Carlo Simulation Frontend  ' + ts(),
      S.badge, S.dim
    )
    console.log('%c  Engine      %c C++ pybind11 GARCH(1,1) + regime-switching + jump-diffusion', S.label, S.value)
    console.log('%c  Renderer    %c React + Vite  →  FastAPI :8000', S.label, S.value)
    console.log('%c  Session     %c ' + crypto.randomUUID?.() ?? Math.random().toString(36).slice(2), S.label, S.dim)
    console.groupEnd()
  },

  screenTransition(from, to, meta = {}) {
    console.groupCollapsed(
      '%c NAV %c  %s → %s  ' + ts(),
      S.badge, S.dim, from.toUpperCase(), to.toUpperCase()
    )
    if (Object.keys(meta).length) {
      Object.entries(meta).forEach(([k, v]) =>
        console.log(`%c  ${k.padEnd(14)} %c ${v}`, S.label, S.value)
      )
    }
    console.groupEnd()
  },

  // ── User interactions ───────────────────────────────────────────────────────

  tickerSelected(ticker, horizonDays, numPaths) {
    console.group('%c INPUT %c  Ticker selection committed  ' + ts(), S.badge, S.dim)
    console.log('%c  ticker      %c ' + ticker,                              S.label, S.value)
    console.log('%c  horizon     %c ' + horizonDays + ' trading days',       S.label, S.value)
    console.log('%c  paths       %c ' + numPaths.toLocaleString() + ' paths',S.label, S.value)
    console.log('%c  dt          %c 1/252 ≈ 0.003968 (one trading day)',      S.label, S.dim)
    console.log('%c  total steps %c ' + (horizonDays * numPaths).toLocaleString() + ' state updates queued', S.label, S.dim)
    console.groupEnd()
  },

  horizonChanged(prev, next) {
    console.log('%c CONFIG %c  horizon  %c %d → %d days', S.badge, S.label, S.value, prev, next)
  },

  pathsChanged(prev, next) {
    const delta = next - prev
    const style = delta > 0 ? S.green : S.red
    console.log('%c CONFIG %c  numPaths %c %s → %s  (%c%s%c)',
      S.badge, S.label, S.value,
      prev.toLocaleString(), next.toLocaleString(),
      style, (delta > 0 ? '+' : '') + delta.toLocaleString(), S.dim
    )
  },

  // ── API layer ───────────────────────────────────────────────────────────────

  apiRequest(endpoint, payload) {
    console.groupCollapsed('%c POST %c  ' + endpoint + '  ' + ts(), S.badge, S.dim)
    console.log('%c  payload', S.section)
    Object.entries(payload).forEach(([k, v]) =>
      console.log(`%c  ${k.padEnd(14)} %c ${v}`, S.label, S.value)
    )
    console.log('%c  ↑ dispatching to FastAPI…', S.dim)
    console.groupEnd()
  },

  apiResponse(endpoint, data, elapsedMs) {
    const label = elapsedMs < 3000 ? S.green : elapsedMs < 8000 ? S.amber : S.red
    console.groupCollapsed('%c 200  %c  ' + endpoint + '  %c ' + elapsedMs + 'ms', S.badge, S.dim, label)

    console.log('%c  meta', S.section)
    console.log('%c  ticker         %c ' + (data.ticker ?? '—'),                              S.label, S.value)
    console.log('%c  current_price  %c ' + dollar(data.current_price),                        S.label, S.value)
    console.log('%c  horizon_days   %c ' + (data.horizon_days ?? '—'),                        S.label, S.value)
    console.log('%c  regime         %c [%d] %s', S.label, S.value, data.current_regime?.id ?? '?', data.current_regime?.name ?? '—')

    if (data.risk_metrics) {
      const r = data.risk_metrics
      console.log('%c  risk', S.section)
      console.log('%c  VaR 95%%        %c ' + pct(r.var_95),               S.label, S.red)
      console.log('%c  VaR 99%%        %c ' + pct(r.var_99),               S.label, S.red)
      console.log('%c  CVaR 95%%       %c ' + pct(r.cvar_95),              S.label, S.red)
      console.log('%c  P(gain)        %c ' + pct(r.prob_positive),         S.label, r.prob_positive > 0.5 ? S.green : S.red)
      console.log('%c  max dd median  %c ' + pct(r.max_drawdown_median),   S.label, S.amber)
    }

    if (data.fan_chart) {
      const fc = data.fan_chart
      const steps = fc.p50?.length ?? 0
      const p5_t  = dollar(fc.p5?.[steps - 1])
      const p50_t = dollar(fc.p50?.[steps - 1])
      const p95_t = dollar(fc.p95?.[steps - 1])
      console.log('%c  fan chart', S.section)
      console.log('%c  steps          %c ' + steps,     S.label, S.value)
      console.log('%c  P5  terminal   %c ' + p5_t,      S.label, S.red)
      console.log('%c  P50 terminal   %c ' + p50_t,     S.label, S.value)
      console.log('%c  P95 terminal   %c ' + p95_t,     S.label, S.green)
    }

    if (data.transition_matrix) {
      const NAMES = ['LV Bull', 'HV Bull', 'HV Bear', 'Sideways']
      console.log('%c  transition matrix (rows = from, cols = to)', S.section)
      console.table(
        Object.fromEntries(
          data.transition_matrix.map((row, i) =>
            [NAMES[i], Object.fromEntries(NAMES.map((n, j) => [n, (row[j] * 100).toFixed(1) + '%']))]
          )
        )
      )
    }

    console.groupEnd()
  },

  apiError(endpoint, error, elapsedMs) {
    console.group('%c ERR  %c  ' + endpoint + '  ' + ts(), S.error, S.dim)
    console.log('%c  elapsed   %c ' + elapsedMs + 'ms',  S.label, S.timing)
    console.log('%c  message   %c ' + error.message,      S.label, S.red)
    console.error(error)
    console.groupEnd()
  },

  // ── Simulation lifecycle ────────────────────────────────────────────────────

  simulationStart(ticker, horizonDays, numPaths) {
    const totalOps = numPaths * horizonDays
    console.group('%c SIM  %c  Monte Carlo dispatch  ' + ts(), S.badge, S.dim)
    console.log('%c  ticker         %c ' + ticker,                            S.label, S.value)
    console.log('%c  paths          %c ' + numPaths.toLocaleString(),         S.label, S.value)
    console.log('%c  steps/path     %c ' + horizonDays,                      S.label, S.value)
    console.log('%c  total ops      %c ' + totalOps.toLocaleString(),         S.label, S.dim)
    console.log('%c  model          %c GBM + GARCH(1,1) + Student-t(ν) + Poisson jumps', S.label, S.dim)
    console.log('%c  regime model   %c Markov chain, 4-state, per-stock thresholds',      S.label, S.dim)
    console.log('%c  ↻ awaiting C++ engine…', S.dim)
    console.groupEnd()
    console.time('⏱ drift/simulate')
  },

  simulationComplete(data) {
    console.timeEnd('⏱ drift/simulate')
    const regime = data?.current_regime
    const risk   = data?.risk_metrics ?? {}
    console.groupCollapsed('%c DONE %c  Simulation resolved  ' + ts(), S.badge, S.dim)
    console.log('%c  regime         %c [%d] %s', S.label, S.value, regime?.id ?? '?', regime?.name ?? '—')
    console.log('%c  P(positive)    %c ' + pct(risk.prob_positive), S.label, risk.prob_positive > 0.5 ? S.green : S.red)
    console.log('%c  VaR(95)        %c ' + pct(risk.var_95),        S.label, S.red)
    console.log('%c  CVaR(95)       %c ' + pct(risk.cvar_95),       S.label, S.red)
    console.groupEnd()
  },

  simulationError(error) {
    console.timeEnd('⏱ drift/simulate')
    console.group('%c SIM  %c  Simulation failed  ' + ts(), S.error, S.dim)
    console.error(error)
    console.groupEnd()
  },

  // ── Export ──────────────────────────────────────────────────────────────────

  exportTriggered(ticker, horizonDays, byteSize) {
    console.log(
      '%c XPRT %c  JSON snapshot  %c %s_T+%dd  %c %s KB',
      S.badge, S.dim, S.value, ticker, horizonDays, S.dim,
      (byteSize / 1024).toFixed(1)
    )
  },
}
