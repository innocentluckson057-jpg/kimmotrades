import React, { useState, useEffect } from 'react';

const MarketAnalytics = ({ data = {} }) => {
  const [timeframe, setTimeframe] = useState('1H');

  const analytics = {
    volatility: data.volatility || 2.5,
    trend: data.trend || 'Upward',
    support: data.support || 1.0800,
    resistance: data.resistance || 1.0850,
    volume: data.volume || '2.5M',
    rsi: data.rsi || 62.5,
    macd: data.macd || 'Bullish',
    adx: data.adx || 35
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Market Analytics</h3>
        <div className="space-x-2">
          {['5M', '15M', '1H', '4H', '1D'].map(tf => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded text-sm font-semibold transition ${
                timeframe === tf
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-xs text-gray-600 uppercase">Volatility</p>
          <p className="text-2xl font-bold text-blue-600">{analytics.volatility}%</p>
          <p className="text-xs text-gray-500 mt-1">
            {analytics.volatility > 2 ? '📈 High' : '📉 Low'}
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-xs text-gray-600 uppercase">Trend</p>
          <p className="text-xl font-bold text-green-600">{analytics.trend}</p>
          <p className="text-xs text-gray-500 mt-1">Momentum</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-xs text-gray-600 uppercase">RSI (14)</p>
          <p className="text-2xl font-bold text-purple-600">{analytics.rsi}</p>
          <p className="text-xs text-gray-500 mt-1">
            {analytics.rsi > 70 ? 'Overbought' : analytics.rsi < 30 ? 'Oversold' : 'Neutral'}
          </p>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="text-xs text-gray-600 uppercase">MACD</p>
          <p className="text-lg font-bold text-amber-600">{analytics.macd}</p>
          <p className="text-xs text-gray-500 mt-1">Signal</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-3">Support & Resistance</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Support Level:</span>
              <span className="font-semibold text-green-600">{analytics.support}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Resistance Level:</span>
              <span className="font-semibold text-red-600">{analytics.resistance}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Current Level:</span>
              <span className="font-semibold text-blue-600">1.0825</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-3">Volume & ADX</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Volume (24h):</span>
              <span className="font-semibold text-blue-600">{analytics.volume}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">ADX (14):</span>
              <span className="font-semibold text-purple-600">{analytics.adx}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Trend Strength:</span>
              <span className="font-semibold text-green-600">Strong</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-2">📊 Market Insight</h4>
        <p className="text-sm text-gray-700">
          Market is showing {analytics.trend.toLowerCase()} momentum with {analytics.volatility}% volatility.
          Current price is above support level at {analytics.support}. RSI indicates
          {analytics.rsi > 70 ? ' overbought conditions.' : analytics.rsi < 30 ? ' oversold conditions.' : ' neutral momentum.'}
          {analytics.macd === 'Bullish' ? ' MACD signals bullish trend continuation.' : ' MACD signals bearish trend.'}
        </p>
      </div>
    </div>
  );
};

export default MarketAnalytics;
