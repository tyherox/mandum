import React from 'react';

var content = {
    banner: {
        EN: {
            title: "Your Own Web Studio",
            subTitleOne: "Helping you every step of the way.",
            button: "Work with us"
        },
        KR: {
            title: ["나만의 웹 스튜디오"],
            subTitleOne: "모든 단계에서 옆에서 도와드립니다.",
            button: "저희랑 같이 일해보세요",
        }
    },
    marketing: {
        EN: {
            title: "Find and Connect with your Audience ",
            subTitle: "Effective Marketing",
            paragraph: "A website is a powerful way to expand and promote your business when used correctly. " +
            "Mandum Studio offers a comprehensive marketing service that will maximize the impact your website will have." +
            "And even after launching your site, we can provide detailed analyses of how your visitors interact with your" +
            "site to continuously improve your business.",
            cardOne: {
                title: "Analysis",
                content: "Survey your online competitors and stay one step ahead with Google Analytics."
            },
            cardTwo: {
                title: "SEO",
                content: "Our Powerful Search Engine Optimization (SEO) help search engines find you."
            },
            cardThree: {
                title: "Free Translation",
                content: "Launch your website to an international crowd with two languages - for Free."
            },
        },
        KR: {
            title: "고객들과 소통하세요",
            subTitle: "효과적인 마케팅",
            paragraph: "웹사이트는 귀사의 사업을 홍보하고 확장하는 데 활용할 수 있는 강력한 도구입니다." +
            "Mandum Studio에서는 종합적인 마케팅 서비스를 제공함으로써 귀사의 웹사이트가 최대한의 효과를 볼 수 있도록 도와드립니다." +
            "웹사이트를 완성한 이후에도, 귀사의 비즈니스가 지속적으로 발전할 수 있게끔 Mandum Studio에서는 상세한 분석 자료를 제공할 수 있으며 " +
            "고객들이 귀사의 웹사이트와 어떠한 상호작용을 하는지 알려드릴 수 있습니다.",
            cardOne: {
                title: "분석",
                content: "온라인 경쟁자들에 대해 조사해보고 구글 애널리틱스로 한 발 앞서 나가세요."
            },
            cardTwo: {
                title: "SEO",
                content: "저희 검색엔진 최적화 (SEO) 시스템은 검색엔진에서 귀사의 웹사이트를 쉽게 찾을 수 있도록 만들어줍니다."
            },
            cardThree: {
                title: "무료 번역",
                content: "귀사의 웹사이트를 국제적인 무대로 나아가는 발판으로 활용하세요 - 번역을 별도의 비용 없이 제공합니다."
            }
        },
    },
    design: {
        EN: {
            title: "Tell Your Story, with Practical, Unique Designs",
            subTitle: "Holistic Design",
            paragraph: "At Mandum Studio, design is much more than pretty colors and visuals. We use elements like animations, " +
            "responsive web design, and sensible branding to create interesting, practical websites. We'll help you " +
            "stand out amongst the billions of websites around the world.",
            cardOne: {
                title: "Mobile Ready",
                content: "Allow your audience to view your website from any device comfortably."
            },
            cardTwo: {
                title: "Branding",
                content: "Craft your business image to help visitors remember your business."
            },
            cardThree: {
                title: "UX Design",
                content: "Use designs that help users interact and navigate your site comfortably."
            },
        },
        KR: {
            title: "실용적이면서 개성 있는 디자인으로 자신만의 이야기를 풀어나가보세요",
            subTitle: "전체론적 디자인",
            paragraph: "Mandum Studio에서는, 디자인은 예쁜 색상과 시각자료 그 이상입니다. 저희는 애니메이션, " +
            "반응형 웹 디자인, 또한 합리적인 브랜딩을 통해 흥미로우면서 실용적인 웹사이트를 만들어드립니다. Mandum Studio에서는 " +
            "귀사의 웹사이트가 전 세계에 수억 개가 넘는 웹사이트 사이에서 빛날 수 있도록 도와드립니다.",
            cardOne: {
                title: "모바일 최적화",
                content: "귀사의 웹사이트를 방문하는 고객들이 기기에 상관없이 사용할 수 있도록 하세요."
            },
            cardTwo: {
                title: "브랜딩",
                content: "고객들의 기억에 남을 수 있는 비즈니스 이미지를 구축하세요."
            },
            cardThree: {
                title: "사용자 경험 (UX) 디자인",
                content: "고객들이 쉽게 상호작용하며 편리하게 이용할 수 있는 웹사이트 디자인을 이용하세요."
            },
        },
    },
    development: {
        EN: {
            title: "Build Fast, Reliable, and Modern Websites",
            subTitle: "Expert Development",
            paragraph: "Mandum Studio uses modern, up-to-date solutions to build your websites. Our studio utilizes components" +
            "and tools from large, well known companies like Facebook and Google to keep your website reliable and advanced." +
            "Even after completion, we can constantly monitor your website to update security, check for bugs, and deal with traffic.",
            cardOne: {
                title: "Cloud Hosted",
                content: "Use cloud servers to improve reliability, security, and scalability of your site."
            },
            cardTwo: {
                title: "Fast Loading",
                content: "Our development strategies allow your visitors to quickly access your website."
            },
            cardThree: {
                title: "Persistent Testing",
                content: "Make sure your website is always functioning - and provide a quick fix when it's not."
            },
        },
        KR: {
            title: "빠르면서 믿을 수 있는 모던한 웹사이트를 만드세요",
            subTitle: "전문적인 개발",
            paragraph: "Mandum Studio는 최신기술을 적용해서 귀사의 웹사이트를 만들어드립니다. 저희 Studio에서는 페이스북과 구글과 같은" +
            "유명한 기업들에서 제공하는 기술적인 도구나 서비스를 활용해서 귀사의 웹사이트를 한 단계 더 발전시켜드립니다." +
            "웹사이트를 완성한 이후에도, 지속적으로 귀사의 웹사이트를 모니터링해서 보안 업데이트 및 오류 발생 여부를 확인해드릴 수 있으며 " +
            "온라인 트랙픽와 관련한 문제 또한 해결해드릴 수 있습니다.",
            cardOne: {
                title: "클라우드 호스팅",
                content: "클라우드 서버를 이용해서 귀사의 웹사이트의 신뢰도, 보안 및 확장성을 개선하세요."
            },
            cardTwo: {
                title: "빠른 로딩시간",
                content: "Mandum Studio의 개발 전략은 고객들의 빠른 접속을 보장합니다."
            },
            cardThree: {
                title: "끊임없는 테스팅",
                content: "귀사의 웹사이트가 항상 작동하고 있는지 확인하시고, 문제가 생겼을 때 빠른 해결책을 제시하세요."
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
