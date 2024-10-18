import { createStore, applyMiddleware } from 'redux';
import { counterReducer } from './counter.reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger({
	collapsed: true,
	diff: true,
	duration: true
})

const store = createStore(counterReducer, applyMiddleware(logger));

export default store;

// import { applyMiddleware, createStore, compose } from 'redux';
// import { counterReducer } from './counter.reducer';

// const logger = store => next => action => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   const result = next(action);
//   console.log('next state', store.getState());
//   console.groupEnd();

//   return result;
// };

// const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

// const store = createStore(counterReducer, composeEnhancers(applyMiddleware(logger)));

// export default store;