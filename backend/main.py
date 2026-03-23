# main.py — FastAPI application entry point
#
# Responsibilities:
#   - Create the FastAPI app instance
#   - Configure CORS to allow requests from http://localhost:5173 (Vite dev server)
#   - Register routers (simulation router)
#   - Add health check endpoint: GET /health → {"status": "ok"}
#
# Run with:
#   uvicorn main:app --reload --port 8000
#
# TODO: Implement CORS middleware, register routers/simulation.py

import logging
import os
import sys

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(name)s %(levelname)s %(message)s",
)

sys.path.insert(0, os.path.normpath(
    os.path.join(os.path.dirname(__file__), '..', 'simulation', 'build')
))

# MinGW runtime DLLs are required for the pybind11 module on Windows (built with GCC).
if sys.platform == "win32" and hasattr(os, "add_dll_directory"):
    os.add_dll_directory("C:/mingw64/bin")

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import simulation

app = FastAPI(
    title="DriftEngine API",
    description="Probabilistic stock scenario generation via Monte Carlo simulation",
    version="0.1.0"
)

# TODO: Configure allowed origins for CORS
_default_origins = "http://localhost:5173"
_raw_origins = os.environ.get("ALLOWED_ORIGINS", _default_origins)
allowed_origins = [o.strip() for o in _raw_origins.split(",") if o.strip()] + ["https://drift-engine.vercel.app"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(simulation.router)


@app.get("/health")
def health_check():
    return {"status": "ok"}



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000, reload=True)