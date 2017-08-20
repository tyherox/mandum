import React from 'react';

var content = {
    packages: {
        EN: {
            title: "Packages",
            paragraph: "Browse our packages to quickly find what you need.",
            cards: {
                portfolio: "Small scale portfolio to promote yourself. " +
                "Example: [www.baework.com](http://www.baework.com/home)",
                landing: "Simple landing page to promote your business. " +
                "Example: [www.manimalkorea.com](http://manimalkorea.com/welcome)",
                blog: "Dynamic website capable of posting content. " +
                "Example: [www.afatgirlsfoodguide.com](http://www.afatgirlsfoodguide.com/)",
                app: "Interactive web application. " +
                "Example: [www.stackedit.com](https://stackedit.io/)",
                store: "Website for selling products online. " +
                "Example: [www.nelly.com](https://nelly.com/ww/womens-fashion/)",
            },
            action: "View Package",
            estimatorTitle: "Not what you're looking for?",
            toEstimator: "Customize your Experience"
        },
        KR: {
            title: "Packages",
            paragraph: "Browse our packages to quickly find what you need.",
            cards: {
                portfolio: "Small scale portfolio to promote yourself. " +
                "Example: [www.baework.com](http://www.baework.com/home)",
                landing: "Simple landing page to promote your business." +
                "Example: [www.manimalkorea.com](http://manimalkorea.com/welcome)",
                blog: "Dynamic website capable of posting content." +
                "Example: [www.afatgirlsfoodguide.com](http://www.afatgirlsfoodguide.com/)",
                app: "Interactive web application." +
                "Example: [www.stackedit.com](https://stackedit.io/)",
                store: "Website for selling products online." +
                "Example: [www.nelly.com](https://nelly.com/ww/womens-fashion/)",
            },
            action: "View Package",
            estimatorTitle: "Not what you're looking for?",
            toEstimator: "Customize your Experience"
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