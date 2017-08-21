import React from 'react';

var content = {
    contact: {
        EN: {
            title: "Ready for your quote? ",
            name: "Hi, my **name** is",
            budget: "My **budget** is",
            date: " KRW and I would like to have it **done by**",
            email: "My **email** is",
            useEstimator: "Use Price Estimator Data"
        },
        KR: {
            title: "견적을 받아보시겠어요?",
            name: "안녕하세요, 저는 **name**이며, Mandum Studio와 일을 하고 싶습니다!",
            budget: " 제가 생각하고 있는 예산은 **budget**원이며",
            date: " **done by** 까지 완성했으면 합니다. ",
            email: "제 이메일은 **email** 입니다.",
            useEstimator: "가격 측정 시스템에서 산출한 금액 이용하기"
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
