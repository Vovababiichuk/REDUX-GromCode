import { createStore, applyMiddleware } from 'redux';
import { counterReducer } from './counter.reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger({
	collapsed: true,
	diff: true,
})

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;