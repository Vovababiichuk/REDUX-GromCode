import './index.scss';
import store, { decrement, increment, reset } from './store.js';

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const resultElement = document.querySelector('.counter__result');

const updateUI = () => {
  const { count, history } = store.getState();
  resultElement.textContent = history.length > 0 ? `${history.join('')} = ${count}` : `${count}`;
};

store.subscribe(updateUI);

updateUI();

incrementBtn.addEventListener('click', () => {
  store.dispatch(increment());
});

decrementBtn.addEventListener('click', () => {
  store.dispatch(decrement());
});

resetBtn.addEventListener('click', () => {
  store.dispatch(reset());
});
