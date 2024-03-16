import _ from 'underscore';
import { tempScoreboard, getCard, createDeck, cpuTurn, createCard } from './usecases/index';

const myModule = (() => {
  "use strict";
  const pintas        = ["C", "D", "H", "S"],
        letters       = ["A", "J", "Q", "K"];
  let   playersPoints = [];

  //* HTML references

  const btnGetCard      = document.querySelector("#btnGetCard"),
        btnStopGame     = document.querySelector("#btnStopGame"),
        btnNewGame      = document.querySelector("#btnNewGame");
  const playersCardsDiv = document.querySelectorAll(".cardsDiv");
  let   scoreboard      = document.querySelectorAll("small");

  let deck = createDeck(pintas, letters);

  //* Function that starts the game.
  const startGame = (playersNumber = 1) => {
    deck          = createDeck(pintas, letters);
    playersPoints = [];
    for (let i = 0; i < playersNumber + 1; i++) {
      playersPoints.push(0);
    }
    scoreboard.forEach((elem) => (elem.innerText = 0));
    playersCardsDiv.forEach((elem) => deleteCards(elem));
    btnGetCard.disabled  = false;
    btnStopGame.disabled = false;
  };

  const deleteCards = (container) => {
    while (container.innerHTML.length > 0) {
      container.removeChild(container.lastChild);
    }
  };

  //* Events to listen
  btnGetCard.addEventListener("click", () => {
    const card         = getCard(deck);
    const playerPoints = tempScoreboard(card, 0, playersPoints, scoreboard);

    createCard(card, 0, playersCardsDiv);

    playerPoints > 21
      ? (btnGetCard.disabled = true)
      :  (btnGetCard.disabled = false);
  });

  btnStopGame.addEventListener("click", () => {
    btnGetCard.disabled  = true;
    btnStopGame.disabled = true;
    cpuTurn(playersPoints[0], playersPoints, deck, scoreboard, playersCardsDiv);
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
