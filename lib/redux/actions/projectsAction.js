import * as types from '../types';
import regeneratorRuntime from "regenerator-runtime";
import TileAPI from '../../api/tiles';


export const load_projects = () => async dispatch => {
    console.log("YEET");
    return TileAPI.getProjects()
    .then(res => dispatch({
        type : types.LOAD_PROJECTS,
        recipes : res,
    }))
    .catch(err => console.log(err));
}

