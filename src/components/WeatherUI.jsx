  import SearchBox from './SearchBox';
  import WeatherDisplay from './WeatherDisplay';
  import { useWeather } from './WeatherContext';

  function WeatherUI() {
    const { weather, setLiveCity, setCommittedCity } = useWeather();

    return (
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-xl font-bold text-gray-400 mb-4">Weather App</h1>
        <SearchBox
          onLiveSearch={setLiveCity}
          onCommitSearch={setCommittedCity}
        />
        {weather && <WeatherDisplay data={weather} />}
      </div>
    );
  }

  export default WeatherUI;

