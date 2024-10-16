import { DECREMENT, INCREMENT, RESET } from './counter.actions';

export const counterReducer = (state = 0, action: { type: string }) => {
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
