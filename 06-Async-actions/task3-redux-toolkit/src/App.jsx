import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Weather from './weather/Weather';

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;

/*!SECTION
Як працює код:

1. App.jsx

Provider: Цей компонент від react-redux надає Redux Store всім компонентам в дереві компонентів, що знаходяться нижче. Це дозволяє компонентам, таким як Weather, отримувати доступ до стану та диспетчеризувати дії.
store: Це об'єкт, який містить стан вашого додатку, редуктори та middleware. Він створюється за допомогою configureStore з Redux Toolkit.
2. store.js

configureStore: Ця функція від Redux Toolkit створює Redux Store. Вона приймає об'єкт конфігурації, де ви можете вказати редуктори, middleware та інші налаштування.
weatherReducer: Це редуктор, який відповідає за оновлення частини стану, пов'язаної з погодою. Він створений за допомогою createSlice з Redux Toolkit.
3. Weather.jsx

useDispatch: Цей хук від react-redux дає доступ до функції dispatch, яка використовується для диспетчеризації дій.
useSelector: Цей хук від react-redux дозволяє вибирати частину стану з Redux Store. В даному випадку, він вибирає cities, status та error зі стану weather.
useEffect: Цей хук викликає dispatch(getWeatherData()) при монтуванні компонента, щоб отримати дані про погоду.
Умовний рендеринг: Компонент відображає різний UI в залежності від стану запиту (status): "Loading...", "Error..." або список міст.
4. weather.slice.js

createAsyncThunk: Ця функція від Redux Toolkit створює асинхронний action creator getWeatherData, який відповідає за отримання даних про погоду.
createSlice: Ця функція від Redux Toolkit створює slice редуктора.
name: Ім'я слайсу ('weather').
initialState: Початковий стан слайсу.
reducers: Об'єкт, що містить функції-редюсери для оновлення стану (в даному випадку порожній).
extraReducers: Функція, яка дозволяє обробляти дії, створені за допомогою createAsyncThunk. Вона використовується для оновлення стану в залежності від стану запиту (pending, fulfilled, rejected).
Як стан працює:

При монтуванні компонента Weather викликається dispatch(getWeatherData()).
getWeatherData виконує запит на API.
extraReducers в weather.slice.js оновлює стан status на 'loading'.
Після отримання відповіді від API, extraReducers оновлює стан status на 'succeeded' та записує дані в cities.
Компонент Weather перерендериться, і useSelector отримає оновлений стан.
Компонент відобразить список міст.
*/
