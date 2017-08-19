/**
 * Created by JohnBae on 7/1/17.
 */
import * as types from '../constants/actionTypes';

export const setValueC = (map, value) => {
    return {
        type: types.SET_VALUE_C,
        map: map,
        value: value
    }
};

export const setPackage = (value) => {
    return {
        type: types.SET_PACKAGE,
        value: value
    }
};

export const clearValueC = () =>{
    return {
        type: types.CLEAR_VALUE_C
    }
};


export const setLanguage = () =>{
    return {
        type: types.SET_LANGUAGE
    }
};

