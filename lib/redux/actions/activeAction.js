import * as types from '../types';
import regeneratorRuntime from "regenerator-runtime";


export const set_active = (role, name, tile) => async dispatch => {
    dispatch({
        type : types.SET_ACTIVE,
        role : role,
        name : name,
        tile: tile
    })
}


export const unset_active = () => async dispatch => {
    dispatch({
        type : types.UNSET_ACTIVE,
    })
}
