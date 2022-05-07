import { usePottery } from './PotteryCatalog.js'

export const potteryList = () => {
    let htmlPot = ''
    for (const pot of usePottery()) {
        htmlPot += `<section class="pottery" id="pottery--${pot.id}">
        <h2 class="pottery__shape">${pot.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${pot.weight} grams and is ${pot.height} cm in height
        </div>
        <div class="pottery__price">
            Price is ${pot.price}
        </div>
    </section>`
    }
    return htmlPot
}
