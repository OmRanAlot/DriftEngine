#pragma once

// regime.h — Per-regime parameter set
//
// Each regime carries its own drift, GARCH volatility parameters,
// Student-t tail shape, and jump-diffusion parameters.
// The simulation engine loads the active regime's parameters at each step.
//
// Field documentation:
//   mu       — mean daily log return for this regime
//   omega    — GARCH(1,1) baseline variance (ω)
//   alpha    — GARCH(1,1) shock weight (α): how much last shock matters
//   beta     — GARCH(1,1) persistence weight (β): how much last variance persists
//              Note: alpha + beta < 1 required for stationarity
//   nu       — Student's t degrees of freedom for fat tails (~4–5 typical)
//   lambda_j — Poisson jump intensity (expected jumps per trading day)
//   mu_j     — Mean log-size of a jump (can be negative for downside bias)
//   sigma_j  — Stdev of jump log-size
//   sigma0   — Initial conditional volatility (sqrt of initial GARCH variance)
//              Set to the last fitted GARCH variance from historical data.

struct RegimeParams {
    double mu;
    double omega;
    double alpha;
    double beta;
    double nu;
    double lambda_j;
    double mu_j;
    double sigma_j;
    double sigma0;
};
