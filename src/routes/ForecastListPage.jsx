import React from 'react';
import ForecastList from '../components/ForecastList';
import PropTypes from 'prop-types';
import {getForecastSync} from "../utils/forecast";

class ForecastListPage extends React.Component {

  static propTypes = {
    cityName: PropTypes.string,
  };

  state = {weatherData: []};

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
      <ForecastList weatherDataList={this.state.weatherData}/>
    );
  }
}

export default ForecastListPage;