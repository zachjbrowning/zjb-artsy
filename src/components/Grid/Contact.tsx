import React from 'react';

import email from "../../constants/Contact/email.svg"
import github from "../../constants/Contact/github.svg"
import linkedin from "../../constants/Contact/linkedin.svg"
import resume from "../../constants/Contact/resume.svg"
import Grid from './Grid';
import Tile from './Tile';
import CV from "../../public/ZJB-CV.pdf";

export default function Recipes() {

    return <Grid>
       {
           recipes.map((v, i) => <Tile key={i} tile={v} role={'contact'} />)
       } 
    </Grid>
}


const recipes = [
    {
        title : 'github',
        svg : github,
        colour : "#8d99ae",
        alternate : () => {
            window.open("https://github.com/zachjbrowning");
        }
    },
    {
        title : 'linkedin',
        svg : linkedin,
        colour : "#118ab2",
        alternate : () => {
            window.open("https://www.linkedin.com/in/zachary-browning-2b7a01193/");
        }
    },
    {
        title : 'email',
        svg : email,
        colour : "#ef476f",
        alternate : (e: any): void => {
            const myEmail = "zachjbrowning@outlook.com";
            if (e.target.innerHTML !== myEmail) {
                e.target.innerHTML = "zachjbrowning@outlook.com";
            }
        }
    },
    {
        title : 'resume',
        svg : resume,
        colour : "#57cc99",
        alternate : () => {
            window.open("https://zachjbrowning.com/ZJB-CV.pdf");
        }
    }
]