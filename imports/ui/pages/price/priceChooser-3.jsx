/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import {Button, Grid, Row, Col, Label, FormGroup, Radio} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';;
import * as Actions from "../../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';

const style = { width: 600, margin: 50 };

function estimateCost(element){
    var price = 0;

    this.props.

    this.props.reduxActions.setValueC()
}

class Main extends Component {


    render() {

        return (
            <div>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div style={{background: "white"}}>

                        <div style={{padding: "10px"}}>

                            <NavLink to="/price/select-1" exact>
                                <Button className="emptyButton gray">
                                    <b>Content</b>
                                    <i className="arrow right" />
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-2" exact>
                                <Button className="emptyButton gray">
                                    <b>Features</b>
                                    <i className="arrow right" />
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-3" exact>
                                <Button className="emptyButton orange">
                                    <b>Design</b>
                                    <i className="arrow right" />
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-4" exact>
                                <Button className="emptyButton gray">
                                    <b>Services</b>
                                    <i className="arrow right" />
                                </Button>
                            </NavLink>

                        </div>

                        <div className="default-container">

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="orange">
                                    Design: Style
                                </h2>

                                <br/>

                                <p>
                                    What kind of design do you need?
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.style.get('opt1') ? "card-container selected-orange" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.style.get('opt1') ? "orange" : ""}>{this.props.style.get("price").get("opt1").toLocaleString() + " KRW"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Basic
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton orange"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["design","style","opt1"], !this.props.style.get('opt1'))
                                                                if(this.props.style.get("opt2"))  this.props.reduxActions.setValueC(["design","style","opt2"], false)
                                                                if(this.props.style.get("opt3"))  this.props.reduxActions.setValueC(["design","style","opt3"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.style.get('opt2') ? "card-container selected-orange" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.style.get('opt2') ? "orange" : ""}>{this.props.style.get("price").get("opt2").toLocaleString() + " KRW"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Advanced Design
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton orange"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["design","style","opt2"], !this.props.style.get('opt2'))
                                                                if(this.props.style.get("opt3"))  this.props.reduxActions.setValueC(["design","style","opt3"], false)
                                                                if(this.props.style.get("opt1"))  this.props.reduxActions.setValueC(["design","style","opt1"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.style.get('opt3') ? "card-container selected-orange" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.style.get('opt3') ? "orange" : ""}>{this.props.style.get("price").get("opt3").toLocaleString() + " KRW"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Custom Design
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton orange"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["design","style","opt3"], !this.props.style.get('opt3'))
                                                                if(this.props.style.get("opt1"))  this.props.reduxActions.setValueC(["design","style","opt1"], false)
                                                                if(this.props.style.get("opt2"))  this.props.reduxActions.setValueC(["design","style","opt2"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </Grid>

                                <hr/>

                            </div>

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="orange">
                                    Design: Logo
                                </h2>

                                <br/>

                                <p>
                                    Do you need a logo designed?
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.logo.get('opt1') ? "card-container selected-orange" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.logo.get('opt1') ? "orange" : ""}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        No
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton orange"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["design","logo","opt1"], !this.props.logo.get('opt1'))
                                                                if(this.props.logo.get("opt2"))  this.props.reduxActions.setValueC(["design","logo","opt2"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.logo.get('opt2') ? "card-container selected-orange" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.logo.get('opt2') ? "orange" : ""}>{this.props.logo.get("price").get("opt2").toLocaleString() + " KRW"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Yes
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton orange"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["design","logo","opt2"], !this.props.logo.get('opt2'))
                                                                if(this.props.logo.get("opt1"))  this.props.reduxActions.setValueC(["design","logo","opt1"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </Grid>

                                <hr/>

                            </div>

                        </div>

                    </div>

                    <div style={{textAlign: "center"}}>

                        <h1 className="gray">Your Current Total:</h1>
                        <h1 className="orange"><b>{this.props.price.toLocaleString()} KRW</b></h1>
                        <br/>

                        <NavLink to="/price/select-4" exact>
                            <Button className="emptyButton orangeButton bigButton">
                                <b>Next</b>
                                <i className="arrow right" />
                            </Button>
                        </NavLink>
                    </div>

                </div>

                <br/><br/><br/>

            </div>
        )
    }
}

function selectorFactory(dispatch) {
    let result = {};
    const actions = bindActionCreators(Actions, dispatch);
    return (nextState, nextOwnProps) => {

        const nextResult = {
            reduxActions: actions,
            style: nextState.get("design").get("style"),
            logo: nextState.get("design").get("logo"),
            branding: nextState.get("design").get("branding"),
            price: nextState.get("totalCost")
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);