import {WeatherAPI} from '../api/weatherApi';
import moment from 'moment';
import _ from 'lodash';
import {DayCloudy, DayRain, DaySunny, DaySnow} from '../components/WeatherIcons';

/**
 * @type {{Clouds: DayCloudy, Rain: DayRain, Clear: DaySunny, Snow: DaySnow}}
 */
export const WEATHER_MAPPING = {
  Clouds: DayCloudy,
  Rain: DayRain,
  Clear: DaySunny,
  Snow: DaySnow,
};

/**
 *
 * @param x
 * @returns {string}
 */
function precise(x) {
  return Number.parseFloat(x).toPrecision(3);
}

/**
 *
 * @param weather
 * @returns {*}
 */
export const getWeatherIcon = (weather) => {
  if (weather in WEATHER_MAPPING) {
    return WEATHER_MAPPING[weather];
  }
  console.log(weather, ' is Missing from the mapping');
  return DaySunny;
};

/**
 *
 * @param kelvin
 * @returns {number}
 */
const toCelcius = (kelvin) => precise(kelvin - 273.15);
/**
 *
 * @param kelvin
 * @returns {number}
 */
const toFahrenheit = (kelvin) => precise((kelvin * (9 / 5)) - 459.67);

/**
 *
 * @param weatherListItem
 * @returns {
 * {temp: {F: *, C: *},
 * temp_min: {F: *, C: *},
  * temp_max: {F: *, C: *},
  * humidity: *,
  * wind: *,
  * main: *,
  * description: *,
  * dt_txt: *, dt: *,
  * date_moment: (*|moment.Moment)}}
 */
const formatWeather = (weatherListItem) => {

  return {
    temp: {
      F: toFahrenheit(_.get(weatherListItem, 'main.temp')),
      C: toCelcius(_.get(weatherListItem, 'main.temp')),
    },
    temp_min: {
      F: toFahrenheit(_.get(weatherListItem, 'main.temp_min')),
      C: toCelcius(_.get(weatherListItem, 'main.temp_min')),
    },

    temp_max: {
      F: toFahrenheit(_.get(weatherListItem, 'main.temp_max')),
      C: toCelcius(_.get(weatherListItem, 'main.temp_max')),
    },
    humidity: _.get(weatherListItem, 'main.humidity'),
    wind: _.get(weatherListItem, 'wind.speed'),
    main: _.get(weatherListItem, 'weather[0].main'),
    description: _.get(weatherListItem, 'weather[0].description'),
    dt_txt: _.get(weatherListItem, 'dt_txt'),
    dt: _.get(weatherListItem, 'dt'),
    date_moment: moment(_.get(weatherListItem, 'dt_txt')),
  }
};

/**
 *
 * @param city
 * @returns {Promise}
 */
export async function getForecast(city) {
  const weatherData = await WeatherAPI.byCityName(city);
  return _.map(weatherData.list, (weatherListItem) => {
    return formatWeather(weatherListItem)
  });
}

/**
 *
 * @returns {Array}
 */
export function getForecastSync() {
  const weatherData = WeatherAPI.byCityNameSync();
  return _.map(weatherData.list, (weatherListItem) => {
    return formatWeather(weatherListItem)
  });
}
