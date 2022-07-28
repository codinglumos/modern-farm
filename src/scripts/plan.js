//This is reposonsible for defining 3 rows of crops to be planted
//Each row has 6 plots of land
//Each plot has a randomly assigned one of the below food types to grow

const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

//Import the below function to main.js and invoke it store the value "plan" in the variable "yearlyPlan"
export const createPlan = () => {
    const plan = []

    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan
}




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

