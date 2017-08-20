import React from 'react';

var content = {
    banner: {
        EN: {
            title: "Simple, Transparent Pricing",
            subTitle: "No Hidden Costs.",
            button: "Start your Estimation"
        },
        KR: {
            title: "Simple, Transparent Pricing (KR)",
            subTitle: "No Hidden Costs.",
            button: "Start your Estimation"
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
            title: "A Price Range for Everyone(KR)",
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
    },
    packages: {
        EN: {
            title: "Find your price quickly",
            paragraph: "Packages are bundled features for common website usages. " +
            "Browse our offers to quickly gauge how much your website will cost.",
            action: "Explore our Packages",
        },
        KR: {
            title: "Find your price quickly (KR)",
            paragraph: "Packages are bundled features for common website usages. " +
            "Browse our offers to quickly gauge how much your website will cost.",
            action: "Explore our Packages",
        },
    },
    estimator: {
        EN: {
            title: "Customize your experience",
            paragraph: "Have eccentric or uncommon needs? Use our price estimator to better gauge your website cost.",
            action: "Start your Estimation"
        },
        KR: {
            title: "Customize your experience (KR)",
            paragraph: "Have eccentric or uncommon needs? Use our price estimator to better gauge your website cost.",
            action: "Start your Estimation"
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