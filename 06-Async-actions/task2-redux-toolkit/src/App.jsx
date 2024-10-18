import React from 'react';
import { Provider } from 'react-redux';
import UserInfo from './components/UserInfo';
import SearchField from './components/SearchField';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="page">
        <UserInfo />
        <SearchField />
      </div>
    </Provider>
  );
}

export default App;

/*!SECTION
Як це все працює:

1. Користувач вводить ім'я користувача Github в поле вводу в компоненті SearchField та натискає кнопку "Show".
2. SearchField відправляє дію fetchUserData з ім'ям користувача.
3. Redux Toolkit обробляє дію fetchUserData та викликає відповідний thunk.
4. Thunk робить запит до API Github.
5. extraReducers в usersSlice.js оновлює стан isFetching на true.
6. Компонент UserInfo реагує на зміну стану та відображає спінер.
7. Коли запит до API завершується, thunk повертає результат (дані про користувача або помилку).
8. extraReducers оновлює стан isFetching на false та оновлює userData або error в залежності від результату запиту.
9. Компонент UserInfo реагує на зміну стану та відображає дані про користувача або повідомлення про помилку.
*/