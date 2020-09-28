import * as types from "../types";


const initialState = [
    {
        title : 'dahl',
        svg : '../../../public/dahl.svg',
        colour : "#f9c74f",
        explain : 'lentil based curry type thing!',
    },
    {
        title : 'beans',
        svg : '../../../public/charro.svg',
        colour : "#f3722c",
        explain : 'vegetarian mexican style beans',
    },
    {
        title : 'quinoa + veg',
        svg : '../../../public/quinoa.svg',
        colour : "#43aa8b",
        explain : 'roast veg and quinoa salad',
    },
    {
        title : 'risotto',
        svg : '../../../public/risotto.svg',
        colour : "#118ab2",
        explain : 'roast pumpkin risotto',
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