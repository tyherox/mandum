/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import {Button, Grid, Row, Col, Label, FormGroup, Radio} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import 'rc-slider/assets/index.css';
import * as Actions from "../../../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';
import PriceComponent from '../../../components/priceComponent/main'
import Remarkable from 'remarkable';
import content from './content';

const style = { width: 600, margin: 50 };

class Main extends Component {

    getRawMarkup(content) {
        var md = new Remarkable({linkTarget: "_blank"});
        return { __html: md.render(content) };
    }

    render() {

        var color = "pink",
            text = content.get(this.props.language);
        return (
            <div>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div style={{background: "white"}}>

                        <div style={{padding: "10px"}}>

                            <NavLink to="/price/select-1" exact>
                                <Button className="emptyButton smallButton gray">
                                    <b>Content</b>
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-2" exact>
                                <Button className="emptyButton smallButton gray">
                                    <b>Features</b>
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-3" exact>
                                <Button className="emptyButton smallButton gray">
                                    <b>Design</b>
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-4" exact>
                                <Button className={"emptyButton smallButton " + color}>
                                    <b>Services</b>
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-5" exact>
                                <Button className="emptyButton smallButton gray">
                                    <b>Estimation</b>
                                </Button>
                            </NavLink>
                        </div>

                        <div className="inner-container">

                            <div className="tight-container">

                                <h2 className="pink margin-1">
                                    {text.hosting.title}
                                </h2>

                                <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.hosting.paragraph)}/>

                            </div>

                            <PriceComponent path={['services','hosting']}
                                            content={text.hosting.cards}
                                            color="pink"
                                            language={this.props.language}
                                            data={this.props.hosting.butLast()}
                                            container={this.props.hosting.get("layout")}
                                            actions = {this.props.reduxActions}/>

                        </div>

                        <hr/>

                        <div className="inner-container">

                            <div className="tight-container">

                                <h2 className="pink margin-1">
                                    {text.address.title}
                                </h2>

                                <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.address.paragraph)}/>

                            </div>

                            <PriceComponent path={['services','address']}
                                            content={text.address.cards}
                                            color="pink"
                                            center
                                            language={this.props.language}
                                            data={this.props.address.butLast()}
                                            container={this.props.address.get("layout")}
                                            actions = {this.props.reduxActions}/>

                        </div>
                        
                        <hr/>

                        <div className="inner-container">

                            <div className="tight-container">

                                <h2 className="pink margin-1">
                                    {text.maintenance.title}
                                </h2>

                                <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.maintenance.paragraph)}/>

                            </div>

                            <PriceComponent path={['services','maintenance']}
                                            content={text.maintenance.cards}
                                            color="pink"
                                            center
                                            language={this.props.language}
                                            data={this.props.maintenance.butLast()}
                                            container={this.props.maintenance.get("layout")}
                                            actions = {this.props.reduxActions}/>

                        </div>

                    </div>

                    <hr/>

                    <div style={{textAlign: "center"}} className="margin-3">

                        <h2 className="gray">Services Total:</h2>
                        <h2 className="pink"><b>{this.props.price.toLocaleString()}</b></h2>
                        <br/>

                        <NavLink to="/price/select-5" exact>
                            <Button className="bigButton">
                                <b>Next</b>
                                <i className="arrow right" />
                            </Button>
                        </NavLink>
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

        var sum = 0;
        var services = nextState.price.get("services");
        services.forEach(function(section, sectionKey){
            section.butLast().forEach(function(component, componentKey){
                var price = component.get('price');
                if(component.get('selected')){

                    if(price.get('multi')){

                        var amount = component.get('opt').get('slider').get('value');
                        sum += (amount > price.get('thresh') ? amount - price.get('thresh') : 0) * price.get('value');;
                    }
                    else {
                        sum +=  price.get('value');
                    }

                }
            });
        });
        
        const nextResult = {
            reduxActions: actions,
            language: nextState.settings.get('language'),
            hosting: nextState.price.get("services").get("hosting"),
            address: nextState.price.get("services").get("address"),
            maintenance: nextState.price.get("services").get("maintenance"),
            price:  (sum * 1000).toLocaleString() + " KRW"
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);

