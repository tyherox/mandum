import React from 'react';

var content = {
    style: {
        EN: {
            title: "Design: Style",
            paragraph: "What kind of design do you need?",
            cards: {
                opt1: "Basic",
                opt2: "Advanced Design",
                opt3: "Custom Design"
            }
        },
        KR: {
            title: "Design: Style (KR)",
            paragraph: "What kind of design do you need?",
            cards: {
                opt1: "Basic",
                opt2: "Advanced Design",

            }
        }
    },
    branding: {
        EN: {
            title: "Design: Branding",
            paragraph: "Do you need assistance in Branding?",
            cards: {
                opt1: "I do not need branding",
                opt2: "I need a Basic Logo",
                opt3: "Full Branding and Logo"
            }
        },
        KR: {
            title: "Design: Branding (KR)",
            paragraph: "Do you need assistance in Branding?",
            cards: {
                opt1: "I do not need branding",
                opt2: "I need a Basic Logo",
                opt3: "Full Branding and Logo"
            }
        }
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