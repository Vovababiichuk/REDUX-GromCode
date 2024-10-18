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
