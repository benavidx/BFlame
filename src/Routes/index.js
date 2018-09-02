import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './home/Home';
import Directions from '../components/ListaDirecciones';
import Login from './Login/Login';
import Settings from './settings/Settings';

export default class Index extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/ListaDirecciones" component={Directions} />
                    <Route path="/Login" component={Login} />
                    <Route path="/settings" component={Settings} />
                </div>
            </Router>
        );
    }
}
  

