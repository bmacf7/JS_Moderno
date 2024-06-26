import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLElement} element
 */

export const callbacksComponent = (element) => {
  console.log("callbacksComponent");

  const id = "5d86371f25a058e5b1c8a65ea";
  findHero(id, (error, hero) => {
    // One solution to handle undefined values
    // element.innerHTML = hero?.name || `Hero doesn't exist`;
    if (error) {
      element.innerHTML = error;
      return;
    }
    element.innerHTML = hero.name;
  });
};

/**
 *
 * @param {String} id
 * @param { (error?: String, hero: Object) => void} callback
 */

const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) {
    callback(`Hero with id ${id} doesn't exist`);
    return; // => undefined
  }
  callback(null, hero);
};
