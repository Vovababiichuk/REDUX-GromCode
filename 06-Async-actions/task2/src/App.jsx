import React from 'react';
import { Provider } from 'react-redux';
import UserInfo from './users/UserInfo.jsx';
import SearchField from './users/SearchField.jsx';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='page'>
        <UserInfo />
        <SearchField />
      </div>
    </Provider>
  );
}

export default App;
