/**
 * Created by JohnBae on 7/1/17.
 */

import * as types from '../constants/actionTypes';
import {fromJS} from 'immutable';

const DEFAULT_STATE = fromJS({
    language: "EN",
});

function selection(state = DEFAULT_STATE, action) {

    var newState;


    switch (action.type) {
        case types.SET_LANGUAGE:
            if(state.get("language")=="EN") newState = state.set("language", "KR");
            else newState = state.set("language", "EN");
            return fromJS(newState);

        default:
            return state;
    }

}


export default selection;
