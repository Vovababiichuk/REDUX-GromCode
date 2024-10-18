import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getWeatherData = createAsyncThunk('weather/getWeatherData', async () => {
  const response = await fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities');
  return response.json();
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    cities: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWeatherData.pending, state => {
        state.status = 'loading';
      })
      .addCase(getWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities = action.payload;
      })
      .addCase(getWeatherData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
