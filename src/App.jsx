import { useSelector } from 'react-redux';
import { useWeather } from './components/WeatherContext';
import WeatherUI from './components/WeatherUI';
import bgImgLight from './assets/bg-img.jpg';
import bgImgDark from './assets/bg-img2.jpg';
import ThemeChange from '../src/components/ThemeChange';
import DateTime from './components/DateTime';


function App() {
  const mode = useSelector(state => state.theme.mode);
  const { weather } = useWeather();

  return (
    <div
      className={`w-full flex items-center transition-colors bgduration-300 justify-center 
        ${mode === 'dark' ? 'bg-gray-800 text-white' : 'text-black'}`}
      style={{
        backgroundImage: `url(${mode === 'dark' ? bgImgDark : bgImgLight})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        {weather?.timezone !== undefined && <DateTime timezoneOffset={weather.timezone} />}
        <ThemeChange />
        <div className="flex">
          <WeatherUI />
        </div>
      </div>
    </div>
  );
}

export default App;
