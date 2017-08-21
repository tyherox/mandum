/**
 * Created by JohnBae on 7/27/17.
 */

import React, { Component }from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import * as Actions from "../../../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';
import content from './content';
import Remarkable from 'remarkable';

class Main extends Component {

    getRawMarkup(content) {
        var md = new Remarkable({linkTarget: "_blank"});
        return { __html: md.render(content) };
    }

    render() {

        var text = content.get(this.props.language);
        console.log(text);
        return (
            <div>

                <div className="center-container staggered-container margin-3" style={{background: "url('/assets/price-bg1.svg') no-repeat", backgroundSize: "100%"}}>

                    <div style={{background: "white"}}>

                        <div className="category-container">

                            <div >
                                <h1 className="blue">
                                    {text.packages.title}
                                </h1>

                                <br/>

                                <p>
                                    {text.packages.paragraph}
                                </p>
                                <br/>
                            </div>

                            <hr/>

                            <div className="inner-container">
                                <Grid style = {{width: "auto"}}>
                                    <Row className="show-grid">
                                        <Col xs={12} md={4} className="col-centered">
                                            <div className="card-container">
                                                <h3>250,000 KRW</h3>
                                                <br/>
                                                <p className="small-text" dangerouslySetInnerHTML={this.getRawMarkup(text.packages.cards.portfolio)}/>
                                                <br/>
                                                <NavLink to="/price/select-5" exact>
                                                    <Button className="emptyButton blue"
                                                            onClick = {()=>this.props.reduxActions.setPackage('portfolio')}> {text.packages.action} </Button>
                                                </NavLink>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4} className="col-centered">
                                            <div className="card-container">
                                                <h3>475,000 KRW</h3>
                                                <br/>
                                                <p className="small-text" dangerouslySetInnerHTML={this.getRawMarkup(text.packages.cards.landing)}/>
                                                <br/>
                                                <NavLink to="/price/select-5" exact>
                                                    <Button className="emptyButton blue"
                                                            onClick = {()=>this.props.reduxActions.setPackage('landing')}> {text.packages.action} </Button>
                                                </NavLink>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4} className="col-centered">
                                            <div className="card-container">
                                                <h3>550,000 KRW</h3>
                                                <br/>
                                                <p className="small-text" dangerouslySetInnerHTML={this.getRawMarkup(text.packages.cards.blog)}/>
                                                <br/>
                                                <NavLink to="/price/select-5" exact>
                                                    <Button className="emptyButton blue"
                                                            onClick = {()=>this.props.reduxActions.setPackage('blog')}> {text.packages.action} </Button>
                                                </NavLink>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4} className="col-centered">
                                            <div className="card-container">
                                                <h3>1,300,000 KRW</h3>
                                                <br/>
                                                <p className="small-text" dangerouslySetInnerHTML={this.getRawMarkup(text.packages.cards.app)}/>
                                                <br/>
                                                <NavLink to="/price/select-5" exact>
                                                    <Button className="emptyButton blue"
                                                            onClick = {()=>this.props.reduxActions.setPackage('app')}> {text.packages.action} </Button>
                                                </NavLink>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4} className="col-centered">
                                            <div className="card-container">
                                                <h3>1,650,000 KRW</h3>
                                                <br/>
                                                <p className="small-text" dangerouslySetInnerHTML={this.getRawMarkup(text.packages.cards.store)}/>
                                                <br/>
                                                <NavLink to="/price/select-5" exact>
                                                    <Button className="emptyButton blue"
                                                            onClick = {()=>this.props.reduxActions.setPackage('store')}> {text.packages.action} </Button>
                                                </NavLink>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>

                            </div>

                        </div>

                    </div>

                </div>

                <hr/>

                <div style={{textAlign: "center"}}>

                    <br/>

                    <h2>{text.packages.estimatorTitle}</h2>

                    <br/>

                    <NavLink to="/price/select-1" exact>
                        <Button className="blackButton bigButton"><b>{text.packages.toEstimator}</b> <i className="arrow right" /></Button>
                    </NavLink>

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

        const nextResult = {
            reduxActions: actions,
            language: nextState.settings.get("language")
        };
        if(nextResult!=result){
            result = nextResult;
        }
        return result
    }
}

export default connectAdvanced(selectorFactory)(Main);
