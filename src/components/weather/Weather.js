import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Import the CSS file

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/weather')
      .then(response => {
        console.log(response);
        const parsedData = JSON.parse(response.data);
        setWeatherData(parsedData);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <div className="Weather">
      <h1>Weather App</h1>
      {weatherData ? (
        <div className="weather-container">
          <h2>{weatherData.name}</h2>
          <div className="weather-details">
            <p>
              Temperature: {Math.round(weatherData.main.temp)}°C
            </p>
            <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind speed: {weatherData.wind.speed} m/s</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Weather;
