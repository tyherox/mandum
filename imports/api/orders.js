/**
 * Created by JohnBae on 8/10/17.
 */

import { Mongo } from 'meteor/mongo';

export const Orders = new Mongo.Collection('orders');

Meteor.methods({
    sendOrder(from, details) {

        console.log('Creating Order~!', from, details);

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