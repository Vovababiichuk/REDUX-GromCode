import store from './store';
import { setLanguage } from './language.actions';
import { setUser } from './user.actions';
import { addProduct } from './cart.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage('jp'));
store.dispatch(setLanguage('日本語'));
store.dispatch(setUser({ name: 'Bob' }));

store.dispatch(addProduct({ id: 76, name: 'milk' }));
