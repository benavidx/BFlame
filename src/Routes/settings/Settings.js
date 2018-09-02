import React, { Component } from 'react';
import HeaderBG from '../../components/HeaderBG';
import Table from '../../components/Table';
class Settings extends Component{

    render(){
        return(
            <div>
                <HeaderBG 
                    Title="Configuraciones"
                />
                <div className="container">
                    <p>Empresas</p>
                    <div className="container">
                        <Table/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;