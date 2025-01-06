import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BloodPressureChart = ({ bloodpressure1 }) => {
  // Filter data for January 2025
  const filteredData = bloodpressure1.filter(bp => {
    const date = new Date(bp.CreatedDate);
    return date.getMonth() === 0 && date.getFullYear() === 2025; // January month (0) and 2025
  });
    //const date = new Date(bp.CreatedDate);

  const dates = filteredData.map(bp => bp.CreatedDate);
  const systolic = filteredData.map(bp => bp.Systolic);
  const diastolic = filteredData.map(bp => bp.Diastolic);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Systolic',
        data: systolic,
        fill: false,
        borderColor: 'red',
        tension: 0.1,
      },
      {
        label: 'Diastolic',
        data: diastolic,
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Blood Pressure Readings for January 2025',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'mmHg',
        },
      },
    },
  };

  return (
    <div>
      <h3>Blood Pressure Readings for January 2025</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default BloodPressureChart;
