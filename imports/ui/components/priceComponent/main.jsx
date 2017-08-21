/**
 * Created by JohnBae on 6/30/17.
 */

import React, { Component }from 'react';
import {Button, Grid, Row, Col, Label, FormGroup, Radio} from 'react-bootstrap'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import * as Actions from "../../../actions/main";
import {connectAdvanced} from "react-redux";
import {bindActionCreators} from 'redux';

export default class PriceComponent extends Component{

    constructor(props){
        super(props);
    }

    handleClick(){

    }

    handleAction(path, radio, value){

        var self = this;

        if(radio){
            if(value){
                this.props.data.forEach(function(elem, key){
                    if(key != path[0])
                    self.props.actions.setValueC(self.props.path.concat([key, "selected"]) , false);
                });
            }
            else {
                this.props.data.forEach(function(elem, key){
                    if(key != path[0] && elem.get("opt").get("default"))
                        self.props.actions.setValueC(self.props.path.concat([key, "selected"]) , true);
                });
            }
            self.props.actions.setValueC(this.props.path.concat(path), value);
        }
        else {
            this.props.data.forEach(function(elem, key){
                if(key != path[0] && elem.get("radio"))
                    self.props.actions.setValueC(self.props.path.concat([key, "selected"]) , false);
            });
            self.props.actions.setValueC(this.props.path.concat(path), value);
        }
    }

    render(){

        var text = this.props.content,
            self = this;

        var elements = this.props.data.entrySeq().map(function(elem){

            var selected = elem[1].get("selected"),
                radio = elem[1].get("radio");
            
            if(elem[1].get("opt")){

                if(elem[1].get("opt").get("slider")){

                    var slider = elem[1].get("opt").get("slider");
                    return <SliderItem min = {slider.get("min")}
                                       max = {slider.get("max")}
                                       value = {slider.get("value")}
                                       thresh = {elem[1].get("price").get("thresh")}
                                       selected = {selected}
                                       price = {elem[1].get("price").get("value")}
                                       multi = {elem[1].get("price").get("multi")}
                                       rep = {elem[1].get("price").get("rep")}
                                       radio = {radio}
                                       key={elem[0]}
                                       color={self.props.color}
                                       handleAction = {self.handleAction.bind(self, [elem[0],"opt", "slider", "value"], radio)}
                    />
                }
                else if (elem[1].get("opt").get("small")){
                    return <SmallItem selected = {selected}
                                      price = {elem[1].get("price").get("value")}
                                      multi = {elem[1].get("price").get("multi")}
                                      rep = {elem[1].get("price").get("rep")}
                                      content = {self.props.content[elem[0]]}
                                      radio = {radio}
                                      key={elem[0]}
                                      color={self.props.color}
                                      handleAction = {self.handleAction.bind(self, [elem[0],"selected"], radio, !selected)}/>
                }
                else{
                    return <DefaultItem selected = {selected}
                                        center={self.props.center}
                                        price = {elem[1].get("price").get("value")}
                                        multi = {elem[1].get("price").get("multi")}
                                        rep = {elem[1].get("price").get("rep")}
                                        content = {self.props.content[elem[0]]}
                                        radio = {radio}
                                        key={elem[0]}
                                        color={self.props.color}
                                        handleAction = {self.handleAction.bind(self, [elem[0],"selected"], radio, !selected)}/>
                }

            }
            else{

            }
        });

        if(this.props.container == "grid") {
            return(
                <div>
                    <Grid style = {{width: "auto"}}>{elements}</Grid>
                </div>
            )
        }
        else {
            return(
                <div>
                    <div>{elements}</div>
                </div>
            )
        }
    }
}

class SmallItem extends Component{
    render(){

        var selected = this.props.selected,
            content = this.props.content,
            price = this.props.price == 0 ? "Free" : (this.props.price * 1000).toLocaleString() + " KRW",
            action = this.props.radio ? "Select" : "Add";

        return(
            <Radio inline name="pageGroup"
                   checked={selected}
                   onClick={selected ? this.props.handleAction : ""}
                   onChange={this.props.handleAction}>
                <p className={"small-text inline " + this.props.color}> {content} ({price})</p>
            </Radio>
        )
    }
}

class DefaultItem extends Component{

    render(){

        var border = this.props.selected ? "price-card selected-" + this.props.color : "price-card",
            color = this.props.selected ? this.props.color : "",
            content = this.props.content,
            price = this.props.price,
            rep = this.props.rep,
            action = this.props.radio ? this.props.selected ? "Deselect" : "Select" : this.props.selected ? "Remove" : "Add";

        price = price == 0 ? "Free" : (price * 1000).toLocaleString() + " KRW";

        if(rep){
            if(rep == "y"){
                price += " / Year"
            }
            else if(rep == "m"){
                price += " / Month"
            }
        }

        return(
            <Col xs={12} md={4} className={this.props.center ? "col-centered" : ""}>
                <div className={border}
                     style={{verticalAlign: "bottom"}}>

                    <h3 className={color}>{price}</h3>
                    <br/>
                    <p className="small-text">
                        {content}
                    </p>
                    <br/>
                    <Button className="emptyButton blue"
                            onClick={this.props.handleAction}>
                        <p>{action}</p>
                    </Button>

                </div>
            </Col>
        )
    }
}

class SliderItem extends Component{

    render(){

        var selected = this.props.selected,
            value = this.props.value,
            color = this.props.selected ? this.props.color : "gray",
            smallTextColor = this.props.selected ? "small-text " + this.props.color : "small-text",
            price = this.props.price,
            multi = this.props.multi,
            rep = this.props.rep,
            thresh = this.props.thresh;

        var cPrice = priceCalc(price, multi, value, thresh);
        price = cPrice == 0 ? "Free" : (cPrice * 1000).toLocaleString() + " KRW"

        return(
            <div style={{paddingLeft: "15px", paddingRight: "15px"}}>

                <Slider min={this.props.min}
                        max={this.props.max}
                        value={value == "EMPTY" ? 1 : value}
                        style={{display: "inlineBlock"}}
                        className="margin-1"
                        onChange={(value)=>this.props.handleAction(value)}
                        disabled={!selected}
                />

               <div>
                   <input type="number"
                          className={smallTextColor}
                          disabled={!selected}
                          style={{display: "inline", float: "left", width: "4.5rem"}}
                          value={value == "EMPTY" ? "" : value}
                          onChange={(event)=>this.props.handleAction(parseInt(event.target.value) || "EMPTY")}/>

                   <p className={smallTextColor + " margin-1"}
                      style={{display: "inline", float: "right", lineHeight: "28px"}}>100</p>
               </div>

                <br/>

                <h3 className={color}
                    style={{display: "block", textAlign: "left"}}>

                    <b>{price}</b>

                </h3>
            </div>
        )
    }
}

function priceCalc(price, multi, value, thresh){
    if(multi && value && thresh){
        var amount = value > thresh ? value - thresh : 0;
        return amount * price;
    }
    else if(multi && value){
        return price * value;
    }
    else return price;
}