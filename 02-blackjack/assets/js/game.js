//* 2C = Two of Clubs
//* 2S = Two of Spades
//* 2H = Two of Hearts
//* 2D = Two of Diamonds

let deck = [];
const pintas = ["C", "D", "H", "S"];
const letters = ["A", "J", "Q", "K"];
let playerHand = [];
let playerPoints = 0,
  cpuPoints = 0;

//* HTML references

const btnGetCard = document.querySelector("#btnGetCard");
const btnStopGame = document.querySelector("#btnStopGame");
const btnNewGame = document.querySelector("#btnNewGame");
const playerCardsContainer = document.querySelector("#player-cards");
const cpuCardsContainer = document.querySelector("#cpu-cards");
let scoreboard = document.querySelectorAll("small");

const createDeck = () => {
  //* Create a new set of card of each
  for (const pinta of pintas) {
    //* Genero todos los números válidos
    for (let i = 2; i < 11; i++) {
      deck.push(i + pinta);
    }
    for (let letter of letters) {
      deck.push(letter + pinta);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};

createDeck();
console.log(deck);

//* Function to take a card from the deck

const takeCard = () => {
  if (deck.length === 0) {
    throw "There are no cards available in this deck.";
  }
  return deck.pop();
};

const cardValue = (card) => {
  //* Extract the value from the card and return it.
  const value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};

//* CPU turn
const cpuTurn = (minimumPoints) => {
  let cpuPoints = 0;
  do {
    const card = takeCard();
    cpuPoints += cardValue(card);
    scoreboard[1].innerText = cpuPoints;

    const cardImg = document.createElement("img");
    cardImg.src = `assets/cartas/${card}.png`;
    cardImg.classList.add("cards");
    cpuCardsContainer.append(cardImg);
    if (minimumPoints > 21) {
      break;
    }
  } while (cpuPoints < minimumPoints && minimumPoints <= 21);

  setTimeout(() => {
    if (
      playerPoints > cpuPoints ||
      (playerPoints === 21 && cpuPoints < 21) ||
      cpuPoints > 21
    ) {
      alert("You've won!");
    } else if (playerPoints > 21 || cpuPoints > playerPoints) {
      alert("You've lost!");
    } else {
      alert("It's a tie!");
    }
  }, 10);
};

const deleteCards = (container) => {
  while (container.innerHTML.length > 0) {
    container.removeChild(container.lastChild);
  }
};

//* Events to listen

btnGetCard.addEventListener("click", () => {
  const card = takeCard();
  playerPoints += cardValue(card);
  scoreboard[0].innerText = playerPoints;

  const cardImg = document.createElement("img");
  cardImg.src = `assets/cartas/${card}.png`;
  cardImg.classList.add("cards");
  playerCardsContainer.append(cardImg);

  playerPoints > 21
    ? (btnGetCard.disabled = true)
    : (btnGetCard.disabled = false);
});

btnStopGame.addEventListener("click", () => {
  btnGetCard.disabled = true;
  btnStopGame.disabled = true;
  cpuTurn(playerPoints);
});

btnNewGame.addEventListener("click", () => {
  console.clear();
  deck = [];
  deck = createDeck();
  scoreboard[0].innerText = 0;
  scoreboard[1].innerText = 0;
  playerPoints = 0;
  cpuPoints = 0;
  deleteCards(playerCardsContainer);
  deleteCards(cpuCardsContainer);
  btnGetCard.disabled = false;
  btnStopGame.disabled = false;
});
