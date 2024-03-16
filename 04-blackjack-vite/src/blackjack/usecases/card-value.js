//* Extract the value from the card and return it.


/**
 * @param {String} card the card to extract the value from
 * @return {Number} The value of the card 
 */
export const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10): value * 1;
};