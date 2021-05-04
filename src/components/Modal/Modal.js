import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Modal.module.scss';


import { unset_active  } from '../../../lib/redux/actions/activeAction';
import { close } from '../Utils/Icon';
import Recipe from './Recipe';
import Project from './Project';
import Sustain from './Sustain';

export default function Modal() {
    const dispatch = useDispatch();
    const active = useSelector(state => state.active);
    
    var list = [];

    if (active.role === "projects") list = useSelector(state => state.projects);
    else if (active.role === "sustainability") list = useSelector(state => state.sustainability);
    else list = useSelector(state => state.recipes);
    
    var chosen = false;
    if (list) {
        for (var item of list) {
            if (item.title === active.name) {
                chosen = item;
                break;
            }
        }
    }

    var html = document.getElementById("html");
    var top = html.scrollTop;
    
    if (chosen) {
        html.style.top = `-${top}px`
        html.style.position = "fixed";
        if (active.role === "projects") chosen = <Project item={chosen} />;
        else if (active.role === "sustainability") chosen = <Sustain item={chosen} />;
        else if (active.role === "recipes") chosen = <Recipe item={chosen} />; 
    }
    

    
    function closer() {
        html.style.position = "";
        html.scrollTo(0, top)
        dispatch(unset_active());
    }


    return <div className={`modal ${active.modal ? "is-active" : ""}`}>
        <div onClick={closer} style={{backgroundColor : `${chosen.colour}bb`}} className={`modal-background`} />
        
        <div className={styles.box}>
            <div onClick={closer} className={styles.closer}>
                <svg viewBox="0 0 8192 8192">
                    {close}
                </svg>
            </div>

            {
                chosen ? chosen  : <>
                    Hmmm something went wrong...
                </>
            }
        </div>
    </div>
}
