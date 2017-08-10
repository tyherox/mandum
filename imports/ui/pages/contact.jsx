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

    constructor(props){
        super(props);
        this.state = {sent: false};
        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail(event){

        console.log(this.refs);

        var sender = this.refs.email.value,
            name = this.refs.name.value,
            budget = this.refs.budget.value,
            deadline = this.refs.deadline.value,
            estimator = this.refs.estimator ? this.refs.estimator.checked ? this.props.state : "" : "";

        if(sender=="" || sender=="null"){
            this.refs.sender.style.borderColor="red";
            return false;
        }

        if(name=="" || name=="null"){
            this.refs.name.style.borderColor="red";
            return false;
        }

        if(budget=="" || budget=="null"){
            this.refs.budget.style.borderColor="red";
            return false;
        }

        if(deadline=="" || deadline=="null"){
            this.refs.deadline.style.borderColor="red";
            return false;
        }

        Meteor.call("sendOrder", sender, {name, budget, deadline, estimator})

        console.log('huh...');

        event.preventDefault();

        this.setState({sent: true});
    }

    verifyBudget(event){

        var budget = parseInt(event.target.value.replace(/,/gi, ""));

        if(typeof budget == "number" && !isNaN(budget)){
            console.log("1");
            budget = budget.toLocaleString();
            this.refs.budget.style.color = "black";
            this.refs.budget.value = budget;
        }
        else {
            console.log("2");
            this.refs.budget.style.color = "red";
            this.refs.budget.value = event.target.value;
        }
    }

    render() {

        return (
            <div>
                <div className="center-container staggered-container" style={{background: "url('/assets/home-background-1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div className="default-container">

                        <div className="default-container" style={{maxWidth: "600px", margin: "auto"}}>

                            <h1>Ready for your quote?</h1>

                            <br/> <br/>

                            <form onSubmit={this.sendEmail} style={{fontSize: "1.5rem", fontWeight: "300", textAlign: "left"}}>
                                Hi! My <span className="blue">name</span> is <input disabled = {this.state.sent} className="minInput" ref="name"/>, I would like to work with Mandum Studio!
                                My <span  className="blue">budget</span> is  <input disabled = {this.state.sent} className="minInput" ref="budget" onChange={this.verifyBudget.bind(this)}/> KRW and I would like to
                                have it <span  className="blue">done by</span>  <input disabled = {this.state.sent} className="minInput" ref="deadline"/>.
                                My <span  className="blue">email</span> is <input disabled = {this.state.sent} className="minInput" ref="email"/>.

                                <br/><br/>

                                <div style={{textAlign: "center"}}>
                                    {this.props.price != 0 ?
                                        <div>
                                            <input type="checkbox"
                                                   ref="estimator" />
                                                <p className="small-text inline blue"> Use Price Estimator Data</p>
                                                <p>{this.props.price.toLocaleString() + " KRW"}</p>
                                        </div> : ""
                                    }
                                    <br/><br/>

                                    <Button className="emptyButton blackButton" type="submit">
                                        { this.state.sent ? "Thank you!" : "Submit"}
                                    </Button>

                                    <hr/>

                                    <h3>Or</h3>
                                    <Button className="emptyButton blackButton bigButton"
                                            href="mailto:john.uhyb@gmail.com">
                                        Just Give Us an Email!
                                    </Button>
                                </div>

                            </form>

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
            state: nextState,
            price: nextState.get("totalCost")
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(App);