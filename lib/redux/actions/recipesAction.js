import * as types from '../types';
import regeneratorRuntime from "regenerator-runtime";
import TileAPI from '../../api/tiles';


export const load_recipes = () => async dispatch => {
    return TileAPI.getRecipes()
    .then(res => dispatch({
        type : types.LOAD_RECIPES,
        projects : res,
    }))
    .catch(err => console.log(err));
}

