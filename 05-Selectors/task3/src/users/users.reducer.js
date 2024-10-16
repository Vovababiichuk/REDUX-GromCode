// import { SET_CURRENT_PAGE, SORT_USERS } from './users.actions';
// import { users } from './users';

// const initialState = {
//   usersList: users,
//   currentPage: 0,
// };

// export const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_CURRENT_PAGE:
//       return {
//         ...state,
//         currentPage: action.payload,
//       };
//     case SORT_USERS:
//       const sortedUsers = [...state.usersList].sort((a, b) => {
//         if (a[action.payload] < b[action.payload]) {
//           return -1;
//         }
//         if (a[action.payload] > b[action.payload]) {
//           return 1;
//         }
//         return 0;
//       });
//       return {
//         ...state,
//         usersList: sortedUsers,
//       };
//     default:
//       return state;
//   }
// };

import { users } from './users';
import { PREV_PAGE, NEXT_PAGE } from './users.actions';

const initialState = {
  users: {
    usersList: users,
  },
  currentPage: 0,
};

const userReducer = (state = initialState, action) => {
  const totalPages = Math.floor(state.users.usersList.length / 3);

  switch (action.type) {
    case PREV_PAGE:
      return {
        ...state,
        currentPage: Math.max(state.currentPage - 1, 0),
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: Math.min(state.currentPage + 1, totalPages),
      };
    default:
      return state;
  }
};

export default userReducer;
