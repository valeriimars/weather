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
    homeLocation: '',
    weatherData: [{}]
  };

  componentDidMount() {
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

            const weatherPromise = getForecast(homeLocation);
            weatherPromise.then((data) => {
              this.setState({
                weatherData: data,
              });
            });
          });
      } else {
        // No user is signed in.
      }
    });

    // this.setState({weatherData: getForecastSync()});
  }

  render() {
    return (
      <DetailedWeatherCard
        temperatureUnits={this.state.temperatureUnits}
        distanceUnits={this.state.distanceUnits}
        weatherData={_.first(this.state.weatherData)}
        forecastWeatherData={_.slice(this.state.weatherData, 1)}
        cityName={this.state.homeLocation}
      />
    );
  }
}

export default ForecastPage;