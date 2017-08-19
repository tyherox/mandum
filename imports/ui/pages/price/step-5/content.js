import React from 'react';

var content = {
    pages: {
        EN: {
            title: "Content: Pages",
            paragraph: "How many pages will you be using? We provide up to **7** free pages and charge **25,000 KRW** per page afterwards.",
            cards: {
                opt2: "It will be Dynamically Generated"
            }
        },
        KR: {
            title: "Content: Pages (KR)",
            paragraph: "How many pages will you be using? We provide up to **7** free pages and charge **25,000 KRW** per page afterwards.",
            cards: {
                opt2: "It will be Dynamically Generated"
            }
        }
    },
    text: {
        EN: {
            title: "Content: Text",
            paragraph: "Do you need us to create textual content?",
            cards: {
                opt1: "I will be providing my own content",
                opt2: "I require content to be written"
            }
        },
        KR: {
            title: "Content: Text (KR)",
            paragraph: "Do you need us to create textual content?",
            cards: {
                opt1: "I will be providing my own content",
                opt2: "I require content to be written"
            }
        }
    },
    translation: {
        EN: {
            title: "Content: Translation",
            paragraph: "Do you need any translation?",
            cards: {
                opt1: "I do not require translation.",
                opt2: "I need an English and a Korean version"
            }
        },
        KR: {
            title: "Content: Translation (KR)",
            paragraph: "Do you need any translation?",
            cards: {
                opt1: "I do not require translation.",
                opt2: "I need an English and a Korean version"
            }
        },
    },
    media: {
        EN: {
            title: "Content: Media",
            paragraph: "Do you need media content?",
            cards: {
                opt1: "I will be providing my own content",
                opt2: "I require illustrations",
                opt3: "I require photographs"
            }
        },
        KR: {
            title: "Content: Media (KR)",
            paragraph: "Do you need media content?",
            cards: {
                opt1: "I will be providing my own content",
                opt2: "I require illustrations",
                opt3: "I require photographs"
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