#pragma once
#include <vector>
#include "regime.h"
#include "results.h"

// monte_carlo.h — Main simulation engine interface
//
// SimulationParams — all inputs needed by the C++ simulation loop.
// Populated by Python (services/parameter_builder.py) and passed via pybind11.
//
// run_simulation(params) -> SimulationResults
//   Runs num_paths independent Monte Carlo paths of num_steps steps each.
//   See CLAUDE.md Step 6 for the full per-step algorithm.
//
// Per-step algorithm summary (implemented in monte_carlo.cpp):
//   1. REGIME TRANSITION   — draw U(0,1), use transition_matrix row to pick next regime
//   2. GARCH UPDATE        — σ²(t) = ω + α·ε²(t-1) + β·σ²(t-1)  [see garch.h]
//   3. FAT-TAILED SHOCK    — z ~ t(ν); ε(t) = σ(t) · z · √((ν-2)/ν)
//   4. JUMP COMPONENT      — with prob λ·dt: J ~ N(μ_J, σ_J²), else J=0
//   5. PRICE UPDATE        — log_ret = (μ - 0.5·σ²)·dt + ε·√dt + J
//                            S(t) = S(t-1) · exp(log_ret)
//
// After all paths complete, compute:
//   - Per-step cross-sectional percentiles (p5, p25, p50, p75, p95)
//   - Per-path terminal price
//   - Per-path max drawdown

struct SimulationParams {
    double S0;
    int    current_regime;                          // 0–3, starting regime
    double transition_matrix[4][4];                 // row = from, col = to
    std::vector<RegimeParams> regimes;              // length 4
    int    num_paths;
    int    num_steps;
    double dt;
};

SimulationResults run_simulation(const SimulationParams& params);
