/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import Center from '../../components/center/main'
import {Button, Grid, Row, Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import Scroll from 'react-scroll';

export default class Main extends Component {

    render() {

        return (
            <div>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div style={{background: "linear-gradient(90deg, rgb(255, 255, 255) 0px, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 0px, rgb(255, 255, 255))"}}>

                        <div className="default-container">

                            <div >
                                <h1 className="blue">
                                    Packages
                                </h1>

                                <br/>

                                <p>
                                    Browse our packages to quickly find what you need.
                                </p>
                                <br/>
                            </div>

                            <hr/>

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="blue">
                                    Homepage
                                </h2>

                                <br/>

                                <p>
                                    Description of homepages
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <Col xs={12} md={4}>
                                            <div className="card-container">
                                                <h3>300,000 KRW</h3>
                                                <br/>
                                                <p className="small-text">
                                                    Basic
                                                </p>
                                                <br/>
                                                <Button className="emptyButton blue"> View Package </Button>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="card-container">
                                                <h3>500,000 KRW</h3>
                                                <br/>
                                                <p className="small-text">
                                                    Normal
                                                </p>
                                                <br/>
                                                <Button className="emptyButton blue"> View Package </Button>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="card-container">
                                                <h3>750,000 KRW</h3>
                                                <br/>
                                                <p className="small-text">
                                                    Advanced
                                                </p>
                                                <br/>
                                                <Button className="emptyButton blue"> View Package </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>

                                <br/> <br/>

                                <hr/>

                            </div>

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="blue">
                                    Online Store
                                </h2>

                                <br/>

                                <p>
                                    Description of online store
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <Col xs={12} md={4}>
                                            <div className="card-container">
                                                <h3>300,000 KRW</h3>
                                                <br/>
                                                <p className="small-text">
                                                    Basic
                                                </p>
                                                <br/>
                                                <Button className="emptyButton blue"> View Package </Button>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="card-container">
                                                <h3>500,000 KRW</h3>
                                                <br/>
                                                <p className="small-text">
                                                    Normal
                                                </p>
                                                <br/>
                                                <Button className="emptyButton blue"> View Package </Button>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="card-container">
                                                <h3>750,000 KRW</h3>
                                                <br/>
                                                <p className="small-text">
                                                    Advanced
                                                </p>
                                                <br/>
                                                <Button className="emptyButton blue"> View Package </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>

                                <br/> <br/>

                                <hr/>

                            </div>

                            <div className="inner-container">

                                <h2 style={{marginTop: "5rem"}} className="blue">
                                    Portfolio
                                </h2>

                                <br/>

                                <p>
                                    Description of portfolio
                                </p>

                                <br/> <br/> <br/>

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <Col xs={12} md={4}>
                                            <div className="card-container">
                                                <h3>300,000 KRW</h3>
                                                <br/>
                                                <p className="small-text">
                                                    Basic
                                                </p>
                                                <br/>
                                                <Button className="emptyButton blue"> View Package </Button>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="card-container">
                                                <h3>500,000 KRW</h3>
                                                <br/>
                                                <p className="small-text">
                                                    Normal
                                                </p>
                                                <br/>
                                                <Button className="emptyButton blue"> View Package </Button>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="card-container">
                                                <h3>750,000 KRW</h3>
                                                <br/>
                                                <p className="small-text">
                                                    Advanced
                                                </p>
                                                <br/>
                                                <Button className="emptyButton blue"> View Package </Button>
                                            </div>
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

                    <h2>Not what you're looking for?</h2>

                    <br/>

                    <Button className="emptyButton blackButton bigButton"><b>Customize your experience</b> <i className="arrow right" /></Button>
                </div>

                <br/><br/><br/>

            </div>
        )
    }
}