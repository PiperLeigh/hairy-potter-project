// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { usePottery } from './PotteryCatalog.js'
import { potteryList } from './PotteryList.js'


// Make 5 pieces of pottery at the wheel
const mug = makePottery('mug', 2, 4)
const vase = makePottery('vase', .5, 2)
const plate = makePottery('plate', 3, 1)
const planter = makePottery('planter', 5, 8)
const ashtray = makePottery('ashtray', 2, 2)

//Check work in dev tool console
console.log(mug, vase, plate, planter, ashtray);


// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2200)
const firedVase = firePottery(vase, 2200)
const firedPlate = firePottery(plate, 2300)
const firedPlanter = firePottery(planter, 2200)
const firedAshtray = firePottery(ashtray, 2200)

//Check work in dev tool console
console.log(firedMug, firedVase, firedPlate, firedPlanter, firedAshtray);

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedPlanter)
toSellOrNotToSell(firedAshtray)

console.log(usePottery())
console.log(potteryList())

// Invoke the component function that renders the HTML list
const parentHTMLElement = document.querySelector(".potteryList")

parentHTMLElement.innerHTML = potteryList(usePottery())