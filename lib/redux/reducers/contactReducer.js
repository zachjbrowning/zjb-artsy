import * as types from "../types";


const initialState = [
    {
        title : 'github',
        svg : '../../../public/github.svg',
        colour : "#8d99ae",
        alternate : () => {
            window.open("https://github.com/zachjbrowning");
        }
    },
    {
        title : 'linkedin',
        svg : '../../../public/linkedin.svg',
        colour : "#118ab2",
        alternate : () => {
            window.open("https://www.linkedin.com/in/zachary-browning-2b7a01193/");
        }
    },
    {
        title : 'email',
        svg : '../../../public/email.svg',
        colour : "#ef476f",
        alternate : (e) => {
            let email = "zachjbrowning@outlook.com";
            if (e.target.innerHTML !== email) {
                e.target.innerHTML = "zachjbrowning@outlook.com";
            }
        }
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