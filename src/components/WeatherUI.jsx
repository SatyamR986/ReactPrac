import SearchBox from './SearchBox';
import WeatherDisplay from './WeatherDisplay';
import { useWeather } from './WeatherContext';
import { useSelector } from 'react-redux';

function WeatherUI() {
  const { weather, setLiveCity, setCommittedCity } = useWeather();
  const mode = useSelector(state => state.theme.mode);

  return (
    <div>
      <div className={`flex flex-row items-center justify-center p-6 rounded-lg shadow-lg
      ${mode === 'dark' ? 'text-white' : 'text-black'}`}
      >
        <h1 className="text-xl font-bold mb-4">Weather App</h1>
      </div>
      <div className=''>
        <SearchBox
          onLiveSearch={setLiveCity}
          onCommitSearch={setCommittedCity}
        />
        {weather && <WeatherDisplay data={weather} />}

      </div>
    </div>
  );
}

export default WeatherUI;

