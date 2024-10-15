import { createStore } from 'redux';
import { counterReducer } from './counter.reducer';

const initialState = {
  counter: 0,
};

const store = createStore(counterReducer, initialState);

export default store;
