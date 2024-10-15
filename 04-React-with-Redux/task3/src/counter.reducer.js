// import { DECREMENT, INCREMENT, RESET } from './counter.actions';

// const initialState = {
//   counter: 0,
// };

// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case RESET:
//       return {
//         ...state,
//         counter: 0,
//       };
//     default:
//       return state;
//   }
// };

import { INCREMENT, DECREMENT, RESET } from './counter.actions';

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};
