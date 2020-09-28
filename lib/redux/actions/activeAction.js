import * as types from '../types';
import regeneratorRuntime from "regenerator-runtime";


export const set_active = (project, name) => async dispatch => {
    dispatch({
        type : types.SET_ACTIVE,
        project : project,
        name : name,
    })
}


export const unset_active = () => async dispatch => {
    dispatch({
        type : types.UNSET_ACTIVE,
    })
}
