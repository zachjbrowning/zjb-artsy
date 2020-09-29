import * as types from "../types";


const initialState = false/*[
    {
        title : 'openbook',
        svg : '../../../public/openbook.svg',
        colour : "#F898A4",
        date : "December 2019",
        
    },
    {
        title : 'this website',
        svg : '../../../public/artbro.svg',
        colour : "#bdb2ff",
        date : "December 2019",
    },
    {
        title : 'zest',
        svg : '../../../public/zest.svg',
        colour : "#ffd166",
        date : "June 2020",
        summary : ["This is a framework I worked on developing during my term 1/2 break. My dad wanted me to build a website for him, but I didn't want to always have to check up and work on the site for him. I wanted something that was more friendly to him, but still allowed me to build the more complex aspects of the site. My solution was the Zest framework, which builds pages from JSON files that anyone could write. Check it out ", "<a=https://zachjbrowning.tech/zest/>here."],
        learning : [["Creating a frontend that makes calls to a backend to collect information"], ["Building a framework that fails gracefully, rather than crashing without showing cause for the error"], ["Getter deeper and deeper into the wonders of React.js!!"]],
        notes : [["This is by no means a finished product. I've run out of time to work on it for now but I hope to be able to come back and clean it up and make it into a more useable product."],["This project was inspired by building this website and using a json file to produce this exact page. Every time I add a project, I just edit the json file. The parser I built for that has found its way to here, letting me add html-ish stuff like ", "<a=https://zachjbrowning.tech/>links,", "<b> bold,", " and ", "<i> italics."]],
    },
    {
        title : 'reaction',
        svg : '../../../public/reaction.svg',
        colour : "#f94144",
        date : "July 2020",
        summary : ["A little web app I made using React Made this cause I was bored and wanted to play around with React a bit. Have a go at it ", "<a=https://zachjbrowning.tech/reaction/>here", ". Next time I'm bored I'll add some more minigames to it!"],
        learning : [["React, react, react"], ["Backend frontend interactions"], ["JS async function overkill"]],
        notes : [["Mostly... visit it, see for yourself and try get a high score!!"], ["I like the minimal theme on this one"]],
    },
    {
        title : 'investbot',
        svg : '../../../public/investbot.svg',
        colour : "#43aa8b",
        date : "December 2019",
        summary : ["In 2019 I made a conscious decision to start investing ethically. So I did! My new investments were great, but with one small issue - I couldn't track and look at my historical data... what a great opportunity to try out some automation! My bot logs into my account every night and takes note of the current value of each of my investments. It then saves this data and generates a graph plotting my historical data that I can view."],
        learning : [["Data manipulation and handling"], ["Webscraping (selenium)"], ["Small task automation with bash scripts"]],
        notes : [["The data manipulation was done using Python"], ["Funnily enough the webscraping part wasn't the hardest part of this little project - it was the damned x-axis labels on the graph! A whole bunch of issues around the date strings retrieved from the website being in different formats, what happens when a new investment is added, do you have a label for each month, how do you stop them from overlapping... Essentially, a really small and unimportant problem that I spent way too long solving..."], ["Unfortunately I haven't made the git repo for this project public due to privacy concerns. I enjoyed trying to solve the problem of abstracting away things like login details so they can't be seen but nonetheless I decided not to share it because I don't want my financial situation public for all to see! If you're interested get in contact and I'd be more than happy to explain the bot more."]],
    }
];*/


export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_PROJECTS:
            return [...action.projects];
        default:
            return state;
    }
}