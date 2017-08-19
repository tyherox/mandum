/**
 * Created by JohnBae on 8/10/17.
 */

import React, { Component }from 'react';
import Center from '../../components/center/main'
import { createContainer } from 'meteor/react-meteor-data';
import {Button, Grid, Row, Col, Checkbox, FormGroup} from 'react-bootstrap'
import * as Actions from "../../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';
import { Orders } from '../../../api/orders.js';
import { fromJS } from 'immutable';
import {interpretOrder} from '../../../api/orders';
import priceContent from '../price/step-1/content';
import priceFeatures from '../price/step-2/content';
import priceDesign from '../price/step-3/content';
import priceServices from '../price/step-4/content';

class Main extends Component {

    render() {

        var login = {background: "url('/assets/construction.svg') no-repeat",  backgroundSize: "cover", minHeight: "calc(100vh - 75px)", backgroundPosition: "center"},
            app = {background: "white" };

        return (
            <div className="banner-container"
                 style={this.props.currentUser ? app : login}>

                {this.props.currentUser ? <App authorized={this.props.authorized} orders={this.props.orders}/> : <Sentry authorized={this.props.authorized}/>}

            </div>
        )
    }
}

class Sentry extends Component {

    constructor(props){
        super(props);
        this.state={error: ""}
        this.setAdmin = this.setAdmin.bind(this);
    }

    setAdmin(event){
        if(this.props.authorized){
            var self = this;
            Meteor.loginWithPassword({email: this.refs.email.value}, this.refs.password.value, function(err){
                if (err) {
                    self.setState({error: "INVALID LOGIN INFO"})
                    throw new Meteor.Error("Password login failed");
                }
                else{
                    self.setState({error: ""});
                }
            });
        }
        else{
            Meteor.call('createAccount', this.refs.email.value, this.refs.password.value, function(err, result){
                if(err){
                    console.log("ERROR:", err);
                }
                else if(result){
                    console.log(result, " / PASSED");
                    Meteor.loginWithPassword({email: this.refs.email.value}, this.refs.password.value, function(err){
                        if (err) {
                            self.setState({error: "INVALID LOGIN INFO"})
                            throw new Meteor.Error("Password login failed");
                        }
                        else{
                            self.setState({error: ""});
                        }
                    });
                }
                else{
                    console.log("Unexpected Stop");
                }
            });
        }
        event.preventDefault();
    }

    render() {

        return (
            <div className="banner-container">

                <Center>
                    <div className="center-container">
                        <h1>Login</h1>

                        <br/>

                        <form onSubmit={this.setAdmin}>
                            <div style={{margin: "auto", maxWidth: "350px"}}>
                                <label style={{float: "left"}}>Email</label>
                                <br/>
                                <input className="bigInput" ref="email"
                                       style={{width: "100%", fontSize: "1.5rem"}}
                                       id="username"/>
                            </div>
                            <br/>
                            <div style={{margin: "auto", maxWidth: "350px"}}>
                                <label style={{float: "left"}}>Password</label>
                                <br/>
                                <input className="bigInput" type = "password"
                                       style={{width: "100%", fontSize: "1.5rem"}}
                                       ref="password"
                                       id="password"/>
                            </div>

                            <br/>

                            <div style={{color: "red"}}>
                                {this.state.error}
                            </div>

                            <br/>

                            <Button onClick={this.setAdmin} type = 'submit'>
                                {this.props.authorized ? "Login" : "Initialize Admin"}
                            </Button>
                        </form>

                        <br/>

                        {/*this.props.authorized ?
                            <Button onClick={this.setAdmin.bind(this)}>
                                Reset
                            </Button> : ""*/
                        }
                    </div>
                </Center>

            </div>
        )
    }
}

class App extends Component {
    render() {

        var Orders = this.props.orders.map(function(order){

            var details = interpretOrder(order.details.estimator);

            if(details) return (
                <Order order={order}
                       key={order._id}
                       sum={details.sum}
                       list={details.list}
                       monthlyCost={details.monthlyCost}/>
            )
            else {
                return  <Order order={order}
                               key={order._id}/>
            }
        });

        console.log("ORDERS:", this.props.orders);

        if(Orders.length == 0) Orders = "";

        console.log("DuH:");

        return (
            <div className="banner-container">

                <div className="category-container">

                    <Button onClick={()=> Meteor.logout()}>
                        Logout
                    </Button>

                    <br/>

                    <hr/>

                    <h1>Orders: {Orders.length}</h1>

                    <br/>

                    {Orders}

                </div>

            </div>
        )
    }
}

class Order extends Component{

    constructor(props) {
        super(props);
        this.state = {expanded: false}
    }

    render(){

        var self = this;
        var List = this.props.list.map(function(category){

            var localSum = 0;
            var content, editLink, catColor;

            if(category[0][0][0]=='content'){
                content = priceContent.get("EN");
                editLink = 'select-1';
                catColor = 'blue';
            }
            else if(category[0][0][0]=='features'){
                content = priceFeatures.get("EN");
                editLink = 'select-2';
                catColor = 'purple';
            }
            else if(category[0][0][0]=='design'){
                content = priceDesign.get("EN");
                editLink = 'select-3';
                catColor = 'orange';
            }
            else if(category[0][0][0]=='services'){
                content = priceServices.get("EN");
                editLink = 'select-4';
                catColor = 'pink';
            }

            var SubList = category.map(function(section){

                localSum += section[1];

                return (
                    <div key={section[0].join(", ")}>
                        <p className="inline">{content[section[0][1]].cards[section[0][2]]} {": "}</p>
                        <p className="inline">{section[1] == 0 ? "Free" : (section[1] * 1000).toLocaleString() + " KRW"}</p>
                    </div>
                )
            });

            return(
                <div key={category[0][0][0].toUpperCase()} className="">

                    <div>
                        <h3 className = {catColor}><b>{category[0][0][0].toUpperCase()}: {(localSum * 1000).toLocaleString() + " KRW"}</b></h3>
                        <br/>
                        {SubList}
                        <br/>
                    </div>

                    <hr/>

                </div>
            );
        });

        return(
            <div key={this.props.order._id} className="card-container" style={{textAlign: "left", padding: "25px"}}>
                <h2>From: {this.props.order.from}</h2>
                <p>Name: {this.props.order.details.name}</p>
                <p>Budget: {this.props.order.details.budget}</p>
                <p>Deadline: {this.props.order.details.deadline}</p>
                {this.props.order.details.estimator ?
                    <div>
                        <p style={{display: "inline", marginRight: "1rem"}}>Estimator: </p>
                        <Button className="emptyButton blueButton"z style={{display: "inline", padding: ".6rem 3rem"}}
                                onClick={()=> this.setState({expanded: !this.state.expanded})}>
                            {this.state.expanded ? "Close" : "View"}
                        </Button>
                        <br/>
                        {this.state.expanded ?
                            <div>
                                <h1>{"SUM: " + (self.props.sum * 1000).toLocaleString() + " KRW"}</h1>
                                <br/>
                                {List}
                                <br/>
                                <h1>{"SUM: " + (self.props.sum * 1000).toLocaleString() + " KRW"}</h1>
                            </div> : ""}
                    </div> : ""}
                <br/><br/>
                <Button onClick={()=> Meteor.call("deleteOrder", this.props.order._id)}>Delete</Button>
            </div>
        )
    }
}

export default createContainer(() => {
    return {
        orders: Orders.find({}).fetch(),
        currentUser: Meteor.user(),
        authorized: Meteor.users.find().count()==1,
    };
}, Main);