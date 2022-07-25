import React from 'react';

import './Experience.scss';
import { Section, SectionProps } from './Section';

type ExperienceProps = {};


const experiences: Array<SectionProps> = [
    {
        title: "Became an AWS certified Solutions Architect",
        time: "2021",
        points: [
            "Associate level"
        ],
        icon: <></>
    },
    {
        title: "Became a Graduate Engineer at Xero",
        time: "2021",
        points: [
        ],
        icon: <></>
    },
    {
        title: "Graduated from UNSW",
        time: "2021",
        points: [
            "Bachelor of Computer Science",
            "Deans Honour List 2019",
            "WAM of 88"
        ],
        icon: <></>
    },
    {
        title: "Tutored Computer Science",
        time: "2018-2020",
        points: [
            "Marked work, ran tutorials and labs for computer science subjects at UNSW",
            "Tutored 'ENGG1811 Computing for Engineers' and 'COMP2521 Data Structures and Algorithms'",
            "Invigilated exams for a wide range of computer science courses"
        ],
        icon: <></>
    },
    {
        title: "Graduated from Radford College",
        time: "2017",
        points: [
            "ATAR of 99.35",
            "School Captain",
            "Dux of Phsyics, Specialist Mathematics"
        ],
        icon: <></>
    }
]



export const Experience = ({}: ExperienceProps) => {

    return <div className={"exp"}>
        <p style={{fontSize: "1.2rem"}}>
            As you can tell, I'm still very early on in my journey. So much more ahead of me to do and learn! He's some of the things I've done so far.
        </p>

        {experiences.map((e,i) => <Section isFirst={i === 0} isLast={i === experiences.length - 1} key={i} {...e} />)}
    </div>
}
