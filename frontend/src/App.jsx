import React, { useState, useEffect } from 'react';
import LandingTickerSelection from './screens/LandingTickerSelection';
import StockForecastDashboard from './screens/StockForecastDashboard';
import MethodologyScreen from './screens/MethodologyScreen';
import { log } from '@/lib/logger';

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [selectedTicker, setSelectedTicker] = useState(null);
  const [horizonDays, setHorizonDays] = useState(60);
  const [numPaths, setNumPaths] = useState(10000);

  useEffect(() => { log.boot() }, [])

  const navigate = (to, meta = {}) => {
    log.screenTransition(currentScreen, to, meta)
    setCurrentScreen(to)
  }

  const handleTickerSelect = (ticker, horizon, paths) => {
    log.tickerSelected(ticker, horizon ?? horizonDays, paths ?? numPaths)
    setSelectedTicker(ticker);
    if (horizon) setHorizonDays(horizon);
    if (paths) setNumPaths(paths);
    navigate('dashboard', { ticker, horizon_days: horizon ?? horizonDays, num_paths: paths ?? numPaths });
  };

  return (
    <div className="relative min-h-screen">
      {currentScreen === 'landing' && (
        <LandingTickerSelection
          onTickerSelect={handleTickerSelect}
          onMethodology={() => setCurrentScreen('methodology')}
        />
      )}
      {currentScreen === 'dashboard' && (
        <StockForecastDashboard
          ticker={selectedTicker}
          horizonDays={horizonDays}
          numPaths={numPaths}
          onBack={() => navigate('landing')}
          onMethodology={() => navigate('methodology')}
        />
      )}
      {currentScreen === 'methodology' && (
        <MethodologyScreen onBack={() => navigate(selectedTicker ? 'dashboard' : 'landing')} />
      )}
    </div>
  );
}

export default App;
