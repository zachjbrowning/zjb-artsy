import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './Grid.module.scss';
import Tile from './Tile';

export default function Grid(props) {
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
        document.getElementById("grid").scrollIntoView({behavior:'smooth'});
    }, [props.list])

    return <div id="grid" className={`columns is-multiline ${styles.grid}`}>
        {
            list.map((val, idx) => (
                <Tile key={idx} tile={val} projects={projects} />
            ))
        }
        
    </div>
}
