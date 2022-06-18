import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <h2>Hello from React</h2>
        <Weather city="Darmstadt" />
      </header>
    </div>
  );
}

export default App;
