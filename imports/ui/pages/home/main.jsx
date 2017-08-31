/**
 * Created by JohnBae on 7/27/17.
 */
import React, { Component }from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap'
import ReactRotatingText from 'react-rotating-text';
import {NavLink} from 'react-router-dom';
import Center from '../../components/center/main';
import {connectAdvanced} from "react-redux";
import content from './content';
import Remarkable from 'remarkable';
import ScrollDown from '../../components/scrollDown/main';
var md = new Remarkable();
class App extends Component {
    renderItem(map){
        return React.createElement(map.type, map.props);
    }
    getRawMarkup(content) {
        var md = new Remarkable({linkTarget: "_blank"});
        return { __html: md.render(content) };
    }
    render() {
        var text = content.get(this.props.language);
        return (
            <div style={{position: "relative"}}>
                <div className="banner-container">
                    <Center>
                        <div className="center-container inner-container">
                            <h1 style={{fontSize: "3.5rem"}} className="margin-1">
                                {text.banner.title}
                            </h1>
                            <h3 className="margin-2">{text.banner.subTitleOne}</h3>
                            <NavLink to="/contact" exact>
                                <Button className="blackButton bigButton">
                                    <b>{text.banner.button}</b>
                                    <i className="arrow right" />
                                </Button>
                            </NavLink>
                        </div>
                    </Center>
                </div>
                <ScrollDown/>
                <div style={{position: "relative"}} className="margin-2">
                    <div className="staggered-container" style={{background: "url('/assets/home-background-1.svg') no-repeat", backgroundSize: "100%"}}>
                        <div className="right-container">
                            <div className="category-container">
                                <div className="inner-container">
                                    <div className="tight-container">
                                        <h1 style={{marginTop: "7rem"}}  className="margin-2">
                                            {text.marketing.title}
                                        </h1>
                                        <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.marketing.paragraph)}/>
                                    </div>
                                    <Grid style = {{width: "auto"}} className="margin-1">
                                        <Row className="show-grid">
                                            <Col xs={12} md={4} className="col-item-list">
                                               <div>
                                                    <img src="/assets/home-1-analysis.svg" height="100" width="100"/>
                                                    <h3 className="margin-1">{text.marketing.cardOne.title}</h3>
                                                    <p>
                                                        {text.marketing.cardOne.content}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-item-list">
                                               <div>
                                                    <img src="/assets/home-1-seo.svg" height="100" width="100"/>
                                                    <h3 className="margin-1">{text.marketing.cardTwo.title}</h3>
                                                    <p>
                                                        {text.marketing.cardTwo.content}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-item-list">
                                               <div>
                                                    <img src="/assets/home-1-translation.svg" height="100" width="100"/>
                                                    <h3 className="margin-1">{text.marketing.cardThree.title}</h3>
                                                    <p>
                                                        {text.marketing.cardThree.content}
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="staggered-container-title">
                        <div style={{border: "solid #8900FF 2px"}} className="stripe-top"/>
                        <p style={{textAlign: "center", color: "white"}}>
                            {text.marketing.subTitle}
                        </p>
                    </div>
                </div>
                <div style={{position: "relative"}} className="margin-2">
                    <div className="staggered-container" style={{background: "url('/assets/home-background-2.svg') no-repeat", backgroundSize: "100%"}}>
                        <div className="left-container">
                            <div className="category-container">
                                <div className="inner-container">
                                    <div className="tight-container">
                                        <h1 style={{marginTop: "7rem"}}  className="margin-2">
                                            {text.design.title}
                                        </h1>
                                        <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.design.paragraph)}/>
                                    </div>
                                    <Grid style = {{width: "auto"}} className="margin-1">
                                        <Row className="show-grid">
                                            <Col xs={12} md={4} className="col-item-list">
                                               <div>
                                                    <img src="/assets/home-2-mobile.svg" height="100" width="100"/>
                                                    <h3 className="margin-1">{text.design.cardOne.title}</h3>
                                                    <p>
                                                        {text.design.cardOne.content}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-item-list">
                                               <div>
                                                    <img src="/assets/home-2-branding.svg" height="100" width="100"/>
                                                    <h3 className="margin-1">{text.design.cardTwo.title}</h3>
                                                    <p>
                                                        {text.design.cardTwo.content}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-item-list">
                                               <div>
                                                    <img src="/assets/home-2-ux.svg" height="100" width="100"/>
                                                    <h3 className="margin-1">{text.design.cardThree.title}</h3>
                                                    <p>
                                                        {text.design.cardThree.content}
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="staggered-container-title">
                        <div style={{border: "solid #F98115 2px"}} className="stripe-top"/>
                        <p style={{textAlign: "center", color: "white"}}>
                            {text.design.subTitle}
                        </p>
                    </div>
                </div>
                <div style={{position: "relative"}}>
                    <div className="staggered-container" style={{background: "url('/assets/home-background-3.svg') no-repeat", backgroundSize: "100%"}}>
                        <div className="right-container">
                            <div className="category-container">
                                <div className="inner-container">
                                    <div className="tight-container">
                                        <h1 style={{marginTop: "7rem"}}  className="margin-2">
                                            {text.development.title}
                                        </h1>
                                        <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.development.paragraph)}/>
                                    </div>
                                    <Grid style = {{width: "auto"}} className="margin-1">
                                        <Row className="show-grid">
                                            <Col xs={12} md={4} className="col-item-list">
                                               <div>
                                                    <img src="/assets/home-3-cloud.svg" height="100" width="100"/>
                                                    <h3 className="margin-1">{text.development.cardOne.title}</h3>
                                                    <p>
                                                        {text.development.cardOne.content}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-item-list">
                                               <div>
                                                    <img src="/assets/home-3-speed.svg" height="100" width="100"/>
                                                    <h3 className="margin-1">{text.marketing.cardTwo.title}</h3>
                                                    <p>
                                                        {text.development.cardTwo.content}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="col-item-list">
                                               <div>
                                                    <img src="/assets/home-3-test.svg" height="100" width="100"/>
                                                    <h3 className="margin-1">{text.marketing.cardThree.title}</h3>
                                                    <p>
                                                        {text.development.cardThree.content}
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="staggered-container-title">
                        <div style={{border: "solid #FB4473 2px"}} className="stripe-top"/>
                        <p style={{textAlign: "center", color: "white"}}>
                            {text.development.subTitle}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
function selectorFactory(dispatch) {
    let result = {};
    return (nextState, nextOwnProps) => {
        const nextResult = {
            language: nextState.settings.get("language"),
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}
export default connectAdvanced(selectorFactory)(App);