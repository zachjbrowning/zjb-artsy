import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Modal.module.scss';


import { unset_active  } from '../../../lib/redux/actions/activeAction';
import { close } from '../Utils/Icon';
import Recipe from './Recipe';
import Project from './Project';

export default function Modal() {
    const dispatch = useDispatch();
    const active = useSelector(state => state.active);
    
    var list = [];
    if (active.project) list = useSelector(state => state.projects);
    else list = useSelector(state => state.recipes);
    
    var chosen = false;
    for (var item of list) {
        if (item.title === active.name) {
            chosen = item;
            break;
        }
    }

    
    
    function closer() {
        dispatch(unset_active());
    }


    return <div className={`modal ${active.modal ? "is-active" : ""}`}>
        <div onClick={closer} style={{backgroundColor : `${chosen.colour}bb`}} className={`modal-background`} />
        
        <div onClick={closer} className={styles.box}>
            <div className={styles.closer}>
                <svg viewBox="0 0 8192 8192">
                    {close}
                </svg>
            </div>

            {
                chosen ? <>
                    { active.project ? <Project item={chosen} /> : <Recipe item={chosen} />}

                </>  : <>
                    Hmmm something went wrong...
                </>
            }
        </div>
    </div>
}
