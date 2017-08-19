import React from 'react';

var content = {
    contact: {
        EN: {
            title: "Ready for your quote? ",
            name: "Hi, my **name** is",
            budget: "My **budget** is",
            date: " KRW and I would like to have it **done by**",
            email: "My **email** is",
            useEstimator: "Use Price Estimator Data"
        },
        KR: {
            title: "Ready for your quote? (KR)",
            name: "Hi, my **name** is",
            budget: "My **budget** is",
            date: " KRW and I would like to have it **done by**",
            email: "My **email** is",
            useEstimator: "Use Price Estimator Data"
        },
    }
}

export default {
    get: function(language){
        var filtered = JSON.parse(JSON.stringify(content));

        for(var key in filtered){
            filtered[key] = filtered[key][language];
        }

        return filtered;
    }
}