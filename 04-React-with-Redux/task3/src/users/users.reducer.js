import { SET_CURRENT_PAGE, SORT_USERS } from './users.actions';
import { users } from './users';

const initialState = {
  usersList: users,
  currentPage: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SORT_USERS:
      const sortedUsers = [...state.usersList].sort((a, b) => {
        if (a[action.payload] < b[action.payload]) {
          return -1;
        }
        if (a[action.payload] > b[action.payload]) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        usersList: sortedUsers,
      };
    default:
      return state;
  }
};
