import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { List } from '../components/Directions.json';

export default class ListaDirecciones extends Component{

  constructor()
  { 
    super();
    this.state = 
    {
      List
    }
  }
    render(){
        const Links = this.state.List.map((Item, index)=>
        {
          return(
          <li key={index} className="nav-link"><Link to= { Item.LinkTo} >{ Item.LinkName }</Link></li>
          )
        })
        return(
          <ul>
              {Links}
          </ul>
        );
    }
}
