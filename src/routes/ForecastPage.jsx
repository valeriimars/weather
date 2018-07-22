import React from 'react';
import {getForecast, getForecastSync} from '../utils/forecast';
import _ from 'lodash';
import DetailedWeatherCard from '../components/DetailedWeatherCard';

class ForecastPage extends React.Component {

  state = {weatherData: [{}]};

  componentDidMount() {
    // const weatherPromise = getForecast('New York');
    // weatherPromise.then((data) => {
    //   this.setState({
    //     weatherData: data,
    //   });
    // });
    this.setState({weatherData: getForecastSync()});
  }

  render() {
    return (
      <DetailedWeatherCard
        weatherData={_.first(this.state.weatherData)}
        forecastWeatherData={_.slice(this.state.weatherData, 1)}
      />
    );
  }
}

export default ForecastPage;