#pragma once
#include <vector>

// results.h — Output structure from the Monte Carlo simulation
//
// SimulationResults is populated by run_simulation() and returned to Python
// via the pybind11 wrapper.
//
// Fields:
//   percentiles  — Per-step price percentiles across all 10,000 paths.
//                  Each vector has length (num_steps + 1), including t=0.
//                  Computed in C++ to avoid re-iterating in Python.
//   p5, p25, p50, p75, p95 — 5th, 25th, 50th, 75th, 95th percentile prices
//
//   terminal_prices — Final price S(T) for each simulation path.
//                     Length = num_paths. Used by Python for histogram + VaR.
//
//   max_drawdowns   — Per-path maximum drawdown fraction.
//                     max_drawdown[i] = (min_price - peak_price) / peak_price
//                     Always negative (e.g. -0.15 = 15% peak-to-trough drop).
//                     Length = num_paths.

struct SimulationResults {
    std::vector<double> p5;
    std::vector<double> p25;
    std::vector<double> p50;
    std::vector<double> p75;
    std::vector<double> p95;

    std::vector<double> terminal_prices;
    std::vector<double> max_drawdowns;
    std::vector<double> price_matrix;
};
