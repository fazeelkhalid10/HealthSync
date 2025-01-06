import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


const BloodSugarChart = ({ bloodsugar1 }) => {
    // Filter data for January 2025
    const filteredData = bloodsugar1.filter(bs => {
      const date = new Date(bs.CreatedDate);
      return date.getMonth() === 0 && date.getFullYear() === 2025; // January month (0) and 2025
    });
  
    const dates = filteredData.map(bs => bs.CreatedDate);
    const bloodSugarLevels = filteredData.map(bs => bs.BloodSugarLevel);
  
    const data = {
      labels: dates,
      datasets: [
        {
          label: 'Blood Sugar Level',
          data: bloodSugarLevels,
          fill: false,
          borderColor: 'green',
          tension: 0.1,
        }
      ]
    };
  
    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Blood Sugar Readings for January 2025',
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
            text: 'Blood Sugar Level (mg/dL)',
          },
        },
      },
    };
  
    return (
      <div>
        <h3>Blood Sugar Readings for January 2025</h3>
        <Line data={data} options={options} />
      </div>
    );
  };
  
  export default BloodSugarChart;
  