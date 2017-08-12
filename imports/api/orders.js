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

    var totalCost = 0;
    var monthlyCost = 0;

    var content = state.get("content"),
        pages = "",
        text = "",
        translation = "",
        media = "",
        contentCost = 0;

    if(!content.get('pages').get("opt2") && !content.get('pages').get("opt3")){
        var pageCount = content.get("pages").get("opt1");
        contentCost += (pageCount - 7) * content.get("pages").get("price").get("opt1");
        pages = pageCount + " pages: " + ((pageCount - 7) * content.get("pages").get("price").get("opt1")).toLocaleString() + " KRW";
    }
    else if(content.get('pages').get("opt2")){
        pages = "Unsure about needed pages: " + 0;
    }
    else if(content.get('pages').get("opt3")){
        contentCost += content.get("pages").get("price").get("opt3");
        pages = "Dynamically generated pages: " + content.get("pages").get("price").get("opt3")
    }

    if(content.get('text').get('opt1')){
        text = "Providing own text content: " + 0;
    }
    else if(content.get('text').get('opt2')){
        contentCost += content.get('text').get('price').get('opt2');
        text = "Will need text content: " + content.get('text').get('price').get('opt2');
    }
    else if(content.get('text').get('opt3')){
        text = "Undetermined text requirements: " + 0;
    }

    if(content.get('translation').get('opt1')){
        translation = "Will not need translation: " + 0;
    }
    else if(content.get('translation').get('opt2')){
        contentCost += content.get('translation').get('price').get('opt2');
        translation = "Will need an English and Korean site: " +  content.get('translation').get('price').get('opt2');
    }
    else if(content.get('translation').get('opt3')){
        translation = "Unsure about translation requirements: " + 0;
    }

    if(content.get('media').get('opt1')){
        media = "Will not need media content: " + 0;
    }
    else if(content.get('media').get('opt3') && content.get('media').get('opt2')){
        contentCost +=  content.get('media').get('price').get("opt3") + content.get('media').get('price').get("opt2");
        media = "Will need both pictures and illustrations: " + content.get('media').get('price').get("opt3") + content.get('media').get('price').get("opt2");
    }
    else if(content.get('media').get('opt2')){
        contentCost += content.get("media").get('price').get('opt2');
        media = "Will need pictures: " + content.get("media").get('price').get('opt2');
    }
    else if(content.get('media').get('opt3')){
        contentCost += content.get("media").get('price').get('opt3');
        media = "Will need illustrations: " +  content.get("media").get('price').get('opt3');
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
        style = "",
        branding = "",
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

    design.get("branding").forEach(function(element, key){
        if(element && key!="price"){
            var string = "";
            switch(key){
                case "opt1" : string = "Branding needed: ";
                    break;
                case "opt2" : string = "Basic logo  needed: ";
                    break;
                case "opt3" : string = "Branding and Logo needed: ";
                    break;
            }

            designCost += design.get("branding").get("price").get(key)
            branding = string + design.get("branding").get("price").get(key).toLocaleString() + " KRW"
        }
    });



    var services = state.get("services"),
        hosting = 0,
        address = 0,
        maintenance = 0,
        servicesCost = 0;

    services.get("hosting").forEach(function(element, key){
        if(element && key!="price"){
            var string = "";
            switch(key){
                case "opt1" : string = "Hosting is not needed: ";
                    break;
                case "opt2" : string = "2 Years of hosting: ";
                    break;
                case "opt3" : string = "3 Years of hosting: ";
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

            address = string + "0 KRW / Year"
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

    const result = {
        content: [pages, text, translation, media, contentCost],
        features: [free, premium, featuresCost],
        design: [style, branding, designCost],
        services: [hosting, address, maintenance, servicesCost],
        price: contentCost + featuresCost + servicesCost + designCost,
        monthlyCost : monthlyCost
    };

    return result
}

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