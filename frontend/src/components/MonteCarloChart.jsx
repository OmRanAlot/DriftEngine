import { useEffect, useRef, useState, useCallback } from 'react';

const REGIMES = {
  low:   { label: 'Low-Vol Bull',  mu: 0.0004,  sigma: 0.008,  jumpProb: 0,    color: '#22c55e' },
  high:  { label: 'High-Vol Bull', mu: 0.0002,  sigma: 0.022,  jumpProb: 0,    color: '#f59e0b' },
  crash: { label: 'High-Vol Bear', mu: -0.002,  sigma: 0.028,  jumpProb: 0.05, color: '#ef4444' },
};

const NUM_PATHS = 200;
const NUM_STEPS = 120;
const S0 = 100;

function randn() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

function generatePaths(regime) {
  const { mu, sigma, jumpProb } = REGIMES[regime];
  const paths = [];
  for (let i = 0; i < NUM_PATHS; i++) {
    const path = new Float64Array(NUM_STEPS + 1);
    path[0] = S0;
    for (let t = 1; t <= NUM_STEPS; t++) {
      const jump = Math.random() < jumpProb ? (Math.random() < 0.5 ? 0.06 : -0.06) : 0;
      path[t] = path[t - 1] * Math.exp(mu + sigma * randn() + jump);
    }
    paths.push(path);
  }
  return paths;
}

function getPercentilePath(paths, pct) {
  const finals = paths.map((p, i) => ({ final: p[NUM_STEPS], idx: i }));
  finals.sort((a, b) => a.final - b.final);
  const rank = Math.floor((pct / 100) * (finals.length - 1));
  return paths[finals[rank].idx];
}

