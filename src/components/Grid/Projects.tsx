import React from 'react';

import artbro from "../../constants/Projects/artbro.svg"
import investbot from "../../constants/Projects/investbot.svg"
import openbook from "../../constants/Projects/openbook.svg"
import reaction from "../../constants/Projects/reaction.svg"
import zest from "../../constants/Projects/zest.svg"
import Grid from './Grid';
import Tile from './Tile';

export default function Recipes() {

    return <Grid>
       {
           recipes.map((v, i) => <Tile key={i} tile={v} role={'projects'} />)
       } 
    </Grid>
}


const recipes = [
    {
        "title" : "this website",
        "svg" : artbro,
        "colour" : "#bdb2ff",
        "date" : "September 2020",
        "summary" : ["The continual development of this website kind of tells the tale of my own evolution as a developer. I first made it in January 2020, using Django with pure HTML, CSS and some injected JS. Iteration two moved on to React, but still had quite an outdated, monochromatic feel to it. This website is iteration three! It was made using my React app boilerplate. I'm quite happy with how it turned out, it is a bit of a return to simplicity but I like it!"],
        "learning" : [["Making a more textured, elegant interface"], ["playing around with svg's, all custom made in Adobe Illustrator"], ["A bit of a consolidation of my growth and learning over the past year, to produce a very simple but sophisticated webpage!"]],
        "notes" : [["The two previous websites exist in an older repo, which you can see ", "<a=https://github.com/zachjbrowning/zjbsite>here", "."]]
    },
    {
        "title" : "openbook",
        "svg" : openbook,
        "colour" : "#f898a4",
        "date" : "September 2020",
        "summary" : ["Hate extensive note taking 😤😤? Sick of online open book exams with way too much content (thanks coronavirus😠😠🦠🦠)?? The solution: Openbook 📖. Openbook is a simple webapp that organises and stores your notes for you, with the capacity to organise and search through your notes by note titles, keywords, or the content itself. Exam mode provides a simple, uncluttered interface to quickly find your relevant notes, rather than wasting precious time thumbing through reams of unorganised notes🥰🥰!!"],
        "learning" : [["A fully functional API utilising the REST framework"], ["Doing a proper full stack, with django as the backend and react as the frontend"], ["I tried to be a little bit more elegant with the styling, using react spring in some places to aid the animations."]],
        "notes" : [["This is actually a little tool I initially created to help me with an exam. I then decided it was a concept that might actually be useful, so I turned it into a website!"], ["I've taken the website down but you can still see the repository from my github."]]
    },
    {
        "title" : "reaction",
        "svg" : reaction,
        "colour" : "#f94144",
        "date" : "July 2020",
        "summary" : ["A little web app I made using React Made this cause I was bored and wanted to play around with React a bit.. Next time I'm bored I'll add some more minigames to it!"],
        "learning" : [["React, react, react"], ["Backend frontend interactions"], ["JS async function overkill"]],
        "notes" : [["I like the minimal theme on this one"]]
    },
    {
        "title" : "zest",
        "svg" : zest,
        "colour" : "#ffd166",
        "date" : "June 2020",
        "summary" : ["This is a framework I worked on developing during my term 1/2 break. My dad wanted me to build a website for him, but I didn't want to always have to check up and work on the site for him. I wanted something that was more friendly to him, but still allowed me to build the more complex aspects of the site. My solution was the Zest framework, which builds pages from JSON files that anyone could write. I've taken the site down but you can still see it from the github repository."],
        "learning" : [["Creating a frontend that makes calls to a backend to collect information"], ["Building a framework that fails gracefully, rather than crashing without showing cause for the error"], ["Getter deeper and deeper into the wonders of React.js!!"]],
        "notes" : [["This is by no means a finished product. I've run out of time to work on it for now but I hope to be able to come back and clean it up and make it into a more useable product."],["This project was inspired by building this website and using a json file to produce this exact page. Every time I add a project, I just edit the json file. The parser I built for that has found its way to here, letting me add html-ish stuff like ", "<a=https://zachjbrowning.com/>links,", "<b> bold,", " and ", "<i> italics."]]
    },
    {
        "title" : "investbot",
        "svg" : investbot,
        "colour" : "#43aa8b",
        "date" : "December 2019",
        "summary" : ["In 2019 I made a conscious decision to start investing ethically. So I did! My new investments were great, but with one small issue - I couldn't track and look at my historical data... what a great opportunity to try out some automation! My bot logs into my account every night and takes note of the current value of each of my investments. It then saves this data and generates a graph plotting my historical data that I can view."],
        "learning" : [["Data manipulation and handling"], ["Webscraping (selenium)"], ["Small task automation with bash scripts"]],
        "notes" : [["The data manipulation was done using Python"], ["Funnily enough the webscraping part wasn't the hardest part of this little project - it was the damned x-axis labels on the graph! A whole bunch of issues around the date strings retrieved from the website being in different formats, what happens when a new investment is added, do you have a label for each month, how do you stop them from overlapping... Essentially, a really small and unimportant problem that I spent way too long solving..."], ["Unfortunately I haven't made the git repo for this project public due to privacy concerns. I enjoyed trying to solve the problem of abstracting away things like login details so they can't be seen but nonetheless I decided not to share it because I don't want my financial situation public for all to see! If you're interested get in contact and I'd be more than happy to explain the bot more."]]
    }
]