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
        console.log(this.props.content);
        return (
            <div>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div style={{background: "linear-gradient(90deg, rgb(255, 255, 255) 0px, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 0px, rgb(255, 255, 255))"}}>

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

                            <div className="inner-container">

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            <Col xs={12} md={6}>
                                                <h2>Content</h2>
                                                {this.props.content[0] ? (this.props.content[0][0] + this.props.content[0][1].toLocaleString() + " KRW") : "Pages not selected"}
                                                <br/>
                                                {this.props.content[1] ? (this.props.content[1][0] + this.props.content[1][1].toLocaleString() + " KRW") : "Text not selected"}
                                                <br/>
                                                {this.props.content[2] ? (this.props.content[2][0] + this.props.content[2][1].toLocaleString() + " KRW") : "Translation not selected"}
                                                <br/>
                                                {this.props.content[3] ? (this.props.content[3][0] + this.props.content[3][1].toLocaleString() + " KRW") : "Media not selected"}
                                                <br/>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <h2>Total:</h2>
                                                <h3>***KRW</h3>
                                            </Col>

                                        </div>
                                    </Row>
                                </Grid>

                                <hr/>

                            </div>

                        </div>

                    </div>

                    <div style={{textAlign: "center"}}>

                        <h1 className="gray">Your Total:</h1>
                        <h1><b>{this.props.cost.toLocaleString()} KRW</b></h1>
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

        var totalCost = 0;
        var monthlyCost = 0;

        var content = nextState.get("content"),
            pages,
            text,
            translation,
            media;

        if(!content.get('pages').get("opt2") && !content.get('pages').get("opt3")){
            totalCost += content.get("pages").get("opt1") * content.get("pages").get("cost").get("opt1");
            pages = [content.get("pages").get("opt1") + " pages: ", content.get("pages").get("opt1") * content.get("pages").get("cost").get("opt1")];
        }
        else if(content.get('pages').get("opt2")){
            totalCost += 100000;
            pages = ["Estimating needed pages: ", 100000]
        }
        else if(content.get('pages').get("opt3")){
            totalCost += content.get("pages").get("cost").get("opt3");
            pages = ["Dynamically generated pages: ", content.get("pages").get("cost").get("opt3")]
        }

        if(content.get('text').get('opt1')){
            totalCost += 0;
            text = ["Providing own text content: ", 0];
        }
        else if(content.get('text').get('opt2')){
            totalCost += content.get('text').get('cost').get('opt2');
            text = ["Will need text content: ", content.get('text').get('cost').get('opt2')];
        }
        else 

        if(content.get('translation').get('opt1')){
            totalCost += content.get('text').get('cost').get('opt2');
            translation = ["Will not need translation: ", 0];
        }
        else if(content.get('translation').get('opt2')){
            translation = ["Will need an English and Korean site: ", 0];
        }

        if(content.get('media').get('opt1')){
            media = ["Will not need media content: ", 0];
        }
        else if(content.get('media').get('opt3') && content.get('media').get('opt2')){
            media = ["Will need both pictures and illustrations: ", content.get('media').get('cost').get("opt3") + content.get('media').get('cost').get("opt2")];
        }
        else if(content.get('media').get('opt2')){
            media = ["Will need pictures: ", content.get("media").get('cost').get('opt2')];
        }
        else if(content.get('media').get('opt3')){
            media = ["Will need illustrations: ",  content.get("media").get('cost').get('opt3')];
        }


        const nextResult = {
            content: [pages,text,translation,media],
            features: "",
            design: "",
            services: "",
            cost: nextState.get("totalCost")
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);