import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';

const PortfolioStats = () => {
  const [stats, setStats] = useState({
    balance: 10000,
    invested: 2450,
    profit: 1234.50,
    winRate: 78.5,
    totalTrades: 154,
    activePositions: 3
  });

  const profitPercentage = ((stats.profit / stats.balance) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6 p-6 bg-gray-900">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm font-semibold opacity-90">Balance</p>
          <DollarSign size={20} />
        </div>
        <p className="text-2xl font-bold">${stats.balance.toLocaleString()}</p>
        <p className="text-xs opacity-75 mt-1">Account Value</p>
      </div>

      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm font-semibold opacity-90">Profit</p>
          <TrendingUp size={20} />
        </div>
        <p className="text-2xl font-bold">${stats.profit.toFixed(2)}</p>
        <p className="text-xs opacity-75 mt-1">+{profitPercentage}%</p>
      </div>

      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm font-semibold opacity-90">Win Rate</p>
          <Target size={20} />
        </div>
        <p className="text-2xl font-bold">{stats.winRate}%</p>
        <p className="text-xs opacity-75 mt-1">Success Rate</p>
      </div>

      <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm font-semibold opacity-90">Total Trades</p>
          <Target size={20} />
        </div>
        <p className="text-2xl font-bold">{stats.totalTrades}</p>
        <p className="text-xs opacity-75 mt-1">All Time</p>
      </div>

      <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm font-semibold opacity-90">Invested</p>
          <TrendingDown size={20} />
        </div>
        <p className="text-2xl font-bold">${stats.invested.toLocaleString()}</p>
        <p className="text-xs opacity-75 mt-1">Active Capital</p>
      </div>

      <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm font-semibold opacity-90">Active</p>
          <Target size={20} />
        </div>
        <p className="text-2xl font-bold">{stats.activePositions}</p>
        <p className="text-xs opacity-75 mt-1">Open Trades</p>
      </div>
    </div>
  );
};

export default PortfolioStats;
