import React from 'react';

import styles from './Grid.module.scss';


export default function Tile(props) {
    return <div style={{backgroundColor : props.colour}} className={`${styles.tile}`}>
        <div className={styles.text}>
            {props.text}
        </div>
        <div className={styles.img}></div>
    </div>
}
