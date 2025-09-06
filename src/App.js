import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import { Example } from './components/Expmple'; 

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Example />
    </div>
  );
}

export default App;
