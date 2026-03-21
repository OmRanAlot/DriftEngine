// bindings/pybind_wrapper.cpp — pybind11 Python module
//
// Exposes run_simulation() to Python as the "drift_engine_sim" module.
//
// Python usage (from backend services/parameter_builder.py or routers/simulation.py):
//   import drift_engine_sim
//   result = drift_engine_sim.run_simulation(params_dict)
//
// TODO: Implement the pybind11 module binding.
//
// Steps:
//   1. Define a Python-callable wrapper that:
//      a. Accepts a Python dict matching SimulationParams structure
//      b. Deserializes it into a C++ SimulationParams struct
//      c. Calls run_simulation(params)
//      d. Serializes the SimulationResults back into a Python dict:
//         {
//           "p5":              [float, ...],  // length num_steps+1
//           "p25":             [float, ...],
//           "p50":             [float, ...],
//           "p75":             [float, ...],
//           "p95":             [float, ...],
//           "terminal_prices": [float, ...],  // length num_paths
//           "max_drawdowns":   [float, ...]   // length num_paths
//         }
//
//   2. Register the module:
//      PYBIND11_MODULE(drift_engine_sim, m) {
//          m.doc() = "DriftEngine Monte Carlo simulation engine";
//          m.def("run_simulation", &py_run_simulation, "Run Monte Carlo simulation");
//      }
//
// Key deserialization notes:
//   - transition_matrix: Python list[list[float]] → C++ double[4][4]
//   - regimes: Python list[dict] → std::vector<RegimeParams>
//   - Extract each RegimeParams field by key name from the Python dict
//
// Error handling:
//   - Wrap the C++ call in a try/catch and raise pybind11::value_error on failure

#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include "monte_carlo.h"

namespace py = pybind11;

// TODO: Implement py_run_simulation(py::dict params) -> py::dict
RegimeParams dict_to_regime(const py::dict& d) {
    RegimeParams r;
    r.mu        = d["mu"].cast<double>();
    r.omega     = d["omega"].cast<double>();
    r.alpha     = d["alpha"].cast<double>();
    r.beta      = d["beta"].cast<double>();
    r.nu        = d["nu"].cast<double>();
    r.lambda_j  = d["lambda_j"].cast<double>();
    r.mu_j      = d["mu_j"].cast<double>();
    r.sigma_j   = d["sigma_j"].cast<double>();
    r.sigma0    = d["sigma0"].cast<double>();
    return r;
}

std::vector<RegimeParams> list_to_regimes(const py::list& lst){
    std::vector<RegimeParams> regimes;
    regimes.reserve(lst.size());

    for (auto item: lst){
        regimes.push_back(dict_to_regime(item.cast<py::dict>()));
    }

    return regimes;
}

py::dict struct_to_dict(SimulationResults results){
    py::dict d;
    d["p5"] = results.p5;
    d["p25"] = results.p25;
    d["p50"] = results.p50;
    d["p75"] = results.p75;
    d["p95"] = results.p95;
    d["terminal_prices"] = results.terminal_prices;
    d["price_matrix"] = results.price_matrix;
    d["max_drawdowns"] = results.max_drawdowns;

    return d;
    
}

//     std::vector<double> terminal_prices;
//     std::vector<double> max_drawdowns; 


py::dict py_run_simulation(py::dict params){
    //Turn python dictionary into C++ Struct
    SimulationParams input;
    input.S0                = params["S0"].cast<double>();
    input.current_regime    = params["current_regime"].cast<int>();
    auto tm = params["transition_matrix"].cast<std::vector<std::vector<double>>>();
    for (int r = 0; r < 4; r++)
        for (int c = 0; c < 4; c++)
            input.transition_matrix[r][c] = tm[r][c];
    input.regimes           = list_to_regimes(params["regimes"].cast<py::list>());
    input.num_paths         = params["num_paths"].cast<int>();
    input.num_steps         = params["num_steps"].cast<int>();
    input.dt                = params["dt"].cast<double>();

    // RUn Simulation
    SimulationResults results = run_simulation(input);
    
    //return a python dictionary of the results and information
    return struct_to_dict(results);
    

}

PYBIND11_MODULE(drift_engine_sim, m) {
    m.doc() = "DriftEngine Monte Carlo simulation engine (pybind11)";
    // TODO: m.def("run_simulation", &py_run_simulation, "Run Monte Carlo simulation");

    m.def("run_simulation", &py_run_simulation, "Run Monte Carlo Simulation");
}

