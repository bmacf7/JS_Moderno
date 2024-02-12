//* 2C = Two of Clubs
//* 2S = Two of Spades
//* 2H = Two of Hearts
//* 2D = Two of Diamonds

let deck = [];
const pintas = ['C', 'D', 'H', 'S'];
const letters = ['A', 'J', 'Q', 'K'];
let playerHand = [];
let playerPoints = 0, cpuPoints = 0;

//* HTML references

const btnGetCard = document.querySelector('#btnGetCard');
let playerScoreboard = document.querySelectorAll('small');

const createDeck = () => {
    //* Create a new set of card of each
    for (const pinta of pintas) {
        //* Genero todos los números válidos
        for (let i = 2; i < 11; i++) {
            deck.push(i + pinta);
        }
        for (let letter of letters) {
            deck.push( letter + pinta);
        }
    }
    return deck;
}

createDeck();

deck = _.shuffle(deck);
console.log(deck);

//* Function to take a card from the deck

const takeCard = () => {
    if (deck.length === 0) {
        throw 'There are no cards available in this deck.';
    }
    return deck.pop();
}

const cardValue = (card) => {
    //* Extract the value from the card and return it.
    const value = card.substring(0, card.length-1);
    return (isNaN(value)) ? 
            (value === 'A') ? 11 : 10 
            : value * 1;
}

//* Events to listen

btnGetCard.addEventListener('click', () => {
    const card = takeCard();
    playerPoints += cardValue(card);
    playerScoreboard[0].innerText = playerPoints;
});