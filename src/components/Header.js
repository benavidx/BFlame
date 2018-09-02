import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


class Header extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
        <nav className="mt-2 ml-2 nav nav-bar" style={{zIndex:'900'}}>
            <Link to='/' className='no-link'>
                <h4>
                    <span style={{color:'#6200ee'}}>
                        <i className="fab fa-gripfire"></i>
                    </span>
                        <span style={{color:'#6200ee'}}>
                            Blue
                        </span>    
                        Flame
                </h4>
            </Link>
        </nav>
        );
    }
}
export default Header;