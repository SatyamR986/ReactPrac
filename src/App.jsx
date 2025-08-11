import { useSelector } from 'react-redux';   // import Redux hook
import WeatherUI from './components/WeatherUI';
import { WeatherProvider } from './components/WeatherContext';
import bgImgLight from './assets/bg-img.jpg'
import bgImgDark from './assets/bg-img2.jpg'
import ThemeChange from './components/ThemeChange';

function App() {
  const mode = useSelector(state => state.theme.mode);  // get theme mode from Redux

  return (
    <WeatherProvider>
      <div
        className={`
          w-full flex items-center transition-colors bgduration-300 justify-center 
          ${mode === 'dark' ? 'bg-gray-800 text-white' : 'text-black'}
          `}
        style={{
          backgroundImage: `url(${mode === 'dark' ? bgImgDark : bgImgLight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div>
          <ThemeChange />
          <div className='flex'>
            <WeatherUI />
          </div>
        </div>

      </div>
    </WeatherProvider>
  );
}

export default App;
