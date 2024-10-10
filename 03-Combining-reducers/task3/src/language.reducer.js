import { initialState } from './store';
import { SET_LANGUAGE } from './language.actions';

export const languageReducer = (state = initialState.language, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload.language;
    default:
      return state;
  }
};
