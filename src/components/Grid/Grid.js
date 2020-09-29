import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Grid.module.scss';
import Tile from './Tile';
import { load_projects } from '../../../lib/redux/actions/projectsAction';
import { load_recipes } from '../../../lib/redux/actions/recipesAction';

export default function Grid(props) {
    const dispatch = useDispatch();

    var list = [];
    var projects = false;
    if (props.list === "projects") {
        list = useSelector(state => state.projects);
        projects = true;
    } else if (props.list === 'recipes') {
        list = useSelector(state => state.recipes);
    } else if (props.list === 'contact') {
        list = useSelector(state => state.contact);
    }
    useEffect(() => {
        if (props.list === 'projects' && list === false) {
            dispatch(load_projects());
        } else if (props.list === 'recipes' && list === false) {
            dispatch(load_recipes());
        }
        document.getElementById("grid").scrollIntoView({behavior:'smooth'});
    }, [list])

    return <div id="grid" className={`columns is-multiline ${styles.grid}`}>
        {
            list ? 
            list.map((val, idx) => (
                <Tile key={idx} tile={val} projects={projects} />
            ))
            : ""
        }
        
    </div>
}
