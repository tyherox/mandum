/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router';
import "./style.css";
import {Grid, Row, Col, Button, ResponsiveEmbed, Label, Modal} from 'react-bootstrap';

export default class LighBox extends Component{

    constructor(props){
        super(props);

        this.state = {showModal: false};
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render(){
        return(
            <div>

                <img style={{width: "100%", height: "auto",
                    boxShadow: this.props.none ? "none" : "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12)"}}
                     className={this.props.none ? "" : "lightBox-item"}
                     src={this.props.path} onClick={this.open.bind(this)}/>

                <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="large">
                    <img src={this.props.path} style={{width: "100%"}}/>
                </Modal>


            </div>
        )
    }
}