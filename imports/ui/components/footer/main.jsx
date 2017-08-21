/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavItem, Nav, Button} from 'react-bootstrap'
import Scroll from 'react-scroll';

import './style.css';

export default class Footer extends Component{
    render(){

        var path = this.props.location.pathname,
            exceptions = this.props.exception;

        var render = true;

        exceptions.forEach(function(elem){
            if(elem==path) {
                render = false;
            }
            else if(elem.includes("/:")) {
                if(path.split("/").length > 0  && path.split("/")[1] == elem.replace("/:","")) render = false;
            }
        });

        if(render) return(
            <div>
                <div id="footer">
                    <img style={{float: "left"}}
                         width="100"
                         src="/assets/logo-inverse.svg"/>
                    <Button style={{float: "right", color: "white", fontWeight: "300"}}
                            onClick={()=> Scroll.animateScroll.scrollToTop() }
                            className="emptyButton">Back to Top</Button>
                </div>
            </div>
        )
        else return <div></div>
    }
}