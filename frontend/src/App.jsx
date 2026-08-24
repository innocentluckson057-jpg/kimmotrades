import React from 'react';
import Dashboard from './components/Dashboard';
import PortfolioStats from './components/PortfolioStats';
import NotificationCenter from './components/NotificationCenter';
import './App.css';

function App() {
  return (
    <div className="App">
      <PortfolioStats />
      <Dashboard />
      <NotificationCenter />
    </div>
  );
}

export default App;
