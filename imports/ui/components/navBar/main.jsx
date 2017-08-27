/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Button} from 'react-bootstrap'
import * as Actions from "../../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';

import './style.css';

class NavBar extends Component{

    constructor(props){
        super(props);
        this.state = {expanded: false};
    }

    componentDidMount(){

        var self = this;

        if(self.refs.navBar){
            document.addEventListener("scroll", function(){
                var pos = document.body.scrollTop;
                if(pos==0){
                    self.refs.navBar.className = "";
                }
                else if(self.refs.navBar.className!= "active"){
                    self.refs.navBar.className = "active";
                }
            })
        }
    }

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
            <div id="navBar">
                <span id="overlay" className={this.state.expanded ? "on" : ""} onClick={()=> this.setState({expanded: false})}/>
                <div id="navBar-background" ref="navBar">
                    <div id="navBar-content">
                        <NavLink to="/">
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
                                <Button onClick={()=>this.setState({expanded: false})} className="emptyButton navBar-elements smallButton">Home</Button>
                            </NavLink>
                            {/*<NavLink to="/price"  activeClassName="nav-selected">
                                <Button onClick={()=>this.setState({expanded: false})} className="emptyButton navBar-elements smallButton">Price</Button>
                            </NavLink>
                            <NavLink to="/story"  activeClassName="nav-selected">
                                <Button onClick={()=>this.setState({expanded: false})} className="navBar-elements">Why Us?</Button>
                            </NavLink>*/}
                            <NavLink to="/contact"  activeClassName="nav-selected">
                                <Button onClick={()=>this.setState({expanded: false})} className="emptyButton navBar-elements smallButton">Contact Us</Button>
                            </NavLink>
                            <span onClick={()=>{
                                this.setState({expanded: false});
                                this.props.actions.setLanguage();
                            }} className="navBar-elements navBar-language">
                                <i className="fa fa-globe fa-1x" aria-hidden="true" /> {this.props.language}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
        else return <div></div>
    }
}

function selectorFactory(dispatch) {
    let result = {};
    const actions = bindActionCreators(Actions, dispatch);
    return (nextState, nextOwnProps) => {

        const nextResult = {
            actions: actions,
            language: nextState.settings.get("language"),
            ...nextOwnProps,
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(NavBar);