/**
 * Created by JohnBae on 6/30/17.
 */

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {Grid, Row, Col, Button, ResponsiveEmbed, Label} from 'react-bootstrap';
import Scroll from 'react-scroll';
import './style.css';

export default class ScrollDown extends Component{

    scrollDown(){
        var pos = document.body.scrollTop;
        var anchor = this.refs.anchor.offsetTop + 150;
        console.log(anchor);
        Scroll.animateScroll.scrollTo(anchor);
    }

    render(){
        return(
            <div className="emptyButton scrollDown" onClick={this.scrollDown.bind(this)} ref="anchor">
                <i className="fa fa-chevron-down fa-1x"
                   aria-hidden="true"/>
            </div>
        )
    }
}