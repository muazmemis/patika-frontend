import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    // <div> => <></> or <React.fragment></React.fragment>
    // class yerine className kullanılıyor..
    <div className="App">
      <header className="App-header">
        Hello from App
        <Header />
        <p className="xyz">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <label htmlFor="myinput">
          Name
          <input id="myinput"></input>
        </label>
      </header>
    </div>
  );

  // return React.createElement("div", null, "Hello");
}

export default App;
