/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import Center from '../components/center/main'
import {Button, Grid, Row, Col, Checkbox, FormGroup} from 'react-bootstrap'
import * as Actions from "../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';

class App extends Component {

    render() {

        return (
            <div>
                <div className="center-container staggered-container" style={{background: "url('/assets/home-background-1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div className="default-container">

                        <div className="default-container" style={{maxWidth: "500px", margin: "auto"}}>

                            <h1>Ready for your quote?</h1>

                            <br/> <br/>

                            <div style={{fontSize: "1.25rem", fontWeight: "300"}}>
                                Hi! My name is <input className="minInput"/>, I would like to work with Mandum Studio!
                                My budget is  <input className="minInput"/> KRW and I would like to have it done by  <input className="minInput"/>.
                                My email is <input className="minInput"/>.
                            </div>

                            <br/><br/>

                            {this.props.price != 0 ?
                                <FormGroup>
                                    <Checkbox inline
                                           onClick={(event) => {
                                           }}>
                                        <p className="small-text inline blue"> Use Price Estimator Data</p>
                                        <p>{this.props.price.toLocaleString() + " KRW"}</p>
                                    </Checkbox>
                                </FormGroup> : ""
                            }
                            <br/><br/>

                            <Button className="emptyButton blackButton">Submit</Button>

                            <hr/>

                            <Button className="emptyButton blackButton bigButton"
                                    href="mailto:john.uhyb@gmail.com">
                                Or Just Give Us an Email!
                            </Button>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

function selectorFactory(dispatch) {
    let result = {};
    const actions = bindActionCreators(Actions, dispatch);
    return (nextState, nextOwnProps) => {

        const nextResult = {
            price: nextState.get("totalCost")
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(App);