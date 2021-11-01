import * as types from "../types";


const initialState = {
    modal : false,
    role : null,
    name : null,
    tile: null
};


export const activeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ACTIVE:
            return {
                modal : true,
                role : action.role,
                name : action.name,
                tile: action.tile
            };
        case types.UNSET_ACTIVE:
            return {...initialState};
        default:
            return state;
    }
}