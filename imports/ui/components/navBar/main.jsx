/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Button} from 'react-bootstrap'

import './style.css';

export default class NavBarProto extends Component{

    constructor(props){
        super(props);
        this.state = {expanded: false};
    }

    componentDidMount(){

        var parent = this.refs.navBar.parentElement,
            self = this;

        document.addEventListener("scroll", function(){
            var pos = document.body.scrollTop;
            if(pos==0){
                self.refs.navBar.className = "";
            }
            else if(self.refs.navBar.className!="active"){
                self.refs.navBar.className = "active";
            }
        })
    }

    render(){

        return(
            <div>
                <span id="overlay" className={this.state.expanded ? "on" : ""}/>
                <div id="navBar-background" ref="navBar">
                    <div id="navBar">
                        <NavLink to="/home">
                            <img style={{verticalAlign: "middle"}}
                                 id="navBar-logo"
                                 src="/assets/logo.svg"/>
                        </NavLink>
                        <div id="navBar-responsive-button"
                             className={this.state.expanded ? "change" : ""}
                             onClick={()=> this.setState({expanded: !this.state.expanded})}>

                            <div className="navBar-bar1"></div>
                            <div className="navBar-bar2"></div>
                            <div className="navBar-bar3"></div>
                        </div>
                        <div id="navBar-responsive" className={this.state.expanded ? "change" : ""} >
                            <NavLink to="/" activeClassName="nav-selected" exact>
                                <Button onClick={()=>this.setState({expanded: false})} className="navBar-elements">Home</Button>
                            </NavLink>
                            <NavLink to="/price"  activeClassName="nav-selected">
                                <Button onClick={()=>this.setState({expanded: false})} className="navBar-elements">Price</Button>
                            </NavLink>
                            <NavLink to="/story"  activeClassName="nav-selected">
                                <Button onClick={()=>this.setState({expanded: false})} className="navBar-elements">Why Us?</Button>
                            </NavLink>
                            <NavLink to="/contact"  activeClassName="nav-selected">
                                <Button onClick={()=>this.setState({expanded: false})} className="navBar-elements">Contact Us</Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}