import { Component } from 'react';

class Nome extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Mayara',
        };
    }

    render() {
        return (
            <div>
                <h2 style={{borderBottom: '2px solid black', color: 'blue', textAlign: 'center'}}>Nome - {this.state.nome}: </h2>
            </div>
        );
    }
}

export default Nome;
