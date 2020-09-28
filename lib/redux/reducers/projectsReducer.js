import * as types from "../types";


const initialState = [
    {
        title : 'openbook',
        svg : '../../../public/openbook.svg',
        colour : "#F898A4",
        date : "December 2019",
    },
    {
        title : 'this website',
        svg : '../../../public/artbro.svg',
        colour : "#bdb2ff",
        date : "December 2019",
    },
    {
        title : 'zest',
        svg : '../../../public/zest.svg',
        colour : "#ffd166",
        date : "December 2019",
    },
    {
        title : 'reaction',
        svg : '../../../public/reaction.svg',
        colour : "#f94144",
        date : "December 2019",
    },
    {
        title : 'investbot',
        svg : '../../../public/investbot.svg',
        colour : "#43aa8b",
        date : "December 2019",
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