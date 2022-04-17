let firstCard = 11
let secondCard = 12
let sum = firstCard + secondCard

if(sum < 21){
    console.log('Do you want to draw another card?')
} else if (sum === 21) {
    console.log('Blackjack!')
} else {
    console.log('Youre out of the game')
}