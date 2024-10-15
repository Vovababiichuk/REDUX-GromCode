import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../task-test/src/counter.actions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button className="counter__button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <span className="counter__value" onClick={() => dispatch(reset())}>
        {' '}
        {count}{' '}
      </span>
      <button className="counter__button" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
};

export default Counter;
