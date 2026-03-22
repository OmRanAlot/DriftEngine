#include "monte_carlo.h"
#include "garch.h"
#include "distributions.h"
#include <algorithm>
#include <cmath>
#include <numeric>
#include <random>
#include <vector>
using namespace std;

SimulationResults run_simulation(const SimulationParams& params){

    int num_paths = params.num_paths;
    int num_steps = params.num_steps;

    // price_matrix[i * (num_steps+1) + t] = price at step t for path i
    vector<double> price_matrix(num_paths * (num_steps + 1));
    vector<double> terminal_prices(num_paths);
    vector<double> max_drawdowns(num_paths);

    std::mt19937_64 rng(std::random_device{}());
    uniform_real_distribution<double> uniform(0.0, 1.0);

    for (int i = 0; i < num_paths; i++){
        double S = params.S0;
        int current_regime = params.current_regime;
        double prev_var = params.regimes[current_regime].sigma0;  // sigma0 is already variance (σ²)
        double prev_eps = 0.0;
        double peak_price = S;
        double max_dd = 0.0;
        price_matrix[i * (num_steps + 1) + 0] = S;

        for (int j = 1; j <= num_steps; j++){
            // Step 1: Regime transition
            double U = uniform(rng);
            double accumulate = 0.0;
            for (int k = 0; k < 4; k++){
                accumulate += params.transition_matrix[current_regime][k];
                if (accumulate > U){
                    current_regime = k;
                    break;
                }
            }

            // Step 2: GARCH update
            const auto& stats = params.regimes[current_regime];
            double new_var = update_garch_variance(stats.omega, stats.alpha, prev_eps, stats.beta, prev_var);
            double sigma_t = sqrt(new_var);

            // Step 3: Fat-tailed shock
            double z = sample_student_t(rng, stats.nu);
            double scaling = sqrt((stats.nu - 2.0) / stats.nu);
            double eps_t = sigma_t * z * scaling;

            // Step 4: Jump component
            // lambda_j is a daily rate; we step one day at a time, so probability = lambda_j (no dt factor).
            double jump = 0.0;
            if (should_jump(rng, stats.lambda_j, 1.0)){
                jump = sample_jump(rng, stats.mu_j, stats.sigma_j);
            }

            // Step 5: Price update
            // All params are in daily units (mu = daily drift, new_var = daily variance, eps_t = daily shock).
            // No dt or sqrt(dt) factors needed — we are stepping one trading day at a time.
            // Clamp to ±100% per step to guard against NaN/inf while preserving realistic fat-tail events.
            double log_return = (stats.mu - 0.5 * new_var) + eps_t + jump;
            log_return = std::max(std::min(log_return, 1.0), -1.0);
            double S_new = S * exp(log_return);
            // NaN/inf guard: if price becomes non-finite, freeze at last valid price.
            if (!std::isfinite(S_new)) S_new = S;
            S = S_new;
            price_matrix[i * (num_steps + 1) + j] = S;

            // Track running peak for correct max drawdown (peak-to-trough, not global min/max).
            if (S > peak_price) peak_price = S;
            double dd = (S - peak_price) / peak_price;
            if (dd < max_dd) max_dd = dd;

            prev_var = new_var;
            // Clamp prev_eps to match the log_return clamp so the GARCH feedback
            // can't compound from an unclamped shock that was never reflected in the price.
            prev_eps = std::max(std::min(eps_t, 1.0), -1.0);
        }

        max_drawdowns[i] = max_dd;
        terminal_prices[i] = price_matrix[i * (num_steps + 1) + num_steps];
    }

    // Compute per-step percentiles
    SimulationResults results;
    results.terminal_prices = terminal_prices;
    results.max_drawdowns = max_drawdowns;
    results.price_matrix = price_matrix;

    for (int t = 0; t <= num_steps; t++){
        vector<double> column(num_paths);
        for (int j = 0; j < num_paths; j++){
            column[j] = price_matrix[j * (num_steps + 1) + t];
        }

        // Partition finite values to the front so std::sort isn't given NaN
        // (NaN comparisons have undefined behavior and corrupt the sort order).
        auto finite_end = std::partition(column.begin(), column.end(),
            [](double v){ return std::isfinite(v); });
        int fc = (int)std::distance(column.begin(), finite_end);

        if (fc == 0){
            // No finite prices at this timestep — fall back to current price S0.
            results.p5.push_back(params.S0);
            results.p25.push_back(params.S0);
            results.p50.push_back(params.S0);
            results.p75.push_back(params.S0);
            results.p95.push_back(params.S0);
            continue;
        }

        std::sort(column.begin(), finite_end);

        // Compute percentile indices relative to the finite count.
        int n05 = (int)(0.05 * fc);
        int n25 = (int)(0.25 * fc);
        int n50 = (int)(0.50 * fc);
        int n75 = (int)(0.75 * fc);
        int n95 = (int)(0.95 * fc);

        results.p5.push_back(column[n05]);
        results.p25.push_back(column[n25]);
        results.p50.push_back(column[n50]);
        results.p75.push_back(column[n75]);
        results.p95.push_back(column[n95]);
    }

    return results;
}
