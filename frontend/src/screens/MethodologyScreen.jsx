import React, { useState, useEffect, useRef } from 'react'

// ─── Section IDs used by the sidebar ─────────────────────────────────────────
const SECTIONS = [
  { id: 'overview',      label: 'Overview' },
  { id: 'stack',         label: 'Tech Stack' },
  { id: 'pipeline',      label: 'Data Pipeline' },
  { id: 'ingestion',     label: '① Data Ingestion' },
  { id: 'features',      label: '② Statistical Features' },
  { id: 'indicators',    label: '③ Technical Indicators' },
  { id: 'regimes',       label: '④ Regime Classification' },
  { id: 'params',        label: '⑤ Parameter Building' },
  { id: 'simulation',    label: '⑥ Monte Carlo Engine' },
  { id: 'aggregation',   label: '⑦ Results Aggregation' },
  { id: 'frontend',      label: '⑧ Frontend Display' },
  { id: 'math',          label: 'Mathematical Models' },
  { id: 'risk',          label: 'Risk Metrics' },
  { id: 'decisions',     label: 'Design Decisions' },
  { id: 'api',           label: 'API Contract' },
]

// ─── Small primitives ─────────────────────────────────────────────────────────
function SectionTitle({ id, children }) {
  return (
    <h2 id={id} style={{
      fontSize: 22,
      fontWeight: 700,
      color: '#f5f2f0',
      letterSpacing: '-0.02em',
      marginBottom: 20,
      paddingTop: 8,
      scrollMarginTop: 32,
    }}>
      {children}
    </h2>
  )
}

function SubTitle({ id, children }) {
  return (
    <h3 id={id} style={{
      fontSize: 15,
      fontWeight: 600,
      color: 'rgba(245,242,240,0.85)',
      letterSpacing: '-0.01em',
      marginTop: 28,
      marginBottom: 10,
      scrollMarginTop: 32,
    }}>
      {children}
    </h3>
  )
}

function P({ children }) {
  return (
    <p style={{
      fontSize: 14,
      lineHeight: 1.75,
      color: 'rgba(245,242,240,0.60)',
      marginBottom: 14,
    }}>
      {children}
    </p>
  )
}

function Code({ children }) {
  return (
    <code style={{
      fontFamily: 'monospace',
      fontSize: 12,
      background: 'rgba(255,255,255,0.07)',
      border: '0.5px solid rgba(255,255,255,0.1)',
      borderRadius: 4,
      padding: '1px 6px',
      color: '#4ade80',
    }}>
      {children}
    </code>
  )
}

function Formula({ children }) {
  return (
    <div style={{
      fontFamily: 'monospace',
      fontSize: 13,
      background: 'rgba(255,255,255,0.04)',
      border: '0.5px solid rgba(255,255,255,0.08)',
      borderRadius: 8,
      padding: '14px 18px',
      color: 'rgba(245,242,240,0.80)',
      marginBottom: 14,
      overflowX: 'auto',
      whiteSpace: 'pre',
    }}>
      {children}
    </div>
  )
}

