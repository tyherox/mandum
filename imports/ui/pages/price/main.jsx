/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import Center from '../../components/center/main'
import {Button, Grid, Row, Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

export default class Main extends Component {

    render() {

        return (
            <div>
                <div className="banner-container">
                    <Center>
                        <div className="center-container">

                            <h1>
                                Simple, Transparent Pricing
                            </h1>

                            <br/>

                            <h3>No Hidden Costs.</h3>

                            <br/>

                            <NavLink to="/price/select-1" exact>
                                <Button >
                                    <b>Start your Estimation</b><i className="arrow right" />
                                </Button>
                            </NavLink>

                        </div>
                    </Center>
                </div>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div className="default-container">

                        <div className="inner-container">

                            <h1 style={{marginTop: "5rem"}}>
                                A Price Range for Everyone
                            </h1>

                            <br/>

                            <p>
                                Whether you're a student creating a personal portfolio or a local business planning to sell your products online, we can work out a price range for your needs.
                                Check out our package selections or customize your price estimation using our price estimator.
                            </p>

                            <br/> <br/>

                            <Grid style = {{width: "auto"}}>
                                <Row className="show-grid">
                                    <Col xs={12} md={4} className="project-item-list col-centered">
                                        <div>
                                            <i className='fa fa-heart fa-3x pulse' style={{color: "dodgerBlue"}}/>
                                            <h3>Refund Policy</h3>
                                            <br/>
                                            <p>
                                                We refund 100% of your money before the prototyping phase.
                                            </p>
                                            <br/>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={4} className="project-item-list col-centered">
                                        <div>
                                            <i className='fa fa-heart fa-3x pulse' style={{color: "dodgerBlue"}}/>
                                            <h3>Transparency</h3>
                                            <br/>
                                            <p>
                                                Our price estimator provides transparency in our prices.
                                            </p>
                                            <br/>
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>

                            <hr/>

                        </div>

                    </div>

                </div>

                <br/><br/><br/>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg2.svg') no-repeat", backgroundSize: "100%"}}>

                    <div style={{background: "linear-gradient(90deg, rgb(255, 255, 255) 0px, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0))"}}>

                        <div className="default-container">

                            <div className="inner-container">

                                <Grid fluid>
                                    <Row>
                                        <Col  xs={12} md={4}>
                                            <i className="fa fa-cubes fa-5x sideIconL" aria-hidden="true" />
                                        </Col>

                                        <Col  xs={12} md={8}>
                                            <h1 style={{marginTop: "5rem"}}>
                                                Find your price quickly
                                            </h1>

                                            <br/>

                                            <p>
                                                Packages are bundled features for common website usages.
                                                Browse our offers to quickly gauge how much your website will cost.
                                            </p>

                                            <br/> <br/> <br/>

                                            <hr/>

                                            <NavLink to="/price/packages" exact>
                                                <Button className="emptyButton pinkButton">
                                                    <b>Explore our Packages</b>
                                                    <i className="arrow right" />
                                                </Button>
                                            </NavLink>

                                            <br/>

                                        </Col>

                                    </Row>
                                </Grid>

                                <br/> <br/>

                            </div>

                        </div>

                    </div>

                </div>

                <br/><br/><br/>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg3.svg') no-repeat", backgroundSize: "100%"}}>

                    <div style={{background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255) 0px, rgb(255, 255, 255))"}}>

                        <div className="default-container">

                            <div className="inner-container">

                                <Grid fluid>
                                    <Row>
                                        <Col  xs={12} md={4} mdPush={8}>
                                            {/*
                                             <img className="sideIconR"
                                             width="250"
                                             src="/assets/placeHolder.svg"/>
                                            */}
                                            <i className="fa fa-tasks fa-5x sideIconR" aria-hidden="true" />
                                        </Col>

                                        <Col  xs={12} md={8} mdPull={4}>
                                            <h1 style={{marginTop: "5rem"}}>
                                                Customize your experience
                                            </h1>

                                            <br/>

                                            <p>
                                                Have eccentric or uncommon needs?
                                                Use our price estimator to better gauge your website cost.
                                            </p>

                                            <br/> <br/> <br/>

                                            <hr/>

                                            <NavLink to="/price/select-1" exact>
                                                <Button className="emptyButton blueButton">
                                                    <b>Start your Estimation</b>
                                                    <i className="arrow right" />
                                                </Button>
                                            </NavLink>

                                            <br/>

                                        </Col>

                                    </Row>
                                </Grid>


                            </div>

                        </div>

                    </div>

                </div>

                <br/><br/><br/>

                <hr/>

                <div style={{textAlign: "center"}}>

                    <br/>

                    <h2>Prefer to Just Talk to Us?</h2>

                    <br/>

                    <NavLink to="/contact" exact>
                        <Button className="emptyButton blackButton bigButton">
                            <b>Talk to Us</b>
                            <i className="arrow right" />
                        </Button>
                    </NavLink>

                </div>

                <br/><br/><br/>

            </div>
        )
    }
}