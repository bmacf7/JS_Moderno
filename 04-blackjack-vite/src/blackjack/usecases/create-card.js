/**
 * 
 * @param {String} card Represents the card
 * @param {Number} turn whose player turn is
 * @param {HTLMElement} playersCardsDiv Element containing the players cards
 */

export const createCard = (card, turn, playersCardsDiv) => {
  const cardImg = document.createElement("img");
  cardImg.src = `/assets/cartas/${card}.png`;
  cardImg.classList.add("cards");
  playersCardsDiv[turn].append(cardImg);
};