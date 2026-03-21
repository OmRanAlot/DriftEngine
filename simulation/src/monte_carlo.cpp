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
        double prev_var = pow(params.regimes[current_regime].sigma0, 2);
        double prev_eps = 0.0;
        double peak_price = S;
        double min_price = S;
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
            double jump = 0.0;
            if (should_jump(rng, stats.lambda_j, params.dt)){
                jump = sample_jump(rng, stats.mu_j, stats.sigma_j);
            }

            // Step 5: Price update
            double log_return = (stats.mu - 0.5 * new_var) * params.dt + eps_t * sqrt(params.dt) + jump;
            S = S * exp(log_return);
            price_matrix[i * (num_steps + 1) + j] = S;

            peak_price = max(peak_price, S);
            min_price = min(min_price, S);

            prev_var = new_var;
            prev_eps = eps_t;
        }

        max_drawdowns[i] = (min_price - peak_price) / peak_price;
        terminal_prices[i] = price_matrix[i * (num_steps + 1) + num_steps];
    }

    // Compute per-step percentiles
    SimulationResults results;
    results.terminal_prices = terminal_prices;
    results.max_drawdowns = max_drawdowns;
    results.price_matrix = price_matrix;
    
    int n05 = (int)(0.05 * num_paths);
    int n25 = (int)(0.25 * num_paths);
    int n50 = (int)(0.50 * num_paths);
    int n75 = (int)(0.75 * num_paths);
    int n95 = (int)(0.95 * num_paths);

    for (int t = 0; t <= num_steps; t++){
        vector<double> column(num_paths);
        for (int j = 0; j < num_paths; j++){
            column[j] = price_matrix[j * (num_steps + 1) + t];
        }
        sort(column.begin(), column.end());

        results.p5.push_back(column[n05]);
        results.p25.push_back(column[n25]);
        results.p50.push_back(column[n50]);
        results.p75.push_back(column[n75]);
        results.p95.push_back(column[n95]);
    }

    return results;
}
