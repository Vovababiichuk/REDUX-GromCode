import { createStore } from 'redux';
import { counterReducer } from '../../task1/src/counter.reducer';

const store = createStore(counterReducer);

export default store;
