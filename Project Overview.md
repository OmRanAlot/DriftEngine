# Stock Trend Predictor — Project Analysis (v2)

## The Elevator Pitch

Gather historical price/volume data for a user-specified stock, compute statistical features and technical indicators in Python, use rule-based conditional logic to classify market regimes, feed regime-aware parameters into an enhanced Geometric Brownian Motion model with GARCH volatility, fat-tailed distributions, and jump-diffusion, run 10,000 Monte Carlo simulations in C++, and display probabilistic results on a polished frontend.

**Verdict: This is a strong project idea — with the enhancements outlined below, it's a genuinely impressive portfolio piece for quant/SWE internships.**

---

## 1. What's Sound About Your Approach

**Data pipeline (Python/pandas):** Totally standard and appropriate. 1,000 trading days (~4 years) is a solid window — long enough to capture different regimes (bull, bear, sideways) but not so long that the statistics become meaningless due to structural market changes.

**Monte Carlo simulation:** This is the bread and butter of quantitative finance. 10,000 paths is reasonable (some shops run 100k+, but 10k is fine for a project and will show clear convergence).

**C++ for the simulation engine:** This is the single most impressive architectural decision in your proposal. Any quant desk interviewer will notice this. It signals you understand that simulation-heavy workloads benefit from compiled languages, which is exactly how real trading systems are built (Python for orchestration, C/C++ for compute).

**Multi-language architecture:** Python ↔ C++ ↔ Frontend is a legitimate systems design pattern. This alone differentiates you from "I imported sklearn and called .fit()" projects.

---

## 2. The Core Problem: Vanilla GBM Won't Impress Anyone Who Knows Finance

Standard GBM assumes:

- **Constant drift (μ)** — the expected return doesn't change
- **Constant volatility (σ)** — the market is always equally uncertain
- **Log-normal returns** — no fat tails, no crashes
- **No memory** — today's move doesn't affect tomorrow's

Every single one of these assumptions is empirically false. And any quant interviewer knows it. So the real question is: **how do you enhance GBM to make it more realistic?**

---

## 3. Enhancements to GBM — What You're Implementing

### A. Regime-Dependent Parameters (instead of single μ and σ)

Instead of computing one mean and one stdev from 1,000 days, classify the market into regimes (e.g., low-vol bull, high-vol bear, sideways) and let your simulation switch between them.

- Use your technical indicators via **rule-based conditional logic** (not ML — see Section 5) to define regimes
- Each regime gets its own μ and σ
- The simulation probabilistically transitions between regimes using a transition matrix derived from historical regime frequency

This is the single highest-leverage enhancement. It directly addresses the "constant parameters" weakness and naturally incorporates your technical indicators in a principled way.

### B. GARCH(1,1) Volatility (instead of constant σ)

GARCH(1,1) models the well-documented phenomenon that volatility clusters — big moves follow big moves. Replace your constant σ with a GARCH process so that each simulation step updates its volatility based on recent simulated returns.

The GARCH(1,1) equation: `σ²(t) = ω + α·ε²(t-1) + β·σ²(t-1)`

Where ω is a baseline variance, α controls how much yesterday's shock matters, and β controls persistence of volatility. You fit ω, α, β from your historical data (Python's `arch` library does this trivially) and then apply the recursion inside your C++ simulation loop. Each regime can have its own GARCH parameters for even more realism.

### C. Fat-Tailed Distributions (Student's t instead of Normal)

The normal distribution dramatically underestimates extreme moves. Under a normal distribution, a daily move of 5+ standard deviations should happen roughly once every 14,000 years. In reality, the S&P 500 has had multiple such moves in a single decade — the 2010 Flash Crash, March 2020 COVID selloff, and countless individual stock earnings blowups.

If your Monte Carlo uses a normal distribution, your simulated "worst case" paths will be far too optimistic and your confidence intervals far too narrow. A Student's t-distribution with roughly 4–5 degrees of freedom naturally produces these fat tails. Implementation-wise, it's essentially a one-parameter swap in your C++ simulation engine — instead of sampling from `N(0,1)`, you sample from `t(ν)` and scale appropriately. You can fit ν from your historical return data by maximum likelihood estimation.

