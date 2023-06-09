import React, { useEffect, useState } from 'react';
import './StatsComponent.css'
import axios from 'axios';

const StatsComponent = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8087/stats')
      .then(response => { 
        return response.data
      })
      .then((data) => setStats(data))
      .catch((error) => console.log('Error fetching stats:', error));
  }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }
  const [firstDisk] = Object.entries(stats.disk); // Get the first element of stats.disk

  return (
    <div>
      <h4>System Statistics</h4>
  
      <div className="horizontal-container">
        <div className="stat-container">
          <h4>CPU</h4>
          <p>Model: {stats.cpu.model}</p>
          <p>Cores: {stats.cpu.cores}</p>
        </div>
  
        <div className="stat-container">
          <h4>Memory</h4>
          <p>Total: {formatSize(stats.memory.total)}</p>
          <p>Available: {formatSize(stats.memory.available)}</p>
          <p>Used: {formatSize(stats.memory.used)}</p>
        </div>

        <div className="disk-container">
        <h4>Disk Usage</h4>
          {firstDisk && (
            <div key={firstDisk[0]} className="disk-stats">
              <h4>{firstDisk[0]}</h4>
              <p>Total: {formatSize(firstDisk[1].total)}</p>
              <p>Free: {formatSize(firstDisk[1].free)}</p>
              <p>Used: {formatSize(firstDisk[1].used)}</p>
            </div>
          )}
        </div>
      </div>
  
     
    </div>
  );
};

// Helper function to format size in bytes to a human-readable format
const formatSize = (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
};

export default StatsComponent;
