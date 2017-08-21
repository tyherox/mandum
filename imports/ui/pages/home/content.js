import React from 'react';

var content = {
    banner: {
        EN: {
            title: ["Website", " Consulting", "Design", 'Development'],
            subTitleOne: "In Korea.",
            subTitleTwo: "Done the right way.",
            button: "Work with us",
            deal: "Opening Discount: 50% Off! (5 left)"
        },
        KR: {
            title: ["웹사이트", "컨설팅", "디자인", "개발"],
            subTitleOne: "한국에서.",
            subTitleTwo: "단번에 확실하게.",
            button: "같이 만들어보세요",
            deal: "오프닝 행사: 50% 할인! (선착순 5명)"
        }
    },
    welcome: {
        EN: {
            title: "A Story Behind Every Pixel",
            subTitle: "Mandum Studio",
            paragraphOne: "The Internet is a massive, competitive arena. " +
            "There are more than [1 billion websites today](http://www.internetlivestats.com/total-number-of-websites). " +
            "And with more than 100 being created every minute, creating a unique website gets harder every day.",
            paragraphTwo: "At Mandum Studio, we strive to create memorable, distinct websites with storytelling. " +
                "Every detail of our websites has purpose, represents plot, and urges your web visitors to stay and hear your message. " +
                "Along with our purpose driven design principles, advanced technology, and dependable customer service, your website will be a " +
                "shining beacon amidst the vast content of the Internet."
        },
        KR: {
            title: "픽셀 뒤에 숨어있는 이야기",
            subTitle: "Mandum Studio",
            paragraphOne: "인터넷은 마치 수많은 경쟁자들이 존재하는 거대한 경기장과 같습니다. " +
            "현재 무려 [10억 개가 넘는 웹사이트](http://www.internetlivestats.com/total-number-of-websites)가 존재하고 있습니다. " +
            "1분씩 지날 때마다 100개 이상의 웹사이트가 만들어지고 있는 만큼, 자신만의 개성을 지닌 웹사이트를 만드는 것이 날마다 어려워지고 있습니다.",
            paragraphTwo: "Mandum Studio에서는, 하나의 이야기를 풀어나가듯이 의미가 있으면서 각자의 개성이 뚜렷한 웹사이트를 제작하기 위해 끊임없이 노력하고 있습니다. " +
            "저희가 만드는 웹사이트의 작은 디테일 하나하나가 큰 그림을 그리기 위한 필수적인 요소이며, " +
            "웹사이트를 방문하는 고객들이 귀사에서 전달하고자 하는 메시지를 끝까지 듣고 가게끔 설득시킵니다." +
            "Mandum의 목표 지향적인 디자인 원칙, 최신형 기술과 믿을 수 있는 고객 서비스와 손을 잡으신다면, 귀사의 웹사이트는 " +
            "넓고 어두운 바다 한가운데 환하게 빛나는 등대와 같은 존재가 될 것입니다."
        },
    },
    services: {
        EN: {
            title: "From A to Z",
            subTitle: "Our Services",
            paragraph: "Creating a website is a multi-step process that is much more than just coding. " +
            "Mandum Studio understands the multi-disciplinary requirements of website building " +
            "and provides a wide range of services from design to translation as well as development.",
            cardOne: {
                title: "Development",
                content: "We use advanced, modern technologies to build your websites."
            },
            cardTwo: {
                title: "Design",
                content: "All our designs are mobile friendly and go through a rigorous planning phase."
            },
            cardThree: {
                title: "Translation",
                content: "We provide free English and Korean versions of your website."
            },
        },
        KR: {
            title: "하나부터 열까지",
            subTitle: "Mandum에서 제공하는 서비스",
            paragraph: "웹사이트를 제작하는 일은 단순히 컴퓨터 코딩으로만 이루어지는 것이 아닙니다. " +
            "Mandum Studio에서는 웹사이트를 제작하는 과정에서 여러 단계를 신중하게 짚고 넘어가야 한다는 것을 잘 알고 있기 때문에 " +
            "디자인, 번역 그리고 웹사이트 개발까지, 광범위한 서비스를 제공하고 있습니다.",
            cardOne: {
                title: "개발",
                content: "Mandum에서는 최신기술을 적용해서 귀사의 웹사이트를 만들어드립니다."
            },
            cardTwo: {
                title: "디자인",
                content: "Mandum에서는 수준 높은 디자인을 추구하며 모바일에 최적화된 웹사이트를 제작해드립니다."
            },
            cardThree: {
                title: "번역",
                content: "Mandum에서는 별도의 비용 없이 귀사의 웹사이트를 영어로 번역해드립니다."
            },
        },
    },
    price: {
        EN: {
            title: "No Need to Wait for a Quote",
            subTitle: "Transparent Pricing",
            paragraph: "A budget is no fun but always important when creating a website. " +
            "Feel free to browse our packages or check out our price estimator to gauge our price range.",
            button: "Start your Estimation"
        },
        KR: {
            title: "견적을 바로 받아보세요",
            subTitle: "투명한 가격",
            paragraph: "웹사이트를 만드는 과정에서 예산은 고려할 수밖에 없죠. " +
            "Mandum에서 제공하는 패키지를 선택하시거나 지금 바로 저희 가격 측정 시스템을 이용하셔서 귀사의 웹사이트 제작비용을 확인해보세요.",
            button: "견적 산출을 시작해보세요"
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
