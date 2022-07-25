import React, { ReactNode } from 'react';

import './Section.scss';

export type SectionProps = {
    title: string;
    icon: ReactNode;
    points: Array<string>;
    time: string;
};

export const Section = ({title, icon, points, time, isFirst, isLast}: SectionProps & {isFirst?: boolean, isLast?: boolean}) => {

    return <article className={"expsection"}>
        <div className="side">
            <div className={"separator" + (isFirst ? " hide" : "")}/>
            <div className={"separator" + (isLast ? " hide" : "")}/>
            <svg className="coicle" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" />
            </svg>
        </div>
        <div className="item">
            <h3>{title}</h3>
            <p>{time}</p>
            <ul>
                {points.map((v,i) => <li key={i}>{v}</li>)}
            </ul>
        </div>
    </article>
}
