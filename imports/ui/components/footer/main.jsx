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
        var render = this.props.exception.indexOf(this.props.location.pathname)==-1;

        return(
            <div>
                {render  ?
                    <div id="footer">
                        <img style={{float: "left"}}
                             width="100"
                             src="/assets/logo-inverse.svg"/>
                        <Button style={{float: "right", color: "white", fontWeight: "300"}}
                                onClick={()=> Scroll.animateScroll.scrollToTop() }
                                className="emptyButton">Back to Top</Button>
                    </div> : ""}
            </div>
        )
    }
}