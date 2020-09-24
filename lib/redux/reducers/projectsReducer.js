import * as types from "../types";


const initialState = [
    {
        title : 'openbook',
        svg : '../../../public/artbro.svg',
        colour : "#F898A4",
    }
];


export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_PROJECTS:
            return [...action.projects];
        default:
            return state;
    }
}