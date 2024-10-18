import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
  diff: true,
  duration: true,
});

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;