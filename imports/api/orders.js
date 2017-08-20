/**
 * Created by JohnBae on 8/10/17.
 */

import { Mongo } from 'meteor/mongo';
import {fromJS} from 'immutable';

export const Orders = new Mongo.Collection('orders');

export const interpretOrder = function(state){

    if(!state) return "Invalid State";

    state = fromJS(state);

    if(!state) return "Invalid Immutable State";

    var content = state.get("content"),
        list = [];

    var sum = 0;

    state.forEach(function(category, categoryKey){
        var subList = [];
        category.forEach(function(section, sectionKey){
            section.butLast().forEach(function(component, componentKey){
                var price = component.get('price');
                if(component.get('selected')){

                    if(price.get('multi')){

                        var amount = component.get('opt').get('slider').get('value');
                        var total = (amount > price.get('thresh') ? amount - price.get('thresh') : 0) * price.get('value');
                        sum += total;
                        subList.push([[categoryKey, sectionKey, componentKey], total]);
                    }
                    else {
                        sum +=  price.get('value');
                        subList.push([[categoryKey, sectionKey, componentKey], price.get('value')])
                    }

                }
            });
        });
        list.push(subList);
    });

    const result = {
        list: list,
        sum: sum
    };

    return {
        list: list,
        sum: sum
    };
};

Meteor.methods({

    sendOrder(from, details) {

        var sender = details.email,
            name = details.name,
            budget = details.budget,
            deadline = details.deadline,
            estimator = details.estimator;

        Orders.insert({
            from,
            details,
            createdAt: new Date(), // current time
        });
    }

});

Meteor.methods({
    deleteOrder(id) {

        Orders.remove(id);
    }
});