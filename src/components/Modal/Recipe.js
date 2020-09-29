import React from 'react';
import styles from './Modal.module.scss';

export default function Recipe(props) {
    

    return <div className={styles.content}>
        <h2 className={styles.header}>{props.item?.title}.</h2>
        <p>{props.item?.explain}</p>

        <h3 className={styles.subheader}>Description</h3>
        <p>{props.item?.describe}</p>

        <h3 className={styles.subheader}>Ingredients</h3>
        <p>{props.item?.ingredients}</p>

        <h3 className={styles.subheader}>Method</h3>
        <p>{props.item?.method}</p>

    </div>
}
