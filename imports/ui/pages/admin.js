/**
 * Created by JohnBae on 8/10/17.
 */

import React, { Component }from 'react';
import Center from '../components/center/main'
import { createContainer } from 'meteor/react-meteor-data';
import {Button, Grid, Row, Col, Checkbox, FormGroup} from 'react-bootstrap'
import * as Actions from "../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';
import { Orders } from '../../api/orders.js';
import { fromJS } from 'immutable';

class Main extends Component {

    render() {

        console.log(this.props.orders, "!!");

        var login = {background: "url('/assets/construction.svg') no-repeat",  backgroundSize: "110%", minHeight: "calc(100vh - 75px)", backgroundPosition: "center" },
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
                                <input ref="email"
                                       style={{width: "100%", fontSize: "1.5rem"}}
                                       id="username"/>
                            </div>
                            <br/>
                            <div style={{margin: "auto", maxWidth: "350px"}}>
                                <label style={{float: "left"}}>Password</label>
                                <br/>
                                <input type = "password"
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

        console.log(this.props.orders);

        var Orders = this.props.orders.map(function(order){

            return (
                <Order order={order} key={order._id}/>
            )
        });

        if(Orders.length == 0) Orders = ""

        console.log(Orders);

        return (
            <div className="banner-container">

                <div className="default-container">

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
    constructor(props){
        super(props);
        this.state={expanded: false}
    }
    
    render(){

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
                            Used Estimator
                        </Button>
                    </div> : ""}
                <br/><br/>
                <Button onClick={()=> Meteor.call("deleteOrder", this.props.order._id)}>Delete</Button>
            </div>
        )
    }
}

