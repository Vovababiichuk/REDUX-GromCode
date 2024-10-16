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
        // Immer дозволяє писати код, який виглядає як мутація стану, але насправді створює новий стан, не змінюючи початковий.
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

/*!SECTION
Пояснення:

1. import { createSlice } from '@reduxjs/toolkit';: Імпортує функцію createSlice з бібліотеки @reduxjs/toolkit, яка використовується для створення редукторів (reducers).

2. import { options as initialOptions } from '../initialOptions';: Імпортує масив options з файлу initialOptions.js та перейменовує його на initialOptions для використання в цьому файлі.

3. const initialState = { ... };: Визначає початковий стан (initial state) для частини сховища (slice) Redux, пов'язаної з опціями. Він містить два масиви: optionsList (доступні опції) та selected (вибрані опції).

4. const optionsSlice = createSlice({ ... });: Викликає функцію createSlice для створення редуктора.

5. name: 'options',: Задає ім'я для частини сховища (slice).

6. initialState,: Вказує початковий стан, визначений раніше.

7. reducers: { ... },: Визначає об'єкт з редукторами (reducers), які обробляють різні дії (actions) та оновлюють стан.

8. moveOption(state, action) { ... }: Редуктор, який відповідає за переміщення опції між списками optionsList та selected.

9. const { optionId } = action.payload;: Отримує optionId з корисного навантаження (payload) дії (action).

10. const optionIndex = state.optionsList.findIndex(...);: Знаходить індекс опції з заданим optionId в масиві optionsList.

11. if (optionIndex !== -1) { ... }: Перевіряє, чи знайдена опція в optionsList.

12. // Використовуємо Immer для незмінного оновлення стану: Коментар, що пояснює використання бібліотеки Immer. Immer дозволяє писати код, який виглядає як мутація стану, але насправді створює новий стан, не змінюючи початковий.

13. state.selected.push(state.optionsList.splice(optionIndex, 1)[0]);: Переміщує опцію з optionsList до selected. splice видаляє опцію з optionsList та повертає її як масив з одного елемента, який потім додається до selected за допомогою push.

14. } else { ... }: Якщо опція не знайдена в optionsList, значить вона в selected.

15. const selectedOptionIndex = state.selected.findIndex(...);: Знаходить індекс опції в масиві selected.

16. if (selectedOptionIndex !== -1) { ... }: Перевіряє, чи знайдена опція в selected.

17. state.optionsList.push(state.selected.splice(selectedOptionIndex, 1)[0]);: Переміщує опцію з selected до optionsList.

18. export const { moveOption } = optionsSlice.actions;: Експортує функцію moveOption, яка створює дію (action) для переміщення опції.

19. export default optionsSlice.reducer;: Експортує редуктор (reducer), створений за допомогою createSlice.
*/
