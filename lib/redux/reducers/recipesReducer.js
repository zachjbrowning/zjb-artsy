import * as types from "../types";


const initialState = false;


export const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_RECIPES:
            return [...action.recipes];
        default:
            return state;
    }
}