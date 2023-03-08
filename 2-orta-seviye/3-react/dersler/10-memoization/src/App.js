import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Header number={number < 5 ? 0 : number} />
        {number}
        <button onClick={() => setNumber(number + 1)}>increase</button>
      </header>
    </div>
  );
}

export default App;
