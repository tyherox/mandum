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

                        <div className="center-container">

                            <h1 style={{fontSize: "3.5rem"}} className="margin-1">
                                {text.banner.title[0] + " "}

                                <ReactRotatingText pause={this.props.language == "EN" ? 2000 : 1500}
                                                   typingInterval={this.props.language == "EN" ? 50 : 125}
                                                   deletingInterval={this.props.language == "EN" ? 50 : 125}
                                                   items={[text.banner.title[1], text.banner.title[2], text.banner.title[3]]}
                                />

                            </h1>

                            <h3>{text.banner.subTitleOne}</h3>
                            <h3 className="margin-2">{text.banner.subTitleTwo}</h3>

                            <p className="orange">{text.banner.deal}</p>

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

                    <div className="center-container staggered-container"
                         style={{background: "url('/assets/home-background-1.svg') no-repeat", backgroundSize: "100%"}}>

                        <div className="right-container">

                            <div className="category-container">

                                <div className="tight-container">

                                    <h1 style={{marginTop: "7rem"}} className="margin-2">
                                        {text.welcome.title}
                                    </h1>

                                    <div className="margin-1" dangerouslySetInnerHTML={this.getRawMarkup(text.welcome.paragraphOne)}/>

                                    <div className="margin-1" dangerouslySetInnerHTML={this.getRawMarkup(text.welcome.paragraphTwo)}/>

                                    <hr/>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="staggered-container-title">

                        <div style={{border: "solid #8900FF 2px"}} className="stripe-top"/>

                        <p style={{textAlign: "center", color: "white"}}>
                            {text.welcome.subTitle}
                        </p>

                    </div>

                </div>

                <div style={{position: "relative"}} className="margin-2">

                    <div className="center-container staggered-container" style={{background: "url('/assets/home-background-2.svg') no-repeat", backgroundSize: "100%"}}>

                        <div className="left-container">

                            <div className="category-container">

                                <div className="inner-container">

                                    <div className="tight-container">
                                        <h1 style={{marginTop: "7rem"}}  className="margin-2">
                                            {text.services.title}
                                        </h1>

                                        <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.services.paragraph)}/>
                                    </div>

                                    <Grid style = {{width: "auto"}} className="margin-1">

                                        <Row className="show-grid">

                                            <Col xs={12} md={4} className="col-item-list">

                                                <div className="center-container">

                                                    <i className="fa fa-code fa-3x orange" aria-hidden="true" />

                                                    <h3 className="margin-1">{text.services.cardOne.title}</h3>

                                                    <p>
                                                        {text.services.cardOne.content}
                                                    </p>

                                                </div>

                                            </Col>

                                            <Col xs={12} md={4} className="col-item-list">

                                                <div className="center-container">

                                                    <i className="fa fa-pencil fa-3x orange" aria-hidden="true" />

                                                    <h3 className="margin-1">{text.services.cardTwo.title}</h3>

                                                    <p>
                                                        {text.services.cardTwo.content}
                                                    </p>

                                                </div>

                                            </Col>

                                            <Col xs={12} md={4} className="col-item-list">

                                                <div className="center-container">

                                                    <i className="fa fa-language fa-3x orange" aria-hidden="true" />

                                                    <h3 className="margin-1">{text.services.cardThree.title}</h3>

                                                    <p>
                                                        {text.services.cardThree.content}
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
                            {text.services.subTitle}
                        </p>

                    </div>
                </div>

                <div style={{position: "relative"}}>

                    <div className="center-container staggered-container" style={{background: "url('/assets/home-background-3.svg') no-repeat", backgroundSize: "100%"}}>

                        <div  className="right-container">

                            <div className="category-container">

                                <div className="inner-container">

                                    <div className="tight-container">
                                        <h1 style={{marginTop: "7rem"}} className="margin-2">
                                            {text.price.title}
                                        </h1>

                                        <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.price.paragraph)}/>
                                    </div>

                                    <NavLink to="/price" exact>

                                        <Button className="emptyButton pinkButton bigButton">

                                            <b>{text.price.button}</b> <i className="arrow right" />

                                        </Button>

                                    </NavLink>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="staggered-container-title">

                        <div style={{border: "solid #FB4473 2px"}} className="stripe-top"/>

                        <p style={{textAlign: "center", color: "white"}}>
                            {text.price.subTitle}
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