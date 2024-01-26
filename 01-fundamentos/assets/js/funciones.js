// Función Tradicional:

function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

// Función Anónima:

const greeting2 = function (name = "stranger") {
  console.log(arguments);
  console.log(`Hello, ${name}!`);
};

// Función de Flecha (Lambda):

const arrowGreeting = (name = "stranger") => {
  console.log(`Hello, ${name}!`);
};

const getRandom = () => Math.random();

console.log(getRandom());

greeting("Byron");
greeting2("Asuan", "Colombia", 30, false);
arrowGreeting("Messi");
