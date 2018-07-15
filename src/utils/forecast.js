import weatherApi from '../api/weatherApi';
import moment from 'moment';
import _ from 'lodash';

/**
 *
 * @param city
 * @returns {Promise}
 */
export async function getForecast(city, units) {
  const weatherData = await weatherApi.byCityName(city);
  return _.get(weatherData, 'data.list', [])
    .map((weather) => {
      return {
        ...weather,
        date: moment(weather.dt_txt)
      }
    });
}


/**
 * @example
 * {
  "dt": 1531018800,
  "main": {
    "temp": 288.64,
    "temp_min": 288.64,
    "temp_max": 292.511,
    "pressure": 1036.82,
    "sea_level": 1040.33,
    "grnd_level": 1036.82,
    "humidity": 77,
    "temp_kf": -3.87
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "clouds": {
    "all": 0
  },
  "wind": {
    "speed": 1.97,
    "deg": 122.012
  },
  "sys": {
    "pod": "n"
  },
  "dt_txt": "2018-07-08 03:00:00"
  },
 */
class ForecastEntry {}
