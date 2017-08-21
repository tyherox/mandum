/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import Center from '../../components/center/main'
import {Button, Grid, Row, Col, Checkbox, FormGroup} from 'react-bootstrap'
import {interpretOrder} from '../../../api/orders';
import * as Actions from "../../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';
import content from './content';
import Remarkable from 'remarkable';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {sent: false};
        this.sendEmail = this.sendEmail.bind(this);
    }

    getRawMarkup(content) {
        var md = new Remarkable({linkTarget: "_blank"});
        return { __html: md.render(content) };
    }

    sendEmail(event){

        event.preventDefault();

        var email = this.refs.email.value,
            name = this.refs.name.value,
            budget = this.refs.budget.value,
            deadline = this.refs.deadline.value,
            estimator = this.refs.estimator ? this.refs.estimator.checked ? this.props.state.toJSON() : "" : "",
            error = false;

        if(email=="" || email==null){
            console.log("bla");
            this.refs.email.style.borderColor="red";
            error = true;
        }
        else this.refs.email.style.borderColor="black";

        if(name=="" || name==null){
            this.refs.name.style.borderColor="red";
            error = true;
        }
        else this.refs.name.style.borderColor="black";

        if(budget=="" || budget==null){
            this.refs.budget.style.borderColor="red";
            error = true;
        }
        else this.refs.budget.style.borderColor="black";

        if(deadline=="" || deadline==null){
            this.refs.deadline.style.borderColor="red";
            error = true;
        }
        else this.refs.deadline.style.borderColor="black";

        if(error) return false;

        Meteor.call("sendOrder", email, {name, budget, deadline, estimator})

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

        var text = content.get(this.props.language);

        return (
            <div>
                <div className="center-container staggered-container" style={{background: "url('/assets/home-background-1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div className="category-container">

                        <div className="category-container" style={{maxWidth: "650px", margin: "auto"}}>

                            <h1>{text.contact.title}</h1>

                            <br/> <br/>

                            <form onSubmit={this.sendEmail.bind(this)} style={{fontSize: "1.25rem", fontWeight: "300", textAlign: "left"}} className="contact-form">
                                <p dangerouslySetInnerHTML={this.getRawMarkup(text.contact.name)}/>
                                <input disabled = {this.state.sent} className="minInput" ref="name"/>
                                <p dangerouslySetInnerHTML={this.getRawMarkup(text.contact.greetings)}/>
                                <p dangerouslySetInnerHTML={this.getRawMarkup(text.contact.budget)}/>
                                <input disabled = {this.state.sent} className="minInput" ref="budget" onChange={this.verifyBudget.bind(this)}/>
                                <p dangerouslySetInnerHTML={this.getRawMarkup(text.contact.date)}/>
                                <input disabled = {this.state.sent} className="minInput" ref="deadline"/>
                                <p dangerouslySetInnerHTML={this.getRawMarkup(text.contact.email)}/>
                                <input disabled = {this.state.sent} className="minInput" ref="email"/>{this.props.language=="KR" ? <p>입니다.</p> : "."}

                                <br/><br/>

                                <div style={{textAlign: "center"}}>
                                    {this.props.price != 0 ?
                                        <div>
                                            <input type="checkbox"
                                                   id="use"
                                                   ref="estimator" />
                                                <label htmlFor="use" className="inline blue"> <p>{text.contact.useEstimator + " "}</p> </label>
                                                <label htmlFor="use" className="inline blue"> <p>{(this.props.price * 1000).toLocaleString() + " KRW"}</p> </label>
                                        </div> : ""
                                    }
                                    <br/><br/>

                                    <Button className="blackButton" type="submit">
                                        { this.state.sent ? "Thank you!" : "Submit"}
                                    </Button>

                                    <hr/>

                                    <h3>Or</h3>
                                    <Button className="blackButton bigButton"
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
            state: nextState.price,
            language: nextState.settings.get('language'),
            price: interpretOrder(nextState.price).sum
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(App);