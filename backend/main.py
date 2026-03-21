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

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import simulation

app = FastAPI(
    title="DriftEngine API",
    description="Probabilistic stock scenario generation via Monte Carlo simulation",
    version="0.1.0"
)

# TODO: Configure allowed origins for CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
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