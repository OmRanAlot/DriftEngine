// FanChartCanvas — canvas-based animated fan chart with axes + regime strip.
//
// Props:
//   data:             { days, p5, p25, p50, p75, p95 }
//   paths:            number[][]        — all simulated paths
//   currentPrice:     number
//   ticker:           string
//   horizonDays:      number
//   numPaths:         number
//   regime:           { id, name }
//   transitionMatrix: number[][]        — 4×4, for regime strip

import { useEffect, useRef, useCallback, useState } from 'react'

// ── Constants ────────────────────────────────────────────────────────────────
const REGIME_COLORS = {
  1: { text: '#4ade80', bg: 'rgba(74,222,128,0.12)',  border: 'rgba(74,222,128,0.35)',  strip: '#4ade80' },
  2: { text: '#facc15', bg: 'rgba(250,204,21,0.12)',  border: 'rgba(250,204,21,0.35)',  strip: '#fb923c' },
  3: { text: '#f87171', bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.35)', strip: '#f87171' },
  4: { text: '#60a5fa', bg: 'rgba(96,165,250,0.12)',  border: 'rgba(96,165,250,0.35)',  strip: '#94a3b8' },
}

const REGIME_NAMES = ['Low-Vol Bull', 'High-Vol Bull', 'High-Vol Bear', 'Sideways']

// Margins around the chart area (in CSS px)
const M = { top: 10, right: 16, bottom: 50, left: 62 }

