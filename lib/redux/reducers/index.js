import { combineReducers } from 'redux';

import { projectsReducer } from "./projectsReducer";
import { recipesReducer } from "./recipesReducer";

export default combineReducers({
    recipes : recipesReducer,
    projects : projectsReducer,
})