import * as types from "../types";


const initialState = false/*[
    {
        title : 'dahl',
        svg : '../../../public/dahl.svg',
        colour : "#f9c74f",
        explain : 'lentil based curry type thing!',
        describe : ["Great way to get some lentils into ya. My favourite curry type thing, it's pretty tasty, hard do wrong and meal preps well for the fridge."],
        ingredients : [["1 large onion"], ["3 cloves garlics"], ["1t ginger"], ["1 bay leaf"], ["1T olive oil"], ["1 cup red lentils"], ["2t curry powder"], ["1t turmeric"], ["3 cups vegetable stock"], ["1 cup chopped sweet potato"], ["1/2 red capsicum"], ["1/2 cup coconut milk"], ["2 cups baby spinach"]],
        method : [["Dice the onion, mince garlic and grate ginger. Let them all get to know each other in some oil with the bay leaf."], ["Once everything is soft and tasty looking, throw in the spices and lentils and fry them for around 2 minutes, going ham with the stirring the whole time."], ["Chuck in the stock, then the sweet potato, capsicum and coconut milk. Cook for around 20 minutes until lentils are cooked and it has thickened up. Make sure you stir every now and again so the lentils don't stick to the bottom. Can use more stock/water if need be."], ["Mix in the baby spinach at the end."]]
    },
    {
        title : 'beans',
        svg : '../../../public/charro.svg',
        colour : "#f3722c",
        explain : 'vegetarian mexican style beans',
        describe : ["Great mince replacement. Goes really well in rice and bean burritos or nachos etc. or just generally as a mince replacement. Use whatever beans and spices you like but I would say a good amount of cumin and paprika is a good starting point. Beanswise I like a combination of black beans, red kidney beans or pinto."],
        ingredients : [["2 cans of beans"], ["3 cans of crushed tomatoes"], ["2 large onions"], ["4 cloves of garlic"], ["1 cup of shredded veggies or shopped mushies"], ["coupla teaspoons of paprika"], ["coupla teaspoons of cumin"], ["lil bit o' fresh chilli"], ["teaspoon or two of tumeric or ground coriander"], ["2T neutral oil"], ["S&P to taste"]],
        method : [["Finely dice onion and mince garlic. Sautee onion and garlic until lookin tasty"], ["Add a bit of oil then add all the spices and chilli to let them open up in the oil for a minute or two"], ["Chuck in ya beans. I like to leave some of the bean water in as well as it is quite starchy and helps to make it all come together nice and thiccc."], ["Tomatoes go in as well. Let it simmer and reduce for half an hour or so. Add any extra spices and season to taste."]]
    },
    {
        title : 'quinoa + veg',
        svg : '../../../public/quinoa.svg',
        colour : "#43aa8b",
        explain : 'roast veg and quinoa salad',
        describe : ["Not a bad healthy jobbie. Great for when you've got a bunch of random veg to use."],
        ingredients : [["whatever roastable veggies you've got (potato, onion, carrot, garlic, zuchini...)"], ["drizzle of olive oil"], ["quinoa"], ["balsamic vinegar"], ["baby spinach"], ["S&P to taste"]],
        method : [["Chop up the veggies and throw 'em on a baking tray. Drizzle with a bit of olive oil and season (I also like to season with a chilli spice rub). Chuck in the oven on around 200 degrees C"], ["Cook some quinoa. Just follow instruction on back of packet but absorption method is the way to go"], ["Once veggies are done, throw in a bowl and mix with quinoa and baby spinach. Drizzle with balsamic vinegar and EAT!"]]
    },
    {
        title : 'risotto',
        svg : '../../../public/risotto.svg',
        colour : "#118ab2",
        explain : 'roast pumpkin risotto',
        describe : ["Honestly this one is just tasty."],
        ingredients : [["2 cups arborio rice"], ["idk how much vegetable stock"], ["half a butternut pumpkin"], ["cup of chopped mushies"], ["1 large onion"], ["3 cloves garlic"], ["3t dried sage (or fresh sage if you boujee)"], ["some cheese"], ["S&P to taste"], ["2T olive oil"], ["handful of baby spinach and rocket"]],
        method : [["Dice the pumpkin, and roast until just cooked. (Alternatively, if you cannae be assed roasting, grate the pumpkin and just chuck it in raw)"], ["Dice the onion and garlic, then sautee in the oil over medium-high heat."], ["Once the onions are soft add the mushrooms then sautee. Honestly the more caramelization on these early ingredients the better (will mean your risotto is a bit more brown but eh). If you grated your pumpkin, you can chuck it in here."], ["Add the arborio rice. Let it cook dry until the edges of the rice are transparent."], ["Now comes the fun part. Add cup by cup the vege stock. To get it real good you should add the stock incremently which means you kind of have to stand and stir. Continue adding stock until the rice is just past al dente (or however you like it)."], ["Chuck in some cheese to melt through (or leave it out if you vegan). Then season with salt and pepper."], ["Take off the heat and stir through the baby spinach. There should be enough residual heat to cook it through."]]
    },
    {
        title : 'soup',
        svg : '../../../public/soup.svg',
        colour : "#ef476f",
        explain : 'roast vegetable soup',
    },
    {
        title : 'gyoza',
        svg : '../../../public/gyoza.svg',
        colour : "#bdb2ff",
        explain : 'roast pumpkin risotto',
    }
]*/;


export const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_RECIPES:
            return [...action.recipes];
        default:
            return state;
    }
}