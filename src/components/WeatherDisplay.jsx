import React from "react";
import '../index.css';
import { useSelector } from 'react-redux';

function WeatherDisplay({ data }) {
  const mode = useSelector(state => state.theme.mode);
  
  if (!data || data.cod !== 200) {
    return <p className="text-red-500 font-semibold">No Data Available!</p>;
  }

  return (
    <div className={`mx-auto bg-transparent rounded-xl shadow-lg p-6 text-white font-sans
      ${mode === 'dark' ? 'bg-black text-black' : 'text-white'}`}
    >
      {/* Top section: icon and temperature side by side */}
      <div className="flex justify-center items-center space-x-6 mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@4x.png`}
          alt="weather icon"
          className="w-24 h-24"
        />
        <div className="text-6xl font-extrabold flex items-baseline">
          <span>{Math.round(data.main.temp)}</span>
          <span className="text-3xl ml-1">°C</span>
        </div>
      </div>

      {/* City name with vibrant gradient text */}
      <h2 className="text-center text-3xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-red-200">
        {data.name}, {data.sys?.country}
      </h2>

      {/* Additional details */}
      <div className="space-y-3 text-lg bg-opacity-20 rounded-lg p-4 shadow-inner">
        <p>
          <span className="font-semibold">Condition:</span>{" "}
          <span className="capitalize">{data.weather?.[0]?.description}</span>
        </p>
        <p>
          <span className="font-semibold">Humidity:</span> {data.main?.humidity}%
        </p>
        <p>
          <span className="font-semibold">Wind Speed:</span> {data.wind?.speed} m/s
        </p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
