import WeatherUI from './components/WeatherUI';
import { WeatherProvider } from './components/WeatherContext';
import bgImg from './assets/bg-img.jpg';


function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white flex items-center justify-center " style={{ backgroundImage: `url(${bgImg})` }}>
        <div className='border-2 p-10 rounded-lg'>
           <WeatherUI />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
