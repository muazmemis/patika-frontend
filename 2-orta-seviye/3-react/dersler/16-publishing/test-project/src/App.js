import "./App.css";
import { Button, Paragraph } from "incsoft";

function App() {
  return (
    <div className="App">
      <Paragraph text="Selam" onClick={() => console.log("paragraph")} />
      <Button text="Selam" onClick={() => console.log("merhaba")} />
    </div>
  );
}

export default App;
