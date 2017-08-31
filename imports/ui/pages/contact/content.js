import React from 'react';

var content = {
    contact: {
        EN: {
            title: "Ready for your quote?",
            name: "**Name**",
            budget: "**Budget**",
            date: "**Deadline**",
            email: "**Email**",
            description: "**Project Description**",
            useEstimator: "Use Price Estimator Data",
            action: "Submit",
            thank: "Thank You!",
            custom: "Give us an Email!"
        },
        KR: {
            title: "견적을 받아보시겠어요?",
            name: "**이름은**",
            budget: "**예산**",
            date: "**기한**",
            email: "**이메일**",
            description: "**프로젝트 설명**",
            useEstimator: "가격 측정 시스템에서 산출한 금액 이용하기",
            action: "전송하기",
            thank: "감사합니다",
            custom: "직접 이메일을 보내주세요!"
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
