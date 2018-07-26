import React from 'react';
import ForecastList from '../components/ForecastList';
import PropTypes from 'prop-types';
import {getForecastSync} from "../utils/forecast";
import {auth} from "../utils/firebase";
import {getUserDatabaseById} from "../utils/db";

class ForecastListPage extends React.Component {

  static propTypes = {
    cityName: PropTypes.string,
  };

  state = {
    weatherData: [],
    firstName: '',
    lastName: '',
    homeLocation: '',
    workLocation: '',
    error: null,
    temperatureUnits: '',
    distanceUnits: '',
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
          });
      } else {
        // No user is signed in.
      }
    });

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
      <ForecastList
        temperatureUnits={this.state.temperatureUnits}
        distanceUnits={this.state.distanceUnits}
        weatherDataList={this.state.weatherData}/>
    );
  }
}

export default ForecastListPage;