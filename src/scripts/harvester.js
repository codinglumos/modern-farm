//Define and export a function entitled harvestPlants
    //it must accept the plants array as input
    //it will return an array of seedObjects- push the outputs into the new array?
    //iterate the array of growing plants and on EACH plant get the value of the "output" property
    //Add that meany of the plantObjects to the array that is returned
    //REMEMBER Corn is the exception only half of the corn output will be returned in the array


export const harvestPlants = (growingPlantsNfield) => {
    seedsHarvested = []
    for (plants of growingPlantsNfield) {
        if (seedling.type === "corn") {
            //cornSeedling.output = cornSeedling.output / 2
            seedsHarvested.push(cornSeedling.output / 2)
        }
        else if (seedling.type === "asparagus") {
            seedsHarvested.push(asparagusSeedling.output)
        }
        else if (seedling.type === "potato") {
            seedsHarvested.push(potatoSeedling.output)
        }
        else if (seedling.type === "soybean") {
            seedsHarvested.push(soybeanSeedling.output)
        }
        else if (seedling.type === "sunflower") {
            seedsHarvested.push(sunflowerSeedling.output)
        }
        else  {
            seedsHarvested.push(wheatSeedling.output)
        }
return seedsHarvested
    }
}
