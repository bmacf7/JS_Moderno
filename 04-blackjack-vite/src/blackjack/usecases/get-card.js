//* Function to take a card from the deck

/*** 
 * @param {Array<String>} deck the deck from which we are getting the card
 * @returns {String} a card from the deck
*/

export const getCard = (deck) => {
  return (deck.length === 0)
    ? console.log("There are no cards available in this deck.")
    : deck.pop();
};