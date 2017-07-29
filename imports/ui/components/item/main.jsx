/**
 * Created by JohnBae on 6/30/17.
 */

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {Grid, Row, Col, Button, ResponsiveEmbed, Label} from 'react-bootstrap';
import './style.css';

export default class Item extends Component{

    constructor(props){
        super(props);

        this.state = {hover: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        browserHistory.push({
            pathname: "/project/"+this.props.title.toLowerCase(),
            state: {
                skills: this.props.skills
            }
        });
    }


    render(){
        return(
            <div className="itemContainer"
                 onMouseEnter={()=> this.setState({hover: true})}
                 onMouseLeave={()=> this.setState({hover: false})}
                 onClick={this.handleClick}>
                <ResponsiveEmbed a16by9>
                    <embed style={{filter: "brightness(.95)"}} src={"/assets/"+this.props.image} />
                </ResponsiveEmbed>
                <div className="itemContainer-description">
                    <p className="itemContainer-description-subTitle">{this.props.description}</p>
                    <b className="itemContainer-description-title" ref="title"
                       style={{borderBottom: this.state.hover ? "solid 2px dodgerblue" : "solid 2px transparent"}}>{this.props.title}</b>
                </div>
            </div>
        )
    }
}