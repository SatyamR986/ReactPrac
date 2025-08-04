import { useEffect, useState } from 'react';
import WeatherUI from './WeatherUI';
import '../index.css';


function WeatherContainer() {
  const [city, setCity] = useState('Kathmandu');
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();
        setWeather(data);
        console.log(data);
      } catch (err) {
        console.error('Error fetching weather:', err);
      }
    }

    if (city) fetchWeather();
  }, [city, apiKey]);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return <WeatherUI weather={weather} onSearch={handleSearch} />;
}

export default WeatherContainer;