// ── Helpers ──────────────────────────────────────────────────────────────────
function fmtDollar(v) {
  if (v == null || !isFinite(v)) return ''
  return `$${Number(v).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
}

function computeYBounds(paths, data, S0) {
  let yMin = S0, yMax = S0
  if (data?.p5)  for (const v of data.p5)  { if (v < yMin) yMin = v }
  if (data?.p95) for (const v of data.p95) { if (v > yMax) yMax = v }
  if (paths?.length) {
    for (const path of paths)
      for (const v of path) {
        if (v < yMin) yMin = v
        if (v > yMax) yMax = v
      }
  }
  const pad = (yMax - yMin) * 0.06 || 1
  return { yMin: yMin - pad, yMax: yMax + pad }
}

// Walk transition matrix to get dominant regime index at each day
function computeRegimePath(startId, matrix, numDays) {
  let p = [0, 0, 0, 0]
  p[startId] = 1
  const path = [startId]
  for (let d = 1; d <= numDays; d++) {
    const next = [0, 0, 0, 0]
    for (let i = 0; i < 4; i++)
      for (let j = 0; j < 4; j++)
        next[j] += p[i] * (matrix[i]?.[j] ?? 0)
    p = next
    path.push(p.indexOf(Math.max(...p)))
  }
  return path
}

// Pre-render all paths + compute max/min per step
function buildOffscreen(paths, data, S0, W, H, dpr) {
  if (!paths?.length || !W || !H) return null

  const { yMin, yMax } = computeYBounds(paths, data, S0)
  const total = paths[0].length - 1

  const cW = W - M.left - M.right
  const cH = H - M.top  - M.bottom
  const toX = t => M.left + (t / total) * cW
  const toY = v => M.top  + cH - ((v - yMin) / (yMax - yMin)) * cH

  const oc = document.createElement('canvas')
  oc.width  = W * dpr
  oc.height = H * dpr
  const ctx = oc.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  const maxLine = new Float64Array(total + 1).fill(-Infinity)
  const minLine = new Float64Array(total + 1).fill(Infinity)

  for (const path of paths) {
    const finalVal = path[total]
    let color
    if      (finalVal >= S0 * 1.05) color = 'rgba(34,197,94,0.06)'
    else if (finalVal <= S0 * 0.95) color = 'rgba(220,60,60,0.06)'
    else                            color = 'rgba(200,200,200,0.035)'

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 0.7
    for (let t = 0; t <= total; t++) {
      const x = toX(t), y = toY(path[t])
      t === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      if (path[t] > maxLine[t]) maxLine[t] = path[t]
      if (path[t] < minLine[t]) minLine[t] = path[t]
    }
    ctx.stroke()
  }

  return { canvas: oc, yMin, yMax, maxLine, minLine }
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function FanChartCanvas({
  data, paths, currentPrice, ticker, horizonDays,
  numPaths = 10000, regime, transitionMatrix,
}) {
  const canvasRef     = useRef(null)
  const offscreenRef  = useRef(null)
  const stateRef      = useRef({ frame: 0, rafId: null, timeoutId: null })
  const regimeSegsRef = useRef([])   // [{ x1, x2, regimeIdx, stripY, stripH }]
  const [tooltip, setTooltip] = useState(null)  // { x, y, name, color } | null

  const drawFrame = useCallback((canvas, frame) => {
    if (!canvas || !data?.days?.length) return
    const off = offscreenRef.current

    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const W = canvas.width  / dpr
    const H = canvas.height / dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const total   = data.days.length - 1
    const visible = Math.min(frame, total)

    const { yMin, yMax } = off ?? computeYBounds(paths, data, currentPrice)
    const cW = W - M.left - M.right
    const cH = H - M.top  - M.bottom
    const toX = t => M.left + (t / total) * cW
    const toY = v => M.top  + cH - ((v - yMin) / (yMax - yMin)) * cH
    const clipX = M.left + (visible / total) * cW

    // ── Background ────────────────────────────────────────────────────────
    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, W, H)

    // ── Y-axis labels + horizontal grid lines ────────────────────────────
    const Y_TICKS = 5
    ctx.font = `10px "SF Mono", "Fira Code", monospace`
    ctx.textAlign = 'right'
    ctx.textBaseline = 'middle'
    for (let i = 0; i <= Y_TICKS; i++) {
      const frac  = i / Y_TICKS
      const price = yMin + frac * (yMax - yMin)
      const y     = M.top + cH - frac * cH

      // Grid line
      ctx.save()
      ctx.setLineDash([2, 4])
      ctx.strokeStyle = 'rgba(255,255,255,0.04)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(M.left, y)
      ctx.lineTo(W - M.right, y)
      ctx.stroke()
      ctx.restore()

      // Label
      ctx.fillStyle = 'rgba(255,255,255,0.25)'
      ctx.fillText(fmtDollar(price), M.left - 6, y)
    }

    // ── Axis border lines ─────────────────────────────────────────────────
    ctx.save()
    ctx.strokeStyle = 'rgba(255,255,255,0.06)'
    ctx.lineWidth = 1
    // Left
    ctx.beginPath()
    ctx.moveTo(M.left, M.top)
    ctx.lineTo(M.left, M.top + cH)
    ctx.stroke()
    // Bottom
    ctx.beginPath()
    ctx.moveTo(M.left, M.top + cH)
    ctx.lineTo(W - M.right, M.top + cH)
    ctx.stroke()
    ctx.restore()

    // ── Entry price baseline ──────────────────────────────────────────────
    if (currentPrice != null) {
      ctx.save()
      ctx.setLineDash([4, 6])
      ctx.strokeStyle = 'rgba(255,255,255,0.12)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(M.left, toY(currentPrice))
      ctx.lineTo(W - M.right, toY(currentPrice))
      ctx.stroke()
      ctx.restore()
    }

    // ── All paths (offscreen, clipped left-to-right) ──────────────────────
    if (off?.canvas) {
      ctx.save()
      ctx.beginPath()
      ctx.rect(M.left, M.top, clipX - M.left, cH)
      ctx.clip()
      ctx.drawImage(off.canvas, 0, 0, off.canvas.width, off.canvas.height, 0, 0, W, H)
      ctx.restore()
    }

    if (visible < 1) {
      drawAxesBottom()
      return
    }

    // ── Helper: draw a series line up to `visible` ────────────────────────
    const drawLine = (series, color, width, dash = []) => {
      ctx.save()
      ctx.beginPath()
      ctx.setLineDash(dash)
      ctx.strokeStyle = color
      ctx.lineWidth = width
      for (let t = 0; t <= visible; t++) {
        t === 0 ? ctx.moveTo(toX(t), toY(series[t])) : ctx.lineTo(toX(t), toY(series[t]))
      }
      ctx.stroke()
      ctx.restore()
    }

    // ── Glow dotted line (max/min) ────────────────────────────────────────
    const drawGlowLine = (series, color, glowColor) => {
      ctx.save()
      ctx.setLineDash([3, 5])
      ctx.shadowColor = glowColor
      ctx.shadowBlur  = 8
      ctx.strokeStyle = color
      ctx.lineWidth   = 2.5
      ctx.beginPath()
      for (let t = 0; t <= visible; t++) {
        t === 0 ? ctx.moveTo(toX(t), toY(series[t])) : ctx.lineTo(toX(t), toY(series[t]))
      }
      ctx.stroke()
      ctx.shadowBlur = 0
      ctx.lineWidth  = 1.5
      ctx.beginPath()
      for (let t = 0; t <= visible; t++) {
        t === 0 ? ctx.moveTo(toX(t), toY(series[t])) : ctx.lineTo(toX(t), toY(series[t]))
      }
      ctx.stroke()
      ctx.restore()
    }

    // ── Gradient fills: median → max/min ─────────────────────────────────
    if (data.p50 && off?.maxLine && off?.minLine) {
      let sumMed = 0
      for (let t = 0; t <= visible; t++) sumMed += toY(data.p50[t])
      const avgMedY = sumMed / (visible + 1)

      const gradUp = ctx.createLinearGradient(0, avgMedY, 0, M.top)
      gradUp.addColorStop(0, 'rgba(74,222,128,0.18)')
      gradUp.addColorStop(1, 'rgba(74,222,128,0)')
      ctx.save()
      ctx.beginPath()
      for (let t = 0; t <= visible; t++) {
        t === 0 ? ctx.moveTo(toX(t), toY(data.p50[t])) : ctx.lineTo(toX(t), toY(data.p50[t]))
      }
      for (let t = visible; t >= 0; t--) ctx.lineTo(toX(t), toY(off.maxLine[t]))
      ctx.closePath()
      ctx.fillStyle = gradUp
      ctx.fill()
      ctx.restore()

      const gradDown = ctx.createLinearGradient(0, avgMedY, 0, M.top + cH)
      gradDown.addColorStop(0, 'rgba(248,113,113,0.18)')
      gradDown.addColorStop(1, 'rgba(248,113,113,0)')
      ctx.save()
      ctx.beginPath()
      for (let t = 0; t <= visible; t++) {
        t === 0 ? ctx.moveTo(toX(t), toY(data.p50[t])) : ctx.lineTo(toX(t), toY(data.p50[t]))
      }
      for (let t = visible; t >= 0; t--) ctx.lineTo(toX(t), toY(off.minLine[t]))
      ctx.closePath()
      ctx.fillStyle = gradDown
      ctx.fill()
      ctx.restore()
    }

    if (off?.maxLine) drawGlowLine(off.maxLine, '#4ade80', 'rgba(74,222,128,0.6)')
    if (off?.minLine) drawGlowLine(off.minLine, '#f87171', 'rgba(248,113,113,0.6)')

    // ── Median ────────────────────────────────────────────────────────────
    if (data.p50) drawLine(data.p50, 'rgba(255,255,255,0.80)', 2)

    // ── Entry dot ─────────────────────────────────────────────────────────
    if (currentPrice != null) {
      ctx.beginPath()
      ctx.arc(toX(0), toY(currentPrice), 3.5, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.6)'
      ctx.fill()
    }

    // ── Terminal median dot ───────────────────────────────────────────────
    if (visible === total && data.p50) {
      ctx.beginPath()
      ctx.arc(toX(total), toY(data.p50[total]), 4, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.fill()
    }

    drawAxesBottom()

    // ── X-axis + regime strip (drawn last, always on top) ─────────────────
    function drawAxesBottom() {
      const STRIP_H  = 8
      const LABEL_Y  = M.top + cH + STRIP_H + 16
      const STRIP_Y  = M.top + cH + 4

      // Regime strip
      if (transitionMatrix && regime) {
        const regimeId   = regime.id - 1
        const regimePath = computeRegimePath(regimeId, transitionMatrix, total)

        // Collapse into segments
        const segs = []
        let segStart = 0
        for (let d = 1; d <= total; d++) {
          if (regimePath[d] !== regimePath[segStart]) {
            segs.push({ s: segStart, e: d, r: regimePath[segStart] })
            segStart = d
          }
        }
        segs.push({ s: segStart, e: total, r: regimePath[segStart] })

        // Store hit areas for hover detection (CSS px coordinates)
        regimeSegsRef.current = segs.map(({ s, e, r }) => ({
          x1: toX(s), x2: toX(e),
          stripY: STRIP_Y, stripH: STRIP_H,
          regimeIdx: r,
        }))

        for (const { s, e, r } of segs) {
          const rc = REGIME_COLORS[r + 1]
          ctx.fillStyle = rc ? rc.strip + '99' : 'rgba(148,163,184,0.6)'
          ctx.beginPath()
          ctx.roundRect(toX(s), STRIP_Y, toX(e) - toX(s), STRIP_H, 2)
          ctx.fill()
        }
      }

      // X-axis tick labels
      const X_TICKS = [0, 0.25, 0.5, 0.75, 1]
      ctx.font = '10px "SF Mono", "Fira Code", monospace'
      ctx.fillStyle = 'rgba(255,255,255,0.25)'
      for (const frac of X_TICKS) {
        const day = Math.round(frac * total)
        const x   = toX(day)
        ctx.textAlign = frac === 0 ? 'left' : frac === 1 ? 'right' : 'center'
        ctx.textBaseline = 'top'
        const label = day === 0 ? 'TODAY' : `T+${day}`
        ctx.fillText(label, x, LABEL_Y)

        // Tick mark
        ctx.save()
        ctx.strokeStyle = 'rgba(255,255,255,0.08)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x, M.top + cH)
        ctx.lineTo(x, M.top + cH + 3)
        ctx.stroke()
        ctx.restore()
      }
    }
  }, [data, paths, currentPrice, transitionMatrix, regime])

  const startAnimation = useCallback(() => {
    const s = stateRef.current
    if (s.rafId)     cancelAnimationFrame(s.rafId)
    if (s.timeoutId) clearTimeout(s.timeoutId)
    s.frame = 0

    const canvas = canvasRef.current
    if (!canvas || !data?.days) return
    const total = data.days.length - 1

    const tick = () => {
      if (!canvasRef.current) return
      s.frame++
      drawFrame(canvas, s.frame)
      if (s.frame < total) {
        const progress = s.frame / total
        const delay = Math.max(2, Math.floor(40 * (1 - progress * 0.92)))
        s.timeoutId = setTimeout(() => { s.rafId = requestAnimationFrame(tick) }, delay)
      }
    }
    s.rafId = requestAnimationFrame(tick)
  }, [data, drawFrame])

  useEffect(() => {
    if (!data || !paths) return
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr  = window.devicePixelRatio || 1
    const rect = canvas.parentElement.getBoundingClientRect()
    canvas.width  = rect.width  * dpr
    canvas.height = rect.height * dpr
    offscreenRef.current = buildOffscreen(paths, data, currentPrice, rect.width, rect.height, dpr)
    startAnimation()
    return () => {
      if (stateRef.current.rafId)     cancelAnimationFrame(stateRef.current.rafId)
      if (stateRef.current.timeoutId) clearTimeout(stateRef.current.timeoutId)
    }
  }, [data, paths, currentPrice, startAnimation])

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas || !data) return
      const dpr  = window.devicePixelRatio || 1
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width  = rect.width  * dpr
      canvas.height = rect.height * dpr
      offscreenRef.current = buildOffscreen(paths, data, currentPrice, rect.width, rect.height, dpr)
      drawFrame(canvas, data.days.length - 1)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [data, paths, currentPrice, drawFrame])

  const rc = regime ? (REGIME_COLORS[regime.id] ?? REGIME_COLORS[4]) : null

  return (
    <div style={{
      background: '#0a0a0a',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16,
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontFamily: 'inherit',
    }}>
      {/* ── Header ────────────────────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
            {ticker}
          </span>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {horizonDays}D · {numPaths.toLocaleString()} paths
          </span>
          {regime && rc && (
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.05em',
              textTransform: 'uppercase', color: rc.text,
              background: rc.bg, border: `1px solid ${rc.border}`,
              borderRadius: 4, padding: '2px 7px',
            }}>
              {regime.name}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: 14, fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
          {[
            { swatch: { width: 18, height: 2, background: 'rgba(255,255,255,0.75)' }, label: 'Median' },
            { swatch: { width: 18, height: 0, borderTop: '2px dotted #4ade80' },      label: 'Max'    },
            { swatch: { width: 18, height: 0, borderTop: '2px dotted #f87171' },      label: 'Min'    },
          ].map(({ swatch, label }) => (
            <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ display: 'inline-block', ...swatch }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Canvas ────────────────────────────────────────────────────── */}
      <div
        style={{ position: 'relative', height: 300, width: '100%' }}
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect()
          const mx = e.clientX - rect.left
          const my = e.clientY - rect.top
          const hit = regimeSegsRef.current.find(
            seg => mx >= seg.x1 && mx <= seg.x2 && my >= seg.stripY && my <= seg.stripY + seg.stripH
          )
          if (hit) {
            const rc = REGIME_COLORS[hit.regimeIdx + 1]
            setTooltip({ x: mx, y: hit.stripY - 4, name: REGIME_NAMES[hit.regimeIdx], color: rc?.text ?? '#fff' })
          } else {
            setTooltip(null)
          }
        }}
        onMouseLeave={() => setTooltip(null)}
      >
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: 8 }}
        />
        {tooltip && (
          <div style={{
            position: 'absolute',
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -100%)',
            background: '#0f172a',
            border: `1px solid ${tooltip.color}40`,
            borderRadius: 6,
            padding: '5px 10px',
            fontSize: 11,
            fontWeight: 600,
            color: tooltip.color,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            boxShadow: `0 0 12px ${tooltip.color}30`,
          }}>
            {tooltip.name}
          </div>
        )}
      </div>
    </div>
  )
}
