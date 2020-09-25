import * as types from "../types";


const initialState = [
    {
        title : 'openbook',
        svg : '../../../public/openbook.svg',
        colour : "#F898A4",
    },
    {
        title : 'this website',
        svg : '../../../public/artbro.svg',
        colour : "#bdb2ff",
    },
    {
        title : 'zest',
        svg : '../../../public/zest.svg',
        colour : "#ffd166",
    },
    {
        title : 'reaction',
        svg : '../../../public/reaction.svg',
        colour : "#f94144",
    },
    {
        title : 'investbot',
        svg : '../../../public/investbot.svg',
        colour : "#43aa8b",
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