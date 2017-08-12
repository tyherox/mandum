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
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-2" exact>
                                <Button className="emptyButton gray">
                                    <b>Features</b>
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-3" exact>
                                <Button className="emptyButton gray">
                                    <b>Design</b>
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-4" exact>
                                <Button className="emptyButton pink">
                                    <b>Services</b>
                                </Button>
                            </NavLink>

                        </div>

                        <div className="default-container">

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="pink">
                                    Services: Hosting
                                </h2>

                                <br/>

                                <p>
                                    Do you need us to host your website?
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.hosting.get('opt1') ? "card-container selected-pink" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.hosting.get('opt1') ? "pink" : ""}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        1 Year
                                                        <br/><br/>
                                                        Total : 0 KRW
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton pink"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["services","hosting","opt1"], !this.props.hosting.get('opt1'))
                                                                if(this.props.hosting.get("opt2"))  this.props.reduxActions.setValueC(["services","hosting","opt2"], false)
                                                                if(this.props.hosting.get("opt3"))  this.props.reduxActions.setValueC(["services","hosting","opt3"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.hosting.get('opt2') ? "card-container selected-pink" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.hosting.get('opt2') ? "pink" : ""}>{this.props.hosting.get("price").get("opt2").toLocaleString() + " KRW / Month"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        +1 Year
                                                        <br/><br/>
                                                        Total : 144,000 KRW
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton pink"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["services","hosting","opt2"], !this.props.hosting.get('opt2'))
                                                                if(this.props.hosting.get("opt3"))  this.props.reduxActions.setValueC(["services","hosting","opt3"], false)
                                                                if(this.props.hosting.get("opt1"))  this.props.reduxActions.setValueC(["services","hosting","opt1"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.hosting.get('opt3') ? "card-container selected-pink" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.hosting.get('opt3') ? "pink" : ""}>{this.props.hosting.get("price").get("opt3").toLocaleString() + " KRW / Month"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        +2 Year
                                                        <br/><br/>
                                                        Total : 240,000 KRW
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton pink"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["services","hosting","opt3"], !this.props.hosting.get('opt3'))
                                                                if(this.props.hosting.get("opt1"))  this.props.reduxActions.setValueC(["services","hosting","opt1"], false)
                                                                if(this.props.hosting.get("opt2"))  this.props.reduxActions.setValueC(["services","hosting","opt2"], false)
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

                                <h2 style={{marginTop: "5rem"}} className="pink">
                                    Services: Address
                                </h2>

                                <br/>

                                <p>
                                    Do you need an address /url?
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.address.get('opt1') ? "card-container selected-pink" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.address.get('opt1') ? "pink" : ""}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        No
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton pink"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["services","address","opt1"], !this.props.address.get('opt1'))
                                                                if(this.props.address.get("opt2"))  this.props.reduxActions.setValueC(["services","address","opt2"], false)
                                                                if(this.props.address.get("opt3"))  this.props.reduxActions.setValueC(["services","address","opt3"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.address.get('opt2') ? "card-container selected-pink" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.address.get('opt2') ? "pink" : ""}>Free for 1 Year</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Yes
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton pink"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["services","address","opt2"], !this.props.address.get('opt2'))
                                                                if(this.props.address.get("opt3"))  this.props.reduxActions.setValueC(["services","address","opt3"], false)
                                                                if(this.props.address.get("opt1"))  this.props.reduxActions.setValueC(["services","address","opt1"], false)
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

                                <h2 style={{marginTop: "5rem"}} className="pink">
                                    Services: Maintenance
                                </h2>

                                <br/>

                                <p>
                                    Do you need maintainence?
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.maintenance.get('opt1') ? "card-container selected-pink" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.maintenance.get('opt1') ? "pink" : ""}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Backup, basic update,
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton pink"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["services","maintenance","opt1"], !this.props.maintenance.get('opt1'))
                                                                if(this.props.maintenance.get("opt2"))  this.props.reduxActions.setValueC(["services","maintenance","opt2"], false)
                                                                if(this.props.maintenance.get("opt3"))  this.props.reduxActions.setValueC(["services","maintenance","opt3"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.maintenance.get('opt2') ? "card-container selected-pink" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.maintenance.get('opt2') ? "pink" : ""}>{this.props.maintenance.get("price").get("opt2").toLocaleString() + " KRW / Month"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Analysis and advanced update
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton pink"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["services","maintenance","opt2"], !this.props.maintenance.get('opt2'))
                                                                if(this.props.maintenance.get("opt3"))  this.props.reduxActions.setValueC(["services","maintenance","opt3"], false)
                                                                if(this.props.maintenance.get("opt1"))  this.props.reduxActions.setValueC(["services","maintenance","opt1"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.maintenance.get('opt3') ? "card-container selected-pink" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.maintenance.get('opt3') ? "pink" : ""}>{this.props.maintenance.get("price").get("opt3").toLocaleString() + " KRW / Month"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Retainer
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton pink"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["services","maintenance","opt3"], !this.props.maintenance.get('opt3'))
                                                                if(this.props.maintenance.get("opt1"))  this.props.reduxActions.setValueC(["services","maintenance","opt1"], false)
                                                                if(this.props.maintenance.get("opt2"))  this.props.reduxActions.setValueC(["services","maintenance","opt2"], false)
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
                        <h1 className="pink"><b>{this.props.price.toLocaleString()} KRW</b></h1>
                        <br/>

                        <NavLink to="/price/select-5" exact>
                            <Button className="emptyButton blackButton bigButton">
                                <b>Get Estimate</b>
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
            hosting: nextState.get("services").get("hosting"),
            address: nextState.get("services").get("address"),
            maintenance: nextState.get("services").get("maintenance"),
            price: nextState.get("totalCost")
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);