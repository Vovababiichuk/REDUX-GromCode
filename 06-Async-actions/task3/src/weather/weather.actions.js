import { getWeather } from './weather.gateway';

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

const weatherDataReceived = weatherData => {
  return {
    type: GET_WEATHER_DATA,
    payload: weatherData,
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    getWeather().then(weather => {
      dispatch(weatherDataReceived(weather));
    });
  };
};
