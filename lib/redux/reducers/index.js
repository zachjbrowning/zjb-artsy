import { combineReducers } from 'redux';

import { projectsReducer } from "./projectsReducer";
import { recipesReducer } from "./recipesReducer";
import { contactReducer } from "./contactReducer";

export default combineReducers({
    contact : contactReducer,
    recipes : recipesReducer,
    projects : projectsReducer,
})