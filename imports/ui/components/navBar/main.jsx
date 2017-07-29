/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavItem, Nav, Button} from 'react-bootstrap'
import './style.css';

export default class TestNavBar extends Component{
    render(){

        return(
            <div id="navBar-background">
                <div id="navBar">
                    <NavLink to="/home">
                        <img style={{verticalAlign: "middle"}}
                             width="125"
                             src="/assets/logo.svg"/>
                    </NavLink>
                    <span style={{float: "right"}}>
                   <NavLink to="/" activeClassName="nav-selected" exact>
                       <Button className="navBar-elements">Home</Button>
                   </NavLink>
                   <NavLink to="/price"  activeClassName="nav-selected">
                       <Button className="navBar-elements">Price</Button>
                   </NavLink>
                   <NavLink to="/story"  activeClassName="nav-selected">
                       <Button className="navBar-elements">Why Us?</Button>
                   </NavLink>
                   <NavLink to="/contact"  activeClassName="nav-selected">
                       <Button className="navBar-elements">Contact Us</Button>
                   </NavLink>
               </span>
                </div>
            </div>
        )
    }
}