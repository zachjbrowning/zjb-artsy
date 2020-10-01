import React from 'react';
import styles from './Modal.module.scss';

import parse from '../../../lib/utils/parser';

export default function Recipe(props) {
    

    return <div className={styles.content}>
        <h2 className={styles.header}>{props.item?.title}.</h2>
        <p>{props.item?.explain}</p>

        <h3 className={styles.subheader}>Description</h3>
        <p>{props.item?.describe ? parse(props.item?.describe) : ""}</p>

        <h3 className={styles.subheader}>Ingredients</h3>
        <ul>{props.item?.ingredients ? props.item.ingredients.map((out, index) => <li key={index}>{parse(out)}</li>) : ""}</ul>

        <h3 className={styles.subheader}>Method</h3>
        <ul>{props.item?.method ? props.item.method.map((out, index) => <li key={index}>{parse(out)}</li>) : ""}</ul>

    </div>
}
