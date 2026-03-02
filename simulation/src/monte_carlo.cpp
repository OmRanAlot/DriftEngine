#include "monte_carlo.h"
#include "garch.h"
#include "distributions.h"
#include <algorithm>
#include <cmath>
#include <numeric>
#include <random>
#include <vector>

// TODO: Implement run_simulation(params) -> SimulationResults
//
// High-level structure:
//
//   1. Allocate price_matrix[num_paths][num_steps+1] — or use a flat vector
//      Allocate max_drawdowns[num_paths]
//
//   2. Initialize RNG: std::mt19937_64 rng(std::random_device{}())
//      (Each thread should have its own RNG if parallelizing with OpenMP)
//
//   3. Outer loop: for each path i in [0, num_paths):
//      a. S = params.S0
//      b. current_regime = params.current_regime
//      c. prev_var = params.regimes[current_regime].sigma0^2
//      d. prev_eps = 0.0
//      e. peak_price = S0, min_price = S0  (for drawdown tracking)
//      f. price_matrix[i][0] = S0
//
//      Inner loop: for each step t in [1, num_steps]:
//        Step 1: Regime transition
//          draw u ~ U(0,1)
//          accumulate transition_matrix[current_regime] row until > u
//          update current_regime
//
//        Step 2: GARCH update
//          new_var = update_garch_variance(omega, alpha, prev_eps, beta, prev_var)
//          sigma_t = sqrt(new_var)
//
//        Step 3: Fat-tailed shock
//          z = sample_student_t(rng, nu)
//          scaling = sqrt((nu - 2.0) / nu)
//          eps_t = sigma_t * z * scaling
//
//        Step 4: Jump component
//          J = 0.0
//          if should_jump(rng, lambda_j, dt):
//            J = sample_jump(rng, mu_j, sigma_j)
//
//        Step 5: Price update
//          log_ret = (mu - 0.5 * new_var) * dt + eps_t * sqrt(dt) + J
//          S = S * exp(log_ret)
//          price_matrix[i][t] = S
//
//        Track drawdown:
//          peak_price = max(peak_price, S)
//          min_price  = min(min_price, S)
//
//      After inner loop:
//        max_drawdowns[i] = (min_price - peak_price) / peak_price
//        terminal_prices[i] = price_matrix[i][num_steps]
//
//   4. Compute per-step percentiles:
//      For each step t, extract column t from price_matrix,
//      sort it, and extract p5, p25, p50, p75, p95.
//
//   5. Return populated SimulationResults.
//
// Performance note:
//   For 10,000 paths × 60 steps this is ~600,000 iterations and should
//   complete in well under 1 second. If parallelizing with OpenMP, add
//   #pragma omp parallel for and give each thread its own RNG seeded from
//   a thread-local random_device.
