import * as types from '../types';
import regeneratorRuntime from "regenerator-runtime";
import TileAPI from '../../api/tiles';


export const load_projects = () => async dispatch => {
    return TileAPI.getProjects()
    .then(res => {
        console.log(res)
        return dispatch({
        type : types.LOAD_PROJECTS,
        projects : res.data.projects,
    })})
    .catch(err => console.log(err));
}