export default function MonteCarloChart() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    paths: null,
    frame: 0,
    rafId: null,
    timeoutId: null,
    regime: 'low',
  });
  const [regime, setRegime] = useState('low');
  const [stats, setStats] = useState({ median: 0, p90: 0, p10: 0 });

  const drawFrame = useCallback((canvas, paths, frame) => {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const stepsVisible = Math.min(frame, NUM_STEPS);

    // Y-axis bounds from visible data
    let yMin = Infinity, yMax = -Infinity;
    for (const p of paths) {
      for (let t = 0; t <= stepsVisible; t++) {
        if (p[t] < yMin) yMin = p[t];
        if (p[t] > yMax) yMax = p[t];
      }
    }
    const pad = (yMax - yMin) * 0.05 || 1;
    yMin -= pad;
    yMax += pad;

    const toX = (t) => (t / NUM_STEPS) * W;
    const toY = (v) => H - ((v - yMin) / (yMax - yMin)) * H;

    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, W, H);

    // Baseline at S0
    ctx.save();
    ctx.setLineDash([4, 6]);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, toY(S0));
    ctx.lineTo(W, toY(S0));
    ctx.stroke();
    ctx.restore();

    // All background paths
    for (const p of paths) {
      const finalVal = p[stepsVisible];
      let color;
      if (finalVal >= S0 * 1.05) color = 'rgba(34,197,94,0.12)';
      else if (finalVal <= S0 * 0.95) color = 'rgba(220,60,60,0.12)';
      else color = 'rgba(200,200,200,0.07)';

      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8;
      for (let t = 0; t <= stepsVisible; t++) {
        t === 0 ? ctx.moveTo(toX(t), toY(p[t])) : ctx.lineTo(toX(t), toY(p[t]));
      }
      ctx.stroke();
    }

    // Highlight paths
    const highlights = [
      { path: getPercentilePath(paths, 10), color: '#e05c5c', width: 1.5 },
      { path: getPercentilePath(paths, 50), color: 'rgba(255,255,255,0.75)', width: 2 },
      { path: getPercentilePath(paths, 90), color: '#2dc878', width: 1.5 },
    ];
    for (const { path, color, width } of highlights) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      for (let t = 0; t <= stepsVisible; t++) {
        t === 0 ? ctx.moveTo(toX(t), toY(path[t])) : ctx.lineTo(toX(t), toY(path[t]));
      }
      ctx.stroke();
    }

    // Live stats
    const medianFinal = getPercentilePath(paths, 50)[stepsVisible];
    const p90Final = getPercentilePath(paths, 90)[stepsVisible];
    const p10Final = getPercentilePath(paths, 10)[stepsVisible];
    setStats({
      median: ((medianFinal - S0) / S0) * 100,
      p90:    ((p90Final  - S0) / S0) * 100,
      p10:    ((p10Final  - S0) / S0) * 100,
    });
  }, []);

  const startAnimation = useCallback((paths) => {
    const s = stateRef.current;
    if (s.rafId) cancelAnimationFrame(s.rafId);
    if (s.timeoutId) clearTimeout(s.timeoutId);
    s.frame = 0;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const tick = () => {
      if (!canvasRef.current) return;
      s.frame++;
      drawFrame(canvas, paths, s.frame);

      if (s.frame < NUM_STEPS) {
        // Throttle: starts slow (~40ms), speeds up toward end
        const progress = s.frame / NUM_STEPS;
        const delay = Math.max(2, Math.floor(40 * (1 - progress * 0.92)));
        s.timeoutId = setTimeout(() => {
          s.rafId = requestAnimationFrame(tick);
        }, delay);
      }
    };
    s.rafId = requestAnimationFrame(tick);
  }, [drawFrame]);

  const switchRegime = useCallback((key) => {
    const s = stateRef.current;
    if (s.rafId) cancelAnimationFrame(s.rafId);
    if (s.timeoutId) clearTimeout(s.timeoutId);
    s.regime = key;
    const paths = generatePaths(key);
    s.paths = paths;
    setRegime(key);
    startAnimation(paths);
  }, [startAnimation]);

  // Init
  useEffect(() => {
    const paths = generatePaths('low');
    stateRef.current.paths = paths;
    startAnimation(paths);
    return () => {
      if (stateRef.current.rafId) cancelAnimationFrame(stateRef.current.rafId);
      if (stateRef.current.timeoutId) clearTimeout(stateRef.current.timeoutId);
    };
  }, [startAnimation]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const s = stateRef.current;
      if (!canvas || !s.paths) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      drawFrame(canvas, s.paths, s.frame);
    };
    window.addEventListener('resize', handleResize);
    // Set initial canvas size
    const canvas = canvasRef.current;
    if (canvas) {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  const fmt = (v) => (v >= 0 ? `+${v.toFixed(1)}%` : `${v.toFixed(1)}%`);

  const regimeColor = REGIMES[regime].color;

  return (
    <div
      style={{
        background: '#0a0a0a',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 16,
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        fontFamily: 'inherit',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
            Monte Carlo
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: regimeColor,
              background: `${regimeColor}1a`,
              border: `1px solid ${regimeColor}40`,
              borderRadius: 4,
              padding: '2px 7px',
            }}
          >
            {REGIMES[regime].label}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {Object.entries(REGIMES).map(([key, r]) => {
            const active = regime === key;
            return (
              <button
                key={key}
                onClick={() => switchRegime(key)}
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  padding: '3px 10px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  color: active ? '#ffffff' : 'rgba(255,255,255,0.4)',
                  background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
                  border: active ? '1px solid rgba(255,255,255,0.20)' : '1px solid transparent',
                }}
              >
                {key}
              </button>
            );
          })}
        </div>
      </div>

      {/* Canvas */}
      <div style={{ position: 'relative', height: 220, width: '100%' }}>
        <canvas
          ref={canvasRef}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: 8 }}
        />
      </div>

      {/* Stats row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 8,
          paddingTop: 4,
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {[
          { label: 'Median',   value: fmt(stats.median), color: 'rgba(255,255,255,0.75)' },
          { label: '90th pct', value: fmt(stats.p90),    color: '#2dc878' },
          { label: '10th pct', value: fmt(stats.p10),    color: '#e05c5c' },
          { label: 'Paths',    value: NUM_PATHS,          color: 'rgba(255,255,255,0.5)' },
        ].map(({ label, value, color }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
              {label}
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, color, fontVariantNumeric: 'tabular-nums' }}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
