# ── Stage 1: Build the C++ simulation module ──────────────────────────────────
FROM python:3.11-slim AS builder

RUN apt-get update && apt-get install -y \
    cmake \
    g++ \
    git \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Install pybind11 so CMake can find it via `python -m pybind11 --cmakedir`
RUN pip install pybind11==2.13.1

WORKDIR /build

COPY simulation/ ./simulation/

RUN cd simulation && \
    mkdir build && \
    cd build && \
    cmake .. -DCMAKE_BUILD_TYPE=Release && \
    cmake --build . --target drift_engine_sim --config Release

# ── Stage 2: Runtime image ─────────────────────────────────────────────────────
FROM python:3.11-slim

WORKDIR /app

# Copy the compiled .so module from the builder stage
COPY --from=builder /build/simulation/build/ ./simulation/build/

# Install Python dependencies
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source
COPY backend/ ./backend/

WORKDIR /app/backend

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
