import React from 'react';

export const DaySunny = (props) => {
  return (
    <i className="wi wi-day-sunny" style={props.style}/>
  );
};
export const DayCloudy = () => <i className="wi wi-day-cloudy-high"/>;
export const DayRain = () => <i className="wi wi-day-rain"/>;
export const DayWindy = () => <i className="wi wi-day-windy"/>;
export const DaySunnyOvercast = () => <i className="wi wi-day-sunny-overcast"/>;

export const NightClear = () => <i className="wi wi-night-clear"/>;
export const NightCloudy = () => <i className="wi wi-night-alt-cloudy"/>;
export const NightWindlyCloudy = () => <i className="wi wi-night-alt-cloudy-gusts"/>;
export const NightRain = () => <i className="wi wi-night-alt-rain"/>;

export const Cloud = () => <i className="wi wi-cloud"/>;
export const Cloudy = () => <i className="wi "/>;
export const CloudyWind = () => <i className="wi wi-cloudy-gusts "/>;
export const Rain = () => <i className="wi wi-rain"/>;
export const Wind = () => <i className="wi wi-windy"/>;
export const WindStrong = () => <i className="wi wi-strong-wind"/>;
