import * as types from '../types';

const initialState = [
    {
        title : 'banking',
        colour : "#1b4332",
        difficulty : ["Easy"],
        thoughts : ["Being someone who doesn't really have that much money, I don't really have much influence over the decisions big corporations make. But your bank does! One of the easiest ways to make a statement is to choose to bank with a company that only invests sustainably and ethically. There are plenty of banks that have chosen to divest and are good options, but there are very few that actually go as far as commiting to positive change. I personally would reccomend Bank Australia - you can read more about their responsible banking charter ", "<a=https://bankaust.com.au/responsible-banking>here", "."]
    },
    {
        title : 'investments',
        colour : "#2d6a4f",
        difficulty : ["Easy"],
        thoughts : ["Similar to choosing where you bank, consciously choosing to invest your money responsibly is a powerful way to support sustainability, and it is twofold. By divesting you are removing investment from companies that are harming the planet, and by investing, you are supporting companies that are working to care for the planet! If you are interested, I think ", "<a=https://www.australianethical.com.au/>Australian Ethical", " is a good place to start, in particular their managed funds, and if you are more of a share market kind of person, ", "<a=https://www.betashares.com.au/category/ethical-etfs/>Betashares", " has some fantastic ethical ETF options."]
    },
    {
        title : 'superannuation',
        colour : "#40916c",
        difficulty : ["Easy"],
        thoughts : ["Last thing that involves money I promise (but unfortunately money speaks the loudest in our society...). Your superannuation is another easy way to speak with your money without spending any money! Choosing a superannuation that divests away from fossil fuels and other harmful industries can be pretty powerful- after all, superannuation often constitues a much larger amount of money than peoples savings. I am with ", "<a=https://www.futuresuper.com.au/>Future Super", ", but there are plenty of options. Just pay attention to the fees involved."]
    },
    {
        title : 'eating habits',
        colour : "#52b788",
        difficulty : ["Medium"],
        thoughts : ["Changing your eating habits is an interesting one, particularly because it can be very polarising. But ultimately, if you are serious about living more sustainably, you should consider decreasing your meat intake. The meat industry takes up a ridiculously disproportionate amount of the earth's resources, so choosing to eat in a way that is less harmful to the earth likely means heading towards a more plant based diet. That being said, I don't think everyone becoming vegan is the solution (and it's never going to happen anyway). But, just be conscious, and if you do eat meat, think about sourcing it from places that use responsible practices like", "<a=https://www.climaterealityproject.org/blog/what-regenerative-agriculture>regenerative agriculture", ", using animals to improve biodiversity rather than deplete it."]
    },
    {
        title : 'compost',
        colour : "#8a5a44",
        difficulty : ["Medium"],
        thoughts : ["Composting is a bit of a tricky one because a lot of people live in situations where it is impossible to do so themselves. But essentially, we want to reduce food waste going to landfill. This is because when foodwaste goes to landfill, it decomposes differently. It creates methane, which as we know is a much more potent greenhouse gas the carbon dioxide. Composting on the other hand breaks all those lovely nutrients back down into the earth where it came from, ensuring the lifecycle of nutrients continues from the land to food and back to the land, rather dumped out into landfill and removed from the cycle. "]
    },
    {
        title : 'waste',
        colour : "#588157",
        difficulty : ["Medium"],
        thoughts : ["Quite simply, eventually we are going to have to stop using single use plastics. Until the big corporations and governments get to this point, you can do small things. For example, buy unpackaged fresh produce and food that minimises single use plastic (the more people do this, the more big corporations will realise this is selling more and lean towards it, not just because it is more sustainable, but it is financially in their interests). You can bring your own reusable bags when you go shopping, or just not get a bag when shopping (for instance at retail stores). You can bring your own small hessian bags to pick produce rather than use plastic bags. You can ensure you are recycling properly. You can use alternatives to gladwrap, like beeswax wraps. There are so many small ways you can reduce your plastic waste. Every small piece of plastic not used is one less piece that will be lying around on this earth for the next couple of hundred years."]
    },
    {
        title : 'educate yourself',
        colour : "#0b525b",
        difficulty : ["Hard"],
        thoughts : ["Most important of all, keep yourself educated on what is going on around you, and how the things you are doing has an impact on the world. There is so much information and misinformation out there, it can be really hard. The best you can do is to seek it out, practice asking questions yourself and thinking about it. This includes engaging in discussion with others, and listening with an open mind, regardless of their opinion.\n\nSome pieces that I have really appreciated recently and worth seeking out are David Attenborough's 'A life On Our Planet' (on netflix), and Charles Massy's book 'Call Of The Reed Warbler'. Seaspiracy is pretty depressing but also a good one."]
    }

];



export const sustainabilityReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_SUSTAINABILITY:
            return [...action.sustainability];
        default:
            return state;
    }
}