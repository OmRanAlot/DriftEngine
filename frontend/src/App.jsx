import React, { useState } from 'react';
import LandingTickerSelection from './screens/LandingTickerSelection';
import StockForecastDashboard from './screens/StockForecastDashboard';
import AdvancedForecastAnalysis from './screens/AdvancedForecastAnalysis';

function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');

  return (
    <div className="relative min-h-screen">
      {currentScreen === 'landing' && <LandingTickerSelection />}
      {currentScreen === 'dashboard' && <StockForecastDashboard />}
      {currentScreen === 'advanced' && <AdvancedForecastAnalysis />}
    </div>
  );
}

export default App;
