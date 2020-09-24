import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import styles from './Nav.module.scss';

export default function Nav() {
    const history = useHistory();
    
    function setActive(e) {
        console.log(e.target, history.location.pathname);
        e.target.classList.add(styles.active);
        switch (history.location.pathname) {
            case '/':
                document.getElementById("nav-about").classList.remove(styles.active);
                break;
            case '/projects':
                document.getElementById("nav-projects").classList.remove(styles.active);
                break;
            case '/recipes':
                document.getElementById("nav-recipes").classList.remove(styles.active);
                break;
            case '/contact':
                document.getElementById("nav-contact").classList.remove(styles.active);
                break;
            default:
        }
    }
    
    return <div id="nav" className={styles.constrict}>
        <div className={styles.nav}>
            <Link id="nav-about" onClick={setActive} to={"/"} className={`${styles.navItem} ${history.location.pathname === '/' ? styles.active : ""}`}>
                about
            </Link>
            <Link id="nav-projects" onClick={setActive} to={"/projects"} className={`${styles.navItem} ${history.location.pathname === '/projects' ? styles.active : ""}`}>
                projects
            </Link>
            <Link id="nav-recipes" onClick={setActive} to={"/recipes"} className={`${styles.navItem} ${history.location.pathname === '/recipes' ? styles.active : ""}`}>
                recipes
            </Link>
            <Link id="nav-contact" onClick={setActive} to={"/contact"} className={`${styles.navItem} ${history.location.pathname === '/contact' ? styles.active : ""}`}>
                contact
            </Link>
        </div>
    </div>
}
