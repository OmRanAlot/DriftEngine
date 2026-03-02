#pragma once

// garch.h — GARCH(1,1) volatility update
//
// GARCH(1,1) equation:
//   σ²(t) = ω + α·ε²(t-1) + β·σ²(t-1)
//
// Where:
//   ω (omega) — baseline variance (long-run variance component)
//   α (alpha) — weight on the previous period's squared shock
//   β (beta)  — weight on the previous period's variance (persistence)
//   ε(t-1)    — the previous time step's standardized shock (scaled return)
//
// Function to implement:
//   update_garch_variance(omega, alpha, beta, prev_eps, prev_var) -> double
//
//   Returns the new conditional variance σ²(t).
//   The caller takes sqrt to get σ(t) for use in the shock computation.
//
// Notes:
//   - prev_eps is the actual shock (σ(t-1) * z * scaling_factor), not z itself
//   - At t=0, prev_var = sigma0^2 (initial variance from regime params)
//   - At t=0, prev_eps = 0 (no prior shock)
//   - Clamp result to a minimum (e.g. omega) to prevent numerical collapse

double update_garch_variance(
    double omega,
    double alpha,
    double prev_eps,   // ε(t-1): previous step's return shock
    double beta,
    double prev_var    // σ²(t-1): previous step's conditional variance
);
