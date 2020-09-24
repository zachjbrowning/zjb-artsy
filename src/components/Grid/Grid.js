import React from 'react';

import styles from './Grid.module.scss';
import Tile from './Tile';

export default function Grid() {
    return <div className={`columns is-centered is-multiline ${styles.grid}`}>
        <Tile colour={"#F898A4"} text="openbook" />
        <Tile colour={"#FCDA9C"} text="this website" />
        <Tile colour={"#F7FAA1"} />
        <Tile colour={"#B4F6A4"} />
        <Tile colour={"#9BE0F1"} />
        
    </div>
}
