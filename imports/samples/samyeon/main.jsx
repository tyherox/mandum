/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap'
import ReactRotatingText from 'react-rotating-text';
import {NavLink} from 'react-router-dom';
import Center from '../../ui/components/center/main';
import {connectAdvanced} from "react-redux";
import Remarkable from 'remarkable';
import './style.css';
import ScrollDown from '../../ui/components/scrollDown/main';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

var md = new Remarkable();

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {expanded: false};
    }

    componentDidMount(){

        var self = this;

        document.addEventListener("scroll", function(){
            var pos = document.body.scrollTop;
            if(pos==0){
                self.refs.navBar.className = "";
            }
            else if(self.refs.navBar.className!="active"){
                self.refs.navBar.className = "active";
            }
        })
    }

    render() {

        return (

            <div id="sample-samyeon"style={{position: "relative"}}>

                <div id="body">

                    <div className="banner-container">

                        <Center>

                            <div className="center-container">

                                <div style={{textAlign:"left", width: "100%", maxWidth: "750px", margin:"auto", paddingRight: "10px", paddingLeft: "10px"}}>

                                    <h1 style={{fontSize: "3.5rem", color: "white"}} className="margin-1">
                                        삼연기술 회사 소개
                                    </h1>

                                    <h3 className="margin-2" style={{color: "#efefef"}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </h3>

                                    <Button className="bigButton">
                                        <b>더 알아보기</b>
                                        <i className="fa fa-caret-right black" style={{marginLeft: "15px"}}/>
                                    </Button>

                                </div>

                            </div>

                        </Center>

                    </div>

                    <div>
                        <Grid style = {{width: "auto"}}>

                            <Row className="show-grid">

                                <Col xs={12} md={4} style={{background: "#343434", color: "white"}}>

                                    <div className="samyeon-containers">

                                       <h4 className="margin-3">중요한 회사 정보 1</h4>

                                        <h1 className="margin-2" >정보 제목</h1>

                                        <i className="fa fa-chevron-right white fa-2x border-white"/>
                                    </div>

                                </Col>

                                <Col xs={12} md={4} style={{background: "#004BA6", color: "white"}}>

                                    <div className="samyeon-containers">

                                        <h4 className="margin-3">중요한 회사 정보 2</h4>

                                        <h1 className="margin-2">정보 제목</h1>

                                        <i className="fa fa-chevron-right white fa-2x border-white"/>
                                    </div>

                                </Col>

                                <Col xs={12} md={4} style={{background: "white"}}>

                                    <div className="samyeon-containers">

                                        <h4 className="margin-3">최근 회사 뉴스</h4>

                                        <h1 className="margin-2" >회사 뉴스 제목</h1>

                                        <i className="fa fa-chevron-right black fa-2x border-black"/>
                                    </div>

                                </Col>

                            </Row>

                        </Grid>
                    </div>

                    <div className="banner-container">

                        <Center>

                            <div className="center-container">

                                <div style={{textAlign:"left", width: "100%", maxWidth: "750px", margin:"auto", paddingRight: "10px", paddingLeft: "10px"}}>

                                    <h3 style={{color: "rgb(147, 147, 147)"}} className="margin-1">
                                        회사 소개 1
                                    </h3>

                                    <h1 className="margin-2" style={{color: "black"}}>
                                        회사 소개 1 제목
                                    </h1>

                                    <p className="margin-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem urna, faucibus eu arcu ac, ornare aliquet turpis. Cras condimentum feugiat diam. Duis mollis lectus vitae ante semper egestas.
                                    </p>

                                    <Button className="bigButton">
                                        <b>더 알아보기</b>
                                        <i className="fa fa-caret-right black" style={{marginLeft: "15px"}}/>
                                    </Button>

                                </div>

                            </div>

                        </Center>

                    </div>

                    <div className="banner-container">

                        <Center>

                            <div className="center-container">

                                <div style={{textAlign:"left", width: "100%", maxWidth: "750px", margin:"auto", paddingRight: "10px", paddingLeft: "10px"}}>

                                    <h3 style={{color: "rgb(147, 147, 147)"}} className="margin-1">
                                        회사 소개 2
                                    </h3>

                                    <h1 className="margin-2" style={{color: "black"}}>
                                        회사 소개 2 제목
                                    </h1>

                                    <p className="margin-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem urna, faucibus eu arcu ac, ornare aliquet turpis. Cras condimentum feugiat diam. Duis mollis lectus vitae ante semper egestas.
                                    </p>

                                    <Button className="bigButton">
                                        <b>더 알아보기</b>
                                        <i className="fa fa-caret-right black" style={{marginLeft: "15px"}}/>
                                    </Button>

                                </div>

                            </div>

                        </Center>

                    </div>

                    <div className="banner-container" style={{paddingBottom: "3rem"}}>

                        <Center>

                            <div className="center-container">

                                <div style={{textAlign:"center", width: "100%", maxWidth: "750px", margin:"auto"}}>

                                    <h1 style={{color: "black"}} className="margin-1">
                                        찾아 오시는 길
                                    </h1>

                                    <h4 className="margin-1">대구광역시 달성군 구지면 예현리 764-10번지</h4>

                                    <GettingStartedGoogleMap
                                        containerElement={
                                            <div className="google-maps" />
                                        }
                                        mapElement={
                                            <div style={{ minHeight: "50vh" }} />
                                        }
                                        markers={
                                            [{
                                                position: {
                                                    lat: 35.634382,
                                                    lng: 128.429464,
                                                },
                                                key: `Taiwan`,
                                                defaultAnimation: 2,
                                            }]
                                        }
                                    />

                                </div>

                            </div>

                        </Center>

                    </div>

                </div>

                <div id="navBar">
                    <span id="overlay" className={this.state.expanded ? "on" : ""} onClick={()=> this.setState({expanded: false})}/>
                    <div id="navBar-background" ref="navBar">
                        <div id="navBar-content">
                            <img style={{verticalAlign: "middle"}}
                                 id="navBar-logo"
                                 src="/samyeon/logo.svg"/>
                            <h2 className="inline"><b>삼연기술</b></h2>
                            <div id="navBar-responsive-button"
                                 className={this.state.expanded ? "change" : ""}
                                 onClick={()=> this.setState({expanded: !this.state.expanded})}>

                                <div className="navBar-bar1"></div>
                                <div className="navBar-bar2"></div>
                                <div className="navBar-bar3"></div>
                            </div>
                            <div id="navBar-responsive" className={this.state.expanded ? "change" : ""} >
                                <Button className="emptyButton navBar-elements smallButton">회사소개</Button>
                                <Button className="emptyButton navBar-elements smallButton">제품소개</Button>
                                <Button className="emptyButton navBar-elements smallButton">납품/수출</Button>
                                <Button className="emptyButton navBar-elements smallButton">고객센터</Button>
                                <Button className="emptyButton navBar-elements smallButton">로그인</Button>
                                <span className="navBar-elements navBar-language">
                                <i className="fa fa-globe fa-1x" aria-hidden="true" /> EN
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div id="footer">
                        <img style={{float: "left", marginTop: "-5px"}}
                             id="navBar-logo"
                             src="/samyeon/logo.svg"/>
                        <h2 className="inline" style={{color: "white"}}><b>삼연기술</b></h2>
                        <div id="navBar-responsive" >
                            <Button className="emptyButton navBar-elements smallButton" style={{color: "white"}}>회사소개</Button>
                            <Button className="emptyButton navBar-elements smallButton" style={{color: "white"}}>제품소개</Button>
                            <Button className="emptyButton navBar-elements smallButton" style={{color: "white"}}>납품/수출</Button>
                            <Button className="emptyButton navBar-elements smallButton" style={{color: "white"}}>고객센터</Button>
                            <Button className="emptyButton navBar-elements smallButton" style={{color: "white"}}>로그인</Button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultOptions={{
            scrollwheel: false,
        }}
        ref={props.onMapLoad}
        defaultZoom={15}
        defaultCenter={{  lat: 35.634382, lng: 128.429464, }}
        onClick={props.onMapClick}
    >
        {props.markers.map((marker, index) => (
            <Marker
                {...marker}
                onRightClick={() => props.onMarkerRightClick(index)}
            />
        ))}
    </GoogleMap>
));