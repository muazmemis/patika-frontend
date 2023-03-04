import "./App.css";
import Header from "./components/Header";

const name = "Muaz";
const surname = "Memiş";
const isLogin = true;

function App() {
  return (
    // <div> => <></> or <React.fragment></React.fragment> => html e dönüştürülürken div tag i oluşturmaz...
    // class yerine className kullanılıyor..
    <>
      <div className="App">
        <header className="App-header">
          {/* Hello from App
          <Header />
          <p className="xyz">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <label htmlFor="myinput">
            Name
            <input id="myinput"></input>
          </label> */}
          {/* <h1>{name}</h1>
          <h1>{`${name} ${surname}`}</h1> */}
          {/* <h1>{isLogin && "login"}</h1>
          <h1>{!isLogin && "not login"}</h1> */}
          <h1>{isLogin ? `${name} is login` : "not login"}</h1>
        </header>
      </div>
    </>
  );

  // return React.createElement("div", null, "Hello");
}

export default App;
