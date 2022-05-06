//Define variable to have calue of primary key
let primary = 1

//Define and export makePottery function which accepts parameters of shape, weight, height 
//and sets an id 
export const makePottery = (shape,weight,height) => {
    let pot = {}
        pot.shape = shape,
        pot.weight = weight,
        pot.height = height,
        pot.id = primary++
    return pot
}
