export const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';
export const SORT_USERS = 'USERS/SORT_USERS';

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const sortUsers = sortBy => {
  return {
    type: SORT_USERS,
    payload: sortBy,
  };
};
