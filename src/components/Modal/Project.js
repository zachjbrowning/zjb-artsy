import React from 'react';
import styles from './Modal.module.scss';

export default function Project(props) {
    return <div className={styles.content}>
        <h2 className={styles.header}>{props.item?.title}.</h2>
        <p>{props.item?.date}</p>

        <h3 className={styles.subheader}>Summary</h3>
        <p>{props.item?.summary}</p>

        <h3 className={styles.subheader}>Learning outcomes</h3>
        <p>{props.item?.summary}</p>

        <h3 className={styles.subheader}>Notes</h3>
        <p>{props.item?.notes}</p>
        
    </div>
}
