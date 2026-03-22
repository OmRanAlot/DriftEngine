import React, { useState } from 'react';
import LandingTickerSelection from './screens/LandingTickerSelection';
import StockForecastDashboard from './screens/StockForecastDashboard';

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [selectedTicker, setSelectedTicker] = useState(null);
  const [horizonDays, setHorizonDays] = useState(60);
  const [numPaths, setNumPaths] = useState(10000);

  const handleTickerSelect = (ticker, horizon, paths) => {
    setSelectedTicker(ticker);
    if (horizon) setHorizonDays(horizon);
    if (paths) setNumPaths(paths);
    setCurrentScreen('dashboard');
  };

  return (
    <div className="relative min-h-screen">
      {currentScreen === 'landing' && (
        <LandingTickerSelection onTickerSelect={handleTickerSelect} />
      )}
      {currentScreen === 'dashboard' && (
        <StockForecastDashboard
          ticker={selectedTicker}
          horizonDays={horizonDays}
          numPaths={numPaths}
          onBack={() => setCurrentScreen('landing')}
        />
      )}
    </div>
  );
}

export default App;
