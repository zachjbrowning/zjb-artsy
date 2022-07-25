import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import styles from './Nav.module.scss';


import { close } from '../Utils/Icon';


export default function Nav() {
    const history = useHistory();
    const [isOpen, setOpen] = useState(false);

    var word = "home";
    switch(history.location.pathname) {
        case '/projects':
            word = "projects";
            break;
        case '/recipes':
            word = 'recipes';
            break;
        case '/experience':
            word = 'experience';
            break;
        case '/sustainability':
            word = 'sustainability';
            break;
    }
    
    function setActive(e) {
        e.target.classList.add(styles.active);
        setOpen(false);
        switch (history.location.pathname) {
            case '/':
                document.getElementById("nav-home").classList.remove(styles.active);
                break;
            case '/projects':
                document.getElementById("nav-projects").classList.remove(styles.active);
                break;
            case '/recipes':
                document.getElementById("nav-recipes").classList.remove(styles.active);
                break;
            case '/experience':
                document.getElementById("nav-contact").classList.remove(styles.active);
                break;
            case '/sustainability':
                document.getElementById("nav-sustainability").classList.remove(styles.active);
                break;
            default:
        }
    }
    
    return <div id="nav" className={styles.constrict}>
        <div className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            <div onClick={() => setOpen(false)} className={styles.close}>
                <svg viewBox="0 0 8192 8192">{close}</svg>
            </div>
            <Link id="nav-home" onClick={setActive} to={"/"} className={`${styles.navItem} ${history.location.pathname === '/' ? styles.active : ""}`}>
                home
            </Link>
            <Link id="nav-projects" onClick={setActive} to={"/projects"} className={`${styles.navItem} ${history.location.pathname === '/projects' ? styles.active : ""}`}>
                projects
            </Link>
            <Link id="nav-contact" onClick={setActive} to={"/experience"} className={`${styles.navItem} ${history.location.pathname === '/experience' ? styles.active : ""}`}>
                experience
            </Link>
            <Link id="nav-recipes" onClick={setActive} to={"/recipes"} className={`${styles.navItem} ${history.location.pathname === '/recipes' ? styles.active : ""}`}>
                recipes
            </Link>
            <Link id="nav-sustainability" onClick={setActive} to={"/sustainability"} className={`${styles.navItem} ${history.location.pathname === '/sustainability' ? styles.active : ""}`}>
                sustainability
            </Link>            
        </div>
        
        <div className={styles.mini}>
            <p>{word}</p>
            <div onClick={() => setOpen(true)} className={styles.burgerbox} >
                <svg width='30' height='30' viewBox='0 0 30 30'>
                    <path strokeMiterlimit='10' strokeWidth='2' d='M4 7h22M4 15h22M4 23h22'/>
                </svg>
            </div>
        </div>
        
    </div>
}
