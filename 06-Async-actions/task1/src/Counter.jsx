import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './counter.actions';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);

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

// v2

// import React from 'react';
// import { connect } from 'react-redux';
// import * as counterActions from './counter.actions';

// const Counter = ({ counter, decrement, increment, reset }) => {
//   return (
//     <div className="counter">
//       <button className="counter__button" onClick={decrement}>
//         -
//       </button>
//       <span className="counter__value" onClick={reset}>
//         {counter}
//       </span>
//       <button className="counter__button" onClick={increment}>
//         +
//       </button>
//     </div>
//   );
// };

// const mapState = state => {
//   return {
//     counter: state.value,
//   };
// };

// const mapDispatch = {
//   increment: counterActions.increment,
//   decrement: counterActions.decrement,
//   reset: counterActions.reset,
// };

// const connector = connect(mapState, mapDispatch); // HOC

// export default connector(Counter);