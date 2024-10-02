import { createStore } from 'redux';

export const increment = () => {
  return {
    type: 'COUNTER/INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'COUNTER/DECREMENT',
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};

export const history = () => {
  return {
    type: [],
  };
};

const initialState = {
  count: 0,
  history: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER/INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        history: state.history.concat('+1'),
      };
    case 'COUNTER/DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        history: state.history.concat(-1),
      };
    case 'RESET':
      return {
        ...state,
        count: '',
        history: [],
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
