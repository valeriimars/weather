import React from 'react';
import PropTypes from 'prop-types';
import styles from './forecastList.css';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import _ from 'lodash';
import {DaySunny, WindStrong, Wind} from './WeatherIcons';
import {getWeatherIcon} from "../utils/forecast";

class ForecastList extends React.Component {

  static propTypes = {
    weatherDataList: PropTypes.array,
    temperatureUnits: PropTypes.string,
    distanceUnits: PropTypes.string,
  };

  static defaultProps = {
    weatherDataList: [],
    temperatureUnits: 'F',
    distanceUnits: 'Feet',
  };

  renderWindIcon = (imperialSpeed) => {
    return (
      <div>
        {imperialSpeed >= 15 ? <WindStrong/> : <Wind/>}
      </div>
    );
  };

  renderTemperature = (itemData) => {
    if (this.props.temperatureUnits === 'F') {
      return (
        <p style={{fontSize: '.6em'}}>
          <strong>{itemData.temp.F}&deg;F</strong>
          <span style={{fontSize: '.6em'}}>/ {itemData.temp.C}&deg;C</span>
        </p>
      );
    }
    if (this.props.temperatureUnits === 'C') {
      return (
        <p style={{fontSize: '.6em'}}>
          <strong>{itemData.temp.C}&deg;C</strong>
          <span style={{fontSize: '.6em'}}>/ {itemData.temp.F}&deg;F</span>
        </p>
      );
    }
  };

  renderRowItem = (index) => {
    const itemData = _.get(this.props.weatherDataList, index);

    return (
      <div className={styles.row + " " + styles.itemRow} key={index}>
        <span style={{fontSize: '1rem'}}>{itemData.date_moment.format('DD.MM h:mm a')}</span>
        {this.renderIcon(itemData.main)}
        {this.renderTemperature(itemData)}
        <span style={{fontSize: '1.5rem'}}>{itemData.wind.imperial} feet/s</span>
        {this.renderWindIcon(itemData.wind.imperial)}
      </div>
    );
  };

  renderDataItems = () => {
    return _.map(this.props.weatherDataList, (d, index) => {
      return this.renderRowItem(index);
    })
  };

  renderIcon = (weatherMain) => {
    const Icon = getWeatherIcon(weatherMain);
    return (
      <div style={{fontSize: '3rem'}}>
        <Icon/>
      </div>
    );
  };

  render() {
    if (_.size(this.props.weatherDataList) === 0) {
      return (
        <div className={styles.container}>
          <Paper elevation={23} style={{height: '100%'}}>
            <div className={styles.cardLayout + " " + styles.column}>
              <Card>
                Loading...
              </Card>
            </div>
          </Paper>
        </div>
      );
    }
    return (
      <div className={styles.container}>
        <Paper elevation={23} style={{height: '100%', overflowX: 'auto'}}>
          <div className={styles.cardLayout + " " + styles.column}>
            <Card>
              <div className={styles.column + " " + styles.location}>
                <h3>San Jose, CA </h3>
                <p>5 Days Forecast</p>
              </div>
            </Card>
            {this.renderDataItems()}
          </div>
        </Paper>
      </div>
    );
  }
}

export default ForecastList;
