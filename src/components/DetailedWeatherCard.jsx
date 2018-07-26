import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './DetailedWeatherCard.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {getWeatherIcon} from '../utils/forecast';

function precise(x) {
  return Number.parseFloat(x).toPrecision(3);
}


class DetailedWeatherCard extends React.Component {

  static propTypes = {
    weatherData: PropTypes.object,
    // forecastWeatherData is a data rendered at the bottom of the page with 3 hours period
    forecastWeatherData: PropTypes.array,
    temperatureUnits: PropTypes.string,
    distanceUnits: PropTypes.string,
  };

  static defaultProps = {
    weatherData: {},
  };

  today = () => {
    const {date_moment} = this.props.weatherData;
    if (date_moment) {
      return date_moment.format('MMMM Do, h:mm a');
    }
    return null;
  };

  temperature = () => {
    const {weatherData} = this.props;
    if (weatherData) {
      return {
        F: precise(_.get(weatherData, 'temp').F),
        C: precise(_.get(weatherData, 'temp').C),
      };
    }
  };

  renderMainIcon = () => {
    const Icon = getWeatherIcon(this.props.weatherData.main);
    return (
      <div style={{fontSize: '5em'}}>
        <Icon/>
      </div>
    );
  };

  renderMinorWeatherIcon = (index) => {
    const main = _.get(this.props.forecastWeatherData, `${index}.main`);
    const Icon = getWeatherIcon(main);
    return (
      <div style={{fontSize: '2em', paddingTop: '10px', paddingBottom: '10px'}}>
        <Icon/>
      </div>
    )
  };

  renderForecastTime = (index) => {
    const dateTime = _.get(this.props.forecastWeatherData, `${index}.date_moment`);
    return (
      <span style={{fontSize: '.8em'}}>{dateTime.format('hh a')}</span>
    );
  };

  renderTemperatureForecast = (index) => {
    console.log(this.props)
    const temperature = _.get(this.props.forecastWeatherData, `${index}.temp`);
    const style = {margin: 0}
    if (this.props.temperatureUnits === 'F') {
      return (
        <div className={styles.miniFont}>
          <p style={{...style, borderBottom: '1px solid black'}}><strong>{temperature.F}&deg; F</strong></p>
          <p style={{...style}}>{temperature.C}&deg; C</p>
        </div>
      );
    }
    if (this.props.temperatureUnits === 'C') {
      return (
        <div className={styles.miniFont}>
          <p style={{...style, borderBottom: '1px solid black'}}><strong>{temperature.C}&deg; C</strong></p>
          <p style={{...style}}>{temperature.F}&deg; F</p>
        </div>
      );
    }
  };

  renderMainTemperature = () => {
    if (this.props.temperatureUnits === 'F') {
      return (
        <h4 style={{fontSize: '5rem', textAlign: 'center'}}>
          {this.temperature().F}&deg; F
          <p className={styles.secondaryTemperature}>{this.temperature().C} &deg; C</p>
        </h4>
      );
    }
    return (
      <h4 style={{fontSize: '5rem', textAlign: 'center'}}>
        {this.temperature().C}&deg; C
        <p className={styles.secondaryTemperature}>{this.temperature().F} &deg; F</p>
      </h4>
    );
  };


  render() {

    if (_.isEmpty(this.props.weatherData)) {
      return (
        <div className={styles.container}>
          <Paper elevation={23} style={{height: '100%'}}>
            <h4>Loading ....</h4>
          </Paper>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <Paper elevation={23} style={{height: '100%'}}>
          <div className={styles.cardLayout + " " + styles.column}>
            <Card>
              <div className={styles.column + " " + styles.location}>
                <h3>San Jose, CA </h3>
                <div>Forecast for Today <p className={styles.today}>{this.today()}</p></div>
              </div>
            </Card>
            <div className={styles.row}>
              {this.renderMainIcon()}
              {this.renderMainTemperature()}
            </div>
            <Card className={styles.smallCard} elevation={10}>
              <div className={styles.row}>

                <div className={styles.column + " " + styles.miniCard}>
                  <span> {this.renderForecastTime(0)} </span>
                  {this.renderMinorWeatherIcon(0)}
                  <span>{this.renderTemperatureForecast(0)}</span>
                </div>

                <div className={styles.column + " " + styles.miniCard}>
                  <span> {this.renderForecastTime(1)} </span>
                  {this.renderMinorWeatherIcon(1)}
                  <span>{this.renderTemperatureForecast(1)}</span>
                </div>

                <div className={styles.column + " " + styles.miniCard}>
                  <span> {this.renderForecastTime(2)} </span>
                  {this.renderMinorWeatherIcon(2)}
                  <span>{this.renderTemperatureForecast(2)}</span>
                </div>

              </div>
            </Card>
          </div>
        </Paper>
      </div>
    );
  }
}

export default DetailedWeatherCard;
