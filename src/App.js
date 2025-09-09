import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import { Example } from "./components/Expmple";
import  Props  from "./components/Props";

function App() {
  return (
    <div className="App">
      <Greet >
         <p>Example with children</p>
        </Greet>
      <Welcome name="Jarvis" role="Developer" />
      <Example >
       
      </Example>
      <Welcome  name="Lilly" role="Developer" />
      <Example  />
      <Props name="Jarvis" role="Tester" />
    </div>
  );
}

export default App;
