import React from 'react';

var content = {
    hosting: {
        EN: {
            title: "Service: Hosting",
            paragraph: "Do you need us to host your website?",
            cards: {
                opt1: "Default 1 year free hosting",
                opt2: "Additional 1 year hosting",
                opt3: "Additional 2 year hosting"
            }
        },
        KR: {
            title: "Service: Hosting (KR)",
            paragraph: "Do you need us to host your website?",
            cards: {
                opt1: "Default 1 year free hosting",
                opt2: "Additional 1 year hosting",
                opt3: "Additional 2 year hosting"
            }
        }
    },
    address: {
        EN: {
            title: "Services: Address",
            paragraph: "Do you need an address / url?",
            cards: {
                opt1: "I do not need an address / url",
                opt2: "Free address / url for 1 year",
                opt3: "SSL for 1 year"
            }
        },
        KR: {
            title: "Services: Address (KR)",
            paragraph: "Do you need an address / url?",
            cards: {
                opt1: "I do not need an address / url",
                opt2: "Free address / url for 1 year",
                opt3: "SSL for 1 year"
            }
        }
    },
    maintenance: {
        EN: {
            title: "Services: Maintenance",
            paragraph: "Do you need maintenance?",
            cards: {
                opt1: "Basic updates, 3 times a month",
                opt2: "Advanced updates, 5 times a month and analysis",
                opt3: "Prompt, advanced updates, unlimited times a month and analysis"
            }
        },
        KR: {
            title: "Services: Maintenance (KR)",
            paragraph: "Do you need maintenance?",
            cards: {
                opt1: "Basic updates, 3 times a month",
                opt2: "Advanced updates, 5 times a month and analysis",
                opt3: "Prompt, advanced updates, unlimited times a month and analysis"
            }
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