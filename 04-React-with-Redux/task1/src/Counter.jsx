// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, reset } from './counter.actions';

// const Counter = () => {
//   const count = useSelector(state => state.counter);
//   const dispatch = useDispatch();

//   return (
//     <div className="counter">
//       <button className="counter__button" onClick={() => dispatch(decrement())}>
//         -
//       </button>
//       <span className="counter__value" onClick={() => dispatch(reset())}>
//         {' '}
//         {count}{' '}
//       </span>
//       <button className="counter__button" onClick={() => dispatch(increment())}>
//         +
//       </button>
//     </div>
//   );
// };

// export default Counter;

import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../counter.actions';

const Counter = ({ counter, decrement, increment, reset }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    counter: state,
  };
};

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const connector = connect(mapState, mapDispatch); // HOC

export default connector(Counter);
