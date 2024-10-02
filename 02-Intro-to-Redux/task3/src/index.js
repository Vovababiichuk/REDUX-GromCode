import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser(76, 'Tom'));
store.dispatch(deleteUser(76));
