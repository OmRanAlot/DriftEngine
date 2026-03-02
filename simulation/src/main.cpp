// main.cpp — Standalone test binary for the simulation engine
//
// Used to test the C++ simulation independently of Python/pybind11.
// Accepts hardcoded test parameters and prints summary statistics.
//
// TODO: Implement a simple test harness:
//   1. Hardcode a set of SimulationParams (e.g. AAPL-like values)
//   2. Call run_simulation(params)
//   3. Print: median terminal price, p5, p95, median max drawdown
//   4. Optionally write full percentile paths to a CSV for plotting
//
// Build and run:
//   cd simulation/build
//   cmake .. -DCMAKE_BUILD_TYPE=Release && make
//   ./sim_test

#include <iostream>
#include "monte_carlo.h"

int main() {
    // TODO: construct test SimulationParams and call run_simulation()
    std::cout << "DriftEngine simulation test binary" << std::endl;
    return 0;
}
