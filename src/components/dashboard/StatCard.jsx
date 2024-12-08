import React from 'react';

const StatCard = ({ icon, title, value, bgColor }) => {
  return (
    <div className={`p-6 rounded-lg ${bgColor}`}>
      <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-sm opacity-80">{title}</div>
    </div>
  );
};

export default StatCard;
