import React from 'react';
import styles from './Blurbs.module.scss';

export default function Home() {
    return <div className={`${styles.main}`}>
        <div className={`${styles.box}`}>
            Hi there!
            <br/>
            <br/>
            I'm Zach, A software developer currently living in Melbourne, Australia.
            <br/>
            <br/>
            I like trees, food and trees.
        </div>
    </div>
}