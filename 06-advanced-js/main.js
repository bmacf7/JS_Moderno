import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { environmentsComponent } from "./source/concepts/01-environments";
import { callbacksComponent } from "./source/concepts/02-callbacks";
import { promiseComponent } from "./source/concepts/03-promises";
import { promisesRaceComponent } from "./source/concepts/04-promises-race";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Callbacks, Promises and HELL!</h1>
    <div class="card">
    </div>
  </div>
`;

const element = document.querySelector(".card");

promisesRaceComponent(element);
// promiseComponent(element);
// callbacksComponent(element);
// environmentsComponent(element);
