import { combineReducers } from 'redux';

import { projectsReducer } from "./projectsReducer";
import { recipesReducer } from "./recipesReducer";
import { contactReducer } from "./contactReducer";
import { activeReducer } from "./activeReducer";

export default combineReducers({
    active : activeReducer,
    contact : contactReducer,
    recipes : recipesReducer,
    projects : projectsReducer,
})