import React from 'react';
import styles from './DetailedWeatherCard.css';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import {DayCloudy, DayRain, DaySunny} from './WeatherIcons';


class DetailedWeatherCard extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Paper elevation={23} style={{height: '100%'}}>
          <div className={styles.cardLayout + " " + styles.column}>
            <Card>
              <div className={styles.column + " " + styles.location}>
                <h3>San Jose, CA </h3>
                <p>Forecast for Today</p>
              </div>
            </Card>
            <div className={styles.row}>
              <DaySunny style={{fontSize: '15rem'}}/>
              <h4 style={{fontSize: '5rem'}}>68&deg;</h4>
            </div>
            <Card className={styles.smallCard} elevation={10}>
              <div className={styles.row}>

                <div className={styles.column}>
                  <DaySunny/>
                  <span> 8 PM </span>
                  <span> 66 &deg;</span>
                </div>

                <div className={styles.column}>
                  <DaySunny/>
                  <span> 8 PM </span>
                  <span> 66 &deg;</span>
                </div>

                <div className={styles.column}>
                  <DaySunny/>
                  <span> 8 PM </span>
                  <span> 66 &deg;</span>
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
