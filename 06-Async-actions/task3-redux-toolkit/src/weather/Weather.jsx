import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherData } from './weather.slice';

function Weather() {
  const dispatch = useDispatch();
  const { cities, status, error } = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(getWeatherData());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cities.map(city => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Weather;
