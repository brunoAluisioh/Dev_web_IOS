import './App.css';
import BoasVindas from './Components/BoasVindas';
import Sobre from './Components/Sobre';

function App() {
  return (
    <div className="App">
      <BoasVindas nome="Bruno" />
      <Sobre />
    </div>
  );
}

export default App;
