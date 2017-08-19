import React from 'react';

var content = {
    free: {
        EN: {
            title: "Features: Free",
            paragraph: "Features we can do for you pro bono.",
            cards: {
                opt1: "Responsive Design",
                opt2: "Search Engine Optimization",
                opt3: "Under Construction Page"
            }
        },
        KR: {
            title: "Features: Free (KR)",
            paragraph: "Features we can do for you pro bono.",
            cards: {
                opt1: "Responsive Design",
                opt2: "Search Engine Optimization",
                opt3: "Under Construction Page"
            }
        },
    },
    premium: {
        EN: {
            title: "Features: Premium",
            paragraph: "Features with a price tag.",
            cards: {
                opt1: "Admin Page",
                opt2: "Account System",
                opt3: "Transaction System",
                opt4: "Email System",
                opt5: "Upload / Download Functionality",
                opt6: "Interactive Component"
            }
        },
        KR: {
            title: "Features: Premium (KR)",
            paragraph: "Features with a price tag.",
            cards: {
                opt1: "Admin Page",
                opt2: "Account System",
                opt3: "Transaction System",
                opt4: "Email System",
                opt5: "Upload / Download Functionality",
                opt6: "Interactive Component"
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