function Table({ headers, rows }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 20 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr>
            {headers.map(h => (
              <th key={h} style={{
                textAlign: 'left',
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.04)',
                borderBottom: '0.5px solid rgba(255,255,255,0.1)',
                color: 'rgba(245,242,240,0.5)',
                fontFamily: 'monospace',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: '0.5px solid rgba(255,255,255,0.05)' }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: '9px 12px',
                  color: j === 0 ? 'rgba(245,242,240,0.85)' : 'rgba(245,242,240,0.50)',
                  fontFamily: j === 0 ? 'monospace' : 'inherit',
                  fontSize: j === 0 ? 12 : 13,
                  verticalAlign: 'top',
                }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Callout({ color = '#4ade80', label, children }) {
  return (
    <div style={{
      borderLeft: `2px solid ${color}`,
      paddingLeft: 14,
      marginBottom: 18,
      background: `${color}08`,
      borderRadius: '0 6px 6px 0',
      padding: '10px 14px',
    }}>
      {label && (
        <div style={{
          fontFamily: 'monospace',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color,
          marginBottom: 6,
        }}>
          {label}
        </div>
      )}
      <div style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(245,242,240,0.65)' }}>
        {children}
      </div>
    </div>
  )
}

function Divider() {
  return <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '36px 0' }} />
}

// ─── Main screen ─────────────────────────────────────────────────────────────
export default function MethodologyScreen({ onBack }) {
  const [activeId, setActiveId] = useState('overview')
  const contentRef = useRef(null)

  // Highlight sidebar item based on scroll position
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    function onScroll() {
      const scrollTop = el.scrollTop + 48
      let current = SECTIONS[0].id
      for (const s of SECTIONS) {
        const node = document.getElementById(s.id)
        if (node && node.offsetTop <= scrollTop) current = s.id
      }
      setActiveId(current)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    const node = document.getElementById(id)
    if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      zIndex: 100,
    }}>

      {/* ── Top bar ──────────────────────────────────────────────────────── */}
      <header style={{
        flexShrink: 0,
        height: 52,
        borderBottom: '0.5px solid rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: '#0d0d0d',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={onBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'none',
              border: '0.5px solid rgba(255,255,255,0.1)',
              borderRadius: 6,
              padding: '5px 12px',
              color: 'rgba(245,242,240,0.55)',
              fontSize: 12,
              cursor: 'pointer',
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#f5f2f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(245,242,240,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            ← Back
          </button>
          <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.08)' }} />
          <span style={{ fontSize: 14, fontWeight: 600, color: '#f5f2f0', letterSpacing: '-0.01em' }}>
            DriftEngine — Methodology
          </span>
        </div>
        <span style={{
          fontFamily: 'monospace',
          fontSize: 10,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(245,242,240,0.25)',
        }}>
          Monte Carlo · GARCH(1,1) · Regime-Switching · Jump-Diffusion
        </span>
      </header>

      {/* ── Body: sidebar + content ──────────────────────────────────────── */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* Sidebar */}
        <nav style={{
          width: 220,
          flexShrink: 0,
          borderRight: '0.5px solid rgba(255,255,255,0.07)',
          overflowY: 'auto',
          padding: '20px 0',
          background: '#0d0d0d',
        }}>
          {SECTIONS.map(s => {
            const isActive = activeId === s.id
            const isSubsection = s.id !== 'overview' && s.id !== 'stack' && s.id !== 'pipeline'
              && s.id !== 'math' && s.id !== 'risk' && s.id !== 'decisions' && s.id !== 'api'
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: isActive ? 'rgba(255,255,255,0.05)' : 'none',
                  border: 'none',
                  borderLeft: isActive ? '2px solid #f5f2f0' : '2px solid transparent',
                  padding: isSubsection ? '5px 16px 5px 24px' : '7px 16px',
                  fontSize: isSubsection ? 12 : 13,
                  color: isActive
                    ? '#f5f2f0'
                    : isSubsection
                      ? 'rgba(245,242,240,0.35)'
                      : 'rgba(245,242,240,0.55)',
                  cursor: 'pointer',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'color 0.15s, background 0.15s',
                  letterSpacing: isSubsection ? '0' : '-0.01em',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'rgba(245,242,240,0.8)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = isSubsection ? 'rgba(245,242,240,0.35)' : 'rgba(245,242,240,0.55)' }}
              >
                {s.label}
              </button>
            )
          })}
        </nav>

        {/* Content */}
        <div ref={contentRef} style={{ flex: 1, overflowY: 'auto', padding: '40px 56px 80px', maxWidth: 860 }}>

          {/* ── Overview ─────────────────────────────────────────────────── */}
          <SectionTitle id="overview">Overview</SectionTitle>
          <P>
            DriftEngine is a <strong style={{ color: '#f5f2f0' }}>probabilistic stock scenario generation tool</strong> — not a
            price predictor. Given a ticker symbol and a forecast horizon, it runs 10,000 Monte Carlo
            simulations using an enhanced Geometric Brownian Motion model that combines four layers of
            real-world market structure: regime-switching, GARCH(1,1) volatility clustering, fat-tailed
            Student-t shocks, and Poisson jump-diffusion.
          </P>
          <P>
            The output is a set of probabilistic scenarios — confidence bands, terminal price distributions,
            and risk metrics — that communicate the range of plausible outcomes rather than a single
            predicted price. Every parameter driving the simulation is estimated from the stock's own
            historical data, calibrated per-regime.
          </P>
          <Callout color="#4ade80" label="Design Intent">
            Built as a quant/SWE portfolio piece demonstrating the full stack: data ingestion → statistical
            modeling → C++ simulation engine (pybind11) → React visualization. The architecture is
            deliberately transparent and rule-based, making it defensible to domain experts.
          </Callout>

          <Divider />

          {/* ── Tech Stack ───────────────────────────────────────────────── */}
          <SectionTitle id="stack">Tech Stack</SectionTitle>
          <Table
            headers={['Layer', 'Technology', 'Role']}
            rows={[
              ['Frontend', 'React + Vite', 'UI, charts, state management'],
              ['Styling', 'Tailwind CSS + shadcn/ui', 'Component system, design tokens'],
              ['Backend API', 'Python FastAPI', 'HTTP layer, request/response, CORS'],
              ['Data & Analytics', 'yfinance, pandas, numpy, arch', 'Price fetch, log returns, GARCH fitting'],
              ['Simulation Engine', 'C++ (compiled)', 'High-performance Monte Carlo loop'],
              ['Python ↔ C++', 'pybind11', 'Zero-copy bindings, no subprocess overhead'],
            ]}
          />
          <P>
            The simulation engine is written in C++ and compiled to a native Python extension module
            via pybind11 (<Code>drift_engine_sim</Code>). This gives the speed of C++ while keeping
            the orchestration layer in Python. A 10,000-path × 60-step simulation completes in roughly
            1–3 seconds depending on hardware.
          </P>

          <Divider />

          {/* ── Pipeline overview ────────────────────────────────────────── */}
          <SectionTitle id="pipeline">Data Pipeline — 8 Steps</SectionTitle>
          <P>
            Every simulation request triggers a linear pipeline. Each stage feeds the next;
            no stage is skipped. The pipeline is fully re-run per request to keep parameters
            current (no stale cache).
          </P>
          <Formula>{`Request → [1] Ingest → [2] Global Stats → [3] Indicators
        → [4] Regime Classification → [5] Pack Params
        → [6] C++ Simulation → [7] Aggregate Results → [8] JSON Response`}</Formula>

          <Divider />

          {/* ── Step 1 ───────────────────────────────────────────────────── */}
          <SectionTitle id="ingestion">① Data Ingestion</SectionTitle>
          <P>
            1,000 trading days (~4 years) of OHLCV data are fetched via <Code>yfinance</Code>.
            All price calculations use <strong style={{ color: '#f5f2f0' }}>Adjusted Close</strong> to
            correct for dividends and stock splits, ensuring the return series reflects true economic
            performance rather than mechanical price changes.
          </P>
          <SubTitle>Log Returns</SubTitle>
          <P>Log returns are used throughout — not arithmetic returns — because they are time-additive
          and better-suited for multi-step simulation:</P>
          <Formula>{`r(t) = ln( AdjClose(t) / AdjClose(t-1) )`}</Formula>
          <P>
            Output is a pandas DataFrame with columns:{' '}
            <Code>date</Code>, <Code>open</Code>, <Code>high</Code>, <Code>low</Code>,{' '}
            <Code>close</Code>, <Code>adj_close</Code>, <Code>volume</Code>, <Code>log_return</Code>.
          </P>

          <Divider />

          {/* ── Step 2 ───────────────────────────────────────────────────── */}
          <SectionTitle id="features">② Statistical Features</SectionTitle>
          <P>
            Global statistics are computed over the full 1,000-day window as sanity-check baselines.
            These are <em>not</em> used directly in simulation — regime-specific parameters take over
            in Step 4 — but they serve as fallback values if a regime has insufficient data.
          </P>
          <Table
            headers={['Statistic', 'Formula', 'Use']}
            rows={[
              ['μ_global', 'mean(log_returns)', 'Fallback drift if regime is sparse'],
              ['σ_global', 'std(log_returns)', 'Fallback vol if regime is sparse'],
              ['Skewness', 'Third standardized moment', 'Sanity check only'],
              ['Excess kurtosis', 'Fourth standardized moment − 3', 'Confirms fat tails; validates ν choice'],
            ]}
          />

          <Divider />

          {/* ── Step 3 ───────────────────────────────────────────────────── */}
          <SectionTitle id="indicators">③ Technical Indicators</SectionTitle>
          <P>
            Eight indicators are computed for every day in the 1,000-day window. These are used
            exclusively for <em>regime classification</em> — they are not fed directly into the simulation.
            All thresholds are calibrated from the stock's own historical percentile distribution,
            making the system adaptive rather than hardcoded.
          </P>
          <Table
            headers={['Indicator', 'Period', 'Formula / Detail']}
            rows={[
              ['SMA50', '50-day', 'Simple moving average of Adj Close'],
              ['SMA200', '200-day', 'Simple moving average of Adj Close'],
              ['SMA Spread', 'Derived', '(SMA50 − SMA200) / SMA200 — trend direction + strength'],
              ['MACD', '12, 26, 9', 'MACD line = EMA12 − EMA26; Signal = EMA9(MACD); Histogram = MACD − Signal'],
              ['RSI', '14-day', 'Relative Strength Index on Adj Close, 0–100 scale'],
              ['Bollinger Band Width', '20-day, 2σ', 'BBW = (Upper − Lower) / Middle — proxy for volatility regime'],
              ['ATR', '14-day', 'Average True Range: max(High−Low, |High−PrevClose|, |Low−PrevClose|)'],
              ['HVR', '10 / 60 day', 'Historical Volatility Ratio = σ_10day / σ_60day — detects vol spikes'],
              ['OBV', 'Cumulative', 'On-Balance Volume: +volume on up days, −volume on down days'],
            ]}
          />

          <Divider />

          {/* ── Step 4 ───────────────────────────────────────────────────── */}
          <SectionTitle id="regimes">④ Regime Classification</SectionTitle>
          <P>
            Each of the 1,000 historical days is classified into one of four market regimes using
            rule-based conditional logic. No machine learning is used — the rules are derived from
            well-established technical analysis conventions, making them transparent and defensible.
          </P>

          <SubTitle>Threshold Calibration</SubTitle>
          <P>
            Before classification, percentile distributions for BBW, HVR, RSI, and SMA Spread
            are computed over the full 1,000-day window. Classification thresholds are set at
            meaningful percentiles (e.g., BBW &gt; 65th percentile = "elevated volatility").
            This means the same rule logic automatically adapts to a low-vol utility stock vs.
            a high-vol tech stock.
          </P>

          <SubTitle>The Four Regimes</SubTitle>
          <Table
            headers={['ID', 'Name', 'Conditions']}
            rows={[
              ['1', 'Low-Vol Bull', 'SMA50 > SMA200 (golden cross), BBW < median, HVR < 1.0, OBV confirming uptrend'],
              ['2', 'High-Vol Bull', 'SMA50 > SMA200, BBW > median OR HVR > 1.2, RSI possibly > 65'],
              ['3', 'High-Vol Bear', 'SMA50 < SMA200 (death cross), BBW > median, HVR > 1.2, RSI < 35, OBV diverging'],
              ['4', 'Sideways / Consolidation', 'SMA spread tight, RSI 40–60, BBW ≤ median, MACD histogram near zero'],
            ]}
          />

          <SubTitle>Per-Regime Parameter Estimation</SubTitle>
          <P>
            For each regime, only the days classified into that regime are used to estimate parameters.
            This means the simulation engine gets regime-specific drift, volatility, and tail behavior
            rather than pooling across all market conditions.
          </P>
          <Table
            headers={['Parameter', 'Method', 'Notes']}
            rows={[
              ['μ_regime', 'mean(log_returns in regime)', 'Daily drift under this regime'],
              ['σ_regime', 'std(log_returns in regime)', 'Baseline vol; superseded by GARCH within simulation'],
              ['ω, α, β', 'GARCH(1,1) via Python arch library MLE', 'Captures volatility clustering per regime'],
              ['ν (degrees of freedom)', 'Student-t MLE fit', 'Captures fat tails; typical ν ≈ 4–6 for equities'],
              ['λ (jump intensity)', 'Outlier return frequency beyond GARCH predictions', 'Expected jumps per day'],
              ['μ_J (mean jump size)', 'Mean of outlier returns', 'Average direction of jumps'],
              ['σ_J (jump size stdev)', 'Stdev of outlier returns', 'Spread of jump magnitudes'],
              ['σ₀ (initial variance)', 'Last GARCH variance estimate from historical data', 'Seeds the simulation warm'],
            ]}
          />

          <SubTitle>Transition Probability Matrix</SubTitle>
          <P>
            Day-over-day regime transitions in the historical data are counted and normalized into a
            4×4 Markov transition matrix. Each entry P(i→j) is the empirical probability of moving
            from regime i to regime j on the next day.
          </P>
          <Formula>{`P = [  P(1→1)  P(1→2)  P(1→3)  P(1→4)  ]
    [  P(2→1)  P(2→2)  P(2→3)  P(2→4)  ]
    [  P(3→1)  P(3→2)  P(3→3)  P(3→4)  ]
    [  P(4→1)  P(4→2)  P(4→3)  P(4→4)  ]

Each row sums to 1.0.
Typical diagonal (persistence): P(1→1) ≈ 0.90–0.95`}</Formula>
          <P>
            The current day's regime (detected from the most recent indicator values) sets the
            starting regime for all simulation paths.
          </P>

          <Divider />

          {/* ── Step 5 ───────────────────────────────────────────────────── */}
          <SectionTitle id="params">⑤ Parameter Building</SectionTitle>
          <P>
            All estimated parameters are packed into a <Code>SimulationParams</Code> struct and
            passed to the C++ engine via pybind11. The struct is the complete specification for
            a simulation run — nothing is re-computed inside C++.
          </P>
          <Formula>{`SimulationParams {
  S0              float    // current stock price
  current_regime  int      // starting regime (0–3)
  transition_matrix float[4][4]
  regimes[4] {
    mu            float    // daily drift
    omega         float    // GARCH ω  (long-run variance component)
    alpha         float    // GARCH α  (shock persistence)
    beta          float    // GARCH β  (variance persistence)
    nu            float    // Student-t degrees of freedom
    lambda_j      float    // Poisson jump intensity (jumps/day)
    mu_j          float    // mean jump log-return
    sigma_j       float    // jump size stdev
    sigma0        float    // initial GARCH conditional variance
  }
  num_paths       int      // 10,000
  num_steps       int      // forecast horizon (trading days)
  dt              float    // 1/252
}`}</Formula>

          <Divider />

          {/* ── Step 6 ───────────────────────────────────────────────────── */}
          <SectionTitle id="simulation">⑥ Monte Carlo Simulation Engine (C++)</SectionTitle>
          <P>
            The simulation loop is implemented in C++ for performance. At 10,000 paths × 60 steps,
            it executes 600,000 price updates per request. The per-step logic combines four components:
          </P>

          <SubTitle>Step 6a — Regime Transition</SubTitle>
          <P>At each time step, a uniform draw determines whether the regime switches:</P>
          <Formula>{`u ~ Uniform(0, 1)
new_regime = sample from transition_matrix[current_regime]
             using cumulative probability lookup on u`}</Formula>

          <SubTitle>Step 6b — GARCH(1,1) Variance Update</SubTitle>
          <P>
            Volatility is not constant — it clusters (high-vol periods follow high-vol periods).
            GARCH(1,1) models this by making variance a function of the previous shock and previous variance:
          </P>
          <Formula>{`σ²(t) = ω  +  α · ε²(t-1)  +  β · σ²(t-1)

  ω  = long-run variance weight  (> 0)
  α  = ARCH term — how much last shock feeds into vol  (≥ 0)
  β  = GARCH term — vol persistence  (≥ 0)
  α + β < 1 ensures stationarity (covariance-stationary process)

Initialized with σ²(0) = sigma0 from historical GARCH fit`}</Formula>

          <SubTitle>Step 6c — Fat-Tailed Shock (Student-t)</SubTitle>
          <P>
            Normal shocks underestimate tail events. A Student-t distribution with ν ≈ 4–6 degrees
            of freedom produces fatter tails, consistent with observed equity return distributions:
          </P>
          <Formula>{`z ~ Student-t(ν)

// Scale to unit variance (t-distribution has variance ν/(ν-2)):
ε(t) = σ(t) · z · √( (ν - 2) / ν )

// This ensures E[ε²] = σ²(t) regardless of ν`}</Formula>

          <SubTitle>Step 6d — Poisson Jump Component</SubTitle>
          <P>
            Sudden large moves (earnings surprises, macro events) are modeled as discrete jumps
            arriving with Poisson intensity λ per day:
          </P>
          <Formula>{`if Uniform(0,1) < λ · dt:
    J ~ Normal(μ_J, σ_J)    // log-return jump
else:
    J = 0

// λ typically 0.01–0.05 (1–5 expected jumps per year)`}</Formula>

          <SubTitle>Step 6e — Price Update</SubTitle>
          <P>Full GBM step combining all components under the risk-neutral correction:</P>
          <Formula>{`log_return = (μ - 0.5 · σ²(t)) · dt  +  ε(t) · √dt  +  J

S(t) = S(t-1) · exp( log_return )

  μ - 0.5·σ²  = Itô correction (ensures E[S(t)] = S(0)·e^{μt})
  ε(t)·√dt    = diffusion component (stochastic vol from GARCH+t)
  J            = discrete jump (0 most steps)`}</Formula>

          <SubTitle>C++ Outputs (computed in-loop)</SubTitle>
          <P>
            To avoid re-iterating 10,000 paths in Python, the following are computed inside the
            C++ loop before returning:
          </P>
          <Table
            headers={['Output', 'Description']}
            rows={[
              ['Per-step percentiles', '5th, 25th, 50th, 75th, 95th at every time step — used for fan chart'],
              ['Path-wise max drawdown', 'Peak-to-trough for each path — used for drawdown distribution'],
              ['Terminal price array', 'Final price of each path — used for terminal distribution'],
            ]}
          />

          <Divider />

          {/* ── Step 7 ───────────────────────────────────────────────────── */}
          <SectionTitle id="aggregation">⑦ Results Aggregation</SectionTitle>
          <P>
            Python receives the C++ output and post-processes it into the full JSON response. No
            simulation re-runs happen here — this is pure statistical post-processing.
          </P>
          <Table
            headers={['Metric', 'Computation']}
            rows={[
              ['Fan chart bands', '50% CI (P25–P75) and 90% CI (P5–P95) at each time step'],
              ['Terminal distribution', 'Histogram + KDE over final-day prices across all 10,000 paths'],
              ['VaR 95%', '5th percentile of terminal return distribution'],
              ['VaR 99%', '1st percentile of terminal return distribution'],
              ['CVaR (Expected Shortfall)', 'Mean of all returns below the VaR 95% threshold'],
              ['Prob. of positive return', 'Fraction of paths with terminal price > S0'],
              ['Max drawdown distribution', 'Median + percentiles of per-path peak-to-trough drawdown'],
            ]}
          />

          <Divider />

          {/* ── Step 8 ───────────────────────────────────────────────────── */}
          <SectionTitle id="frontend">⑧ Frontend Display</SectionTitle>
          <P>The React frontend renders four main panels, each communicating a different dimension of the simulation output:</P>
          <Table
            headers={['Panel', 'Component', 'Content']}
            rows={[
              ['Fan Chart', 'FanChart.jsx', 'Shaded 50% and 90% CI bands + median path. Current price marked. Regime path shown.'],
              ['Terminal Distribution', 'TerminalDist.jsx', 'Histogram/density of final-day prices across all paths. Percentile markers.'],
              ['Risk Dashboard', 'RiskDashboard.jsx', 'VaR 95%/99%, CVaR, prob. of gain/loss, max drawdown median.'],
              ['Regime Panel', 'RegimePanel.jsx', 'Current regime, indicator values, transition probability matrix heatmap.'],
            ]}
          />
          <P>
            All data is fetched fresh per simulation run. A 10-second loading screen runs while
            the backend pipeline and C++ engine complete.
          </P>

          <Divider />

          {/* ── Math ─────────────────────────────────────────────────────── */}
          <SectionTitle id="math">Mathematical Models — Reference</SectionTitle>

          <SubTitle>Geometric Brownian Motion (base model)</SubTitle>
          <Formula>{`dS = μ·S·dt  +  σ·S·dW

Discrete Euler-Maruyama approximation:
  S(t+dt) = S(t) · exp( (μ - ½σ²)·dt  +  σ·√dt·Z )
  Z ~ N(0,1)`}</Formula>

          <SubTitle>Full Enhanced GBM (DriftEngine model)</SubTitle>
          <Formula>{`S(t+dt) = S(t) · exp( (μ_r - ½σ²_t)·dt  +  ε_t·√dt  +  J_t )

where:
  μ_r    = regime-specific drift
  σ²_t   = GARCH(1,1) conditional variance
  ε_t    = σ_t · z_t · √((ν-2)/ν),   z_t ~ t(ν)
  J_t    = Bernoulli(λ·dt) · N(μ_J, σ_J)
  regime = Markov chain with 4×4 transition matrix P`}</Formula>

          <SubTitle>GARCH(1,1) — Bollerslev (1986)</SubTitle>
          <Formula>{`σ²_t = ω + α·ε²_{t-1} + β·σ²_{t-1}

Long-run variance:  σ²_∞ = ω / (1 - α - β)
Half-life of shock: h = -ln(2) / ln(α + β)`}</Formula>

          <SubTitle>Student-t Distribution</SubTitle>
          <Formula>{`Z ~ t(ν)    (ν degrees of freedom)

PDF: f(z) ∝ (1 + z²/ν)^{-(ν+1)/2}

Variance: ν/(ν-2)   for ν > 2
Kurtosis: 6/(ν-4)   for ν > 4

At ν = 5:  variance = 5/3 ≈ 1.67, kurtosis = 6
           (much fatter tails than Normal kurtosis = 0)`}</Formula>

          <SubTitle>Merton Jump-Diffusion</SubTitle>
          <Formula>{`Jump arrival: N_t ~ Poisson(λ·t)
Jump size:   log(1 + Y) ~ N(μ_J, σ²_J)

Expected annual jumps: λ · 252
Jump contribution to annual variance: λ · (σ²_J + μ²_J)`}</Formula>

          <Divider />

          {/* ── Risk ─────────────────────────────────────────────────────── */}
          <SectionTitle id="risk">Risk Metrics</SectionTitle>

          <SubTitle>Value at Risk (VaR)</SubTitle>
          <P>
            VaR at confidence level α is the loss not exceeded with probability α. Here it is
            computed empirically from the simulation distribution — no parametric assumption required:
          </P>
          <Formula>{`VaR_95 = 5th percentile of { (S_T - S_0) / S_0 }  across all 10,000 paths
VaR_99 = 1st percentile

Interpretation: "95% of simulation paths lose less than VaR_95 by horizon T"`}</Formula>

          <SubTitle>Conditional VaR / Expected Shortfall (CVaR)</SubTitle>
          <P>
            CVaR is the expected loss given that the loss exceeds VaR. It captures tail risk
            that VaR ignores:
          </P>
          <Formula>{`CVaR_95 = E[ return | return < VaR_95 ]
         = mean of all paths in the worst 5%

CVaR is a coherent risk measure (sub-additive); VaR is not.`}</Formula>

          <SubTitle>Maximum Drawdown</SubTitle>
          <Formula>{`MDD(path) = max over t in [0,T] of: (peak(0..t) - S(t)) / peak(0..t)

Reported as the median MDD across all 10,000 paths.
Distribution of MDD is also available.`}</Formula>

          <Divider />

          {/* ── Decisions ────────────────────────────────────────────────── */}
          <SectionTitle id="decisions">Design Decisions</SectionTitle>

          <SubTitle>Why rule-based regimes, not ML clustering?</SubTitle>
          <P>
            Rule-based regimes are interpretable and defensible. A recruiter or risk manager can
            read the regime conditions and immediately understand what "High-Vol Bear" means.
            K-means or HMM clustering would produce regimes that are harder to explain and prone to
            overfitting on short histories. Adaptive percentile thresholds give per-stock sensitivity
            without black-box behavior.
          </P>

          <SubTitle>Why GARCH over Heston stochastic volatility?</SubTitle>
          <P>
            GARCH(1,1) captures the same core intuition as Heston (volatility clustering, mean
            reversion) with significantly less complexity — it can be fit in milliseconds using the
            Python <Code>arch</Code> library with no numerical integration. For 30–90 day horizons,
            the empirical performance difference is negligible.
          </P>

          <SubTitle>Why Student-t and not Normal shocks?</SubTitle>
          <P>
            Equity return distributions have excess kurtosis of 4–10 in practice. Normal shocks
            severely underestimate the probability of tail events. A Student-t with ν ≈ 4–6
            (estimated by MLE per regime) captures this empirically and is trivially implementable.
          </P>

          <SubTitle>Why 1,000 trading days of history?</SubTitle>
          <P>
            1,000 days (~4 years) provides enough regime diversity to populate all four regimes with
            statistically meaningful samples. Shorter windows risk sparse regimes; longer windows
            risk parameter non-stationarity (a company from 8 years ago may behave differently today).
          </P>

          <SubTitle>Why 10,000 simulation paths?</SubTitle>
          <P>
            10,000 paths provides stable percentile estimates. The standard error of the 5th percentile
            with N=10,000 is roughly <Code>√(0.05·0.95/10000) ≈ 0.22%</Code>, which is negligible
            for visualization and risk metrics. Fewer paths produce noticeably noisier fan charts.
          </P>

          <SubTitle>What is NOT implemented and why</SubTitle>
          <Table
            headers={['Excluded', 'Reason']}
            rows={[
              ['Mean reversion (Ornstein-Uhlenbeck)', 'Not appropriate for stocks over 30–90 day horizons; relevant for interest rates'],
              ['Heston stochastic volatility', 'GARCH(1,1) captures the same intuition with far less complexity'],
              ['ML regime classification', 'Rule-based is more interpretable and defensible; avoids overfitting'],
              ['Ichimoku / Elliott Wave / Fibonacci', 'No statistical grounding; not used by serious quant practitioners'],
              ['Options Greeks / vol surface', 'Out of scope; requires market-implied vol data'],
              ['Multi-asset correlation', 'Single-asset tool; correlation structure is a separate problem'],
            ]}
          />

          <Divider />

          {/* ── API ──────────────────────────────────────────────────────── */}
          <SectionTitle id="api">API Contract</SectionTitle>
          <P>
            The backend exposes a single endpoint. All simulation logic is server-side;
            the frontend is a pure display layer.
          </P>

          <SubTitle>POST /simulate</SubTitle>
          <P>Request body:</P>
          <Formula>{`{
  "ticker":       "AAPL",     // valid Yahoo Finance ticker
  "horizon_days": 60          // forecast horizon in trading days
}`}</Formula>
          <P>Response body:</P>
          <Formula>{`{
  "ticker":         "AAPL",
  "current_price":  185.50,
  "horizon_days":   60,

  "current_regime": {
    "id":          1,
    "name":        "Low-Vol Bull",
    "description": "..."
  },

  "fan_chart": {
    "days": [0, 1, ..., 60],
    "p5":   [...],            // 5th percentile path
    "p25":  [...],            // 25th percentile path
    "p50":  [...],            // median path
    "p75":  [...],            // 75th percentile path
    "p95":  [...]             // 95th percentile path
  },

  "terminal_distribution": {
    "prices":        [...],   // histogram bin centers
    "probabilities": [...]    // histogram bin heights
  },

  "risk_metrics": {
    "var_95":              -0.12,
    "var_99":              -0.18,
    "cvar_95":             -0.15,
    "prob_positive":        0.68,
    "max_drawdown_median": -0.08
  },

  "transition_matrix": [[...], [...], [...], [...]],
  "regime_stats":       { ... }
}`}</Formula>

          <Callout color="#f87171" label="Disclaimer">
            DriftEngine is a probabilistic scenario tool built for educational and portfolio demonstration
            purposes. It does not constitute financial advice. Past performance is not indicative of
            future results. No simulation model can reliably predict future stock prices.
          </Callout>

        </div>
      </div>
    </div>
  )
}
