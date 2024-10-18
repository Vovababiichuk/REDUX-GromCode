import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={handleDecrement}>
        -
      </button>
      <span className="counter__value" onClick={handleReset}>
        {count}
      </span>
      <button className="counter__button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;