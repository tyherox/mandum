/**
 * Created by JohnBae on 7/1/17.
 */

import price from './price';
import settings from './settings';
import { combineReducers } from 'redux'

export default combineReducers({
    price,
    settings
})
