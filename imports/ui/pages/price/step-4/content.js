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
            title: "서비스: 호스팅",
            paragraph: "Mandum Studio에서 귀사의 웹사이트를 호스팅해드릴까요?",
            cards: {
                opt1: "기본적으로 제공하는 1년 무상 호스팅",
                opt2: "추가적인 1년 호스팅",
                opt3: "추가적인 2년 호스팅"
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
            title: "서비스: 웹사이트 주소 / url",
            paragraph: "웹사이트 주소가 필요하신가요?",
            cards: {
                opt1: "웹사이트 주소가 필요 없습니다",
                opt2: "1년 무상으로 제공하는 웹사이트 주소를 원합니다",
                opt3: "1년간 SSL을 원합니다. SSL은 인터넷 상거래에 필요한 개인정보를 보호하기 위한 개인정보 유지 프로토콜입니다. "
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
            title: "서비스: 관리 및 유지",
            paragraph: "웹사이트 관리 및 유지가 필요하신가요?",
            cards: {
                opt1: "기본적인 업데이트, 한 달에 최대 3번의 업데이트",
                opt2: "고급 업데이트, 한 달에 최대 5번의 업데이트 및 웹사이트 분석",
                opt3: "횟수 제한이 없는 신속하고 고급 업데이트 및 분석"
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
