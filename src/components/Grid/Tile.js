import React from 'react';

import styles from './Grid.module.scss';


export default function Tile(props) {
    return <div style={{backgroundColor : props.tile?.colour}} className={`${styles.tile}`}>
        <div className={styles.text}>
            {props.tile?.title}
        </div>
        <div className={styles.img}><div style={{backgroundImage : `url(${props.tile?.svg})`}}></div></div>
    </div>
}
