/**
 * Created by JohnBae on 7/27/17.
 */


import React, { Component }from 'react';
import {Button, Grid, Row, Col, Label, FormGroup, Radio} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import * as Actions from "../../../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';
import {interpretOrder} from '../../../../api/orders';
import priceContent from '../step-1/content';
import priceFeatures from '../step-2/content';
import priceDesign from '../step-3/content';
import priceServices from '../step-4/content';


const style = { width: 600, margin: 50 };

function estimateCost(element){
    var price = 0;

    this.props.

    this.props.reduxActions.setValueC()
}

class Main extends Component {


    render() {

        var self = this;
        var List = this.props.list.map(function(category){

            var localSum = 0;
            var content, editLink, catColor;

            if(category[0][0][0]=='content'){
                content = priceContent.get(self.props.language);
                editLink = 'select-1';
                catColor = 'blue';
            }
            else if(category[0][0][0]=='features'){
                content = priceFeatures.get(self.props.language);
                editLink = 'select-2';
                catColor = 'purple';
            }
            else if(category[0][0][0]=='design'){
                content = priceDesign.get(self.props.language);
                editLink = 'select-3';
                catColor = 'orange';
            }
            else if(category[0][0][0]=='services'){
                content = priceServices.get(self.props.language);
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
                        <NavLink to={"/price/" + editLink} exact>
                            <Button className={"smallButton emptyButton " + catColor}>
                                <p>Edit</p>
                            </Button>
                        </NavLink>
                    </div>

                    <hr/>

                </div>
            );
        });

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
                                <Button className="emptyButton smallButton gray">
                                    <b>Services</b>
                                </Button>
                            </NavLink>
                            <NavLink to="/price/select-5" exact>
                                <Button className="emptyButton smallButton">
                                    <b>Estimation</b>
                                </Button>
                            </NavLink>
                        </div>

                        <div className="category-container">

                            <div className="inner-container">

                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <div>
                                            {List}
                                        </div>
                                    </Row>
                                    
                                </Grid>

                            </div>

                        </div>

                    </div>

                    <div style={{textAlign: "center"}}>

                        <h1 className="gray">Total Cost:</h1>
                        <h1><b>{(this.props.sum * 1000).toLocaleString()} KRW</b></h1>
                        <br/>

                        <NavLink to="/contact" exact>
                            <Button className="blackButton bigButton">
                                <b>Work with Us</b>
                                <i className="arrow right" />
                            </Button>
                        </NavLink>
                    </div>

                </div>

                <br/><br/><br/>

            </div>
        )
    }
}

function selectorFactory(dispatch) {
    let result = {};
    const actions = bindActionCreators(Actions, dispatch);
    return (nextState, nextOwnProps) => {

        var analyzed = interpretOrder(nextState.price);

        const nextResult = {
            reduxActions: actions,
            language: nextState.settings.get('language'),
            list: analyzed.list,
            sum: analyzed.sum
        };

        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);