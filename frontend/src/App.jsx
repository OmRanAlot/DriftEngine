import React, { useState } from 'react';
import LandingTickerSelection from './screens/LandingTickerSelection';
import StockForecastDashboard from './screens/StockForecastDashboard';
import MethodologyScreen from './screens/MethodologyScreen';

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
          onBack={() => setCurrentScreen('landing')}
          onMethodology={() => setCurrentScreen('methodology')}
        />
      )}
      {currentScreen === 'methodology' && (
        <MethodologyScreen onBack={() => setCurrentScreen(selectedTicker ? 'dashboard' : 'landing')} />
      )}
    </div>
  );
}

export default App;
