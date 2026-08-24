import React, { useState, useEffect } from 'react';
import { Bell, AlertCircle, CheckCircle, Info, X } from 'lucide-react';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Trade Executed',
      message: 'EURUSD EVEN prediction executed at $100',
      timestamp: new Date(Date.now() - 5 * 60000)
    },
    {
      id: 2,
      type: 'alert',
      title: 'High Volatility Alert',
      message: 'Market volatility increased to 4.5% on GBPUSD',
      timestamp: new Date(Date.now() - 15 * 60000)
    },
    {
      id: 3,
      type: 'info',
      title: 'Match Starting Soon',
      message: 'Manchester United vs Liverpool match starts in 2 hours',
      timestamp: new Date(Date.now() - 30 * 60000)
    }
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'alert':
        return <AlertCircle className="text-red-500" size={20} />;
      case 'info':
        return <Info className="text-blue-500" size={20} />;
      default:
        return <Bell className="text-gray-500" size={20} />;
    }
  };

  const formatTime = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'Now';
    if (minutes < 60) return `${minutes}m ago`;
    return `${Math.floor(minutes / 60)}h ago`;
  };

  return (
    <div className="fixed bottom-4 right-4 space-y-3 w-96 max-h-96 overflow-y-auto z-50">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`bg-white rounded-lg shadow-lg p-4 border-l-4 flex gap-3 animate-slideIn ${
            notification.type === 'success'
              ? 'border-green-500'
              : notification.type === 'alert'
              ? 'border-red-500'
              : 'border-blue-500'
          }`}
        >
          <div className="flex-shrink-0">{getIcon(notification.type)}</div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800">{notification.title}</h4>
            <p className="text-sm text-gray-600">{notification.message}</p>
            <p className="text-xs text-gray-500 mt-1">{formatTime(notification.timestamp)}</p>
          </div>
          <button
            onClick={() => removeNotification(notification.id)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationCenter;
