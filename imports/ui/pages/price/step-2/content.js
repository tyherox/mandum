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
            title: "추가적인 기능: 무료",
            paragraph: "Mandum에서 무료로 제공해드릴 수 있는 기능.",
            cards: {
                opt1: "반응형 웹디자인",
                opt2: "검색 엔진 최적화",
                opt3: "제작하는 동안 방문 고객들이 볼 수 있는 웹사이트 사전 예고 페이지"
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
            title: "추가적인 기능: 프리미엄",
            paragraph: "합리적인 비용으로 추가할 수 있는 프리미엄 기능.",
            cards: {
                opt1: "관리자 전용 페이지",
                opt2: "계정 시스템",
                opt3: "온라인 결제 시스템",
                opt4: "이메일 시스템",
                opt5: "자료 업로드 / 다운로드 기능",
                opt6: "고객들과 소통할 수 있는 기능"
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
