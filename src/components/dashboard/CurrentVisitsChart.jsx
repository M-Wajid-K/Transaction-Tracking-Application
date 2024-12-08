import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CurrentVisitsChart = () => {
  const data = {
    labels: ['America', 'Asia', 'Europe', 'Africa'],
    datasets: [
      {
        data: [27.7, 34.7, 9.2, 28.4],
        backgroundColor: [
          '#1a75ff',
          '#00bfff',
          '#ffd700',
          '#ff4d4d',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Current Visits</h2>
      <div className="h-80">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default CurrentVisitsChart;
