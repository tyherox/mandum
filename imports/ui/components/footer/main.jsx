/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavItem, Nav, Button} from 'react-bootstrap'
import Scroll from 'react-scroll';

import './style.css';

export default class TestNavBar extends Component{
    render(){

        return(
            <div id="footer">
                <img style={{float: "left"}}
                     width="100"
                     src="/assets/logo-inverse.svg"/>
                <Button style={{float: "right", color: "white", fontWeight: "300", fontSize: "1rem"}}
                        onClick={()=> Scroll.animateScroll.scrollToTop() }
                        className="emptyButton">Back to Top</Button>
            </div>
        )
    }
}