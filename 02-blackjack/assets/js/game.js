const myModule = (() => {
  "use strict";
  let deck = [];
  const pintas = ["C", "D", "H", "S"],
    letters = ["A", "J", "Q", "K"];
  let playersPoints = [];

  //* HTML references

  const btnGetCard = document.querySelector("#btnGetCard"),
    btnStopGame = document.querySelector("#btnStopGame"),
    btnNewGame = document.querySelector("#btnNewGame");
  const playersCardsDiv = document.querySelectorAll(".cardsDiv");
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
    return _.shuffle(deck);
  };

  //* Function that starts the game.
  const startGame = (playersNumber = 1) => {
    deck = createDeck();
    playersPoints = [];
    for (let i = 0; i < playersNumber + 1; i++) {
      playersPoints.push(0);
    }
    scoreboard.forEach((elem) => (elem.innerText = 0));
    playersCardsDiv.forEach((elem) => deleteCards(elem));
    btnGetCard.disabled = false;
    btnStopGame.disabled = false;
  };

  //* Function to take a card from the deck
  const takeCard = () => {
    return deck.length === 0
      ? console.log("There are no cards available in this deck.")
      : deck.pop();
  };

  //* Extract the value from the card and return it.
  const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
  };

  //* Turn: 0 === player 1, ... last === cpu.
  const tempScoreboard = (card, turn) => {
    playersPoints[turn] += cardValue(card);
    scoreboard[turn].innerText = playersPoints[turn];
    return playersPoints[turn];
  };

  const createCard = (card, turn) => {
    const cardImg = document.createElement("img");
    cardImg.src = `assets/cartas/${card}.png`;
    cardImg.classList.add("cards");
    playersCardsDiv[turn].append(cardImg);
  };

  const findWinner = () => {
    const [playerPoints, cpuPoints] = playersPoints;
    setTimeout(() => {
      if (
        playerPoints > cpuPoints ||
        (playerPoints === 21 && cpuPoints < 21) ||
        cpuPoints > 21
      ) {
        alert("You've won!");
      } else if (playerPoints > 21 || cpuPoints > playersPoints[0]) {
        alert("You've lost!");
      } else {
        alert("It's a tie!");
      }
    }, 10);
  };

  //* CPU turn
  const cpuTurn = (minimumPoints) => {
    let cpuPoints = 0;
    let turn = playersPoints.length - 1;
    do {
      const card = takeCard();
      cpuPoints = tempScoreboard(card, turn);

      createCard(card, turn);
    } while (cpuPoints < minimumPoints && minimumPoints <= 21);
    findWinner();
  };

  const deleteCards = (container) => {
    while (container.innerHTML.length > 0) {
      container.removeChild(container.lastChild);
    }
  };

  //* Events to listen

  btnGetCard.addEventListener("click", () => {
    const card = takeCard();
    const playerPoints = tempScoreboard(card, 0);

    createCard(card, 0);

    playerPoints > 21
      ? (btnGetCard.disabled = true)
      : (btnGetCard.disabled = false);
  });

  btnStopGame.addEventListener("click", () => {
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;
    cpuTurn(playersPoints[0]);
  });

  btnNewGame.addEventListener("click", () => {
    console.clear();
    startGame();
  });

  //* Exporting functions from my module.
  return {
    newGame: startGame,
  };
})();
