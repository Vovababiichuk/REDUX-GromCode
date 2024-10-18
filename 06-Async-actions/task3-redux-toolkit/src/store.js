import { configureStore } from '@reduxjs/toolkit';

import weatherReducer from './weather/weather.slice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
