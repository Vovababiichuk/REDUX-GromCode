import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
  diff: true,
  duration: true,
});

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
export default store;
