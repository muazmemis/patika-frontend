import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../redux/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <br />
      <br />

      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>Increment By Amount</button>
    </div>
  );
}

export default Counter;
