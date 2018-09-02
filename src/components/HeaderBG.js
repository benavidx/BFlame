import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/style.css'

class HeaderBG extends Component{

    render(){
        return(
            <div className="FullBackground col-md-12">
            <Link to='/' className='no-link'>
                <h4 style={{color:'#fff'}}>
                    <i className="fab fa-gripfire"></i>
                        Blue Flame
                </h4>
            </Link>
                    <h3 className="text-left font-slim" style={{paddingTop:'10px',paddingLeft:'30px'}}>{this.props.Title}</h3>
            </div>
        );
    }
}

export default HeaderBG;