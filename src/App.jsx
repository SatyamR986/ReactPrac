import WeatherContainer from './components/WeatherContainer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[url('./assets/bg-img.jpg')] bg-cover bg-center p-4">
      <div className="bg-transparent bg-opacity-40 p-1 rounded shadow-md max-w-2xl mx-auto w-full">
        <WeatherContainer />
      </div>
    </div>
  );
}

export default App;
