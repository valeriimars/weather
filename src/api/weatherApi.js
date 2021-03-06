import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import {OPEN_WEATHER_KEY} from '../settings';
import {mockResponse} from './mockApiResponse';


export class WeatherAPI {

  /**
   * @param cityName
   * @returns {Promise}
   */
  static async byCityName(cityName) {
    const res =  await axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&appid=${OPEN_WEATHER_KEY}`
    );
    return await res.data;
  }

  // static async byCityName(cityName) {
  //   return Promise.resolve(mockResponse)
  // }

  static byCityNameSync() {
    return mockResponse;
  }
}
