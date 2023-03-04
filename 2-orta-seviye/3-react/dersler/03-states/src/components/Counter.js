import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount(count - 1);
  };
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>increase</button> */}
      <button onClick={decrease}>decrease</button>
      <button onClick={increase}>increase</button>
    </div>
  );
}

export default Counter;