var deconstruct = function(state){

    console.log(state, function(key, value, path){
        console.log(key, value, path);
        return value;
    });

    var totalCost = 0;
    var monthlyCost = 0;

    var content = state.get("content"),
        pages,
        text,
        translation,
        media,
        contentCost = 0;

    if(!content.get('pages').get("opt2") && !content.get('pages').get("opt3")){
        contentCost += (content.get("pages").get("opt1") - 5) * content.get("pages").get("price").get("opt1");
        pages = [content.get("pages").get("opt1") + " pages: ", (content.get("pages").get("opt1") - 5) * content.get("pages").get("price").get("opt1")];
    }
    else if(content.get('pages').get("opt2")){
        pages = ["Unsure about needed pages: ", 0]
    }
    else if(content.get('pages').get("opt3")){
        contentCost += content.get("pages").get("price").get("opt3");
        pages = ["Dynamically generated pages: ", content.get("pages").get("price").get("opt3")]
    }

    if(content.get('text').get('opt1')){
        text = ["Providing own text content: ", 0];
    }
    else if(content.get('text').get('opt2')){
        contentCost += content.get('text').get('price').get('opt2');
        text = ["Will need text content: ", content.get('text').get('price').get('opt2')];
    }
    else if(content.get('text').get('opt3')){
        text = ["Undetermined text requirements: ", 0];
    }

    if(content.get('translation').get('opt1')){
        translation = ["Will not need translation: ", 0];
    }
    else if(content.get('translation').get('opt2')){
        contentCost += content.get('translation').get('price').get('opt2');
        translation = ["Will need an English and Korean site: ",  content.get('translation').get('price').get('opt2')];
    }
    else if(content.get('translation').get('opt3')){
        translation = ["Unsure about translation requirements: ", 0];
    }

    if(content.get('media').get('opt1')){
        media = ["Will not need media content: ", 0];
    }
    else if(content.get('media').get('opt3') && content.get('media').get('opt2')){
        contentCost +=  content.get('media').get('price').get("opt3") + content.get('media').get('price').get("opt2");
        media = ["Will need both pictures and illustrations: ", content.get('media').get('price').get("opt3") + content.get('media').get('price').get("opt2")];
    }
    else if(content.get('media').get('opt2')){
        contentCost += content.get("media").get('price').get('opt2');
        media = ["Will need pictures: ", content.get("media").get('price').get('opt2')];
    }
    else if(content.get('media').get('opt3')){
        contentCost += content.get("media").get('price').get('opt3');
        media = ["Will need illustrations: ",  content.get("media").get('price').get('opt3')];
    }



    var features = state.get("features"),
        free = [],
        premium = [],
        featuresCost = 0;

    features.get("free").forEach(function(element, key){
        if(element && key!="price"){
            var string = "";
            switch(key){
                case "opt1" : string = "Responsive design: ";
                    break;
                case "opt2" : string = "Search Engine Optimization: ";
                    break;
                case "opt3" : string = "Under construction page: ";
                    break;
            }

            featuresCost += features.get("free").get("price").get(key)
            free.push([string + features.get("free").get("price").get(key).toLocaleString() + " KRW"])
        }
    });


    features.get("premium").forEach(function(element, key){
        if(element && key!="price"){
            var string = "";
            switch(key){
                case "opt1" : string = "Admin Page: ";
                    break;
                case "opt2" : string = "Account System: ";
                    break;
                case "opt3" : string = "Transaction System: ";
                    break;
                case "opt4" : string = "Email System: ";
                    break;
                case "opt5" : string = "Upload / Download Functionality: ";
                    break;
            }

            featuresCost += features.get("premium").get("price").get(key)
            premium.push([string + features.get("premium").get("price").get(key).toLocaleString() + " KRW"])
        }
    });



    var design = state.get("design"),
        style,
        logo,
        designCost = 0;

    design.get("style").forEach(function(element, key){
        if(element && key!="price"){
            var string = "";
            switch(key){
                case "opt1" : string = "Basic design: ";
                    break;
                case "opt2" : string = "Advanced design: ";
                    break;
                case "opt3" : string = "Custom design: ";
                    break;
            }

            designCost += design.get("style").get("price").get(key)
            style = string + design.get("style").get("price").get(key).toLocaleString() + " KRW"
        }
    });

    design.get("logo").forEach(function(element, key){
        if(element && key!="price"){
            var string = "";
            switch(key){
                case "opt1" : string = "Logo needed: ";
                    break;
                case "opt2" : string = "Logo not needed: ";
                    break;
            }

            designCost += design.get("logo").get("price").get(key)
            logo = string + design.get("logo").get("price").get(key).toLocaleString() + " KRW"
        }
    });



    var services = state.get("services"),
        hosting,
        address,
        maintenance,
        servicesCost = 0;

    services.get("hosting").forEach(function(element, key){
        if(element && key!="price"){
            var string = "";
            switch(key){
                case "opt1" : string = "Hosting is not needed: ";
                    break;
                case "opt2" : string = "A Basic server is needed: ";
                    break;
                case "opt3" : string = "A Advanced server is needed: ";
                    break;
            }

            servicesCost += services.get("hosting").get("price").get(key)
            monthlyCost += services.get("hosting").get("price").get(key);
            hosting = string + services.get("hosting").get("price").get(key).toLocaleString() + " KRW / Month"
        }
    });

    services.get("address").forEach(function(element, key){
        if(element && key!="price"){
            var string = "";
            switch(key){
                case "opt1" : string = "An address is not needed: ";
                    break;
                case "opt2" : string = "An address is needed: ";
                    break;
            }

            servicesCost += services.get("address").get("price").get(key)/12
            monthlyCost += services.get("address").get("price").get(key)/12;
            address = string + services.get("address").get("price").get(key).toLocaleString() + " KRW / Year"
        }
    });

    services.get("maintenance").forEach(function(element, key){
        if(element && key!="price"){
            var string = "";
            switch(key){
                case "opt1" : string = "Basic maintenance: ";
                    break;
                case "opt2" : string = "Advanced maintenance: ";
                    break;
                case "opt3" : string = "Retainer level maintenance: ";
                    break;
            }

            servicesCost += services.get("maintenance").get("price").get(key)
            monthlyCost += services.get("maintenance").get("price").get(key);
            maintenance = string + services.get("maintenance").get("price").get(key).toLocaleString() + " KRW / Month"
        }
    });

    const nextResult = {
        content: [pages,text,translation,media, contentCost],
        features: [free, premium, featuresCost],
        design: [style, logo, designCost],
        services: [hosting, address, maintenance, servicesCost],
        price: contentCost + featuresCost + servicesCost + designCost,
        monthlyCost : monthlyCost
    };

    return nextResult
}

export default createContainer(() => {
    return {
        orders: Orders.find({}).fetch(),
        currentUser: Meteor.user(),
        authorized: Meteor.users.find().count(),
    };
}, Main);