import React from 'react'
import styles from "./Base.module.scss";
import { useEffect, useState } from 'react';

export default function Base() {
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [iter, setIter] = useState(0);
    const sentences = ["Hello there, I'm Zach", "I hope you like my website!!"]

    /*function typewrite(deleting, iter) {
        let word = sentences[iter % sentences.length];
        let current = text;
        // either deleting or adding
        if (deleting) {
            setText(text.substring(0, text.length - 1));
        } else {
            setText(word.substring(0, current.length + 1));
        }
        
        setText("WTF GOIN ON")
        if (!deleting && text.length === word.length) {
            // START DELETING
            setTimeout(() => {
                typewrite(true, iter);
            }, 2000);
        } else if (deleting && text === "") {
            // START TPYING
            setTimeout(() => {
                typewrite(false, iter + 1)
            }, 500);
        } else {
            // DO NEXT TYPE
            var delta = 200 - Math.random() * 100;
            if (deleting) delta /= 2;
            setTimeout(() => {
                typewrite(deleting, iter)
            }, delta);
        }
            

    }*/

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

    return <>
        <div className={styles.cover}>
            <div id="brickround" className={styles.bricks}></div>
            <div className={styles.covergain}>
                <p>{text}|</p>
            </div>
            
        </div>

        <div className={styles.cover}></div>
    </>
}

