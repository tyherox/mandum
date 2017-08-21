import React from 'react';

var content = {
    banner: {
        EN: {
            title: "Simple, Transparent Pricing",
            subTitle: "Reasonable Prices.",
            button: "Start your Estimation"
        },
        KR: {
            title: "간편하고 투명한 가격 측정 시스템",
            subTitle: "합리적인 가격.",
            button: "바로 견적을 받아보세요!"
        }
    },
    introduction: {
        EN: {
            title: "A Price Range for Everyone",
            subTitle: "Mandum Studio",
            paragraph: "Whether you're a student creating a personal portfolio or a local business planning to" +
            " sell your products online, we can work out a price range for your needs. Check out our package selections" +
            " or customize your price estimation using our price estimator.",
            cards: {
                cardOne: {
                    title: "Early Refund",
                    paragraph: "We refund 100% of your money before the prototyping phase."
                },
                cardTwo: {
                    title: "Transparency",
                    paragraph: "Our price estimator provides transparency in our prices."
                },
                cardThree: {
                    title: "Customizable",
                    paragraph: "Fine tune your project to your exact specifications."
                }
            }
        },
        KR: {
            title: "누구나 만족할 수 있는 가격",
            subTitle: "Mandum Studio",
            paragraph: "취업 준비하는 과정에서 특색 있는 포트폴리오를 만들고 싶은 학생부터" +
            " 온라인상에서 제품을 판매하고 싶은 비즈니스까지." +
            " Mandum Studio에서는 다양한 고객들의 예산 범위 내에서 맞춤형 웹사이트를 제작해드립니다."+
            " Mandum Studio에서 제공하는 패키지를 보시거나 가격 측정 시스템을 이용해서 제작 비용을 확인해보세요!",
            cards: {
                cardOne: {
                    title: "빠른 환불",
                    paragraph: "실제 제작 과정 전까지는 100% 환불 보장합니다."
                },
                cardTwo: {
                    title: "투명성",
                    paragraph: "저희 홈페이지에서 제공하는 가격 측정 시스템을 통해 가격의 투명성을 보장합니다."
                },
                cardThree: {
                    title: "맞춤 제작",
                    paragraph: "고객들의 요구사항을 반영한 맞춤형 홈페이지를 제작해드립니다."
                }
            }
        },
    },
    packages: {
        EN: {
            title: "Find your price quickly",
            paragraph: "Packages are bundled features for common website usages. " +
            "Browse our offers to quickly gauge how much your website will cost.",
            action: "Explore our Packages",
        },
        KR: {
            title: "쉽고 빠르게 가격을 확인하세요.",
            paragraph: "원하시는 유형의 웹사이트를 고르시면 제작하는 데 필요한 기능을 선택해서 보여드립니다. " +
            "Mandum에서 제공하는 패키지를 확인해보시고 예상 비용을 손쉽게 확인해보세요.",
            action: "패키지 구경하기",
        },
    },
    estimator: {
        EN: {
            title: "Customize your experience",
            paragraph: "Have eccentric or uncommon needs? Use our price estimator to better gauge your website cost.",
            action: "Start your Estimation"
        },
        KR: {
            title: "맞춤 제작을 해보세요.",
            paragraph: "조금 더 특별한 웹사이트를 원하시나요? 그렇다면, 저희 가격 측정 시스템을 이용해서 제작 비용을 파악해보세요.",
            action: "예상 비용 산출하기"
        },
    },
    alt:{
        EN: {
            title: "Prefer to Just Talk to Us?",
            action: "Talk to Us"
        },
        KR: {
            title: "직접 저희랑 이야기하는 것이 편하신가요?",
            action: "직접 문의하기"
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
