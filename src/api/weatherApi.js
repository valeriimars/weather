import axios from 'axios';
import {OPEN_WEATHER_KEY} from '../settings';

export default class WeatherAPI {

  /**
   * @param cityName
   * @returns {Promise}
   */
  static byCityName(cityName) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&appid=${OPEN_WEATHER_KEY}`);
  }
}
