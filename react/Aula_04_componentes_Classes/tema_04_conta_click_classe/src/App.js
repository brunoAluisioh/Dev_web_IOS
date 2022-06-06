import './App.css';
import { Component } from 'react';
import Exemplo from './Components/Exemplo';
import Header from './Components/Header';

export class App extends Component {
    render() {
        return (
            <div className="App">
              <Header nome='Bruno Aluisio' />
                <Exemplo />
            </div>
        );
    }
}

export default App;
