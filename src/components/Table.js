import React, {Component} from 'react';
import Options from '../components/Options'

export default class Table extends Component{
    render(){
        return(
        <div>
            <table className="table table-hover table-light">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <Options/>
                        Marco Mata Morera Div-Veg</td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}