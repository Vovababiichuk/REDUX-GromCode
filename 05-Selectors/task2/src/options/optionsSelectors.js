import { createSelector } from '@reduxjs/toolkit';

const selectOptions = state => state.options;

export const selectOptionsList = createSelector(selectOptions, options => options.optionsList);

export const selectSelectedOptions = createSelector(selectOptions, options => options.selected);
