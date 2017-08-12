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
                                <Button className="emptyButton purple">
                                    <b>Features</b>
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-3" exact>
                                <Button className="emptyButton gray">
                                    <b>Design</b>
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-4" exact>
                                <Button className="emptyButton gray">
                                    <b>Services</b>
                                </Button>
                            </NavLink>

                        </div>

                        <div className="default-container">

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="purple">
                                    Features: Free
                                </h2>

                                <br/>

                                <p>
                                    Features we can do for you pro bono
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.free.get('opt1') ? "card-container selected-purple" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.free.get('opt1') ? "purple" : ""}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Responsive Design
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton purple"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["features","free","opt1"], !this.props.free.get('opt1'))
                                                            }}>
                                                        <p>Add</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.free.get('opt2') ? "card-container selected-purple" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.free.get('opt2') ? "purple" : ""}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Search Engine Optimization
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton purple"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["features","free","opt2"], !this.props.free.get('opt2'))
                                                            }}>
                                                        <p>Add</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.free.get('opt3') ? "card-container selected-purple" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.free.get('opt3') ? "purple" : ""}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Under Construction Page
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton purple"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["features","free","opt3"], !this.props.free.get('opt3'))
                                                            }}>
                                                        <p>Add</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </Grid>

                                <hr/>

                            </div>

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="purple">
                                    Features: Premium
                                </h2>

                                <br/>

                                <p>
                                    Features with a price tag.
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.premium.get('opt1') ? "card-container selected-purple" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.premium.get('opt1') ? "purple" : ""}>{this.props.premium.get("price").get("opt1").toLocaleString() + " KRW"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Admin Page
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton purple"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["features","premium","opt1"], !this.props.premium.get('opt1'))
                                                            }}>
                                                        <p>Add</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.premium.get('opt2') ? "card-container selected-purple" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.premium.get('opt2') ? "purple" : ""}>{this.props.premium.get("price").get("opt2").toLocaleString() + " KRW"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Account System
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton purple"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["features","premium","opt2"], !this.props.premium.get('opt2'))
                                                            }}>
                                                        <p>Add</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.premium.get('opt3') ? "card-container selected-purple" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.premium.get('opt3') ? "purple" : ""}>{this.props.premium.get("price").get("opt3").toLocaleString() + " KRW"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Transaction System
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton purple"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["features","premium","opt3"], !this.props.premium.get('opt3'))
                                                            }}>
                                                        <p>Add</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <div className={this.props.premium.get('opt4') ? "card-container selected-purple" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.premium.get('opt4') ? "purple" : ""}>{this.props.premium.get("price").get("opt4").toLocaleString() + " KRW"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Email System
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton purple"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["features","premium","opt4"], !this.props.premium.get('opt4'))
                                                            }}>
                                                        <p>Add</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <div className={this.props.premium.get('opt5') ? "card-container selected-purple" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.premium.get('opt5') ? "purple" : ""}>{this.props.premium.get("price").get("opt5").toLocaleString() + " KRW"}</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Upload / Download Functionality
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton purple"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["features","premium","opt5"], !this.props.premium.get('opt5'))
                                                            }}>
                                                        <p>Add</p>
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
                        <h1 className="purple"><b>{this.props.price.toLocaleString()} KRW</b></h1>
                        <br/>

                        <NavLink to="/price/select-3" exact>
                            <Button className="emptyButton purpleButton bigButton">
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
            free: nextState.get("features").get("free"),
            premium: nextState.get("features").get("premium"),
            content: nextState.get("features"),
            price: nextState.get("totalCost")
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);
