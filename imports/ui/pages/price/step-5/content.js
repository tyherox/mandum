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
            title: "컨텐츠: 페이지 수",
            paragraph: "귀사의 웹사이트를 총 몇 페이지로 구성하실 생각이신가요? Mandum에서는 최대 7장까지 무료로 제공하고 있으며 그 이후로는 장당 25,000원을 청구하고 있습니다.",
            cards: {
                opt2: "블로그 시스템처럼 수시로 새로운 페이지를 추가할 수 있는 기능을 원합니다."
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
            title: "컨텐츠: 텍스트",
            paragraph: "Mandum Studio에서 웹사이트를 구성하는 텍스트를 작성해드릴까요?",
            cards: {
                opt1: "웹사이트 텍스트를 직접 제공하겠습니다.",
                opt2: "Mandum Studio에서 텍스트를 작성해주세요."
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
            title: "컨텐츠: 번역",
            paragraph: "번역이 필요하신가요?",
            cards: {
                opt1: "번역이 필요 없습니다.",
                opt2: "영어와 한국어로 된 웹사이트가 필요합니다."
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
            title: "컨텐츠: 미디어",
            paragraph: "미디어 자료를 이용하실껀가요?",
            cards: {
                opt1: "직접 미디어 자료를 제공하겠습니다.",
                opt2: "그림이 필요합니다.",
                opt3: "사진이 필요합니다."
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
