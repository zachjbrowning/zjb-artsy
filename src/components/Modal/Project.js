import React from 'react';
import styles from './Modal.module.scss';

import parse from '../../../lib/utils/parser';

export default function Project(props) {
    console.log("We got:",  props);
    return <div className={styles.content}>
        <h2 className={styles.header}>{props.item?.title}.</h2>
        <p>{props.item?.date}</p>

        <h3 className={styles.subheader}>Summary</h3>
        <p>{props.item?.summary ? parse(props.item?.summary) : ""}</p>

        <h3 className={styles.subheader}>Notes</h3>
        <ul>{props.item?.notes ? props.item.notes.map((out, index) => <li key={index}>{parse(out)}</li>) : ""}</ul>

        {
            props.item?.stack && <>
                <h3 className={styles.subheader}>Tech Stack</h3>
                <ul>{props.item?.stack ? props.item.stack.map((out, index) => <li key={index}>{parse(out)}</li>) : ""}</ul>
            </>
        }


        
    </div>
}