### D. Jump-Diffusion (Merton Model)

Add a Poisson-distributed "jump" component on top of the diffusion. This models sudden shocks — earnings surprises, Fed announcements, black swan events — that the continuous diffusion process can't capture.

The equation becomes: `dS = μS dt + σS dW + J·S dN`

Where `dN` is a Poisson process with intensity λ (average number of jumps per unit time) and `J` is the jump size drawn from a distribution (typically log-normal with its own mean and standard deviation). In practice, at each simulation step you roll a random number: if it's below λ·dt, a jump occurs and you multiply the price by `(1 + J)` where J is sampled from your jump size distribution. You estimate λ, jump mean, and jump stdev from historical data by identifying outlier returns that fall outside what GARCH would explain.

### What You're NOT Implementing (and Why)

**Mean-Reversion:** More relevant for pairs trading or modeling volatility itself than for simulating individual stock price paths over 30–90 day horizons. Adds complexity without proportional payoff for your use case.

**Heston Stochastic Volatility:** Industry standard for options pricing, but significantly more complex (you'd need to simulate two correlated stochastic processes). GARCH captures most of the same intuition — time-varying, clustering volatility — with a much simpler implementation. The incremental realism doesn't justify the complexity for this project.

---

## 4. Technical Indicators — The Full Set

Your indicators serve as **state descriptors** that feed into regime classification. They do NOT predict future returns — they characterize the current market environment so your model knows which parameters to use. Here is the recommended set of 8 indicators, each capturing a distinct dimension:

### Trend Direction

**SMA Crossovers (e.g., 50-day vs. 200-day SMA):** The classic trend indicator. When the short SMA is above the long SMA, the stock is in an uptrend; below means downtrend. The distance between them quantifies trend strength. Use for regime classification: a wide positive spread suggests a strong bull regime, a negative spread suggests bear.

**MACD (Moving Average Convergence Divergence):** Captures momentum and trend changes at a different timescale than SMA crossovers. Computed as the difference between the 12-day and 26-day EMA, with a 9-day EMA signal line. The MACD histogram (MACD minus signal line) is particularly useful — it detects when a trend is accelerating or decelerating, which maps directly to regime transition signals. A shrinking histogram during an uptrend is an early warning of a potential regime shift.

### Momentum

**RSI (Relative Strength Index, 14-day):** Measures the speed and magnitude of recent price changes on a 0–100 scale. Useful for regime classification not as a "buy/sell signal" but as a state descriptor: RSI above 70 with low volatility suggests an overextended low-vol bull regime; RSI below 30 with high volatility suggests a capitulation/high-vol bear regime. Middling RSI (40–60) with no strong trend suggests a sideways regime.

### Volatility State

**Bollinger Band Width:** The distance between the upper and lower Bollinger Bands (typically 2 standard deviations from a 20-day SMA), expressed as a percentage of the middle band. This directly measures realized volatility in a normalized way. Narrow bands (low BBand width) mean the market is quiet and compressed — often a precursor to a volatility expansion. Wide bands mean you're already in a high-vol regime. This is one of your most important regime classification inputs.

**ATR (Average True Range, 14-day):** Measures recent volatility in absolute price terms. Unlike standard deviation of close-to-close returns, ATR captures intraday range and gap moves (the "true range" accounts for the gap between yesterday's close and today's open/high/low). This gives a more complete picture of actual volatility the stock is experiencing. Use it alongside BBand width — they measure similar things but ATR catches gaps that BBand width misses.

**Historical Volatility Ratio (Short-term / Long-term):** Compare short-term realized volatility (e.g., 10-day standard deviation of returns) to longer-term realized volatility (e.g., 60-day). When this ratio spikes well above 1.0, short-term vol is elevated relative to the recent norm — you're likely entering or already in a high-volatility regime. When it's below 1.0, the market is calmer than its recent average. This is essentially a mean-reversion signal for volatility itself, and it's one of the cleanest inputs for regime boundary detection.

### Volume Confirmation

**OBV (On-Balance Volume):** A cumulative volume indicator that adds volume on up days and subtracts volume on down days. The absolute value doesn't matter — what matters is the trend of OBV relative to the trend of price. If price is rising and OBV is rising, the uptrend has volume conviction (strong bull regime). If price is rising but OBV is flat or falling, the uptrend lacks participation and is more fragile (weak bull / potential regime transition). OBV divergences from price are one of the most reliable signals that a regime is about to change.

### What You're NOT Including (and Why)

**Ichimoku Clouds, Elliott Wave, Fibonacci retracements:** These add complexity without clear statistical grounding. In an interview, they invite skepticism more than respect. Stick to indicators with well-understood mathematical definitions.

---

## 5. Regime Classification — Rule-Based Conditionals (Not ML)

### Why Rules Instead of ML

Rule-based conditional logic is the right choice here for several reasons:

**Transparency:** You can walk an interviewer through exactly why each rule exists and what market behavior it captures. "If BBand width is in the bottom quartile of its historical range and RSI is between 40–60, we classify this as a low-vol sideways regime" is a clear, defensible statement.

**No training data dependency:** ML-based classification introduces questions about train/test splits, overfitting, generalization across market regimes, and hyperparameter tuning — none of which add value when you have a manageable number of well-understood indicators.

**Domain alignment:** The indicators you've chosen have known, interpretable relationships to market states. Writing rules for them demonstrates that you understand what each indicator actually means, rather than outsourcing that understanding to a model.

**Simplicity:** Fewer failure modes, easier to debug, easier to extend.

### Suggested Regime Definitions

You need to define regimes that are mutually exclusive and collectively exhaustive. Here is a recommended set of 4 regimes with example conditional logic:

**Regime 1 — Low-Volatility Bull:**
Conditions: 50-day SMA > 200-day SMA (uptrend), BBand width below historical median, vol ratio < 1.0, OBV trending in same direction as price.
Characteristics: Steady upward drift, low σ, low jump probability. This is "the market is calmly grinding higher."

**Regime 2 — High-Volatility Bull:**
Conditions: 50-day SMA > 200-day SMA, BUT BBand width above historical median OR vol ratio > 1.2. RSI potentially elevated (>65).
Characteristics: Positive drift but elevated σ, moderate jump probability. This is "the market is rallying aggressively or recovering from a dip with big swings."

**Regime 3 — High-Volatility Bear:**
Conditions: 50-day SMA < 200-day SMA, BBand width above historical median, vol ratio > 1.2, RSI < 35. OBV diverging negatively from price.
Characteristics: Negative drift, high σ, high jump probability (with negative jump bias). This is "the market is selling off with panic."

**Regime 4 — Sideways / Low-Volatility Consolidation:**
Conditions: SMA crossover is tight (small spread), RSI between 40–60, BBand width near or below median, MACD histogram oscillating around zero.
Characteristics: Near-zero drift, moderate σ, low jump probability. This is "the market is going nowhere and waiting for a catalyst."

### Transition Matrix

From your 1,000 days of historical data, classify each day into a regime using the rules above. Then count how often the market transitioned from each regime to every other regime on the next day. This gives you a 4×4 transition probability matrix. In your C++ simulation, at each time step, you roll against the transition matrix to decide whether the simulation stays in the current regime or switches — and if it switches, the parameters (μ, σ, GARCH coefficients, jump intensity) all change accordingly.

### Tuning the Rules

The exact thresholds (e.g., "vol ratio > 1.2" or "RSI < 35") should be calibrated from your historical data, not hardcoded from intuition. Compute the distribution of each indicator over your 1,000-day window and set thresholds at meaningful percentiles (e.g., "BBand width above the 65th percentile of its historical range"). This makes the rules adaptive to each stock — a "high volatility" regime for a biotech stock looks very different from one for a utility stock.

---

## 6. Detailed System Workflow

This is the complete pipeline from user input to output, with every step described:

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (UI)                        │
│  User enters a ticker symbol and forecast horizon       │
│  (e.g., AAPL, 60 days)                                 │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│              STEP 1: DATA INGESTION                     │
│              Python (yfinance or similar)                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Fetch 1,000 trading days of historical data:           │
│    - Date                                               │
│    - Open, High, Low, Close (OHLC)                      │
│    - Adjusted Close                                     │
│    - Volume                                             │
│                                                         │
│  Compute daily log returns:                             │
│    r(t) = ln(Close(t) / Close(t-1))                     │
│                                                         │
│  Store as a pandas DataFrame for downstream use.        │
│                                                         │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│          STEP 2: STATISTICAL FEATURES                   │
│          Python (pandas / numpy)                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Base statistics (computed over full 1000-day window):  │
│    - Mean daily log return (μ_global)                   │
│    - Standard deviation of daily log returns (σ_global) │
│    - Variance (σ²)                                      │
│    - Skewness and kurtosis of return distribution       │
│                                                         │
│  These serve as sanity checks and fallback values.      │
│  The actual simulation will use regime-specific and     │
│  GARCH-adjusted parameters, not these global values.    │
│                                                         │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│        STEP 3: TECHNICAL INDICATOR COMPUTATION          │
│        Python (pandas / ta-lib or manual)               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Trend Direction:                                       │
│    - 50-day SMA and 200-day SMA                         │
│      → SMA spread = (SMA50 - SMA200) / SMA200          │
│    - MACD (12, 26, 9)                                   │
│      → MACD line, signal line, histogram                │
│                                                         │
│  Momentum:                                              │
│    - RSI (14-day)                                       │
│                                                         │
│  Volatility State:                                      │
│    - Bollinger Band Width (20-day, 2σ)                  │
│      → BBW = (Upper - Lower) / Middle                   │
│    - ATR (14-day Average True Range)                    │
│    - Historical Volatility Ratio                        │
│      → HVR = σ_10day / σ_60day                          │
│                                                         │
│  Volume Confirmation:                                   │
│    - OBV (On-Balance Volume)                            │
│      → OBV trend direction vs. price trend direction    │
│                                                         │
│  All indicators are computed for every day in the       │
│  1,000-day window (where sufficient lookback exists).   │
│                                                         │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│        STEP 4: REGIME CLASSIFICATION                    │
│        Python (rule-based conditional logic)            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  4a. Calibrate thresholds from historical data:         │
│    - Compute percentile distributions of each           │
│      indicator over the 1,000-day window                │
│    - Set regime boundaries at meaningful percentiles    │
│      (e.g., BBW > 65th percentile = "high vol")        │
│    - This makes thresholds adaptive per stock           │
│                                                         │
│  4b. Classify each historical day into a regime:        │
│                                                         │
│    Regime 1 — Low-Vol Bull:                             │
│      SMA50 > SMA200, BBW < median, HVR < 1.0,          │
│      OBV confirming price trend                         │
│                                                         │
│    Regime 2 — High-Vol Bull:                            │
│      SMA50 > SMA200, BBW > median OR HVR > 1.2,        │
│      RSI > 65 possible                                  │
│                                                         │
│    Regime 3 — High-Vol Bear:                            │
│      SMA50 < SMA200, BBW > median, HVR > 1.2,          │
│      RSI < 35, OBV diverging from price                 │
│                                                         │
│    Regime 4 — Sideways / Consolidation:                 │
│      SMA spread tight, RSI 40–60, BBW ≤ median,        │
│      MACD histogram oscillating near zero               │
│                                                         │
│  4c. For each regime, compute regime-specific params:   │
│    - μ_regime: mean daily log return during that regime  │
│    - σ_regime: stdev of daily log returns in regime     │
│    - GARCH(1,1) fit per regime (ω, α, β)               │
│    - Student's t degrees of freedom (ν) per regime      │
│    - Jump parameters per regime:                        │
│        λ (jump intensity), μ_J (mean jump size),        │
│        σ_J (jump size stdev)                            │
│      Estimated by identifying outlier returns beyond    │
│      what GARCH predicts within that regime             │
│                                                         │
│  4d. Build the 4×4 transition probability matrix:       │
│    - Count day-over-day regime transitions in the       │
│      historical data                                    │
│    - Normalize each row to get transition probs         │
│    - Example: P(stay in Low-Vol Bull) = 0.92,           │
│      P(Low-Vol Bull → Sideways) = 0.05, etc.           │
│                                                         │
│  4e. Classify the CURRENT day (most recent data):       │
│    - Determine which regime the stock is in RIGHT NOW   │
│    - This is the starting regime for the simulation     │
│                                                         │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│      STEP 5: PACKAGE PARAMETERS FOR C++ ENGINE          │
│      Python → C++ (via pybind11 or JSON/binary file)    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Serialize and pass to C++:                             │
│    - Current stock price (S₀)                           │
│    - Current regime (starting state)                    │
│    - 4×4 transition probability matrix                  │
│    - Per-regime parameter sets (×4):                    │
│        μ, ω, α, β (GARCH), ν (t-dist df),             │
│        λ, μ_J, σ_J (jump params)                       │
│    - Simulation config:                                 │
│        num_paths = 10,000                               │
│        num_steps = forecast horizon (e.g., 60 days)     │
│        dt = 1/252 (one trading day)                     │
│                                                         │
│  Interface options (pick one):                          │
│    - pybind11: C++ compiled as Python extension module   │
│      (preferred — seamless, fast, impressive on resume) │
│    - subprocess + JSON: Python writes params to JSON,   │
│      calls C++ executable, reads results JSON           │
│      (simpler but less elegant)                         │
│    - subprocess + binary: Same but binary format        │
│      (faster I/O, more complex serialization)           │
│                                                         │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│      STEP 6: MONTE CARLO SIMULATION ENGINE              │
│      C++ (the computational core)                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  For each of 10,000 simulation paths:                   │
│                                                         │
│    Initialize:                                          │
│      S = S₀ (starting price)                            │
│      current_regime = starting regime from Python       │
│      σ² = σ²_regime (initial GARCH variance)            │
│                                                         │
│    For each time step t = 1 to num_steps:               │
│                                                         │
│      1. REGIME TRANSITION                               │
│         Draw uniform random u ~ U(0,1)                  │
│         Use transition matrix row for current_regime    │
│         to determine next regime                        │
│         If regime changes → load new parameter set      │
│                                                         │
│      2. GARCH VOLATILITY UPDATE                         │
│         σ²(t) = ω + α·ε²(t-1) + β·σ²(t-1)             │
│         where ε(t-1) is the previous step's shock       │
│         σ(t) = sqrt(σ²(t))                              │
│                                                         │
│      3. FAT-TAILED RANDOM SHOCK                         │
│         Draw z from Student's t-distribution with       │
│         ν degrees of freedom (current regime's ν)       │
│         Scale: ε(t) = σ(t) · z · sqrt((ν-2)/ν)         │
│         (scaling ensures variance = σ²(t))              │
│                                                         │
│      4. JUMP COMPONENT                                  │
│         Draw uniform random u ~ U(0,1)                  │
│         If u < λ·dt:                                    │
│           Jump occurs                                   │
│           Draw J ~ N(μ_J, σ_J) for jump size            │
│         Else:                                           │
│           J = 0                                         │
│                                                         │
│      5. PRICE UPDATE                                    │
│         log_return = (μ - 0.5·σ²(t))·dt + ε(t)·√dt + J │
│         S(t) = S(t-1) · exp(log_return)                 │
│                                                         │
│    Store the full path S(0), S(1), ..., S(T)            │
│                                                         │
│  Output: 10,000 × (num_steps+1) matrix of prices       │
│  Also compute on the C++ side (avoid re-iteration):     │
│    - Terminal price distribution                        │
│    - Path-wise max drawdown                             │
│    - Per-step percentiles (5th, 25th, 50th, 75th, 95th)│
│                                                         │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│      STEP 7: RESULTS AGGREGATION                        │
│      Python (numpy / scipy)                             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Receive simulation results from C++ and compute:       │
│                                                         │
│  Probability distributions:                             │
│    - Distribution of terminal prices (histogram + KDE)  │
│    - Probability of positive return over horizon        │
│    - Probability of exceeding X% return                 │
│    - Probability of drawdown exceeding Y%               │
│                                                         │
│  Confidence intervals:                                  │
│    - 50% CI (25th–75th percentile) at each time step    │
│    - 90% CI (5th–95th percentile) at each time step     │
│    - Median path                                        │
│                                                         │
│  Risk metrics:                                          │
│    - Value at Risk (VaR) at 95% and 99% confidence      │
│    - Conditional VaR (Expected Shortfall)               │
│    - Maximum drawdown distribution                      │
│    - Probability of hitting stop-loss levels            │
│                                                         │
│  Current regime context:                                │
│    - What regime the stock is currently in              │
│    - Historical statistics for that regime              │
│    - Most likely regime transitions over the horizon    │
│                                                         │
└──────────────────────┬──────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────┐
│      STEP 8: FRONTEND DISPLAY                           │
│      (React / Next.js / or similar)                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Main visualization — Fan Chart:                        │
│    - X-axis: trading days into the future               │
│    - Y-axis: stock price                                │
│    - Shaded bands for 50% and 90% confidence intervals  │
│    - Median path as a solid line                        │
│    - Current price marked                               │
│                                                         │
│  Terminal price distribution:                           │
│    - Histogram / density plot of final day prices       │
│    - Marked percentiles and current price reference     │
│                                                         │
│  Risk dashboard:                                        │
│    - VaR and CVaR displayed prominently                 │
│    - Probability of gain vs. loss                       │
│    - Max drawdown distribution                          │
│                                                         │
│  Regime context panel:                                  │
│    - Current regime label and description               │
│    - Indicator values that determined the regime        │
│    - Transition probabilities for upcoming regime       │
│      shifts                                             │
│                                                         │
│  Disclaimer:                                            │
│    - "This is a probabilistic scenario tool, not a      │
│      price prediction. Past statistical patterns do     │
│      not guarantee future results."                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 7. What's Not Possible / What to Be Honest About

**You will not predict stock prices.** Full stop. No model does this reliably. Your project should be framed as **"probabilistic scenario generation and risk quantification,"** NOT as **"I built a stock predictor."** The distinction matters enormously:

- Bad framing: "My model predicts AAPL will be at $230 in 30 days"
- Good framing: "Given current market conditions, my model estimates a 70% probability that AAPL stays within $200–$260 over 30 days, with a 5% probability of a drawdown exceeding 15%"

The second framing is exactly how real quant risk teams think. It shows maturity.

**Your technical indicators don't add alpha.** SMAs, RSI, and Bollinger Bands are well-known, fully priced in, and don't predict future returns in liquid markets. But they DO characterize the current state of the market (trending vs. mean-reverting, high-vol vs. low-vol), which is useful for parameterizing your model. Frame them as **state descriptors**, not **predictive signals**.

---

## 8. Internship Appeal Rating

| Dimension | Rating | Notes |
|---|---|---|
| **Quant Finance Relevance** | 9.5/10 | Monte Carlo, GBM, GARCH, regime-switching, jump-diffusion — this is serious quant work |
| **Software Engineering** | 9/10 | Multi-language architecture, C++ compute with pybind11, Python orchestration, frontend |
| **Systems Design** | 8.5/10 | Clean separation of concerns, well-defined data interfaces between components |
| **Originality** | 7.5/10 | Monte Carlo stock simulation is common — the layered enhancements and rule-based regime framework differentiate you significantly |
| **Interview Talkability** | 9.5/10 | Every single component invites deep follow-up questions; you can go deep on stochastic processes, volatility modeling, systems architecture, or frontend design depending on the interviewer |
| **Overall** | **9/10** | This is a genuinely impressive project |

### What Would Push It to a 10
- Add a backtesting component: "How well did my 30-day confidence intervals capture actual price movement historically? What was the empirical coverage of my 90% CI?"
- Use pybind11 for the Python ↔ C++ interface (not subprocess)
- Deploy the frontend with real-time data and let someone actually use it
- Compare your enhanced model's output to vanilla GBM side-by-side to visually demonstrate why the enhancements matter

---

## 9. Final Thoughts

Your instinct is right — the basic GBM random walk is a starting point, not an endpoint. The project becomes impressive when you acknowledge GBM's limitations and systematically address them with regime-switching, GARCH, fat tails, and jump-diffusion. The C++ simulation engine is a great architectural choice. The rule-based regime classification keeps the system transparent and explainable while still being sophisticated.

The key is framing: you're building a **probabilistic risk scenario tool**, not a **stock predictor**. That distinction is the difference between sounding like a student and sounding like someone who belongs on a quant desk.
