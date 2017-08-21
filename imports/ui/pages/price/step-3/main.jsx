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

        var color = "orange",
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
                                <Button className={"emptyButton smallButton " + color}>
                                    <b>Design</b>
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-4" exact>
                                <Button className="emptyButton smallButton gray">
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

                                <h2 className="orange margin-1">
                                    {text.style.title}
                                </h2>

                                <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.style.paragraph)}/>

                            </div>

                            <PriceComponent path={['design','style']}
                                            content={text.style.cards}
                                            color="orange"
                                            language={this.props.language}
                                            data={this.props.style.butLast()}
                                            container={this.props.style.get("layout")}
                                            actions = {this.props.reduxActions}/>

                        </div>

                        <hr/>

                        <div className="inner-container">

                            <div className="tight-container">

                                <h2 className="orange margin-1">
                                    {text.branding.title}
                                </h2>

                                <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.branding.paragraph)}/>

                            </div>

                            <PriceComponent path={['design','branding']}
                                            content={text.branding.cards}
                                            color="orange"
                                            center
                                            language={this.props.language}
                                            data={this.props.branding.butLast()}
                                            container={this.props.branding.get("layout")}
                                            actions = {this.props.reduxActions}/>

                        </div>

                    </div>

                    <hr/>

                    <div style={{textAlign: "center"}} className="margin-3">

                        <h2 className="gray">Design Total:</h2>
                        <h2 className="orange"><b>{this.props.price.toLocaleString()}</b></h2>
                        <br/>

                        <NavLink to="/price/select-4" exact>
                            <Button className="pinkButton bigButton">
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
        var design = nextState.price.get("design");
        design.forEach(function(section, sectionKey){
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
            style: nextState.price.get("design").get("style"),
            branding: nextState.price.get("design").get("branding"),
            price:  (sum * 1000).toLocaleString() + " KRW"
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);

