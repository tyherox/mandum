/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import ReactRotatingText from 'react-rotating-text';

import './style.css';

export default class Center extends Component {

    render() {
        return(
            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

