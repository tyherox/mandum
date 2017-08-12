/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap'
import ReactRotatingText from 'react-rotating-text';
import {NavLink} from 'react-router-dom';
import Center from '../../components/center/main';

export default class App extends Component {


    render() {

        return (
            <div>
                <div className="banner-container">
                    <Center>
                        <div className="center-container">

                            <h1 style={{fontSize: "3.5rem"}}>
                                Website
                                <ReactRotatingText pause={2000} items={[' Development', ' Design', ' Consulting']} />
                            </h1>

                            <br/>

                            <h3>In Korea.</h3>
                            <h3>Done the right way.</h3>

                            <br/>
                            <br/>

                            <p className="orange">Opening Discount: 50% Off! (5 left)</p>
                            <NavLink to="/contact" exact>
                                <Button className="emptyButton blackButton bigButton">
                                    <b>Work with Us</b><i className="arrow right" />
                                </Button>
                            </NavLink>
                        </div>
                    </Center>
                </div>

                <div style={{position: "relative"}}>
                    <div className="center-container staggered-container" style={{background: "url('/assets/home-background-1.svg') no-repeat", backgroundSize: "100%"}}>

                        <div style={{background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255) 0px, rgb(255, 255, 255))"}}>

                            <div className="default-container">

                                <div className="inner-container">

                                    <h1 style={{marginTop: "7rem"}}>
                                        A Story Behind Every Pixel
                                    </h1>

                                    <br/>  <br/>

                                    <p>
                                        The Internet is a massive, competitive arena.
                                        There are more than <a href="http://www.internetlivestats.com/total-number-of-websites/" target="_blank">1 billion websites today</a>.
                                        And with more than 100 being created every minute, creating a unique website gets harder everyday.
                                    </p>

                                    <br />

                                    <p>
                                        At Mandum Studio, we strive to create memorable, distinct websites with story telling.
                                        Every detail of our websites has purpose, represents plot, and urges your web visitors to stay and hear your message.
                                        Along with our purpose driven design principals, advanced technology, and dependable customer service, your website will be a
                                        shining beacon admist the vast content of the Internet.

                                    </p>

                                    <br/><br/>

                                    <hr/>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="staggered-container-title">
                        <div style={{textAlign: "center", display: "block", border: "solid #8900FF 2px", width: "75px", margin: "auto", marginBottom: "5px"}} />
                        <p style={{textAlign: "center", color: "white"}}>
                            Mandum Studio
                        </p>
                    </div>
                </div>

                <br/><jr/><br/>

                <div style={{position: "relative"}}>
                    <div className="center-container staggered-container" style={{background: "url('/assets/home-background-2.svg') no-repeat", backgroundSize: "100%"}}>

                        <div style={{background: "linear-gradient(90deg, rgb(255, 255, 255) 0px, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0))"}}>

                            <div className="default-container">

                                <div className="inner-container">

                                    <h1 style={{marginTop: "7rem"}}>
                                        From A to Z
                                    </h1>

                                    <br/> <br/>

                                    <p>
                                        Creating a website is a multi-step process that is much more than just coding.
                                        Mandum Studio understands the multi-disciplinary requirements of website building
                                        and provides a wide range of services from design to translation as well as development.
                                    </p>


                                    <br/> <br/>


                                    <Grid style = {{width: "auto"}}>
                                        <Row className="show-grid">
                                            <Col xs={12} md={4} className="project-item-list">
                                                <div className="center-container">
                                                    <i className="fa fa-code fa-3x" aria-hidden="true" />
                                                    <h3>Development</h3>
                                                    <br/>
                                                    <p>
                                                        We use advanced, modern technologies to build your websites.
                                                    </p>
                                                    <br/>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="project-item-list">
                                                <div className="center-container">
                                                    <i className="fa fa-pencil fa-3x" aria-hidden="true" />
                                                    <h3>Design</h3>
                                                    <br/>
                                                    <p>
                                                        All our designs are mobile friendly and go through a rigorous planning phase.
                                                    </p>
                                                    <br/>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="project-item-list">
                                                <div className="center-container">
                                                    <i className="fa fa-language fa-3x" aria-hidden="true" />
                                                    <h3>Translation</h3>
                                                    <br/>
                                                    <p>
                                                        We provide free English and Korean versions of your website.
                                                    </p>
                                                    <br/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                    <br/> <br/>
                                    {/*
                                     <br/> <br/> <br/>

                                     <NavLink to="/story" exact>
                                     <Button className="emptyButton orangeButton bigButton">
                                     <b>Read More</b> <i className="arrow right" />
                                     </Button>
                                     </NavLink>
                                    */}


                                    <hr/>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="staggered-container-title">
                        <div style={{textAlign: "center", display: "block", border: "solid #F98115 2px", width: "75px", margin: "auto", marginBottom: "5px"}} />
                        <p style={{textAlign: "center", color: "white"}}>
                            Our Services
                        </p>
                    </div>
                </div>

                <br/><br/><br/>

                <div style={{position: "relative"}}>
                    <div className="center-container staggered-container" style={{background: "url('/assets/home-background-3.svg') no-repeat", backgroundSize: "100%"}}>

                        <div style={{background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255) 0px, rgb(255, 255, 255))"}}>

                            <div className="default-container">

                                <div className="inner-container">

                                    <h1 style={{marginTop: "7rem"}}>
                                        No Need to Wait for a Quote
                                    </h1>

                                    <br/> <br/>

                                    <p>
                                        A budget is no fun but always important when creating a website.
                                        Feel free to browse our packages or check out our price estimator to gauge our price range.
                                    </p>

                                    <br/> <br/> <br/>

                                    <NavLink to="/price" exact>
                                        <Button className="emptyButton pinkButton bigButton">
                                            <b>Start your Estimation</b> <i className="arrow right" />
                                        </Button>
                                    </NavLink>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="staggered-container-title">
                        <div style={{textAlign: "center", display: "block", border: "solid #FB4473 2px", width: "75px", margin: "auto", marginBottom: "5px"}} />
                        <p style={{textAlign: "center", color: "white"}}>
                            Transparent Pricing
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}