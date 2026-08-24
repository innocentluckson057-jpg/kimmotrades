import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const TradeCard = ({ prediction, onTrade }) => {
  const [amount, setAmount] = useState(10);
  const [tradeStatus, setTradeStatus] = useState(null);

  const handleTrade = () => {
    setTradeStatus('pending');
    setTimeout(() => {
      setTradeStatus('success');
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{prediction.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{prediction.description}</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-green-600">{prediction.confidence}%</div>
          <p className="text-xs text-gray-500">Confidence</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {prediction.options.map((option, idx) => (
          <button
            key={idx}
            className={`py-2 px-3 rounded-lg font-semibold text-sm transition ${
              option.selected
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {option.label}
            <p className="text-xs font-normal">{option.probability}%</p>
          </button>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Trade Amount: ${amount}
        </label>
        <input
          type="range"
          min="1"
          max="1000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full"
        />
      </div>

      <button
        onClick={handleTrade}
        disabled={tradeStatus === 'pending'}
        className={`w-full py-2 rounded-lg font-bold transition ${
          tradeStatus === 'success'
            ? 'bg-green-500 text-white'
            : tradeStatus === 'pending'
            ? 'bg-yellow-500 text-white'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
        }`}
      >
        {tradeStatus === 'pending' && 'Processing...'}
        {tradeStatus === 'success' && '✓ Trade Executed'}
        {!tradeStatus && `Place Trade - $${amount}`}
      </button>

      {tradeStatus === 'success' && (
        <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
          <CheckCircle className="text-green-600" size={20} />
          <span className="text-sm text-green-800">Trade placed successfully!</span>
        </div>
      )}
    </div>
  );
};

export default TradeCard;
