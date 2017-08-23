/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import Center from '../../components/center/main'
import {Button, Grid, Row, Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import {connectAdvanced} from "react-redux";
import content from './content';
import Remarkable from 'remarkable';
import ScrollDown from '../../components/scrollDown/main';

class Main extends Component {

    getRawMarkup(content) {
        var md = new Remarkable({linkTarget: "_blank"});
        return { __html: md.render(content) };
    }

    render() {

        var text = content.get(this.props.language);

        return (
            <div>

                <div className="banner-container">

                    <Center>

                        <div className="center-container">

                            <h1 className="margin-1">
                                {text.banner.title}
                            </h1>

                            <h3 className="margin-2">
                                {text.banner.subTitle}
                            </h3>

                            <br/>

                            <NavLink to="/price/select-1" exact>

                                <Button className="blackButton bigButton">
                                    <b>{text.banner.button}</b>
                                    <i className="arrow right" />
                                </Button>

                            </NavLink>

                        </div>

                    </Center>

                </div>

                <ScrollDown/>

                <div className="center-container staggered-container"
                     style={{background: "url('/assets/price-bg1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div className="category-container">

                        <div className="inner-container">

                            <div className="stripe-top purple"/>

                            <div className="tight-container">
                                <h1 style={{marginTop: "5rem"}} className="margin-2">
                                    {text.introduction.title}
                                </h1>

                                <p  className="margin-2">
                                    {text.introduction.paragraph}
                                </p>
                            </div>

                            <Grid style = {{width: "auto"}}>

                                <Row className="show-grid">

                                    <Col xs={12} md={4} className="col-item-list">

                                        <div className="center-container">

                                            <i className='fa fa-retweet fa-3x purple'/>
                                            <h3 className="margin-1">{text.introduction.cards.cardOne.title}</h3>

                                            <p>
                                                {text.introduction.cards.cardOne.paragraph}
                                            </p>

                                        </div>
                                    </Col>

                                    <Col xs={12} md={4} className="col-item-list">

                                        <div className="center-container">

                                            <i className='fa fa-eye fa-3x purple'/>
                                            <h3 className="margin-1"> {text.introduction.cards.cardTwo.title}</h3>
                                            <p>
                                                {text.introduction.cards.cardTwo.paragraph}
                                            </p>

                                        </div>
                                    </Col>

                                    <Col xs={12} md={4} className="col-item-list">

                                        <div className="center-container">

                                            <i className='fa fa-cogs fa-3x purple'/>
                                            <h3 className="margin-1"> {text.introduction.cards.cardThree.title}</h3>
                                            <p>
                                                {text.introduction.cards.cardThree.paragraph}
                                            </p>

                                        </div>
                                    </Col>

                                </Row>

                            </Grid>

                            <hr/>

                        </div>

                    </div>

                </div>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg2.svg') no-repeat", backgroundSize: "100%"}}>

                    <div className="left-container">

                        <div className="category-container">

                            <div className="inner-container">

                                <Grid fluid>

                                    <Row>
                                        <Col  xs={12} md={4}>
                                            <i className="fa fa-cubes fa-5x sideIconL margin-1" aria-hidden="true" />
                                        </Col>

                                        <Col  xs={12} md={8}>

                                            <div className="margin-3">
                                                <div className="stripe-top red"/>

                                                <h1 style={{marginTop: "5rem"}} className="margin-1">
                                                    {text.packages.title}
                                                </h1>

                                                <p className="margin-3">
                                                    {text.packages.paragraph}
                                                </p>

                                                <hr/>

                                                <NavLink to="/price/packages" exact  className="margin-1">
                                                    <Button className="emptyButton pinkButton">
                                                        <b>{text.packages.action}</b>
                                                        <i className="arrow right" />
                                                    </Button>
                                                </NavLink>

                                            </div>

                                        </Col>

                                    </Row>

                                </Grid>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg3.svg') no-repeat", backgroundSize: "100%"}}>

                    <div className="right-container">

                        <div className="category-container">

                            <div className="inner-container">

                                <Grid fluid>

                                    <Row>
                                        <Col  xs={12} md={4} mdPush={8}>
                                            <i className="fa fa-tasks fa-5x sideIconR margin-1" aria-hidden="true" />
                                        </Col>

                                        <Col  xs={12} md={8} mdPull={4}>

                                            <div className="margin-3">

                                                <div className="stripe-top blue"/>

                                                <h1 style={{marginTop: "5rem"}}  className="margin-1">
                                                    {text.estimator.title}
                                                </h1>

                                                <p className="margin-3">
                                                    {text.estimator.paragraph}
                                                </p>

                                                <hr/>

                                                <NavLink to="/price/select-1" exact  className="margin-1">
                                                    <Button className="emptyButton blueButton">
                                                        <b>{text.estimator.action}</b>
                                                        <i className="arrow right" />
                                                    </Button>
                                                </NavLink>

                                            </div>

                                        </Col>

                                    </Row>

                                </Grid>

                            </div>

                        </div>

                    </div>

                </div>

                <hr/>

                <div style={{textAlign: "center"}}  className="margin-3">

                    <h2  className="margin-1">{text.alt.title}</h2>

                    <NavLink to="/contact" exact>
                        <Button className="blackButton bigButton">
                            <b>{text.alt.action}</b>
                            <i className="arrow right" />
                        </Button>
                    </NavLink>

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

export default connectAdvanced(selectorFactory)(Main);