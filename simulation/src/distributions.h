#pragma once
#include <random>

// distributions.h — Random sampling utilities for the simulation
//
// Functions to implement:
//
// sample_student_t(rng, nu) -> double
//   Draw a single sample from a standard Student's t-distribution with `nu` df.
//   Method: use the relationship t(ν) = N(0,1) / sqrt(χ²(ν)/ν)
//   i.e., Z / sqrt(V/nu) where Z ~ N(0,1), V ~ chi_squared(nu)
//   std::chi_squared_distribution<double> is available in <random>
//
//   The caller scales the result:
//     ε = σ(t) * z * sqrt((ν-2)/ν)
//   to ensure the variance of ε equals σ²(t).
//   (The t-distribution has variance ν/(ν-2), so this scaling corrects it.)
//
// sample_jump(rng, mu_j, sigma_j) -> double
//   Draw a log-jump size from N(mu_j, sigma_j²).
//   Returns the log-return contribution of a jump event.
//   Use std::normal_distribution<double>(mu_j, sigma_j).
//
// should_jump(rng, lambda_j, dt) -> bool
//   Returns true with probability lambda_j * dt (Poisson approximation).
//   Draw u ~ U(0,1) and return u < lambda_j * dt.

#include <cmath>

double sample_student_t(std::mt19937_64& rng, double nu);
double sample_jump(std::mt19937_64& rng, double mu_j, double sigma_j);
bool   should_jump(std::mt19937_64& rng, double lambda_j, double dt);