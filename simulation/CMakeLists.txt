cmake_minimum_required(VERSION 3.15)
project(drift_engine_simulation CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# ─── Find pybind11 ──────────────────────────────────────────────────────────
# pybind11 must be installed in the Python environment:
#   pip install pybind11
# Then set pybind11_DIR to the cmake directory, or use:
#   cmake .. -Dpybind11_DIR=$(python -m pybind11 --cmakedir)
find_package(pybind11 REQUIRED)

# ─── Simulation library (shared between pybind module and standalone binary) ─
add_library(simulation_core STATIC
    src/monte_carlo.cpp
    src/garch.cpp
)
target_include_directories(simulation_core PUBLIC src/)

# ─── pybind11 Python module ─────────────────────────────────────────────────
# Produces drift_engine_sim.so (Linux/Mac) or drift_engine_sim.pyd (Windows)
# Import in Python as: import drift_engine_sim
pybind11_add_module(drift_engine_sim
    bindings/pybind_wrapper.cpp
)
target_link_libraries(drift_engine_sim PRIVATE simulation_core)

# ─── Standalone test binary (optional) ─────────────────────────────────────
add_executable(sim_test src/main.cpp)
target_link_libraries(sim_test PRIVATE simulation_core)

# ─── Compiler flags ─────────────────────────────────────────────────────────
target_compile_options(simulation_core PRIVATE
    $<$<CONFIG:Release>:-O3 -march=native>
    $<$<CONFIG:Debug>:-g -O0>
)
