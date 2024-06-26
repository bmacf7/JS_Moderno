import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLElement} element
 */

export const promiseComponent = (element) => {
  console.log("promiseComponent");
  const id = "5d86371fd55e2e2a30fe1ccb2";
  const id2 = "5d86371fd55e2e2a30fe1cc3";

  const renderError = (err) => {
    element.innerHTML = `<h3>${err}</h3>`;
  };

  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderTwoHeroes = (hero, hero2) => {
    element.innerHTML = `
      <h3>${hero.name}</h3>
      <h3>${hero2.name}</h3>
    `;
  };

  Promise.all([findHero(id), findHero(id2)])
    .then(([hero, hero2]) => renderTwoHeroes(hero, hero2))
    .catch(renderError);

  //! Forma 1
  // findHero(id).then((hero1) => {findHero(id2).then((hero2) => {renderTwoHeroes(hero1, hero2)}).catch(renderError)}).catch(renderError);

  //! Forma 2
  //let hero1;
  //findHero(id)
  //  .then((hero) => {
  //    hero1 = hero;
  //    return findHero(id2);
  //  })
  //  .then((hero2) => {
  //    renderTwoHeroes(hero1, hero2);
  //  })
  //  .catch(renderError);
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */

const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} doesn't exist`);
  });
};
