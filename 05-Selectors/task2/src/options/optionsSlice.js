import { createSlice } from '@reduxjs/toolkit';
import { options as initialOptions } from './options';

const initialState = {
  optionsList: initialOptions,
  selected: [],
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    moveOption(state, action) {
      const { optionId } = action.payload;
      const optionIndex = state.optionsList.findIndex(option => option.id === optionId);

      if (optionIndex !== -1) {
        // Використовуємо Immer для незмінного оновлення стану
        state.selected.push(state.optionsList.splice(optionIndex, 1)[0]);
      } else {
        const selectedOptionIndex = state.selected.findIndex(option => option.id === optionId);
        if (selectedOptionIndex !== -1) {
          state.optionsList.push(state.selected.splice(selectedOptionIndex, 1)[0]);
        }
      }
    },
  },
});

export const { moveOption } = optionsSlice.actions;
export default optionsSlice.reducer;
