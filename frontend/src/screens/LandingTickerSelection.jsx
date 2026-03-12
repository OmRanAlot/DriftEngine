import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton, GlassFilter } from '@/components/ui/liquid-glass-button'
import { Search } from 'lucide-react'
import { cn } from "@/lib/utils"

// ─── Component ───────────────────────────────────────────────────────────────
export default function LandingTickerSelection() {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    // Handle search submission
    console.log("Searching for:", query)
    // Add navigation or query submission logic here when wired up to backend
  }

  const scrollToFeatures = () => {
    const element = document.getElementById('features-section');
    if (!element) return;
    
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    // Custom cubic bezier: cubic-bezier(0.65, 0, 0.35, 1) - easeInOutCubic
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

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
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
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
            Drift<span className="text-[var(--de-orange)]"></span>
          </h1>
          <p className="mx-auto max-w-md text-base leading-relaxed text-white/70 md:text-lg">
            The future is a distribution.<br /> Not a number.
          </p>
        </div>

        {/* ── Search Bar with Liquid Glass Effects ─────────────────────────── */}
        <form onSubmit={handleSearch} className="group relative w-full max-w-2xl">
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
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter ticker symbol or company name…"
              className="flex-1 bg-transparent text-lg font-medium text-white placeholder:text-white/40 focus:outline-none"
            />

            <button
              type="button"
              onClick={() => setQuery('')}
              className={cn(
                "items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-white/50 transition-opacity hover:text-white hover:bg-white/10",
                query ? "flex opacity-100" : "hidden opacity-0 sm:flex"
              )}
            >
              ESC
            </button>
          </div>
        </form>

        <div className="mt-12 flex justify-center">
          <LiquidButton onClick={scrollToFeatures} className="text-white border border-white/10 rounded-full bg-white/5 backdrop-blur-sm" size={'xl'}>Learn More</LiquidButton>
        </div>

      </main>

      {/* ── Features Section ──────────────────────────────────────────────── */}
      <section id="features-section" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32 flex flex-col gap-24 md:gap-32">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Visual Left */}
          <div className="flex-1 w-full aspect-[4/3] md:aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Abstract visual representation */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-50">
              <div className="w-1 h-32 bg-gradient-to-t from-transparent via-white/40 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
              <div className="w-1 h-48 bg-gradient-to-t from-transparent via-white/60 to-transparent rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
              <div className="w-1 h-24 bg-gradient-to-t from-transparent via-[var(--de-orange)] to-transparent rounded-full animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: '300ms' }} />
              <div className="w-1 h-40 bg-gradient-to-t from-transparent via-white/50 to-transparent rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
              <div className="w-1 h-28 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-full animate-pulse" style={{ animationDelay: '600ms' }} />
            </div>

            <div className="relative z-10 px-6 py-3 rounded-full bg-black/40 border border-white/20 backdrop-blur-md">
              <span className="text-white/70 font-mono text-sm tracking-wider">Visual Placeholder 1</span>
            </div>
          </div>
          
          {/* Text Right */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <Badge className="bg-white/10 text-white hover:bg-white/20 border-white/10 px-3 py-1 text-xs">Probabilistic Modeling</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]">
              Understand the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">probabilities.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-lg">
              Drift helps you understand not just what the price might be, but the entire spectrum of possibilities. 
              Visualize standard deviations and complex probability curves fueled by real-time options data.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          {/* Visual Right */}
          <div className="flex-1 w-full aspect-[4/3] md:aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-bl from-[var(--de-orange)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Abstract visual representation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-screen">
              <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--de-orange)_0%,transparent_50%)] opacity-30 blur-2xl" />
              <div className="absolute w-64 h-64 border border-[var(--de-orange)]/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute w-48 h-48 border border-white/20 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
            </div>

            <div className="relative z-10 px-6 py-3 rounded-full bg-black/40 border border-white/20 backdrop-blur-md">
              <span className="text-white/70 font-mono text-sm tracking-wider">Visual Placeholder 2</span>
            </div>
          </div>
          
          {/* Text Left */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <Badge className="bg-[var(--de-orange)]/10 text-[var(--de-orange)] hover:bg-[var(--de-orange)]/20 border-[var(--de-orange)]/20 px-3 py-1 text-xs">Scenario Planning</Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]">
              Planning scenarios <br className="hidden md:block" />
              <span className="text-[var(--de-orange)]">made visual.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-lg">
              Test your hypotheses against the market's implied expectations. See exactly how your trades might perform across different volatility regimes and price action realities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer / Bottom Navigation ──────────────────────────────────── */}
      <footer className="relative z-10 w-full px-6 py-6 pb-8 border-t border-white/5 bg-black/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand & Legal */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--de-orange)]">
              <span className="material-symbols-outlined text-[16px] text-black shrink-0">timeline</span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">Drift</span>
          </div>
          <span className="hidden md:block text-white/20">|</span>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            Probabilistic scenario tool — not a price predictor · Educational purposes only
          </p>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6 text-xs font-medium text-white/50">
          <a href="#" className="transition-colors hover:text-white">Methodology</a>
          <a href="#" className="transition-colors hover:text-white">GitHub</a>
        </nav>
      </footer>
    </div>
  )
}
