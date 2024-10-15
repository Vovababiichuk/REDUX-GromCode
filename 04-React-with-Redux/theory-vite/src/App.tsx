import { Provider } from 'react-redux';
import ConnectedCounter from './Counter';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
};

export default App;
