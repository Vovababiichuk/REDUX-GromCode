import { createSelector } from '@reduxjs/toolkit';

const selectOptions = state => state.options;

export const selectOptionsList = createSelector(selectOptions, options => options.optionsList);

export const selectSelectedOptions = createSelector(selectOptions, options => options.selected);

/*!SECTION
Пояснення:

1. import { createSelector } from '@reduxjs/toolkit';: Імпортує функцію createSelector з @reduxjs/toolkit. createSelector використовується для створення мемоізованих селекторів, які оптимізують отримання даних з Redux store.

2. const selectOptions = (state) => state.options;: Визначає простий селектор, який повертає частину стану Redux, пов'язану з опціями (state.options).

3. export const selectOptionsList = createSelector(...);: Створює мемоізований селектор selectOptionsList.

4. selectOptions,: Використовує попередньо визначений селектор selectOptions як вхідний параметр.

5. (options) => options.optionsList: Функція, яка приймає результат selectOptions (тобто state.options) та повертає масив optionsList.

6. export const selectSelectedOptions = createSelector(...);: Створює мемоізований селектор selectSelectedOptions.

7. selectOptions,: Використовує селектор selectOptions як вхідний параметр.

8. (options) => options.selected: Функція, яка приймає результат selectOptions та повертає масив selected.
*/
