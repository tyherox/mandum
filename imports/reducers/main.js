/**
 * Created by JohnBae on 7/1/17.
 */

import * as types from '../constants/actionTypes';
import {fromJS} from 'immutable';

const DEFAULT_STATE = fromJS({
    content: {
        pages: {
            opt1: 7,
            opt2: false,
            opt3: false,
            
            price: {
                opt1: 25000,
                opt2: "?",
                opt3: 300000,
            }
        },
        text: {
            opt1: false,
            opt2: false,
            opt3: false,
            
            price: {
                opt1: 0,
                opt2: 200000,
                opt3: "?",
            }
        },
        translation: {
            opt1: false,
            opt2: false,
            opt3: false,
            
            price: {
                opt1: 0,
                opt2: 0,
                opt3: "?",
            }
        },
        media: {
            opt1: false,
            opt2: false,
            opt3: false,
            opt4: false,
            
            price: {
                opt1: 0,
                opt2: 250000,
                opt3: 250000,
                opt4: "?",
            }
        },
        cost: 0
    },
    features: {
        free: {
            opt1: false,
            opt2: false,
            opt3: false,
            
            price: {
                opt1: 0,
                opt2: 0,
                opt3: 0
            }
        },
        premium: {
            opt1: false,
            opt2: false,
            opt3: false,
            opt4: false,
            opt5: false,
            
            price: {
                opt1: 150000,
                opt2: 250000,
                opt3: 350000,
                opt4: 200000,
                opt5: 100000,
            }
        },
        cost: 0
    },
    design: {
        style: {
            opt1: false,
            opt2: false,
            opt3: false,
            
            price: {
                opt1: 100000,
                opt2: 250000,
                opt3: 500000
            }
        },
        branding: {
            opt1: false,
            opt2: false,
            opt3: false,
            
            price: {
                opt1: 0,
                opt2: 150000,
                opt3: 350000,
            }
        },
        cost: 0
    },
    services: {
        hosting: {
            opt1: false,
            opt2: false,
            opt3: false,
            
            price: {
                opt1: 0,
                opt2: 12000,
                opt3: 10000,
            }
        },
        address: {
            opt1: false,
            opt2: false,
            
            price: {
                opt1: 0,
                opt2: 0,
            }
        },
        maintenance: {
            opt1: false,
            opt2: false,
            opt3: false,
            
            price: {
                opt1: 0,
                opt2: 75000,
                opt3: 200000
            }
        },
        cost: 0
    },
    totalCost: 0,
    monthlyCost: 0
});

function selection(state = DEFAULT_STATE, action) {

    var newState, array;


    switch (action.type) {

        case types.SET_VALUE_C:
            newState = state.setIn(action.map, action.value).set("totalCost", calculateTotal(state, action.map, action.value));
            return fromJS(newState);

        case types.CLEAR_VALUE_C:

            return fromJS(newState);

        default:
            return state;
    }


}

function calculateTotal(state, path, value){
    var name = path[path.length -1];
    path[path.length -1] = "price";
    path.push(name);
    var current = state.get("totalCost");
    var price = state.getIn(path);

    if(price=="?")price = 0;


    if(typeof value == "number"){
        var pages = state.get("content").get("pages");
        if(pages.get("opt3") || pages.get("opt2")){
            current -= (pages.get("opt1") - 5) * pages.get("price").get("opt1");
        }
        else {
            current -= pages.get("opt1") > 5 ? (pages.get("opt1") - 5) * pages.get("price").get("opt1") : 0;
            current +=  value > 5 ? (value  - 5) * pages.get("price").get("opt1") : 0;
        }
    }
    else if(!value){
        if(path[0]=="content" && path[1] == "pages"){
            var pages = state.get("content").get("pages");
            current +=  pages.get("opt1") > 5 ? (pages.get("opt1")  - 5) * pages.get("price").get("opt1") : 0;
        }

        current -= price;
    }
    else{
        current += price;
    }
    
    return current;
}



export default selection;
