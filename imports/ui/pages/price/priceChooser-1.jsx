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

                            <NavLink to="/price/select-1" exact>
                                <Button className="emptyButton blue">
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
                                <Button className="emptyButton gray">
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

                            <div className="inner-container" style={{transition: "all .5s ease-in-out"}}>

                                <h2 style={{marginTop: "5rem"}} className="blue">
                                    Content: Pages
                                </h2>

                                <br/>

                                <p>
                                    How many pages will you be using? We provide up to 5 free pages and charge 25,000 KRW per page afterwards.
                                </p>

                                <br/> <br/> <br/>

                                <Slider min={1}
                                        max={100}
                                        value={this.props.pages.get("opt1")}
                                        style={{display: "inlineBlock"}}
                                        onChange={(value) => this.props.reduxActions.setValueC(["content","pages","opt1"],value)}
                                        onBlur={()=> estimateCost()}
                                        disabled={this.props.pages.get("opt2") || this.props.pages.get("opt3")}
                                        onAfterChange={this.onAfterChange}
                                />
                                <br/>

                                <input className={this.props.pages.get("opt2") || this.props.pages.get("opt3") ? "small-text gray" : "small-text blue"}
                                       disabled={this.props.pages.get("opt2") || this.props.pages.get("opt3")}
                                       style={{display: "inline", float: "left", width: "3rem"}}
                                       value={this.props.pages.get("opt1") || 1}
                                       onClick={(event)=>event.target.setSelectionRange(0, event.target.value.length)}
                                       onChange={(event) => this.props.reduxActions.setValueC(["content","pages","opt1"], parseInt(event.target.value || 1))}/>
                                <p className={this.props.pages.get("opt2") || this.props.pages.get("opt3") ? "small-text gray" : "small-text blue"} style={{display: "inline", float: "right", lineHeight: "28px"}}>100</p>
                                <br/>
                                <h3 className={this.props.pages.get("opt2") || this.props.pages.get("opt3") ? "gray" : "blue"} style={{display: "block", textAlign: "left"}}>
                                    <b>{this.props.pages.get("opt1") <= 5 ? "Free" : ((this.props.pages.get("opt1") - 5) * 25000).toLocaleString() + " KRW"}</b>
                                </h3>

                                <br/> <br/>

                                <FormGroup>
                                    <Radio inline name="pageGroup"
                                           checked={this.props.pages.get("opt2") && !this.props.pages.get("opt3")}
                                           onClick={(event) => {
                                               var state = event.target.checked&&this.props.pages.get("opt2")? false : true;
                                               this.props.reduxActions.setValueC(["content","pages","opt2"], state)
                                               if(this.props.pages.get("opt3")) this.props.reduxActions.setValueC(["content","pages","opt3"], false)
                                               if(state) this.props.reduxActions.setValueC(["content","pages","opt1"], this.props.pages.get("opt1"))
                                           }}>
                                        <p className="small-text inline blue"> Don't know?</p>
                                    </Radio>
                                    {" "}
                                    <Radio inline name="pageGroup"
                                           checked={this.props.pages.get("opt3") && !this.props.pages.get("opt2")}
                                           onClick={(event) => {
                                               var state = event.target.checked&&this.props.pages.get("opt3") ? false : true;
                                               this.props.reduxActions.setValueC(["content","pages","opt3"], state)
                                               if(this.props.pages.get("opt2")) this.props.reduxActions.setValueC(["content","pages","opt2"], false)
                                               if(state) this.props.reduxActions.setValueC(["content","pages","opt1"], this.props.pages.get("opt1"))
                                           }}>
                                        <p className="small-text inline blue"> It will by dynamically generated ({this.props.pages.get("cost").get("opt3").toLocaleString() + " KRW"})</p>
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
                                                    <h3 className={this.props.text.get('opt1') ? "blue" : ""}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I will be providing my own content
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["content","text","opt1"], !this.props.text.get('opt1'))
                                                                if(this.props.text.get("opt2")) this.props.reduxActions.setValueC(["content","text","opt2"], false)
                                                                if(this.props.text.get("opt3")) this.props.reduxActions.setValueC(["content","text","opt3"], false);
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.text.get('opt2') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3 className={this.props.text.get('opt2') ? "blue" : ""} >200,000 KRW</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I require content to be written
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["content","text","opt2"],  !this.props.text.get('opt2'));
                                                                if(this.props.text.get("opt1")) this.props.reduxActions.setValueC(["content","text","opt1"], false);
                                                                if(this.props.text.get("opt3")) this.props.reduxActions.setValueC(["content","text","opt3"], false);
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
                                    <Radio inline
                                           checked={this.props.text.get("opt3")}
                                           onClick={(event) => {
                                               var state = event.target.checked&&this.props.text.get("opt3")? false : true;
                                               this.props.reduxActions.setValueC(["content","text","opt3"], state)
                                               if(this.props.text.get("opt1")) this.props.reduxActions.setValueC(["content","text","opt1"], false)
                                               if(this.props.text.get("opt2")) this.props.reduxActions.setValueC(["content","text","opt2"], false)
                                           }}>
                                        <p className="small-text inline blue"> Don't know?</p>
                                    </Radio>
                                </FormGroup>

                                <hr/>

                            </div>

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="blue">
                                    Content: Translation
                                </h2>

                                <br/>

                                <p>
                                    Do you need any translation?
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.translation.get('opt1') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3  className={this.props.text.get('opt2') ? "blue" : ""} >Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I do not require translation.
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                console.log("Button 1")
                                                                this.props.reduxActions.setValueC(["content","translation","opt1"], !this.props.translation.get('opt1'))
                                                                if(this.props.translation.get("opt2")) this.props.reduxActions.setValueC(["content","translation","opt2"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-centered">
                                                <div className={this.props.translation.get('opt2') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3  className={this.props.text.get('opt2') ? "blue" : ""} >Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I need an English and a Korean version
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                console.log("Button 2")
                                                                this.props.reduxActions.setValueC(["content","translation","opt2"], !this.props.translation.get('opt2'))
                                                                if(this.props.translation.get("opt1")) this.props.reduxActions.setValueC(["content","translation","opt1"], false)
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
                                    <Radio inline
                                           checked={this.props.translation.get("opt3")}
                                           onClick={(event) => {
                                               var state = event.target.checked&&this.props.translation.get("opt3")? false : true;
                                               this.props.reduxActions.setValueC(["content","translation","opt3"], state)
                                               if(this.props.translation.get("opt1")) this.props.reduxActions.setValueC(["content","translation","opt1"], false)
                                               if(this.props.translation.get("opt2")) this.props.reduxActions.setValueC(["content","translation","opt2"], false)
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
                                                <div className={this.props.media.get('opt1') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3  className={this.props.text.get('opt2') ? "blue" : ""}>Free</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I will be providing my own content
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                console.log("Button 1")
                                                                this.props.reduxActions.setValueC(["content","media","opt1"], !this.props.media.get('opt1'))
                                                                if(this.props.media.get("opt2")) this.props.reduxActions.setValueC(["content","media","opt2"], false)
                                                                if(this.props.media.get("opt3")) this.props.reduxActions.setValueC(["content","media","opt3"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <div className={this.props.media.get('opt2') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3  className={this.props.text.get('opt2') ? "blue" : ""}>250,000 KRW</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I require illustrations
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                console.log("Button 2")
                                                                this.props.reduxActions.setValueC(["content","media","opt2"], !this.props.media.get('opt2'))
                                                                if(this.props.media.get("opt1")) this.props.reduxActions.setValueC(["content","media","opt1"], false)
                                                            }}>
                                                        <p>Select</p>
                                                    </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4}>
                                                <div className={this.props.media.get('opt3') ? "card-container selected-blue" : "card-container"} style={{verticalAlign: "bottom"}}>
                                                    <h3  className={this.props.text.get('opt2') ? "blue" : ""}>250,000 KRW</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        I require photographs
                                                    </p>
                                                    <br/>
                                                    <Button className="emptyButton blue"
                                                            onClick={() => {
                                                                this.props.reduxActions.setValueC(["content","media","opt3"], !this.props.media.get('opt3'))
                                                                if(this.props.media.get("opt1")) this.props.reduxActions.setValueC(["content","media","opt1"], false)
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
                                    <Radio inline
                                           checked={this.props.media.get("opt4")}
                                           onClick={(event) => {
                                               var state = event.target.checked&&this.props.media.get("opt4")? false : true;
                                               this.props.reduxActions.setValueC(["content","media","opt4"], state)
                                               if(this.props.media.get("opt1")) this.props.reduxActions.setValueC(["content","media","opt1"], false)
                                               if(this.props.media.get("opt2")) this.props.reduxActions.setValueC(["content","media","opt2"], false)
                                               if(this.props.media.get("opt3")) this.props.reduxActions.setValueC(["content","media","opt3"], false)
                                           }}>
                                        <p className="small-text inline blue"> Don't know?</p>
                                    </Radio>
                                </FormGroup>

                                <hr/>

                            </div>

                        </div>

                    </div>

                    <div style={{textAlign: "center"}}>

                        <h1 className="gray">Your Current Total:</h1>
                        <h1 className="blue"><b>{this.props.cost.toLocaleString()} KRW</b></h1>
                        <br/>

                        <NavLink to="/price/select-2" exact>
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

        var pages = nextState.get("content").get("pages"),
            text = nextState.get("content").get("text"),
            translation = nextState.get("content").get("translation"),
            media = nextState.get("content").get("media") ;
        
        var pageCost = 0,
            textCost = 0,
            mediaCost = 0;

        if(pages.get("opt3")){
            pageCost = pages.get("cost").get("opt3");
        }
        else if(!pages.get("opt2")){
            pageCost = (pages.get("opt1") - 5) * pages.get("cost").get("opt1");
        }

        if(!text.get("opt1") && text.get("opt2")) {
            textCost = text.get("cost").get("opt2");
        }

        if(media.get("opt2")){
            mediaCost = media.get("cost").get("opt2");
        }
        if(media.get("opt3")){
            mediaCost += media.get("cost").get("opt3");
        }



        const nextResult = {
            reduxActions: actions,
            pages: nextState.get("content").get("pages"),
            text: nextState.get("content").get("text"),
            translation: nextState.get("content").get("translation"),
            media: nextState.get("content").get("media"),
            content: nextState.get("content"),
            cost: nextState.get("totalCost")
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);
