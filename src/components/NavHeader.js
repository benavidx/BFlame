import React, { Component } from 'react';

import ListaDireciones from './ListaDirecciones';

export default class NavHeader extends Component{

    render(){
        return(
            <div className="nav-fixed bg-white box-shadow">
                <nav className="nav nav-underline">
                    <ListaDireciones/>
                </nav>
            </div>
        );
    }
}