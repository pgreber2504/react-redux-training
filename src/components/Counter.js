import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from '../store/Counter';


const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }

  const incrementHandler = (e) => {
    dispatch(counterActions.increment())
  }

  const incrementByFiveHandler = e => {
    dispatch(counterActions.increace(5))
  }

  const decrementHandler = e => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>INCREMENT</button>
      <button onClick={incrementByFiveHandler}>INCREMENT BY 5</button>
      <button onClick={decrementHandler}>DECREMENT</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
