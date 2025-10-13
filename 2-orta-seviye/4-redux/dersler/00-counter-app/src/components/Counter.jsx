import { useSelector } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.counter);
  console.log(count);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;
