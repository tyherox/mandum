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
            title: "디자인: 스타일",
            paragraph: "어떤 디자인이 필요하신가요?",
            cards: {
                opt1: "기본 디자인",
                opt2: "고급 디자인",

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
            title: "디자인: 브랜딩",
            paragraph: "브랜딩 하는 데 도움이 필요하신가요?",
            cards: {
                opt1: "브랜딩이 필요 없습니다.",
                opt2: "기본적인 로고가 필요합니다.",
                opt3: "브랜딩 및 로고 제작을 원합니다."
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
