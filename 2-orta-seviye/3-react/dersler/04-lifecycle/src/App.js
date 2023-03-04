import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Muaz");

  // sadece render edildiğinde çalışır
  useEffect(() => {
    console.log("Component load");
  }, []);

  // number değiştiğinde veya sayfa tekrar yüklendiğinde çalışır
  useEffect(() => {
    console.log("Number update");
  }, [number]);

  // number veya name değiştiğinde veya sayfa tekrar yüklendiğinde çalışır
  useEffect(() => {
    console.log("Number update");
  }, [number, name]);

  // herhangibir state güncellendiğinde çalışır
  useEffect(() => {
    console.log("State update");
  });

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <br></br>
      <h1>{name}</h1>
      <button onClick={() => setName("Musab")}>Click</button>
    </div>
  );
}

export default App;
