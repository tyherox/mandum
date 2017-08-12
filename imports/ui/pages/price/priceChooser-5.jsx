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
import {interpretOrder} from '../../../api/orders';

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
                                <Button className="emptyButton gray">
                                    <b>Services</b>
                                </Button>
                            </NavLink>

                        </div>

                        <div className="default-container">

                            <div className="inner-container">

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={6}>
                                                <h2><b>Content</b></h2>
                                                <br/>
                                                {this.props.content[0] ? <p className="tiny-text">{this.props.content[0]}</p>
                                                    : <p className="red tiny-text">Pages not selected</p>}
                                                {this.props.content[1] ? <p className="tiny-text">{this.props.content[1]}</p>
                                                    : <p className="red tiny-text">Text not selected</p>}
                                                {this.props.content[2] ? <p className="tiny-text">{this.props.content[2]}</p>
                                                    : <p className="red tiny-text">Translation not selected</p>}
                                                {this.props.content[3] ? <p className="tiny-text">{this.props.content[3]}</p>
                                                    : <p className="red tiny-text">Media not selected</p>}
                                                <br/>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <h2><b>Total:</b></h2>
                                                <h3>{this.props.content[4].toLocaleString() + " KRW"}</h3>
                                            </Col>

                                        </div>
                                    </Row>

                                    <hr/>

                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={6}>
                                                <h2><b>Features</b></h2>
                                                <br/>
                                                {this.props.features[0].length > 0 ? this.props.features[0].map(function(element){
                                                    return <p className="tiny-text" key={element}>{element}</p>
                                                }) : <p className="red tiny-text">Free Features not selected</p>}
                                                {this.props.features[1].length > 0 ? this.props.features[1].map(function(element){
                                                    return <p className="tiny-text" key={element}>{element}</p>
                                                }) : <p className="red tiny-text">Premium Features not selected</p>}
                                                <br/>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <h2><b>Total:</b></h2>
                                                <h3>{this.props.features[2].toLocaleString() + " KRW"}</h3>
                                            </Col>

                                        </div>
                                    </Row>

                                    <hr/>

                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={6}>
                                                <h2><b>Design</b></h2>
                                                <br/>
                                                {this.props.design[0] ? <p className="tiny-text">{this.props.design[0]}</p>
                                                    : <p className="red tiny-text">Design style not selected</p>}
                                                {this.props.design[1] ? <p className="tiny-text">{this.props.design[1]}</p>
                                                    : <p className="red tiny-text">Branding not selected</p>}
                                                <br/>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <h2><b>Total:</b></h2>
                                                <h3>{this.props.design[2].toLocaleString() + " KRW"}</h3>
                                            </Col>

                                        </div>
                                    </Row>

                                    <hr/>

                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={6}>
                                                <h2><b>Services</b></h2>
                                                <br/>
                                                {this.props.services[0] ? <p className="tiny-text">{this.props.services[0]}</p>
                                                    : <p className="red tiny-text">Hosting service not selected</p>}
                                                {this.props.services[1] ? <p className="tiny-text">{this.props.services[1]}</p>
                                                    : <p className="red tiny-text">Address service not selected</p>}
                                                {this.props.services[2] ? <p className="tiny-text">{this.props.services[2]}</p>
                                                    : <p className="red tiny-text">Maintenance service not selected</p>}
                                                <br/>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <h2><b>Total:</b></h2>
                                                <h3>{this.props.services[3].toLocaleString() + " KRW / Month"}</h3>
                                            </Col>

                                        </div>
                                    </Row>
                                    
                                </Grid>

                            </div>

                        </div>

                    </div>

                    <div style={{textAlign: "center"}}>

                        <h3 className="gray">Monthly Cost:</h3>
                        <h3 className="black"><b>{this.props.monthlyCost.toLocaleString()} KRW</b></h3>
                        <hr style={{width: "25%", margin: "auto"}}/>
                        <h1 className="gray">Total Cost:</h1>
                        <h1><b>{this.props.price.toLocaleString()} KRW</b></h1>
                        <br/>

                        <NavLink to="/contact" exact>
                            <Button className="emptyButton blackButton bigButton">
                                <b>Work with Us</b>
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

        const nextResult = interpretOrder(nextState);

        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);