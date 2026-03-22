#include "garch.h"
#include <algorithm>

// TODO: Implement update_garch_variance()
//
// Formula: σ²(t) = ω + α·ε²(t-1) + β·σ²(t-1)
// Clamp to minimum of omega to prevent numerical instability.
//
// Example implementation outline:
//   double new_var = omega + alpha * prev_eps * prev_eps + beta * prev_var;
//   return std::max(new_var, omega);


double update_garch_variance( double omega,
    double alpha,
    double prev_eps,   // ε(t-1): previous step's return shock
    double beta,
    double prev_var){    // σ²(t-1): previous step's conditional variance){
    
    double new_var = omega + alpha * prev_eps * prev_eps + beta * prev_var;
    // Clamp: floor at omega (prevents collapse), ceil at 0.25 (≈50% daily vol — beyond any real regime).
    const double MAX_DAILY_VAR = 0.25;
    return std::max(std::min(new_var, MAX_DAILY_VAR), omega);
}
    