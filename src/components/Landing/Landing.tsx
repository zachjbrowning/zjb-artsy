import React, { useEffect, useState } from 'react'
import './Landing.scss';
import bricks from "../../constants/Static/bricks.svg";
import artbro from "../../constants/Static/artbro.svg";

export default function Landing() {
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [iter, setIter] = useState(0);
    const sentences = ["Hi, I'm Zach", "What's poppin?"]
    
    function typewrite(doDelete: boolean, isIter: number) {
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
    
    function scroll() {
        document.getElementById("nav").scrollIntoView({behavior : 'smooth'});
    }

    return <div className={"cover"}>
        <div id="brickround" className={"bricks"} ><img src={bricks} /></div>
        <div className={"artbro"} ><img src={artbro} /></div>
        <div className={"covergain"}>
            <p className={"title"}><span>{text}</span>|</p>
        </div>
        <div className={"arrow"}>
            <svg onClick={scroll} x="0px" y="0px" viewBox="0 0 8192 8192">
                <polygon points="4096,5553.7 458.5,2643.7 707.2,2336.7 4096,5047.6 7484.8,2337 7733.5,2643.7 "/>
            </svg>
        </div>
    </div>
}
