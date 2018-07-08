import React from 'react';
import WeatherApi from '../api/weatherApi';

class ForecastPage extends React.Component {

  state = {weatherData: {}};

  componentDidMount() {
    const weatherPromise = WeatherApi.byCityName('New York');
    weatherPromise.then((data) => {
      this.setState({weatherData: data});
    });
    window.weatherData = this.state.weatherData;
  }

  render() {
    return (
      JSON.stringify(this.state)
    );
  }
}

export default ForecastPage;