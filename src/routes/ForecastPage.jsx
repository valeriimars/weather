import React from 'react';
import {getForecast} from '../utils/forecast';
import _ from 'lodash';
import DetailedWeatherCard from '../components/DetailedWeatherCard';

class ForecastPage extends React.Component {

  state = {weatherData: {}};

  componentDidMount() {
    const weatherPromise = getForecast('New York');
    weatherPromise.then((data) => {
      this.setState({
        weatherData: _.map(data, (d) => {
          return d.date
        })
      });
    });
    window.weatherData = this.state.weatherData;
  }

  render() {
    return (
      <DetailedWeatherCard/>
    );
  }
}

export default ForecastPage;