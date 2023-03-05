import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p
          style={{ color: "red", backgroundColor: "white", paddingTop: "10px" }}
        >
          Notice the use of %PUBLIC_URL% in the tags above. It will be replaced
          with the URL of the `public` folder during the build. Only files
          inside the `public` folder can be referenced from the HTML. Unlike
          "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will work
          correctly both with client-side routing and a non-root public URL.
          Learn how to configure a non-root public URL by running `npm run
          build`.
        </p>
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      </header>
    </div>
  );
}

export default App;
