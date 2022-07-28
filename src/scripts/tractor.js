//Define and export a function called plantSeeds
    //It should accept ther yearlyPlan as input
    //The plan is an array and contains 4 arrays representing rows in the fielf to be planted
    //How do you iterate through BOTH parent arrays and child arrays
        //As you iterate the rows of food to be planted invoke the seed function from each module
        //Then take the seed and add it to the array of plants in the field
        //import all the seeds and the field to start
//i.e. = using the year's plan and the seeds we have and plant them in the correct locations in the field

import { createAsparagus } from"./seeds/asparagus.js";
import { createCorn } from"./seeds/corn.js";
import { createPotato } from"./seeds/potato.js";
import { createSoybean } from"./seeds/soybean.js";
import { createSunflower } from"./seeds/sunflower.js";
import { createWheat } from"./seeds/wheat.js";
import { addPlant, usePlants } from "./field.js";

let plantedSeeds = usePlants()

export const plantSeeds = (yearlyPlan) => {
for (const row of yearlyPlan) {
    for (type of seedling) {
        if (type === "asparagus") {
            plantedSeeds.push(addPlant(createAsparagus()))
        }
        else if (type === "corn") {
            plantedSeeds.push(addPlant(createCorn()))
        }
        else if (type === "potato") {
            plantedSeeds.push(addPlant(createPotato()))
        }
        else if (type === "soybean") {
            plantedSeeds.push(addPlant(createSoybean()))
        }
        else if (type === "sunflower") {
            plantedSeeds.push(addPlant(createSunflower()))
        }
        else  {
            plantedSeeds.push(addPlant(createWheat()))
        }
    }
}
//return plantedSeeds 
}