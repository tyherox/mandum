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
                                                <h2><b>Content</b></h2>
                                                <br/>
                                                {this.props.content[0] ? <p className="tiny-text">{this.props.content[0][0] + this.props.content[0][1].toLocaleString() + " KRW"}</p>
                                                    : <p className="red tiny-text">Pages not selected</p>}
                                                {this.props.content[1] ? <p className="tiny-text">{this.props.content[1][0] + this.props.content[1][1].toLocaleString() + " KRW"}</p>
                                                    : <p className="red tiny-text">Text not selected</p>}
                                                {this.props.content[2] ? <p className="tiny-text">{this.props.content[2][0] + this.props.content[2][1].toLocaleString() + " KRW"}</p>
                                                    : <p className="red tiny-text">Translation not selected</p>}
                                                {this.props.content[3] ? <p className="tiny-text">{this.props.content[3][0] + this.props.content[3][1].toLocaleString() + " KRW"}</p>
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
                                                    : <p className="red tiny-text">Logo design not selected</p>}
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
                        <h3><b>{this.props.monthlyCost.toLocaleString()} KRW</b></h3>
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

        var totalCost = 0;
        var monthlyCost = 0;

        var content = nextState.get("content"),
            pages,
            text,
            translation,
            media,
            contentCost = 0;

        if(!content.get('pages').get("opt2") && !content.get('pages').get("opt3")){
            contentCost += (content.get("pages").get("opt1") - 5) * content.get("pages").get("price").get("opt1");
            pages = [content.get("pages").get("opt1") + " pages: ", (content.get("pages").get("opt1") - 5) * content.get("pages").get("price").get("opt1")];
        }
        else if(content.get('pages').get("opt2")){
            pages = ["Unsure about needed pages: ", 0]
        }
        else if(content.get('pages').get("opt3")){
            contentCost += content.get("pages").get("price").get("opt3");
            pages = ["Dynamically generated pages: ", content.get("pages").get("price").get("opt3")]
        }

        if(content.get('text').get('opt1')){
            text = ["Providing own text content: ", 0];
        }
        else if(content.get('text').get('opt2')){
            contentCost += content.get('text').get('price').get('opt2');
            text = ["Will need text content: ", content.get('text').get('price').get('opt2')];
        }
        else if(content.get('text').get('opt3')){
            text = ["Undetermined text requirements: ", 0];
        }

        if(content.get('translation').get('opt1')){
            translation = ["Will not need translation: ", 0];
        }
        else if(content.get('translation').get('opt2')){
            contentCost += content.get('translation').get('price').get('opt2');
            translation = ["Will need an English and Korean site: ",  content.get('translation').get('price').get('opt2')];
        }
        else if(content.get('translation').get('opt3')){
            translation = ["Unsure about translation requirements: ", 0];
        }

        if(content.get('media').get('opt1')){
            media = ["Will not need media content: ", 0];
        }
        else if(content.get('media').get('opt3') && content.get('media').get('opt2')){
            contentCost +=  content.get('media').get('price').get("opt3") + content.get('media').get('price').get("opt2");
            media = ["Will need both pictures and illustrations: ", content.get('media').get('price').get("opt3") + content.get('media').get('price').get("opt2")];
        }
        else if(content.get('media').get('opt2')){
            contentCost += content.get("media").get('price').get('opt2');
            media = ["Will need pictures: ", content.get("media").get('price').get('opt2')];
        }
        else if(content.get('media').get('opt3')){
            contentCost += content.get("media").get('price').get('opt3');
            media = ["Will need illustrations: ",  content.get("media").get('price').get('opt3')];
        }



        var features = nextState.get("features"),
            free = [],
            premium = [],
            featuresCost = 0;

        features.get("free").forEach(function(element, key){
            if(element && key!="price"){
                var string = "";
                switch(key){
                    case "opt1" : string = "Responsive design: ";
                        break;
                    case "opt2" : string = "Search Engine Optimization: ";
                        break;
                    case "opt3" : string = "Under construction page: ";
                        break;
                }

                featuresCost += features.get("free").get("price").get(key)
                free.push([string + features.get("free").get("price").get(key).toLocaleString() + " KRW"])
            }
        });


        features.get("premium").forEach(function(element, key){
            if(element && key!="price"){
                var string = "";
                switch(key){
                    case "opt1" : string = "Admin Page: ";
                        break;
                    case "opt2" : string = "Account System: ";
                        break;
                    case "opt3" : string = "Transaction System: ";
                        break;
                    case "opt4" : string = "Email System: ";
                        break;
                    case "opt5" : string = "Upload / Download Functionality: ";
                        break;
                }

                featuresCost += features.get("premium").get("price").get(key)
                premium.push([string + features.get("premium").get("price").get(key).toLocaleString() + " KRW"])
            }
        });



        var design = nextState.get("design"),
            style,
            logo,
            designCost = 0;

        design.get("style").forEach(function(element, key){
            if(element && key!="price"){
                var string = "";
                switch(key){
                    case "opt1" : string = "Basic design: ";
                        break;
                    case "opt2" : string = "Advanced design: ";
                        break;
                    case "opt3" : string = "Custom design: ";
                        break;
                }

                designCost += design.get("style").get("price").get(key)
                style = string + design.get("style").get("price").get(key).toLocaleString() + " KRW"
            }
        });

        design.get("logo").forEach(function(element, key){
            if(element && key!="price"){
                var string = "";
                switch(key){
                    case "opt1" : string = "Logo needed: ";
                        break;
                    case "opt2" : string = "Logo not needed: ";
                        break;
                }

                designCost += design.get("logo").get("price").get(key)
                logo = string + design.get("logo").get("price").get(key).toLocaleString() + " KRW"
            }
        });

        
        
        var services = nextState.get("services"),
            hosting,
            address,
            maintenance,
            servicesCost = 0;

        services.get("hosting").forEach(function(element, key){
            if(element && key!="price"){
                var string = "";
                switch(key){
                    case "opt1" : string = "Hosting is not needed: ";
                        break;
                    case "opt2" : string = "A Basic server is needed: ";
                        break;
                    case "opt3" : string = "A Advanced server is needed: ";
                        break;
                }

                servicesCost += services.get("hosting").get("price").get(key)
                monthlyCost += services.get("hosting").get("price").get(key);
                hosting = string + services.get("hosting").get("price").get(key).toLocaleString() + " KRW / Month"
            }
        });

        services.get("address").forEach(function(element, key){
            if(element && key!="price"){
                var string = "";
                switch(key){
                    case "opt1" : string = "An address is not needed: ";
                        break;
                    case "opt2" : string = "An address is needed: ";
                        break;
                }

                servicesCost += services.get("address").get("price").get(key)/12
                monthlyCost += services.get("address").get("price").get(key)/12;
                address = string + services.get("address").get("price").get(key).toLocaleString() + " KRW / Year"
            }
        });

        services.get("maintenance").forEach(function(element, key){
            if(element && key!="price"){
                var string = "";
                switch(key){
                    case "opt1" : string = "Basic maintenance: ";
                        break;
                    case "opt2" : string = "Advanced maintenance: ";
                        break;
                    case "opt3" : string = "Retainer level maintenance: ";
                        break;
                }

                servicesCost += services.get("maintenance").get("price").get(key)
                monthlyCost += services.get("maintenance").get("price").get(key);
                maintenance = string + services.get("maintenance").get("price").get(key).toLocaleString() + " KRW / Month"
            }
        });

        const nextResult = {
            content: [pages,text,translation,media, contentCost],
            features: [free, premium, featuresCost],
            design: [style, logo, designCost],
            services: [hosting, address, maintenance, servicesCost],
            price: contentCost + featuresCost + servicesCost + designCost,
            monthlyCost : monthlyCost
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);