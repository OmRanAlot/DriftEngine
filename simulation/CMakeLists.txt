cmake_minimum_required(VERSION 3.15)
project(drift_engine_simulation CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# ─── nlohmann/json (header-only, for main.cpp test binary) ──────────────────
include(FetchContent)
FetchContent_Declare(
    nlohmann_json
    GIT_REPOSITORY https://github.com/nlohmann/json.git
    GIT_TAG        v3.11.3
    GIT_SHALLOW    TRUE
)
FetchContent_MakeAvailable(nlohmann_json)

# ─── pybind11 ───────────────────────────────────────────────────────────────
# Try the local Python install first; fall back to FetchContent.
execute_process(
    COMMAND python -m pybind11 --cmakedir
    OUTPUT_VARIABLE pybind11_DIR
    OUTPUT_STRIP_TRAILING_WHITESPACE
    ERROR_QUIET
)
find_package(pybind11 QUIET)
if (NOT pybind11_FOUND)
    message(STATUS "pybind11 not found locally — fetching via FetchContent")
    FetchContent_Declare(
        pybind11
        GIT_REPOSITORY https://github.com/pybind/pybind11.git
        GIT_TAG        v2.13.6
        GIT_SHALLOW    TRUE
    )
    FetchContent_MakeAvailable(pybind11)
endif()

# ─── Simulation library (shared between pybind module and standalone binary) ─
add_library(simulation_core STATIC
    src/monte_carlo.cpp
    src/garch.cpp
    src/distributions.cpp
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
target_link_libraries(sim_test PRIVATE simulation_core nlohmann_json::nlohmann_json)

# ─── Compiler flags ─────────────────────────────────────────────────────────
target_compile_options(simulation_core PRIVATE
    $<$<CONFIG:Release>:-O3 -march=native>
    $<$<CONFIG:Debug>:-g -O0>
)
