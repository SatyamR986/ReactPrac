import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [committedCity, setCommittedCity] = useState("kathmandu");
  const [liveCity, setLiveCity] = useState(null);
  const [weather, setWeather] = useState(null);

  const cityToFetch = liveCity || committedCity;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityToFetch}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Weather fetch failed:", err);
      }
    };

    if (cityToFetch?.trim()) fetchWeather();
  }, [cityToFetch]);

  return (
    <WeatherContext.Provider value={{
      weather,
      setLiveCity,
      setCommittedCity
    }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => useContext(WeatherContext);
