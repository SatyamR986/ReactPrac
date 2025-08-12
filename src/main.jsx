import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { WeatherProvider } from './components/WeatherContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </WeatherProvider>
  </StrictMode>,
)
