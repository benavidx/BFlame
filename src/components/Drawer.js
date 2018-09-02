import React, {Component} from 'react';
import ListaDireciones from './ListaDirecciones';
import './css/SideBar.css';

export default class Drawer extends Component{

    render(){
        return(
            <div id="SideBar" className="side-bar box-shadow bg-primary">
                <nav className="nav nav-underline">
                    <ListaDireciones/>
                </nav>
            </div>
        );
    }
}