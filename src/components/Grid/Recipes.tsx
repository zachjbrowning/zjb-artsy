import React from 'react';

import tart from "../../constants/Recipes/tart.svg"
import pie from "../../constants/Recipes/pie.svg"
import dahl from "../../constants/Recipes/dahl.svg"
import charro from "../../constants/Recipes/charro.svg"
import risotto from "../../constants/Recipes/risotto.svg"
import soup from "../../constants/Recipes/soup.svg"
import quinoa from "../../constants/Recipes/quinoa.svg"
import gyoza from "../../constants/Recipes/gyoza.svg"
import Grid from './Grid';
import Tile from './Tile';

export default function Recipes() {

    return <Grid>
       {
           recipes.map((v, i) => <Tile key={i} tile={v} role={'recipes'} />)
       } 
    </Grid>
}


const recipes = [
    {
        title : "peach + raspberry tart",
        svg : tart,
        colour : "#52b788",
        explain : "easy tart that you can whip up hella quick and is pretty",
        describe : ["This is my favourite dessert from when I was a kid. Quick to make, and you can just use tinned peaches and frozen raspberries so its even easier."],
        ingredients : [["125 salted butter, softened"], ["1 cup sugar"], ["1t vanilla"], ["2 eggs"], ["1.5 cups SRF"], ["2 peaches cut as wedges"], ["150g raspberries"], ["2T icing sugar if you extra"]],
        method : [["Set oven to 160C and line a 22cm round cake tin with baking paper"], ["Cream the butter, sugar and vanilla together. Have fun using a fork if you don't have a stand mixer..."], ["Add eggs and beat well"], ["Fold in the flour and spoon into cake tin"], ["Top it with the peaches and raspberries"], ["Bake till done (usually about an hour"], ["Sprinkle with icing sugar on top if you fancy"]]
    },
    {
        title : "mushroom + leek pie",
        svg : pie,
        colour : "#ba181b",
        explain : "tasty pies that freeze well",
        describe : ["My new favourite meal prep... lots of mushroom, very tasty and can just pop in the oven from the freezer whenever I want one! Adimttedly does have more dairy in it than I'd like but hey"],
        ingredients : [["0.5kg ya fave mushrooms (doesn't have to be one type)"], ["1 large leek"], ["2T olive oil"], ["3 garlic cloves minced"], ["100g sour cream"], ["2t thyme dried or fresh"], ["s & p to taste"], ["1t lemon juice"], ["1t worcestershire (or really any flavouring you want, I did bbq sauce and soy sauce last time)"], ["bit of sriracha"], ["handful of grated parmesan"], ["3 sheets puff pastry"], ["150g  high moisture content cheese"]],
        method : [["Go bonkers dicing all the mushrooms and the leeks"], ["Sautee the leek and garlic over medium heat till soft"], ["Add all the mushies and sautee until cooked out properly"], ["Throw in sour cream, thyme and pepper and cook till it thickens, about three minutes"], ["Let the mixture cool in a bowl for a bit, before adding the lemon, sriracha, parmesan and worster. Adjust to taste."], ["From here, it's really just contstruction. I don't have a pie maker so I preheat oven to ~220C and then cut my puff pastry sheets in half so I can make little hand pies/pasties. Chuck some mixture off center of your pastry halves, and sprinkle some cheese on top, then them fold them over to make ya little pie pocket thingy"], ["Crimp the edges with a fork and poke some holes in the top. Adding a bit of egg wash before you chuck them in the oven will also help them look nice and shiny"]]

    },
    {
        title : "dahl",
        svg : dahl,
        colour : "#f9c74f",
        explain : "lentil based curry type thing",
        describe : ["My fave way to get lentils into ya. Shout out to my dearest mother for this absolute ripper of a dinner. Nostalgia definitely not coming in to play here."],
        ingredients : [["1 large onion"], ["3 cloves garlics"], ["1t ginger"], ["1 bay leaf"], ["1T olive oil"], ["1 cup red lentils"], ["2t curry powder"], ["1t turmeric"], ["3 cups vegetable stock"], ["1 cup chopped sweet potato"], ["1/2 red capsicum"], ["1/2 cup coconut milk"], ["2 cups baby spinach"]],
        method : [["Dice the onion, mince garlic and grate ginger. Let them all get to know each other in some oil with the bay leaf."], ["Once everything is soft and tasty looking, throw in the spices and lentils and fry them for around 2 minutes, going ham with the stirring the whole time."], ["Chuck in the stock, then the sweet potato, capsicum and coconut milk. Cook for around 20 minutes until lentils are cooked and it has thickened up. Make sure you stir every now and again so the lentils don't stick to the bottom. Can use more stock/water if need be."], ["Mix in the baby spinach at the end."]]
    },
    {
        title : "beans",
        svg : charro,
        colour : "#f3722c",
        explain : "vegetarian mexican style beans",
        describe : ["Great mince replacement. Goes really well in rice and bean burritos or nachos etc. or just generally as a mince replacement. Use whatever beans and spices you like but I would say a good amount of cumin and paprika is a good starting point. Beanswise I like a combination of black beans, red kidney beans or pinto. Chucking in some veg can also help thicken it up, like grated carrot or zuchinni or some finely diced mushies."],
        ingredients : [["3 cans of beans"], ["2 cans of crushed tomatoes"], ["2 large onions"], ["4 cloves of garlic"], ["1 cup of shredded veggies or chopped mushies"], ["coupla teaspoons of paprika"], ["coupla teaspoons of cumin"], ["lil bit o' fresh chilli"], ["teaspoon or two of tumeric or ground coriander"], ["2T neutral oil"], ["S&P to taste"]],
        method : [["Finely dice onion and mince garlic. Sautee onion and garlic until lookin tasty, then add your veg and sautee that too."], ["Add a bit of oil then add all the spices and chilli to let them open up in the oil for a minute or two"], ["Chuck in ya beans. I like to leave some of the bean water in as well as it is quite starchy and helps to make it all come together nice and thiccc."], ["Tomatoes go in as well. Let it simmer and reduce for half an hour or so. Add any extra spices and season to taste."]]
    },
    {
        title : "risotto",
        svg : risotto,
        colour : "#118ab2",
        explain : "roast pumpkin risotto",
        describe : ["Honestly this one is just tasty."],
        ingredients : [["2 cups arborio rice"], ["idk how much vegetable stock"], ["half a butternut pumpkin"], ["cup of chopped mushies"], ["1 large onion"], ["3 cloves garlic"], ["3t dried sage (or fresh sage if you boujee)"], ["some cheese"], ["S&P to taste"], ["2T olive oil"], ["handful of baby spinach and rocket"]],
        method : [["Dice the pumpkin, and roast until just cooked. (Alternatively, if you cannae be assed roasting, grate the pumpkin and just chuck it in raw)"], ["Dice the onion and garlic, then sautee in the oil over medium-high heat."], ["Once the onions are soft add the mushrooms then sautee. Honestly the more caramelization on these early ingredients the better (will mean your risotto is a bit more brown but eh). If you grated your pumpkin, you can chuck it in here."], ["Add the arborio rice. Let it cook dry until the edges of the rice are transparent."], ["Now comes the fun part. Add cup by cup the vege stock. To get it real good you should add the stock incremently which means you kind of have to stand and stir. Continue adding stock until the rice is just past al dente (or however you like it)."], ["Chuck in the pumpkin and some cheese to melt through. Then season with salt and pepper."], ["Take off the heat and stir through the baby spinach. There should be enough residual heat to cook it through."]]
    },
    {
        title : "soup",
        svg : soup,
        colour : "#ef476f",
        explain : "roast veg soup",
        describe : ["Great way to use up any veggies that need eating. Nice in winter."],
        ingredients : [["whatever roastable veggies you've got (potato, onion, carrot, garlic, zuchini...)"], ["vegetable stock"], ["salt and pepper"]],
        method : [["Chop up the veggies and throw 'em on a baking tray. Drizzle with a bit of olive oil and season. Chuck in the oven on around 200 degrees C"], ["Once the veggies are close to cooked through and are nice and caramelized, throw them in a pot and cover with vegetable stock."], ["Once you're satisfied it's all cooked through, whip out the stick blender and go bonkers on it. Season to taste and you're done."], ["Good vege combos : potato and leek (maybe sautee leek instead of roasting), capsicum, sweet potato and onion, pumpkin and corn..."]]
    },
    {
        title : "gyoza",
        svg : gyoza,
        colour : "#bdb2ff",
        explain : "vege dumplings",
        describe : ["Good op if you be feeling a tad fancy"],
        ingredients : [["3T neutral oil for frying, 4T for mixture"], ["1T minced ginger"], ["1 large onion"], ["2 cups finely chopped mushies"], ["1.5 cups finely shredded cabbage"], ["1.5 cups finely shredded carrot"], ["1 cup finly chopped chives"], ["S&P to taste"], ["2t sesame oil"], ["3T Shaoxing wine (chinese cooking wine)"], ["2T soy sauce"], ["1t sugar (can leave out)"], ["dumpling wrappers"]],
        method : [["Chop up all your ingredients. Getting them nice and finely chopped will lead to a much more wrappable mixture."], ["Stir-fry the ginger over medium-high heat in the oil until fragrant (maybe 30 seconds), then add the onion to cook till translucent."], ["Add the mushies and stir-fry for a few minutes, until all the liquid has been released and cooked off from the mushrooms."], ["In gose the cabbage and carrot. Stir-fry for another 2 minutes or so, until liquid has again been released and cooked off. Once this is done take off heat and transfer to a mixing bowl to cool."], ["Add to the mixture all the other ingredients (minus the dumpling wrappers you numpty). Mix through until homogenous."], ["If you're white like me, go watch you're favourite how to wrap dumplings tutorial and go nuts."], ["Cook them however you like then eat! My favourite is pan fry them. Put just enough oil to cover the bottom of the pan and heat up. Pop in the dumplings and cook until there is a nice crisp on the bottom. I like to then flip them over before adding a bit of water (maybe half a cup) to let the steam and cook through. Wait till the water is evaporated and they crisp up again before taking them out."]]
    },
    {
        title : "shroom strogg",
        svg : null,
        colour : "#f9c74f",
        explain : "we love mushrooms",
        describe : ["Nothing to say except mushrooms (and a good excuse to buy whisky). Shoutout to ma brother for this bad boiiii (that's right brother goals we share recipes)"],
        ingredients : [["400g mixed mushies"], ["a red onion"], ["2 pickles"], ["1T of capers"], ["2 cloves garlic"], ["50ml whisky"], ["smoked pap"], ["80g sour cream (crème fraîche if you boujee)"], ["olive oil"], ["parsley"]],
        method : [["Chuck mushies in a pan on medium high ", "<i>without", " oil for about 5 minutes"], ["Season, add chopped red onion and some oil"], ["finely dice the pickles and throw them in along with the capers and a solid pinch of smoked paprika"], ["in goes the whisky and flambé away if you're feeling like an absolute champion"], ["once you're happy chuck the creamy shtuff in as well as the rest of the parsely and bring up to a boil"], ["Sprinkle with icing sugar on top if you fancy"], ["badabing badaboom. I hope you read ahead cause you gon definitely need some rice too."]]
    },
    {
        title : "veg tart",
        svg : null,
        colour : "#ba181b",
        explain : "pretty fun (and pretty) way to eat roast veg - on a piiiza. Very easy too.",
        describe : ["Roast some veg. Shove some pastry on top. Thats about it..."],
        ingredients : [["enough puff pastry to cover a tray"], ["some olive oil"], ["balsamic, rocket and some cheese (fetta? buratta?) to dress"], ["olive oil"], ["oregano"], ["some veg to roast, pretty much anything but the more colourful the better - for example:"], ["a red onion"], ["a zuchinni"], ["punnet of cherry tomatoes"], ["a yellow capsicum"]],
        method : [["Set oven to 180C"], ["Chop all your veg. Not too big but not to small. Just right ok?"], ["Veg -> tray, along with some oil, oregano and salt and pepper"], ["roast for a bit less than an hour, tossing halfway"], ["toss the veg again, then place the puff pastry into the tray over the veg. Push the pastry down the sides, like you're tucking the veg into bed (good analogy I know)"], ["Back in the oven for another half hour"], ["whip her out, turn it upside down onto a board and top with ya balsamic rocket and cheeeese!!"]]
    },
    {
        title : "quinoa + veg",
        svg : quinoa,
        colour : "#43aa8b",
        explain : "roast veg and quinoa salad",
        describe : ["Not a bad healthy jobbie. Great for when you've got a bunch of random veg to use."],
        ingredients : [["whatever roastable veggies you've got (potato, onion, carrot, garlic, zuchini...)"], ["drizzle of olive oil"], ["quinoa"], ["balsamic vinegar"], ["baby spinach"], ["S&P to taste"]],
        method : [["Chop up the veggies and throw 'em on a baking tray. Drizzle with a bit of olive oil and season (I also like to season with a chilli spice rub). Chuck in the oven on around 200 degrees C"], ["Cook some quinoa. Just follow instruction on back of packet but absorption method is the way to go"], ["Once veggies are done, throw in a bowl and mix with quinoa and baby spinach. Drizzle with balsamic vinegar and EAT!"]]
    }
]