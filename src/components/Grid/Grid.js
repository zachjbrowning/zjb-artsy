import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './Grid.module.scss';
import Tile from './Tile';

export default function Grid(props) {
    var list;
    if (props.list === "projects") {
        list = useSelector(state => state.projects);
    } else if (props.list === 'recipes') {
        list = useSelector(state => state.recipes);
    }

    useEffect(() => {
        document.getElementById("grid").scrollIntoView({behavior:'smooth'});
    }, [props.list])

    return <div id="grid" className={`columns is-multiline ${styles.grid}`}>
        {
            list.map((val, idx) => (
                <Tile key={idx} tile={val}/>
            ))
        }
        
    </div>
}
