import _ from 'underscore';

/**
 * Creates a new deck
 * @param {Array<String>} pintas 
 * @param {Array<String>} letters 
 * @returns {Array} and returns it initalized
 */

export const createDeck = (pintas, letters) => {

    if (!pintas) throw new Error('pintas is required');

    let   deck          = [];
    for (const pinta of pintas) {
      for (let i = 2; i < 11; i++) {
        deck.push(i + pinta);
      }
      for (let letter of letters) {
        deck.push(letter + pinta);
      }
    }
    return _.shuffle(deck);
  };

//   export default createDeck;