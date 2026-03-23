import React, { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton, GlassFilter } from "@/components/ui/liquid-glass-button";
import { TickerCombobox } from "@/components/ui/ticker-combobox";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import MonteCarloChart from "@/components/MonteCarloChart";

// ─── Component ───────────────────────────────────────────────────────────────
const HORIZON_OPTIONS = [
  { value: 30, label: "30 days" },
  { value: 60, label: "60 days" },
  { value: 90, label: "90 days" },
  { value: 120, label: "120 days" },
];

const TRIAL_SNAPS = [10_000, 50_000, 100_000, 200_000, 250_000, 500_000];

function estimateTime(numPaths, horizonDays) {
  // ~5s fixed overhead (data fetch + regime fitting) + C++ scales linearly
  const secs = Math.round(5 + (numPaths / 10000) * (0.8 + horizonDays / 120));
  if (secs < 60) return `~${secs} sec`;
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return s > 0 ? `~${m}m ${s}s` : `~${m} min`;
}


export default function LandingTickerSelection({
  onTickerSelect,
  onMethodology,
}) {
  const [query, setQuery] = useState("");
  const [horizon, setHorizon] = useState(60);
  const [trialIdx, setTrialIdx] = useState(0);
  const numPaths = TRIAL_SNAPS[trialIdx];
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onTickerSelect?.(query.trim().toUpperCase(), horizon, numPaths);
  };

  const handleSelect = (item) => {
    setQuery(item.symbol);
    onTickerSelect?.(item.symbol, horizon, numPaths);
    inputRef.current?.blur();
  };

  const scrollToFeatures = () => {
    const element = document.getElementById("features-section");
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    // Custom cubic bezier: cubic-bezier(0.65, 0, 0.35, 1) - easeInOutCubic
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutCubic(percent));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <div className="relative min-h-screen bg-black text-[var(--de-text)] overflow-x-hidden font-sans flex flex-col">
      {/* ── Background: WebGL Shader ────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <WebGLShader />
        {/* Subtle overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <GlassFilter />

      {/* ── Hero Content ──────────────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto flex w-full max-w-5xl min-h-screen flex-col items-center justify-center px-6 pb-20 pt-16">
        {/* Headline */}
        <div className="mb-12 max-w-2xl text-center">
          <h1 className="mb-5 font-display text-7xl font-bold leading-none tracking-[-0.04em] text-white md:text-8xl">
            Drift<span className="text-white"></span>
          </h1>
          <p className="mx-auto max-w-md text-base leading-relaxed text-white/70 md:text-lg">
            The future is a distribution.
            <br /> Not a number.
          </p>
        </div>

        {/* ── Search Bar with Liquid Glass Effects ─────────────────────────── */}
        <form
          onSubmit={handleSearch}
          className="group relative w-full max-w-2xl"
        >
          {/* Liquid Glass Container Layer */}
          <div className="absolute inset-0 z-0 h-full w-full rounded-2xl transition-all shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] border border-white/10 group-focus-within:border-white/30 group-focus-within:shadow-[0_0_20px_rgba(255,255,255,0.1)] duration-300" />

          {/* Glass Distortion Filter Layer */}
          <div
            className="absolute inset-0 isolate -z-10 h-full w-full overflow-hidden rounded-2xl"
            style={{ backdropFilter: 'url("#container-glass") blur(16px)' }}
          />

          {/* Input Row */}
          <div className="relative z-10 flex items-center gap-4 px-6 py-5">
            <button
              type="submit"
              className="group-hover:text-white text-white/50 transition-colors cursor-pointer shrink-0"
            >
              <Search className="h-6 w-6" />
            </button>

            <input
              ref={inputRef}
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter ticker symbol or company name…"
              className="flex-1 bg-transparent text-lg font-medium text-white placeholder:text-white/40 focus:outline-none"
              autoComplete="off"
              spellCheck={false}
            />

            <button
              type="button"
              onClick={() => setQuery("")}
              className={cn(
                "items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-white/50 transition-opacity hover:text-white hover:bg-white/10",
                query ? "flex opacity-100" : "hidden opacity-0 sm:flex",
              )}
            >
              ESC
            </button>
          </div>

          {/* Autocomplete dropdown */}
          <TickerCombobox
            value={query}
            onSelect={handleSelect}
            inputRef={inputRef}
          />
        </form>

        {/* Horizon selector */}
        <div className="mt-6 flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 mr-2">
            Forecast Horizon
          </span>
          {HORIZON_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setHorizon(opt.value)}
              className={cn(
                "rounded-full px-4 py-1.5 font-mono text-xs transition-all border",
                horizon === opt.value
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/5 bg-white/[0.02] text-white/30 hover:text-white/60 hover:border-white/10",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Trials slider */}
        <div className="mt-6 w-full max-w-2xl">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 backdrop-blur-sm">
            {/* Header row */}
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                Simulation Trials
              </span>
              <span className="font-mono text-sm font-semibold text-white">
                {numPaths.toLocaleString()} paths
              </span>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={0}
              max={TRIAL_SNAPS.length - 1}
              step={1}
              value={trialIdx}
              onChange={(e) => setTrialIdx(Number(e.target.value))}
              className="de-slider w-full"
            />

            {/* Snap-point labels */}
            <div className="relative mt-1.5 h-4">
              {TRIAL_SNAPS.map((v, i) => {
                const pct = (i / (TRIAL_SNAPS.length - 1)) * 100;
                const label =
                  v >= 1_000_000 ? `${v / 1_000_000}M` : `${v / 1000}k`;
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setTrialIdx(i)}
                    className="absolute -translate-x-1/2 font-mono text-[9px] transition-colors"
                    style={{
                      left: `${pct}%`,
                      color:
                        trialIdx === i
                          ? "rgba(255,255,255,0.7)"
                          : "rgba(255,255,255,0.2)",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Time estimate */}
            <div className="mt-3 flex items-center gap-2 border-t border-white/[0.06] pt-3">
              <span className="material-symbols-outlined text-[14px] text-white/30">
                timer
              </span>
              <span className="font-mono text-[10px] text-white/30">
                Estimated run time:
              </span>
              <span
                className={`font-mono text-[10px] font-semibold ${numPaths <= 50000 ? "text-[var(--de-green)]" : numPaths <= 100000 ? "text-amber-400" : "text-[var(--de-red)]"}`}
              >
                {estimateTime(numPaths, horizon)}
              </span>
              {numPaths >= 250000 && (
                <span className="ml-auto font-mono text-[9px] text-white/20">
                  Higher accuracy · slower
                </span>
              )}
              {numPaths <= 10000 && (
                <span className="ml-auto font-mono text-[9px] text-white/20">
                  Fast · good for exploration
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <LiquidButton
            onClick={scrollToFeatures}
            className="text-white border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
            size={"xl"}
          >
            Learn More
          </LiquidButton>
        </div>
      </main>

      {/* ── Features Section ──────────────────────────────────────────────── */}
      <section
        id="features-section"
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32 flex flex-col gap-24 md:gap-32"
      >
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Visual Left */}
          <div className="flex-1 w-full aspect-[4/3] md:aspect-video rounded-3xl border border-white/10 overflow-hidden relative group shadow-2xl">
            <img
              src="/assests/stonks.jpg"
              alt="Stonks"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* dark overlay so it blends with the dark theme */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-700" />
            {/* vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          </div>

          {/* Text Right */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <Badge className="bg-white/10 text-white hover:bg-white/20 border-white/10 px-3 py-1 text-xs">
              Probabilistic Modeling
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]">
              Understand the <br className="hidden md:block" />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white, rgba(255,255,255,0.5))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                probabilities.
              </span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-lg">
              Drift helps you understand not just what the price might be, but
              the entire spectrum of possibilities. Visualize standard
              deviations and complex probability curves fueled by real-time
              options data.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          {/* Visual Right */}
          <div className="flex-1 w-full rounded-3xl overflow-hidden relative group shadow-2xl">
            <MonteCarloChart />
            {/* subtle hover bloom */}
            <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />
          </div>

          {/* Text Left */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <Badge className="bg-white/10 text-white hover:bg-white/20 border-white/10 px-3 py-1 text-xs">
              Scenario Planning
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]">
              Planning scenarios <br className="hidden md:block" />
              <span className="text-white/70">made visual.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-lg">
              Test your hypotheses against the market's implied expectations.
              See exactly how your trades might perform across different
              volatility regimes and price action realities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer / Bottom Navigation ──────────────────────────────────── */}
      <footer className="relative z-10 w-full px-6 py-6 pb-8 border-t border-white/5 bg-black/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Legal */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
              <span className="material-symbols-outlined text-[16px] text-black shrink-0">
                timeline
              </span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">
              Drift
            </span>
          </div>
          <span className="hidden md:block text-white/20">|</span>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            Probabilistic scenario tool — not a price predictor · Not financial
            advice · Educational purposes only
          </p>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6 text-xs font-medium text-white/50">
          <button
            onClick={onMethodology}
            className="transition-colors hover:text-white bg-transparent border-none cursor-pointer p-0"
          >
            Methodology
          </button>
          <a
            href="https://github.com/OmRanAlot/DriftEngine"
            target="_blank"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </footer>
    </div>
  );
}
