console.log("Welcome to the main module")
//import all seeds here
import { createPlan } from "/plan.js"
import { createAsparagus } from"./seeds/asparagus.js"
import { createCorn } from"./seeds/corn.js"
import { createPotato } from"./seeds/potato.js"
import { createSoybean } from"./seeds/soybean.js"
import { createSunflower } from"./seeds/sunflower.js"
import { createWheat } from"./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
//Import the below function to main.js and invoke it store the value "plan" in the variable "yearlyPlan"
const yearlyPlan = createPlan()
//console.log(yearlyPlan)


const asparagusSeed = createAsparagus()
console.log(asparagusSeed)
const cornSeeds = createCorn()
// console.log(cornSeedling)
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
//Add the plants planted in usePlants here and store it in a variable
let plantedPlants = usePlants()
plantSeeds(yearlyPlan)
let plantFoodReadytoSell = harvestPlants(plantedPlants)

