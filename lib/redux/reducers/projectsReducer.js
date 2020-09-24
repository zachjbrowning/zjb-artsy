import * as types from "../types";


const initialState = [
    {
        title : 'openbook',
        svg : '../../../public/artbro.svg',
        colour : "#F898A4",
    },
    {
        title : 'this website',
        svg : '../../../public/artbro.svg',
        colour : "#bdb2ff",
    },
    {
        title : 'pantry pirateb',
        svg : '../../../public/artbro.svg',
        colour : "#caffbf",
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