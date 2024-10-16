import React from 'react';
import { Provider } from 'react-redux';
import store from './options/store';
import TransferList from './options/TransferList';

function App() {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
}

export default App;
