import {Component} from 'react'

export class Nota extends Component {
    render() {
        return (
            <div style = {{marginLeft: '47%'}} >
                <h2>Notas:</h2>
                <table border={1} style = {{padding: '5px', textAlign: 'center'}}>
                    <thead>
                        <tr>
                            <th>Nota</th>
                        </tr>
                    </thead>

                    <tbody style = {{padding: '5px'}}>
                        <tr>
                            <td>9</td>
                        </tr>

                        <tr>
                            <td>8</td>
                        </tr>

                        <tr>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td>9</td>
                        </tr>

                        <tr>
                            <th>Média</th>
                            <td>{(9 + 8 + 10 + 9) / 4} </td>
                        </tr>
                    </tbody>

                </table>
            </div>
            )
    }

}
export default Nota 