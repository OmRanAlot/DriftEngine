#include <random>
#include <cmath>

using namespace std;

double sample_student_t(std::mt19937_64& rng, double nu){
    normal_distribution<double> normal(0.0, 1.0);
    chi_squared_distribution<double> chiSquared(nu);

    double Z = normal(rng);
    double V = chiSquared(rng);

    //Ensure caller function SCALES the value!

    return Z/(sqrt(V/nu));
}
double sample_jump(std::mt19937_64& rng, double mu_j, double sigma_j){
    normal_distribution<double> normal(mu_j, sigma_j);
    double Z = normal(rng);

    // Already is the log return 
    // bc jump size is defined in log space 
    // bc the Standard Diff Eq is already in LOG form
    // dln S_t=( mu -(1/2)*sigma ^2)dt+ sigma*dW_t+ J_t * dN_t
    //(getting value of J_t)

    return Z;

}
//Poisson Jump Arrival Test
bool   should_jump(std::mt19937_64& rng, double lambda_j, double dt){
    double poissonApprox = lambda_j * dt;
    std::uniform_real_distribution<double> uniform(0.0,1.0);

    double U = uniform(rng);

    return U < poissonApprox;
    
}
