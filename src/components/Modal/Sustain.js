import React from 'react';
import styles from './Modal.module.scss';

import parse from '../../../lib/utils/parser';

export default function Sustain(props) {
    

    return <div className={styles.content}>
        <h2 className={styles.header}>{props.item?.title}.</h2>

        <h4 className={styles.subheader}>Difficulty</h4>
        <p>{props.item?.difficulty ? parse(props.item?.difficulty) : ""}</p>

        <h4 className={styles.subheader}>Thoughts</h4>
        <p>{props.item?.thoughts ? parse(props.item?.thoughts) : ""}</p>


    </div>
}
