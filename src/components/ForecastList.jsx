import React from 'react';
import styles from './forecastList.css';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import {DaySunny, WindStrong} from './WeatherIcons';

const dateTime = '3 PM May 28th';
const temperature = '68' + '°';
const windSpeed = '45 feet/s';

class ForecastList extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Paper elevation={23} style={{height: '100%'}}>
          <div className={styles.cardLayout + " " + styles.column}>
            <Card>
              <div className={styles.column + " " + styles.location}>
                <h3>San Jose, CA </h3>
                <p>Forecast List</p>
              </div>
            </Card>
            <div className={styles.row}>
              <span style={{fontSize: '1rem'}}>{dateTime}</span>
              <DaySunny style={{fontSize: '3rem'}}/>
              <h4 style={{fontSize: '2rem'}}>{temperature}</h4>
              <span style={{fontSize: '1.5rem'}}>{windSpeed}</span>
              <WindStrong />
            </div>
            <div className={styles.row}>
              <span style={{fontSize: '1rem'}}>{dateTime}</span>
              <DaySunny style={{fontSize: '3rem'}}/>
              <h4 style={{fontSize: '2rem'}}>{temperature}</h4>
              <span style={{fontSize: '1.5rem'}}>{windSpeed}</span>
              <WindStrong />
            </div>
            <div className={styles.row}>
              <span style={{fontSize: '1rem'}}>{dateTime}</span>
              <DaySunny style={{fontSize: '3rem'}}/>
              <h4 style={{fontSize: '2rem'}}>{temperature}</h4>
              <span style={{fontSize: '1.5rem'}}>{windSpeed}</span>
              <WindStrong />
            </div>
            <div className={styles.row}>
              <span style={{fontSize: '1rem'}}>{dateTime}</span>
              <DaySunny style={{fontSize: '3rem'}}/>
              <h4 style={{fontSize: '2rem'}}>{temperature}</h4>
              <span style={{fontSize: '1.5rem'}}>{windSpeed}</span>
              <WindStrong />
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default ForecastList;
