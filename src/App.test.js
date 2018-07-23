import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DetailedWeatherCard from './components/DetailedWeatherCard';
import ForecastPage from './routes/ForecastPage';
import ForecastListPage from './routes/ForecastListPage';
import ForecastList from './components/ForecastList';
import SignInPage from './routes/SignInPage';
import SignUpPage from './routes/SignUpPage';

it('renders whole application without crashing', () => {
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

it('renders <ForecastListPage> routing page', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForecastListPage cityName=""/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders <ForecastList> data list component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ForecastList cityName="" weatherDataList={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders <SignInPage> route component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignInPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders <SignUpPage> route component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
