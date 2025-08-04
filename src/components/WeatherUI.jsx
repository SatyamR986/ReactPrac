import SearchBox from './SearchBox';
import WeatherDisplay from './WeatherDisplay';
import bg from '../assets/bg-img.jpg';

function WeatherUI({ weather, onSearch }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="font-semibold underline italic text-gray-400 mb-10">Weather App</h1>
      <SearchBox onSearch={onSearch} />
      {weather && <WeatherDisplay data={weather} />}
    </div>
  );
}

export default WeatherUI;
