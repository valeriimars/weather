import React from 'react';
import {getForecast, getForecastSync} from '../utils/forecast';
import _ from 'lodash';
import DetailedWeatherCard from '../components/DetailedWeatherCard';
import {auth} from "../utils/firebase";
import {getUserDatabaseById} from "../utils/db";

class ForecastPage extends React.Component {

  state = {
    temperatureUnits: '',
    distanceUnits: '',
    weatherData: [{}]
  };

  componentDidMount() {
    // const weatherPromise = getForecast('New York');
    // weatherPromise.then((data) => {
    //   this.setState({
    //     weatherData: data,
    //   });
    // });
    auth.onAuthStateChanged((user) => {
      if (user) {
        getUserDatabaseById(user.uid)
          .once('value')
          .then((dataSnapshot) => {
            const firstName = dataSnapshot.child('firstName').val();
            const lastName = dataSnapshot.child('lastName').val();
            const homeLocation = dataSnapshot.child('homeLocation').val();
            const workLocation = dataSnapshot.child('workLocation').val();
            const temperatureUnits = dataSnapshot.child('temperatureUnits').val();
            const distanceUnits = dataSnapshot.child('distanceUnits').val();
            this.setState({
              user,
              firstName,
              lastName,
              homeLocation,
              workLocation,
              temperatureUnits,
              distanceUnits,
            });
          });
      } else {
        // No user is signed in.
      }
    });
    this.setState({weatherData: getForecastSync()});
  }

  render() {
    return (
      <DetailedWeatherCard
        temperatureUnits={this.state.temperatureUnits}
        distanceUnits={this.state.distanceUnits}
        weatherData={_.first(this.state.weatherData)}
        forecastWeatherData={_.slice(this.state.weatherData, 1)}
      />
    );
  }
}

export default ForecastPage;