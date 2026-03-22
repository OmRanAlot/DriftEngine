import React, { useEffect, useRef, useState } from 'react'

// ─── Quotes ───────────────────────────────────────────────────────────────────
// Add, remove, or edit entries here. Each entry needs { q, a }.
// to add a an apsotrophe(') use \' to add it
const QUOTES = [
  {
    q: '"Nobody knows if a stock is going up, down, sideways, or in circles"',
    a: '— Mark Hanna',
  },
  {
    q: '"Flipping a coin..."',
    a: '— the simulation',
  },
  {
    q: '"Past performance is not indicative of future results. Neither is this simulation. I\'m doing my best!"',
    a: '— the engine',
  },
  {
    q:'"If you know the market and know yourself, you need not fear the result of a thousand simulations."',
    a:'"— Sun Tzu, The Art of Investing"'
  },
  {
    q:'"Predict the future, you cannot."',
    a:'"— Yoda"'
  },{
    q:'"I\'m ballin"',
    a:'"— Scrooge McDuck"'
  },
]

// ─── Ticker tape ──────────────────────────────────────────────────────────────
const TAPE = [
  { label: 'SIMP +4.2%',   up: true  },
  { label: 'CHOP -1.8%',   up: false },
  { label: 'SPY +0.6%',    up: true  },
  { label: 'GBM +inf%',    up: true  },
  { label: 'LMAO +32.1%',  up: true  },
  { label: 'BRO -9.4%',    up: false },
  { label: 'LOL +0.0%',    up: true  },
  { label: 'DAMN +2.7%',   up: true  },
  { label: 'O_O +11.1%',   up: true  },
  { label: 'OKIE -0.3%',   up: false },
  { label: 'WHAT?! +420%', up: true  },
  { label: 'HUH?! +99.9%', up: true  },
]

const DURATION_MS = 10_000

// ─── Component ────────────────────────────────────────────────────────────────
export default function SimulationLoader({ numPaths = 10_000, ticker = '' }) {
  const [progress, setProgress]   = useState(0)
  const [quoteIdx, setQuoteIdx]   = useState(0)
  const [quoteFade, setQuoteFade] = useState(true)
  const startRef = useRef(null)
  const rafRef   = useRef(null)

  // Smooth 10-second ramp via rAF
  useEffect(() => {
    startRef.current = performance.now()
    function tick(now) {
      const pct = Math.min((now - startRef.current) / DURATION_MS * 100, 100)
      setProgress(pct)
      if (pct < 100) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  // Quote rotation every ~3.3 s
  useEffect(() => {
    const id = setInterval(() => {
      setQuoteFade(false)
      setTimeout(() => { setQuoteIdx(i => (i + 1) % QUOTES.length); setQuoteFade(true) }, 400)
    }, 3_300)
    return () => clearInterval(id)
  }, [])

  const simsDone = Math.round((progress / 100) * numPaths)
  const quote    = QUOTES[quoteIdx]

  return (
    <>
      <style>{`
        @keyframes de-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .de-loader-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
      `}</style>

      <div className="de-loader-root">

        {/* ── Top ticker tape ────────────────────────────────────────────── */}
        <div style={{
          flexShrink: 0,
          height: 36,
          borderBottom: '0.5px solid rgba(255,255,255,0.07)',
          background: '#0d0d0d',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            gap: '3rem',
            whiteSpace: 'nowrap',
            fontFamily: 'monospace',
            fontSize: 12,
            animation: 'de-ticker 20s linear infinite',
          }}>
            {[...TAPE, ...TAPE].map((t, i) => (
              <span key={i} style={{ color: t.up ? '#4ade80' : '#f87171' }}>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Main content: fills remaining height ───────────────────────── */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          padding: '2rem',
        }}>

          {/* Ticker + path count */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'monospace',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(245,242,240,0.25)',
              marginBottom: 10,
            }}>
              Running simulation
            </div>
            <div style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#f5f2f0',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}>
              {ticker && (
                <span style={{ color: 'rgba(245,242,240,0.45)', marginRight: 8 }}>{ticker} ·</span>
              )}
              {numPaths.toLocaleString()} paths
            </div>
          </div>

          {/* Quote */}
          <div style={{
            maxWidth: 560,
            textAlign: 'center',
            minHeight: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}>
            <p style={{
              fontSize: 20,
              fontStyle: 'italic',
              color: '#f5f2f0',
              lineHeight: 1.55,
              transition: 'opacity 0.4s ease',
              opacity: quoteFade ? 1 : 0,
              margin: 0,
            }}>
              {quote.q}
            </p>
            <p style={{
              fontSize: 13,
              color: 'rgba(245,242,240,0.35)',
              letterSpacing: '0.05em',
              transition: 'opacity 0.4s ease',
              opacity: quoteFade ? 1 : 0,
              margin: 0,
            }}>
              {quote.a}
            </p>
          </div>

          {/* Progress block */}
          <div style={{ width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              fontSize: 12,
              color: 'rgba(245,242,240,0.45)',
            }}>
              <span>running simulations</span>
              <span>{Math.round(progress)}%</span>
            </div>

            {/* Track */}
            <div style={{
              height: 3,
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 2,
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${progress}%`,
                background: '#f5f2f0',
                borderRadius: 2,
                transition: 'width 0.08s linear',
              }} />
            </div>

            <div style={{
              textAlign: 'center',
              fontFamily: 'monospace',
              fontSize: 12,
              color: 'rgba(245,242,240,0.25)',
            }}>
              {simsDone.toLocaleString()} / {numPaths.toLocaleString()} paths
            </div>
          </div>
        </div>

        {/* ── Bottom disclaimer ──────────────────────────────────────────── */}
        <div style={{
          flexShrink: 0,
          borderTop: '0.5px solid rgba(255,255,255,0.07)',
          padding: '12px 2rem',
          textAlign: 'center',
          fontFamily: 'monospace',
          fontSize: 11,
          letterSpacing: '0.1em',
          color: 'rgba(245,242,240,0.18)',
          textTransform: 'uppercase',
        }}>
          Probabilistic scenario tool · Not financial advice · Past performance is not indicative of future results
        </div>

      </div>
    </>
  )
}
