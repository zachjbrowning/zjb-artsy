import * as types from "../types";


const initialState = [
    {
        title : 'dahl',
        svg : '../../../public/dahl.svg',
        colour : "#f9c74f",
    },
    {
        title : 'beans',
        svg : '../../../public/charro.svg',
        colour : "#f3722c",
    },
    {
        title : 'quinoa + veg',
        svg : '../../../public/quinoa.svg',
        colour : "#43aa8b",
    },
    {
        title : 'risotto',
        svg : '../../../public/risotto.svg',
        colour : "#118ab2",
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