import React from 'react';

var content = {
    packages: {
        EN: {
            title: "Packages",
            paragraph: "Browse our packages to quickly find what you need.",
            cards: {
                portfolio: "Small scale portfolio to promote yourself",
                landing: "Simple landing page to promote your business",
                blog: "Dynamic website capable of posting content",
                app: "Interactive web application",
                store: "Large website for selling products online"
            },
            action: "View Package",
            estimatorTitle: "Not what you're looking for?",
            toEstimator: "Customize your Experience"
        },
        KR: {
            title: "Packages (KR)",
            paragraph: "Browse our packages to quickly find what you need.",
            cards: {
                portfolio: "Small scale portfolio to promote yourself",
                landing: "Simple landing page to promote your business",
                blog: "Dynamic website capable of posting content",
                app: "Interactive web application",
                store: "Large website for selling products online"
            },
            action: "View Package",
            estimator: "Customize your Experience"
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