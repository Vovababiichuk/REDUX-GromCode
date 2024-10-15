import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Counter';


import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
