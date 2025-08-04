import React from "react";
import '../index.css';


const pClass = "p-2 text-2xl text-black border-transparent hover:bg-gray-600 hover:border-black hover:text-white";
function WeatherDisplay({ data }) {
    if (!data || data.cod !== 200) {
        return <p>No Data Available!</p>;
    }

    return (
        <div className="bg-gray-500 p-4 rounded shadow-md weatherinfo">
            <h2 className="text-3xl font-bold underline text-black hover:bg-transparent city p-2">{data.name}, {data.sys?.country}</h2>
            <p className={pClass}>Temperature: {data.main.temp} C</p>
            <p className={pClass}>
                Condition: {data.weather?.[0]?.description}
                <img
                    src={`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@2x.png`}
                    alt="weather icon"
                    className="inline-block w-8 h-8 ml-2 align-middle"
                />
            </p>

            <p className={pClass}>Humidity: {data.main?.humidity}%</p>
            <p className={pClass}>Wind Speed: {data.wind?.speed} m/s</p>
        </div>
    )
}

export default WeatherDisplay;