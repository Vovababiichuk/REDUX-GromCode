import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk(
  'users/fetchUserData',
  async (username, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        // Обробка помилок
        if (response.status === 404) {
          return rejectWithValue('User not found');
        } else {
          return rejectWithValue('Failed to fetch user data');
        }
      }
      const data = await response.json();
      return {
        avatar_url: data.avatar_url,
        name: data.name,
        location: data.location,
      };
    } catch (error) {
      // Обробка помилок мережі
      return rejectWithValue(error.message);
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userData: null,
    isFetching: false,
    error: null, // Додали стан для помилки
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserData.pending, state => {
        state.isFetching = true;
        state.error = null; // Очищаємо помилку при новому запиті
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isFetching = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isFetching = false;
        state.userData = null;
        state.error = action.payload; // Зберігаємо повідомлення про помилку
        console.error(action.payload); // Лог помилки
      });
  },
});

export default usersSlice.reducer;
