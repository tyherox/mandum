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

        var login = {background: "url('/assets/construction.svg') no-repeat",  backgroundSize: "contain", minHeight: "calc(100vh - 75px)", backgroundPosition: "center"},
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

            var details = deconstruct(order.details.estimator);

            if(details)
            return (
                <Order order={order}
                       key={order._id}
                       content={details.content}
                       features={details.features}
                       design={details.design}
                       services={details.services}
                       price={details.price}
                       monthlyCost={details.monthlyCost}/>
            )
            else {
                return  <Order order={order}
                               key={order._id}/>
            }
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

    constructor(props) {
        super(props);
        this.state = {expanded: false}
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
                            {this.state.expanded ? "Close" : "View"}
                        </Button>
                        <br/>
                        {this.state.expanded ?
                            <div>
                                <div className="default-container">

                                    <div className="inner-container">

                                        <Grid style = {{width: "auto"}}>
                                            <Row className="show-grid">
                                                <div>
                                                    <Col xs={12} md={6}>
                                                        <h2><b>Content</b></h2>
                                                        <br/>
                                                        {this.props.content[0] ? <p className="tiny-text">{this.props.content[0][0] + this.props.content[0][1].toLocaleString() + " KRW"}</p>
                                                            : <p className="red tiny-text">Pages not selected</p>}
                                                        {this.props.content[1] ? <p className="tiny-text">{this.props.content[1][0] + this.props.content[1][1].toLocaleString() + " KRW"}</p>
                                                            : <p className="red tiny-text">Text not selected</p>}
                                                        {this.props.content[2] ? <p className="tiny-text">{this.props.content[2][0] + this.props.content[2][1].toLocaleString() + " KRW"}</p>
                                                            : <p className="red tiny-text">Translation not selected</p>}
                                                        {this.props.content[3] ? <p className="tiny-text">{this.props.content[3][0] + this.props.content[3][1].toLocaleString() + " KRW"}</p>
                                                            : <p className="red tiny-text">Media not selected</p>}
                                                        <br/>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <h2><b>Total:</b></h2>
                                                        <h3>{this.props.content[4].toLocaleString() + " KRW"}</h3>
                                                    </Col>

                                                </div>
                                            </Row>

                                            <hr/>

                                            <Row className="show-grid">
                                                <div>
                                                    <Col xs={12} md={6}>
                                                        <h2><b>Features</b></h2>
                                                        <br/>
                                                        {this.props.features[0].length > 0 ? this.props.features[0].map(function(element){
                                                            return <p className="tiny-text" key={element}>{element}</p>
                                                        }) : <p className="red tiny-text">Free Features not selected</p>}
                                                        {this.props.features[1].length > 0 ? this.props.features[1].map(function(element){
                                                            return <p className="tiny-text" key={element}>{element}</p>
                                                        }) : <p className="red tiny-text">Premium Features not selected</p>}
                                                        <br/>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <h2><b>Total:</b></h2>
                                                        <h3>{this.props.features[2].toLocaleString() + " KRW"}</h3>
                                                    </Col>

                                                </div>
                                            </Row>

                                            <hr/>

                                            <Row className="show-grid">
                                                <div>
                                                    <Col xs={12} md={6}>
                                                        <h2><b>Design</b></h2>
                                                        <br/>
                                                        {this.props.design[0] ? <p className="tiny-text">{this.props.design[0]}</p>
                                                            : <p className="red tiny-text">Design style not selected</p>}
                                                        {this.props.design[1] ? <p className="tiny-text">{this.props.design[1]}</p>
                                                            : <p className="red tiny-text">Logo design not selected</p>}
                                                        <br/>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <h2><b>Total:</b></h2>
                                                        <h3>{this.props.design[2].toLocaleString() + " KRW"}</h3>
                                                    </Col>

                                                </div>
                                            </Row>

                                            <hr/>

                                            <Row className="show-grid">
                                                <div>
                                                    <Col xs={12} md={6}>
                                                        <h2><b>Services</b></h2>
                                                        <br/>
                                                        {this.props.services[0] ? <p className="tiny-text">{this.props.services[0]}</p>
                                                            : <p className="red tiny-text">Hosting service not selected</p>}
                                                        {this.props.services[1] ? <p className="tiny-text">{this.props.services[1]}</p>
                                                            : <p className="red tiny-text">Address service not selected</p>}
                                                        {this.props.services[2] ? <p className="tiny-text">{this.props.services[2]}</p>
                                                            : <p className="red tiny-text">Maintenance service not selected</p>}
                                                        <br/>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <h2><b>Total:</b></h2>
                                                        <h3>{this.props.services[3].toLocaleString() + " KRW / Month"}</h3>
                                                    </Col>

                                                </div>
                                            </Row>

                                        </Grid>

                                    </div>

                                </div>

                                <div className="default-container">

                                    <div className="inner-container">

                                        <Grid style = {{width: "auto"}}>
                                            <Row className="show-grid">
                                                <div>
                                                    <Col xs={12} md={6}>
                                                        <h2><b>Content</b></h2>
                                                        <br/>
                                                        {this.props.content[0] ? <p className="tiny-text">{this.props.content[0][0] + this.props.content[0][1].toLocaleString() + " KRW"}</p>
                                                            : <p className="red tiny-text">Pages not selected</p>}
                                                        {this.props.content[1] ? <p className="tiny-text">{this.props.content[1][0] + this.props.content[1][1].toLocaleString() + " KRW"}</p>
                                                            : <p className="red tiny-text">Text not selected</p>}
                                                        {this.props.content[2] ? <p className="tiny-text">{this.props.content[2][0] + this.props.content[2][1].toLocaleString() + " KRW"}</p>
                                                            : <p className="red tiny-text">Translation not selected</p>}
                                                        {this.props.content[3] ? <p className="tiny-text">{this.props.content[3][0] + this.props.content[3][1].toLocaleString() + " KRW"}</p>
                                                            : <p className="red tiny-text">Media not selected</p>}
                                                        <br/>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <h2><b>Total:</b></h2>
                                                        <h3>{this.props.content[4].toLocaleString() + " KRW"}</h3>
                                                    </Col>

                                                </div>
                                            </Row>

                                            <hr/>

                                            <Row className="show-grid">
                                                <div>
                                                    <Col xs={12} md={6}>
                                                        <h2><b>Features</b></h2>
                                                        <br/>
                                                        {this.props.features[0].length > 0 ? this.props.features[0].map(function(element){
                                                            return <p className="tiny-text" key={element}>{element}</p>
                                                        }) : <p className="red tiny-text">Free Features not selected</p>}
                                                        {this.props.features[1].length > 0 ? this.props.features[1].map(function(element){
                                                            return <p className="tiny-text" key={element}>{element}</p>
                                                        }) : <p className="red tiny-text">Premium Features not selected</p>}
                                                        <br/>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <h2><b>Total:</b></h2>
                                                        <h3>{this.props.features[2].toLocaleString() + " KRW"}</h3>
                                                    </Col>

                                                </div>
                                            </Row>

                                            <hr/>

                                            <Row className="show-grid">
                                                <div>
                                                    <Col xs={12} md={6}>
                                                        <h2><b>Design</b></h2>
                                                        <br/>
                                                        {this.props.design[0] ? <p className="tiny-text">{this.props.design[0]}</p>
                                                            : <p className="red tiny-text">Design style not selected</p>}
                                                        {this.props.design[1] ? <p className="tiny-text">{this.props.design[1]}</p>
                                                            : <p className="red tiny-text">Logo design not selected</p>}
                                                        <br/>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <h2><b>Total:</b></h2>
                                                        <h3>{this.props.design[2].toLocaleString() + " KRW"}</h3>
                                                    </Col>

                                                </div>
                                            </Row>

                                            <hr/>

                                            <Row className="show-grid">
                                                <div>
                                                    <Col xs={12} md={6}>
                                                        <h2><b>Services</b></h2>
                                                        <br/>
                                                        {this.props.services[0] ? <p className="tiny-text">{this.props.services[0]}</p>
                                                            : <p className="red tiny-text">Hosting service not selected</p>}
                                                        {this.props.services[1] ? <p className="tiny-text">{this.props.services[1]}</p>
                                                            : <p className="red tiny-text">Address service not selected</p>}
                                                        {this.props.services[2] ? <p className="tiny-text">{this.props.services[2]}</p>
                                                            : <p className="red tiny-text">Maintenance service not selected</p>}
                                                        <br/>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <h2><b>Total:</b></h2>
                                                        <h3>{this.props.services[3].toLocaleString() + " KRW / Month"}</h3>
                                                    </Col>

                                                </div>
                                            </Row>

                                        </Grid>

                                        <Button className="emptyButton blueButton"z style={{display: "inline", padding: ".6rem 3rem"}}
                                                onClick={()=> this.setState({expanded: !this.state.expanded})}>
                                            {this.state.expanded ? "Close" : "View"}
                                        </Button>

                                        <div style={{textAlign: "center"}}>

                                            <h3 className="gray">Monthly Cost:</h3>
                                            <h3 className="black"><b>{this.props.monthlyCost.toLocaleString()} KRW</b></h3>
                                            <hr style={{width: "25%", margin: "auto"}}/>
                                            <h1 className="gray">Total Cost:</h1>
                                            <h1><b>{this.props.price.toLocaleString()} KRW</b></h1>

                                        </div>

                                    </div>

                                </div>
                            </div> : ""}
                    </div> : ""}
                <br/><br/>
                <Button onClick={()=> Meteor.call("deleteOrder", this.props.order._id)}>Delete</Button>
            </div>
        )
    }
}

var deconstruct = function(state){

    console.log("?:", state);

    state = fromJS(state);

    if(!state) return false;

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