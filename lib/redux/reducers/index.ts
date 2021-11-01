import { combineReducers } from 'redux';

import { activeReducer } from "./activeReducer";

export default combineReducers({
    active : activeReducer,
})