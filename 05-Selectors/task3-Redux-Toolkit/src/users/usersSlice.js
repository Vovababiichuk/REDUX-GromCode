import { createSlice } from '@reduxjs/toolkit';
import { usersData as initialUsers } from './users.data';

const initialState = {
  filterText: '',
  usersList: initialUsers,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilterText(state, action) {
      state.filterText = action.payload;
    },
  },
});

export const { setFilterText } = userSlice.actions;
export default userSlice.reducer;
