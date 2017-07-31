/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap'
import ReactRotatingText from 'react-rotating-text';
import Center from '../components/center/main';

export default class App extends Component {


    render() {

        return (
            <div>
                <div className="banner-container">
                    <Center>
                        <div className="center-container">

                            <h1>
                                Website
                                <ReactRotatingText pause={2000} items={[' Development', ' Design', ' Consulting']} />
                            </h1>

                            <br/>

                            <h3>In Korea.</h3>
                            <h3>Done the right way.</h3>
                            <br/>
                            <br/>
                            <Button><b>Work with Us</b><i className="arrow right" /></Button>
                        </div>
                    </Center>
                </div>

                <div style={{position: "relative"}}>
                    <div className="center-container" style={{background: "url('/assets/home-background-1.svg') no-repeat", backgroundSize: "100%", paddingTop: "15rem"}}>

                        <div style={{background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255) 0px, rgb(255, 255, 255))"}}>

                            <div className="default-container">

                                <div className="inner-container">

                                    <h1 style={{marginTop: "5rem"}}>
                                        Modern Website Building (some intro phrase)
                                    </h1>

                                    <br/>

                                    <p>
                                        (Further description about the intro phrase)
                                    </p>

                                    <br/>

                                    <Grid style = {{width: "auto"}}>
                                        <Row className="show-grid">
                                            <Col xs={12} md={4} className="project-item-list">
                                                <div className="card-container" style={{textAlign: "left"}}>
                                                    <h3>Landing Page</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        Build a beautiful
                                                        responsive website to
                                                        promote your business
                                                        or organization
                                                    </p>
                                                    <br/>
                                                    <Button> Select </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="project-item-list" style={{textAlign: "left"}}>
                                                <div className="card-container">
                                                    <h3>Online Store</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        (about online store *short*)
                                                    </p>
                                                    <br/>
                                                    <Button> Select </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="project-item-list" style={{textAlign: "left"}}>
                                                <div className="card-container">
                                                    <h3>Portfolio</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        (about portfolio *short*)
                                                    </p>
                                                    <br/>
                                                    <Button> Select </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div style={{position: "absolute", top: "10rem", left: "0", background: "black", padding: "40px", paddingBottom: "10px", paddingTop: "60px", width: "250px", right: "0", margin: "0 auto"}}>
                        <div style={{textAlign: "center", display: "block", border: "solid #8900FF 2px", width: "75px", margin: "auto", marginBottom: "5px"}} />
                        <p style={{textAlign: "center", color: "white"}}>
                            (Some intro phrase)
                        </p>
                    </div>
                </div>

                <br/><br/><br/>

                <div style={{position: "relative"}}>
                    <div className="center-container" style={{background: "url('/assets/home-background-2.svg') no-repeat", backgroundSize: "100%", paddingTop: "15rem"}}>

                        <div style={{background: "linear-gradient(90deg, rgb(255, 255, 255) 0px, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0))"}}>

                            <div className="default-container">

                                <div className="inner-container">

                                    <h1 style={{marginTop: "5rem"}}>
                                        (Some phrase about our services)
                                    </h1>

                                    <br/>

                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Proin dignissim est risus, non blandit
                                        neque facilisis et. Proin quam eros, tempor.
                                    </p>

                                    <br/>

                                    <Grid style = {{width: "auto"}}>
                                        <Row className="show-grid">
                                            <Col xs={12} md={4} className="project-item-list">
                                                <div className="card-container" style={{textAlign: "left"}}>
                                                    <h3>Developing</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        (something to do with our development)
                                                    </p>
                                                    <br/>
                                                    <Button> Select </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="project-item-list" style={{textAlign: "left"}}>
                                                <div className="card-container">
                                                    <h3>Designing</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        (something to do with our designing)
                                                    </p>
                                                    <br/>
                                                    <Button> Select </Button>
                                                </div>
                                            </Col>
                                            <Col xs={12} md={4} className="project-item-list" style={{textAlign: "left"}}>
                                                <div className="card-container">
                                                    <h3>Translating</h3>
                                                    <br/>
                                                    <p className="small-text">
                                                        (something to do with our translating)
                                                    </p>
                                                    <br/>
                                                    <Button> Select </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div style={{position: "absolute", top: "10rem", left: "0", background: "black", padding: "40px", paddingBottom: "10px", paddingTop: "60px", width: "250px", right: "0", margin: "0 auto"}}>
                        <div style={{textAlign: "center", display: "block", border: "solid #F98115 2px", width: "75px", margin: "auto", marginBottom: "5px"}} />
                        <p style={{textAlign: "center", color: "white"}}>
                            Our services
                        </p>
                    </div>
                </div>

                <br/><br/><br/>

                <div style={{position: "relative"}}>
                    <div className="center-container" style={{background: "url('/assets/home-background-3.svg') no-repeat", backgroundSize: "100%", paddingTop: "15rem"}}>

                        <div style={{background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0px, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255) 0px, rgb(255, 255, 255))"}}>

                            <div className="default-container">

                                <div className="inner-container">

                                    <h1 style={{marginTop: "5rem"}}>
                                        No need to wait for a quote. (?)
                                    </h1>

                                    <br/>

                                    <p>
                                        (talk about using our price estimator (?) )
                                    </p>

                                    <br/> <br/> <br/> <br/> <br/> <br/>

                                    <Button className="defaultBtn"><b>Start your Estimation</b> <i className="arrow right" /></Button>

                                    <br/> <br/>

                                </div>

                            </div>

                        </div>

                    </div>
                    <div style={{position: "absolute", top: "10rem", left: "0", background: "black", padding: "40px", paddingBottom: "10px", paddingTop: "60px", width: "250px", right: "0", margin: "0 auto"}}>
                        <div style={{textAlign: "center", display: "block", border: "solid #FB4473 2px", width: "75px", margin: "auto", marginBottom: "5px"}} />
                        <p style={{textAlign: "center", color: "white"}}>
                            Not sure yet?
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}