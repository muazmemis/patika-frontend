import { useState } from "react";

function App() {
  const [name, setName] = useState("Muaz");
  const [age, setAge] = useState(33);

  console.log(name, age);

  return (
    <div className="App">
      <h1>
        Merhaba {name} {age}
      </h1>
      <button onClick={() => setName("Musab")}>Change Name</button>
      <button onClick={() => setAge(27)}>Change Age</button>
    </div>
  );
}

export default App;
