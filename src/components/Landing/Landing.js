import React, { useEffect, useState } from 'react'
import styles from './Landing.module.scss';

export default function Landing() {
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [iter, setIter] = useState(0);
    const sentences = ["Hi, I'm Zach", "What's poppin?"]
    
    function typewrite(doDelete, isIter) {
        let word = sentences[isIter % sentences.length];
        
        if (doDelete) {
            setText(text.substring(0, text.length - 1));
        } else {
            setText(word.substring(0, text.length + 1));
        }
    }
    
    useEffect(() => {
        let word = sentences[iter % sentences.length];

        if (!deleting && text.length === word.length) {
            // START DELETING
            setDeleting(true);
            setTimeout(() => {
                typewrite(true, iter);
            }, 2000);
        } else if (deleting && text === "") {
            setDeleting(false);
            setIter(iter + 1);
            setTimeout(() => {
                typewrite(false, iter + 1);
            }, 500);
        } else {
            // DO NEXT TYPE
            var delta = 200 - Math.random() * 100;
            if (deleting) delta /= 2;
            setTimeout(() => {
                typewrite(deleting, iter);
            }, delta);
        }
    }, [text])
    
    return <div className={styles.cover}>
        <div id="brickround" className={styles.bricks}></div>
        <div className={styles.covergain}>
            <p className={styles.title}><span>{text}</span>|</p>
        </div>
    </div>
}
