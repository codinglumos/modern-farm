// import { createAsparagus } from "./seeds/asparagus.js"
// import { createCorn } from "./seeds/corn.js"
// import { createPotato } from "./seeds/potato.js"
// import { createSoybean } from "./seeds/soybean.js"
// import { createSunflower } from "./seeds/sunflower.js"
// import { createWheat } from "./seeds/wheat.js"
let growingPlantsNfield = []

export const addPlant = () => {
    //push all seeds into the growingPlants array above (corn has two objects in the array- split them)
        //const allSeeds = [createAsparagus, createCorn, createPotato, createSoybean, createSunflower, createWheat]
    if (Array.isArray(seedObject)) {
        let splitCorn = {
            type: corn,
            height: 180,
            output: 6
        }
        growingPlantsNfield.push(splitCorn)
        growingPlantsNfield.push(splitCorn)
    }
    // for (seedlings of allSeeds) {
    //     growingPlantsNfield.push()
    // }
  else {
    growingPlantsNfield.push(seedlingsObject)
  }
    //return growingPlantsNfield
}
//console.log()

export const usePlants = () => {
let fieldOfplantsCopy = [...growingPlantsNfield]
    return  fieldOfplantsCopy
}