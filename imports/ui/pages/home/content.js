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
            deal: "Opening Discount: 50% Off! (5 left)"
        }
    },
    welcome: {
        EN: {
            title: "A Story Behind Every Pixel",
            subTitle: "Mandum Studio",
            paragraphOne: "The Internet is a massive, competitive arena. " +
            "There are more than [1 billion websites today](http://www.internetlivestats.com/total-number-of-websites). " +
            "And with more than 100 being created every minute, creating a unique website gets harder everyday.",
            paragraphTwo: "At Mandum Studio, we strive to create memorable, distinct websites with story telling. " +
                "Every detail of our websites has purpose, represents plot, and urges your web visitors to stay and hear your message. " +
                "Along with our purpose driven design principals, advanced technology, and dependable customer service, your website will be a " +
                "shining beacon admist the vast content of the Internet."
        },
        KR: {
            title: "A Story Behind Every Pixel (KR)",
            subTitle: "Mandum Studio",
            paragraphOne: "The Internet is a massive, competitive arena. " +
            "There are more than [1 billion websites today](http://www.internetlivestats.com/total-number-of-websites). " +
            "And with more than 100 being created every minute, creating a unique website gets harder everyday.",
            paragraphTwo: "At Mandum Studio, we strive to create memorable, distinct websites with story telling. " +
            "Every detail of our websites has purpose, represents plot, and urges your web visitors to stay and hear your message. " +
            "Along with our purpose driven design principals, advanced technology, and dependable customer service, your website will be a " +
            "shining beacon admist the vast content of the Internet."
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
            title: "From A to Z (KR)",
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
            title: "No Need to Wait for a Quote (KR)",
            subTitle: "Transparent Pricing",
            paragraph: "A budget is no fun but always important when creating a website. " +
            "Feel free to browse our packages or check out our price estimator to gauge our price range.",
            button: "Start your Estimation"
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