/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import Center from '../../components/center/main'
import {Button, Grid, Row, Col, Label, FormGroup, Radio} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import * as Actions from "../../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';

const style = { width: 600, margin: 50 };

function estimateCost(element){
    var cost = 0;

    this.props.

    this.props.reduxActions.setValueC()
}

class Main extends Component {


    render() {

        return (
            <div>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div style={{background: "linear-gradient(90deg, rgb(255, 255, 255) 0px, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 0px, rgb(255, 255, 255))"}}>

                        <div style={{padding: "10px"}}>
                            <Button className="emptyButton blue"> Content </Button>
                            <Button className="emptyButton gray"> Features </Button>
                            <Button className="emptyButton gray"> Design </Button>
                            <Button className="emptyButton gray"> Services </Button>
                        </div>

                        <div className="default-container">

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="blue">
                                    Content: Pages
                                </h2>

                                <br/>

                                <p>
                                    How many pages will you be using? We provide up to 3 free pages and charge 25,000 KRW per page afterwards.
                                </p>

                                <br/> <br/> <br/>

                                <Slider min={1}
                                        max={100}
                                        value={this.props.pages.get("number")}
                                        style={{display: "inlineBlock"}}
                                        onChange={(value) => this.props.reduxActions.setValueC(["content","pages","number"],value)}
                                        onBlur={()=> estimateCost()}
                                        disabled={this.props.pages.get("opt1") || this.props.pages.get("opt2")}
                                        onAfterChange={this.onAfterChange}
                                />
                                <br/>

                                <input className={this.props.pages.get("opt1") || this.props.pages.get("opt2") ? "small-text gray" : "small-text blue"}
                                       disabled={this.props.pages.get("opt1") || this.props.pages.get("opt2")}
                                       style={{display: "inline", float: "left", width: "30px"}}
                                       value={this.props.pages.get("number") || 1}
                                       onClick={(event)=>event.target.setSelectionRange(0, event.target.value.length)}
                                       onChange={(event) => this.props.reduxActions.setValueC(["content","pages","number"], parseInt(event.target.value || 1))}/>
                                <p className={this.props.pages.get("opt1") || this.props.pages.get("opt2") ? "small-text gray" : "small-text blue"} style={{display: "inline", float: "right", lineHeight: "28px"}}>100</p>
                                <br/>
                                <h3 className={this.props.pages.get("opt1") || this.props.pages.get("opt2") ? "gray" : "blue"} style={{display: "block", textAlign: "left"}}>
                                    <b>{this.props.pages.get("number") <= 3 ? "Free" : ((this.props.pages.get("number") - 3) * 25000).toLocaleString() + " KRW"}</b>
                                </h3>

                                <br/> <br/>

                                <FormGroup>
                                    <Radio inline name="radioGroup"
                                           checked={this.props.pages.get("opt1") && !this.props.pages.get("opt2")}
                                           onClick={(event) => {
                                               var state = event.target.checked&&this.props.pages.get("opt1")? false : true;
                                               this.props.reduxActions.setValueC(["content","pages","opt2"], false)
                                               this.props.reduxActions.setValueC(["content","pages","opt1"], state)
                                           }}>
                                        <p className="small-text inline blue"> Don't know?</p>
                                    </Radio>
                                    {" "}
                                    <Radio inline name="radioGroup"
                                           checked={this.props.pages.get("opt2") && !this.props.pages.get("opt1")}
                                           onClick={(event) => {
                                               var state = event.target.checked&&this.props.pages.get("opt2") ? false : true;
                                               this.props.reduxActions.setValueC(["content","pages","opt1"], false)
                                               this.props.reduxActions.setValueC(["content","pages","opt2"], state)
                                           }}>
                                        <p className="small-text inline blue"> It will by dynamically generated</p>
                                    </Radio>
                                </FormGroup>

                                <hr/>

                            </div>

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="blue">
                                    Content: Text
                                </h2>

                                <br/>

                                <p>
                                    Do you need us to create textual content?
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.text.get('opt1') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 style={{fontSize: "100vb"}}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I will be providing my own content
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                console.log("Button 1")
                                                                this.props.reduxActions.setValueC(["content","text","opt1"], !this.props.text.get('opt1'))
                                                                this.props.reduxActions.setValueC(["content","text","opt2"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.text.get('opt2') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 style={{fontSize: "100vb"}}>250 KRW / Word</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I require content to be written
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                console.log("Button 2")
                                                                this.props.reduxActions.setValueC(["content","text","opt2"], !this.props.text.get('opt2'))
                                                                this.props.reduxActions.setValueC(["content","text","opt1"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </Grid>

                                <br/> <br/>

                                <hr/>

                            </div>

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="blue">
                                    Content: Text
                                </h2>

                                <br/>

                                <p>
                                    Do you need us to create textual content?
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.text.get('opt1') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 style={{fontSize: "100vb"}}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I will be providing my own content
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                console.log("Button 1")
                                                                this.props.reduxActions.setValueC(["content","text","opt1"], !this.props.text.get('opt1'))
                                                                this.props.reduxActions.setValueC(["content","text","opt2"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.text.get('opt2') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 style={{fontSize: "100vb"}}>250 KRW / Word</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I require content to be written
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                console.log("Button 2")
                                                                this.props.reduxActions.setValueC(["content","text","opt2"], !this.props.text.get('opt2'))
                                                                this.props.reduxActions.setValueC(["content","text","opt1"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </Grid>

                                <br/> <br/>

                                <FormGroup>
                                    <Radio inline name="radioGroup"
                                           checked={this.props.text.get("opt4")}
                                           onClick={(event) => {
                                               var state = event.target.checked&&this.props.text.get("opt4")? false : true;
                                               this.props.reduxActions.setValueC(["content","text","opt4"], state)
                                           }}>
                                        <p className="small-text inline blue"> Don't know?</p>
                                    </Radio>
                                </FormGroup>

                                <hr/>

                            </div>

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="blue">
                                    Content: Media
                                </h2>

                                <br/>

                                <p>
                                    Do you need media content?
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4}>
                                                <div className={this.props.text.get('opt1') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 style={{fontSize: "100vb"}}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I will be providing my own content
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                console.log("Button 1")
                                                                this.props.reduxActions.setValueC(["content","text","opt1"], !this.props.text.get('opt1'))
                                                                this.props.reduxActions.setValueC(["content","text","opt2"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <div className={this.props.text.get('opt2') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 style={{fontSize: "100vb"}}>250,000 KRW</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I require content to be written
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                console.log("Button 2")
                                                                this.props.reduxActions.setValueC(["content","text","opt2"], !this.props.text.get('opt2'))
                                                                this.props.reduxActions.setValueC(["content","text","opt1"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <div className={this.props.text.get('opt2') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 style={{fontSize: "100vb"}}>250,000 KRW</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I require content to be written
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["content","text","opt2"], !this.props.text.get('opt2'))
                                                                this.props.reduxActions.setValueC(["content","text","opt1"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                        </div>
                                    </Row>
                                </Grid>

                                <br/> <br/>

                                <FormGroup>
                                    <Radio inline name="radioGroup"
                                           checked={this.props.media.get("opt4")}
                                           onClick={(event) => {
                                               var state = event.target.checked&&this.props.media.get("opt4")? false : true;
                                               this.props.reduxActions.setValueC(["content","media","opt4"], state)
                                           }}>
                                        <p className="small-text inline blue"> Don't know?</p>
                                    </Radio>
                                </FormGroup>

                                <hr/>

                            </div>

                        </div>

                    </div>

                </div>

                <br/><br/><br/>

                <hr/>

                <div style={{textAlign: "center"}}>

                    <br/>

                    <h2>Not what you're looking for?</h2>

                    <br/>

                    <Button className="emptyButton blackButton bigButton"><b>Customize your experience</b> <i className="arrow right" /></Button>
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
            pages: nextState.get("content").get("pages"),
            text: nextState.get("content").get("text"),
            translation: nextState.get("content").get("translation"),
            media: nextState.get("content").get("media"),
            content: nextState.get("content")
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);

