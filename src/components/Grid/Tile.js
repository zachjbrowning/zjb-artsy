import React from 'react';
import { useDispatch } from 'react-redux';


import styles from './Grid.module.scss';
import { set_active } from '../../../lib/redux/actions/activeAction';

export default function Tile(props) {
    const dispatch = useDispatch();

    function open(e) {
        if (props.tile?.alternate) {
            props.tile.alternate(e);
        } else {
            dispatch(set_active(props.projects, props.tile?.title));
        }
    }


    return <div onClick={open} style={{backgroundColor : props.tile?.colour}} className={`${styles.tile}`}>
        <div className={styles.text}>
            {props.tile?.title}
        </div>
        <div className={styles.img}><div style={{backgroundImage : `url(${props.tile?.svg})`}}></div></div>
    </div>
}
