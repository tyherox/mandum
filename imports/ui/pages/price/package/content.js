import React from 'react';

var content = {
    packages: {
        EN: {
            title: "Packages",
            paragraph: "Browse our packages to quickly find what you need.",
            cards: {
                portfolio: "A small scale portfolio to promote yourself. " +
                "Example: [www.baework.com](http://www.baework.com/home)",
                landing: "Simple landing page to promote your business. " +
                "Example: [www.manimalkorea.com](http://manimalkorea.com/welcome)",
                blog: "A website that allows you to continuously post new content. " +
                "Example: [www.afatgirlsfoodguide.com](http://www.afatgirlsfoodguide.com/)",
                app: "Interactive web application. " +
                "Example: [www.stackedit.com](https://stackedit.io/)",
                store: "Website for selling products online. " +
                "Example: [www.nelly.com](https://nelly.com/ww/womens-fashion/)",
            },
            action: "View Package",
            estimatorTitle: "Not what you're looking for?",
            toEstimator: "Customize your Experience"
        },
        KR: {
            title: "패키지",
            paragraph: "패키지를 보시고 쉽고 빠르게 원하는 웹사이트 형식을 찾아보세요.",
            cards: {
                portfolio: "자신을 홍보하는 용도로 사용할 수 있는 포트폴리오. " +
                "예시: [www.baework.com](http://www.baework.com/home)",
                landing: "비즈니스를 홍보하기 위한 간단한 랜딩 페이지. " +
                "예시: [www.manimalkorea.com](http://manimalkorea.com/welcome)",
                blog: "새로운 컨텐츠를 지속적으로 올릴 수 있는 블로그형 웹사이트. " +
                "예시: [www.afatgirlsfoodguide.com](http://www.afatgirlsfoodguide.com/)",
                app: "사용자들과 소통할 수 있는 웹 어플리케이션. " +
                "예시: [www.stackedit.com](https://stackedit.io/)",
                store: "온라인상에서 귀사의 제품을 판매할 수 있는 웹사이트. " +
                "예시: [www.nelly.com](https://nelly.com/ww/womens-fashion/)",
            },
            action: "패키지 구경하기",
            estimatorTitle: "찾으시는 게 없으신가요?",
            toEstimator: "맞춤 제작해보세요"
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
