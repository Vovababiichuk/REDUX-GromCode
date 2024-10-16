import { FILTER_TEXT } from './users.actions';
import { usersData } from './users.data';

const initState = {
  filterText: '',
  usersList: usersData,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FILTER_TEXT:
      return {
        ...state,
        filterText: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
