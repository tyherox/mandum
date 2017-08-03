/**
 * Created by JohnBae on 7/1/17.
 */

import * as types from '../constants/actionTypes';
import {fromJS} from 'immutable';

const DEFAULT_STATE = fromJS({
    content: {
        pages: {
            number: 3,
            opt1: false,
            opt2: false
        },
        text: {
            opt1: false,
            opt2: 0,
            opt3: false,
        },
        translation: {
            opt1: false,
            opt2: false
        },
        media: {
            opt1: false,
            opt2: false,
            opt3: false,
            opt4: false
        }
    }
});

function projectSelection(state = DEFAULT_STATE, action) {

    var newState;


    switch (action.type) {

        case types.SET_VALUE_C:
            newState = state.setIn(action.map, action.value);
            return fromJS(newState);

        case types.CLEAR_VALUE_C:

            return fromJS(newState);

        default:
            return state;
    }


}



export default projectSelection;
