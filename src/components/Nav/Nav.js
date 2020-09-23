import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Nav.module.scss';

export default function Nav() {
    return <div className={styles.constrict}>
        <div className={styles.nav}>
            <Link to={"/"} className={styles.navItem}>
                about
            </Link>
            <Link to={"/projects"} className={styles.navItem}>
                projects
            </Link>
            <Link to={"/recipes"} className={styles.navItem}>
                recipes
            </Link>
            <Link to={"/contact"} className={styles.navItem}>
                contact
            </Link>
        </div>
    </div>
}
