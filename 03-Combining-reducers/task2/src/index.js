import store from './store';
import { increment, decrement, reset } from './counter.reducer';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(reset());
