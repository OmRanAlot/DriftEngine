// main.cpp — Standalone test binary for the simulation engine
//
// Reads SimulationParams from _example.json, runs the simulation,
// and writes SimulationResults to _exampleOutput.json.
//
// Build and run:
//   cd simulation/build
//   cmake .. -DCMAKE_BUILD_TYPE=Release && cmake --build .
//   ./sim_test

#include <iostream>
#include <fstream>
#include <string>
#include "monte_carlo.h"
#include <nlohmann/json.hpp>

using json = nlohmann::json;

int main() {
    // ── Load input ────────────────────────────────────────────────────────────
    std::ifstream inFile("_example.json");
    if (!inFile.is_open()) {
        std::cerr << "Failed to open _example.json\n";
        return 1;
    }

    json j;
    inFile >> j;
    inFile.close();

    // ── Deserialize SimulationParams ─────────────────────────────────────────
    SimulationParams params;
    params.S0             = j["S0"].get<double>();
    params.current_regime = j["current_regime"].get<int>();
    params.num_paths      = j["num_paths"].get<int>();
    params.num_steps      = j["num_steps"].get<int>();
    params.dt             = j["dt"].get<double>();

    auto tm = j["transition_matrix"].get<std::vector<std::vector<double>>>();
    for (int r = 0; r < 4; r++)
        for (int c = 0; c < 4; c++)
            params.transition_matrix[r][c] = tm[r][c];

    for (auto& rd : j["regimes"]) {
        RegimeParams rp;
        rp.mu       = rd["mu"].get<double>();
        rp.omega    = rd["omega"].get<double>();
        rp.alpha    = rd["alpha"].get<double>();
        rp.beta     = rd["beta"].get<double>();
        rp.nu       = rd["nu"].get<double>();
        rp.lambda_j = rd["lambda_j"].get<double>();
        rp.mu_j     = rd["mu_j"].get<double>();
        rp.sigma_j  = rd["sigma_j"].get<double>();
        rp.sigma0   = rd["sigma0"].get<double>();
        params.regimes.push_back(rp);
    }

    std::cout << "Running simulation: " << params.num_paths << " paths x "
              << params.num_steps << " steps, S0=" << params.S0 << "\n";

    // ── Run simulation ────────────────────────────────────────────────────────
    SimulationResults results = run_simulation(params);

    // ── Print summary to console ──────────────────────────────────────────────
    int last = params.num_steps;
    std::cout << "Median terminal price (p50): " << results.p50[last] << "\n";
    std::cout << "p5  terminal price:          " << results.p5[last]  << "\n";
    std::cout << "p95 terminal price:          " << results.p95[last] << "\n";

    // Median max drawdown
    std::vector<double> dd = results.max_drawdowns;
    std::sort(dd.begin(), dd.end());
    double median_dd = dd[dd.size() / 2];
    std::cout << "Median max drawdown:         " << median_dd * 100.0 << "%\n";

    // ── Serialize output to JSON ──────────────────────────────────────────────
    json out;
    out["p5"]              = results.p5;
    out["p25"]             = results.p25;
    out["p50"]             = results.p50;
    out["p75"]             = results.p75;
    out["p95"]             = results.p95;
    out["terminal_prices"] = results.terminal_prices;
    out["max_drawdowns"]   = results.max_drawdowns;
    out["price_matrix"]    = results.price_matrix;

    std::ofstream outFile("_exampleOutput.json");
    if (!outFile.is_open()) {
        std::cerr << "Failed to open _exampleOutput.json for writing\n";
        return 1;
    }
    outFile << out.dump(2);
    outFile.close();

    std::cout << "Output written to _exampleOutput.json\n";
    return 0;
}
