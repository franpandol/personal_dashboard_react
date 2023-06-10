import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';

// Import the necessary Moment.js adapter
import 'chartjs-adapter-moment';

const BitcoinPriceTracker = () => {
  const [bitcoinPriceData, setBitcoinPriceData] = useState(null);

  const chartRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        );
        const bitcoinPriceData = response.data.bitcoin;
        setBitcoinPriceData(bitcoinPriceData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (bitcoinPriceData) {
      createChart();
    }
  }, [bitcoinPriceData]);

  const createChart = () => {
    // Destroy existing chart instance if it exists
    if (chartRef.current) {
        chartRef.current.destroy();
      }
    Chart.register(...registerables);

    const ctx = document.getElementById('bitcoinPriceChart').getContext('2d');

    const labels = ['Bitcoin Price'];
    const data = [bitcoinPriceData.usd];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Bitcoin Price',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Price (USD)',
            },
          },
        },
      },
    });
  };

  return (
    <div>
      <h2>Bitcoin Price Tracker</h2>
      <canvas id="bitcoinPriceChart" width="400" height="200"></canvas>
    </div>
  );
};

export default BitcoinPriceTracker;
