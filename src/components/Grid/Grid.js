import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './Grid.module.scss';
import Tile from './Tile';

export default function Grid() {
    const history = useHistory();
    
    let projects = useSelector(state => state.projects);
    let recipes = useSelector(state => state.recipes);


    return <div className={`columns is-multiline ${styles.grid}`}>
        {
            history.location.pathname === "/projects" ?
            
            projects.map((val, idx) => (
                <Tile key={idx} tile={val}/>
            ))

            : ""
        }
        {
            history.location.pathname === "/recipes" ?
            
            recipes.map((val, idx) => (
                <Tile key={idx} tile={val}/>
            ))

            : ""
        }
        
    </div>
}
