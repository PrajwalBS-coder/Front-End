import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import { Example } from "./components/Expmple";
import  Props  from "./components/Props";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Example />
      <Welcome />
      <Example  />
      <Props name="Jarvis" role="Tester" />
    </div>
  );
}

export default App;
