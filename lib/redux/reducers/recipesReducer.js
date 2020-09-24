import * as types from "../types";


const initialState = [
    {
        title : 'dahl',
        svg : '../../../public/artbro.svg',
        colour : "#F7FAA1",
    }
];


export const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_RECIPES:
            return [...action.projects];
        default:
            return state;
    }
}