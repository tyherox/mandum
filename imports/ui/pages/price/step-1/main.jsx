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

        var color = "blue",
            text = content.get(this.props.language);
        return (
            <div>

                <div className="center-container staggered-container" style={{background: "url('/assets/price-bg1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div style={{background: "white"}}>

                        <div style={{padding: "10px"}}>

                            <NavLink to="/price/select-1" exact>
                                <Button className={"emptyButton smallButton " + color}>
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

                                <h2 className="blue margin-1">
                                    {text.pages.title}
                                </h2>

                                <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.pages.paragraph)}/>

                            </div>

                            <PriceComponent path={['content','pages']}
                                            content={text.pages.cards}
                                            color="blue"
                                            language={this.props.language}
                                            data={this.props.pages.butLast()}
                                            container={this.props.pages.get("layout")}
                                            actions = {this.props.reduxActions}/>

                        </div>

                        <hr/>

                        <div className="inner-container">

                            <div className="tight-container">

                                <h2 className="blue margin-1">
                                    {text.text.title}
                                </h2>

                                <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.text.paragraph)}/>

                            </div>

                            <PriceComponent path={['content','text']}
                                            content={text.text.cards}
                                            color="blue"
                                            center
                                            language={this.props.language}
                                            data={this.props.text.butLast()}
                                            container={this.props.text.get("layout")}
                                            actions = {this.props.reduxActions}/>

                        </div>
                        
                        <hr/>

                        <div className="inner-container">

                            <div className="tight-container">

                                <h2 className="blue margin-1">
                                    {text.translation.title}
                                </h2>

                                <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.translation.paragraph)}/>

                            </div>

                            <PriceComponent path={['content','translation']}
                                            content={text.translation.cards}
                                            color="blue"
                                            center
                                            language={this.props.language}
                                            data={this.props.translation.butLast()}
                                            container={this.props.translation.get("layout")}
                                            actions = {this.props.reduxActions}/>

                        </div>
                        
                        <hr/>

                        <div className="inner-container">

                            <div className="tight-container">

                                <h2 className="blue margin-1">
                                    {text.media.title}
                                </h2>

                                <div className="margin-2" dangerouslySetInnerHTML={this.getRawMarkup(text.media.paragraph)}/>

                            </div>

                            <PriceComponent path={['content','media']}
                                            content={text.media.cards}
                                            color="blue"
                                            language={this.props.language}
                                            data={this.props.media.butLast()}
                                            container={this.props.media.get("layout")}
                                            actions = {this.props.reduxActions}/>

                        </div>

                    </div>

                    <hr/>

                    <div style={{textAlign: "center"}} className="margin-3">

                        <h2 className="gray">Content Total:</h2>
                        <h2 className="blue"><b>{this.props.price}</b></h2>
                        <br/>

                        <NavLink to="/price/select-2" exact>
                            <Button className="purpleButton bigButton">
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
        var content = nextState.price.get("content");
        content.forEach(function(section, sectionKey){
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
            pages: nextState.price.get("content").get("pages"),
            text: nextState.price.get("content").get("text"),
            translation: nextState.price.get("content").get("translation"),
            media: nextState.price.get("content").get("media"),
            content: nextState.price.get("content"),
            price: (sum * 1000).toLocaleString() + " KRW"
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);

