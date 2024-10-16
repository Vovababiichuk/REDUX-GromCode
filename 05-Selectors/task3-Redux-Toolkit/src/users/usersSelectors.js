import { createSelector } from '@reduxjs/toolkit';

const selectUsers = state => state.users;

export const selectFilterText = createSelector(selectUsers, users => users.filterText);

export const selectUsersList = createSelector(selectUsers, users => users.usersList);

export const selectFilteredUsers = createSelector(
  selectUsersList,
  selectFilterText,
  (usersList, filterText) => {
    const lowerCaseFilter = filterText.toLowerCase();
    return usersList.filter(user => user.name.toLowerCase().includes(lowerCaseFilter));
  },
);

export const selectFilteredUsersCount = createSelector(
  selectFilteredUsers,
  filteredUsers => filteredUsers.length,
);
