import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import * as counterActions from './counter.actions';

export const Counter = ({
  counter,
  increment,
  decrement,
  reset,
}: {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}) => {
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

// const mapDispatch = (dispatch: Dispatch) => {
//   return {
//     incr: () => dispatch(increment()),
//     decr: () => dispatch(decrement()),
//     res: () => dispatch(reset()),
//   };
// };

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const mapState = (state: number) => {
  return {
    counter: state,
  };
};

const connector = connect(mapState, mapDispatch); // HOC
const ConnectedCounter = connector(Counter);
export default ConnectedCounter;
