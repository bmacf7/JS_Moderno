import { getCard, tempScoreboard, createCard } from "./";

/**
 * 
 * @param {Number} minimumPoints minimum number of points that cpu needs to win the game
 * @param {Array<HTMLElement>} playersPoints HTML Element representing the players points
 * @param {Array<String>} deck The deck
 * @param {HTMLElement} scoreboard HTML Element representing the scoreboard
 * @param {HTMLElement} playersCardsDiv HTML Element that contains the players cards
 */

export const cpuTurn = (minimumPoints,  playersPoints, deck = [], scoreboard, playersCardsDiv) => {

    if (!minimumPoints) throw new Error('minimum points must be provided');
    if (!deck) throw new Error('deck must be provided');

    let cpuPoints = 0;
    let turn      = playersPoints.length - 1;
    do {
      const card      = getCard(deck);
            cpuPoints = tempScoreboard(card, turn, playersPoints, scoreboard); 
      createCard(card, turn, playersCardsDiv);
    } while (cpuPoints < minimumPoints && minimumPoints <= 21);
    findWinner(playersPoints);
};

const findWinner = (playersPoints) => {
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