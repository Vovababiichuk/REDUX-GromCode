import React from 'react';
import { incrementActionCreator, store } from './store';

const App = () => {
  store.dispatch(incrementActionCreator());
  console.log(store.getState());
  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
