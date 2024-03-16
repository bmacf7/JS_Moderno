import { cardValue } from "./";

/**
 * 
 * @param {String} card represents a card
 * @param {Number} turn whose player is currently playing
 * @param {Array<HTMLElement>} playersPoints The players points
 * @param {Array<HTMLElement>} scoreboard Game scoreboard
 * @returns {HTMLElement} current player scoreboard
 */


//* Turn: 0 === player 1, ... last === cpu.
export const tempScoreboard = (card, turn, playersPoints, scoreboard) => {
  playersPoints[turn] += cardValue(card);
  scoreboard[turn].innerText = playersPoints[turn];
  return playersPoints[turn];
};