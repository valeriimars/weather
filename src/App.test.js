import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DetailedWeatherCard from './components/DetailedWeatherCard';
import ForecastPage from './routes/ForecastPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders <DetailedWeatherCard> correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DetailedWeatherCard
      weatherData={{}}
      forecastWeatherData={[]}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders <ForecastPage> routing page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForecastPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
