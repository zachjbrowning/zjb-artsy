import * as types from "../types";


const initialState = [
    {
        title : 'github',
        svg : '../../../public/github.svg',
        colour : "#8d99ae",
    },
    {
        title : 'linkedin',
        svg : '../../../public/linkedin.svg',
        colour : "#118ab2",
    },
    {
        title : 'email',
        svg : '../../../public/email.svg',
        colour : "#ef476f",
    },
];


export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CONTACT:
            return [...action.contact];
        default:
            return state;
    }
}