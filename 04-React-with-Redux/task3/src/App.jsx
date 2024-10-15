import React from 'react';
import UsersList from './users/UsersList';
import { Provider } from 'react-redux';
import store from './users/store';

const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;
