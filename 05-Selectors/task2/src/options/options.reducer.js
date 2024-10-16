import { TOGGLE_OPTION } from './options.actions';
import optionsData from './options.data';

const initState = {
  optionsList: optionsData,
  selected: [],
};

const optionsReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_OPTION:
      const { optionId } = action.payload;
      const newSelectedIds = state.selected.includes(optionId)
        ? state.selected.filter(id => id !== optionId)
        : state.selected.concat(optionId);

      return {
        ...state,
        selected: newSelectedIds,
      };
    default:
      return state;
  }
};

export default optionsReducer;
