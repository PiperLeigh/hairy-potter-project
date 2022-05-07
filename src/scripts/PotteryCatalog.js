//Define variable with value of empty array to store pottery to be sold
let potteryForSale = []

//Define and export function toSellOfNotToSell accepting pottery object as parameter
export const toSellOrNotToSell = (potteryObject) => {
    //If the weight of the piece of pottery is greater than, or equal to, 6 
    if (potteryObject.weight >= 6) {
        //then the function must add a price property with a value of 40.
        potteryObject.price = 40
        //If the weight of the piece of pottery is less than 6 
    } else if (potteryObject.weight <= 6) {
        //then the function must add a price property with a value of 20.
        potteryObject.price = 20
    }
    //If the pottery is not cracked
    if (potteryObject.cracked === false) {
        //add the object to the module-level array of items to be sold.
        potteryForSale.push(potteryObject)
    }
}

//Define and export a function named usePottery returns a copy of the array of items to be sold. 
export const usePottery = () => {
    //Recall which array method creates a copy of the array.
    return potteryForSale.map(pot => ({ ...pot }))
}

