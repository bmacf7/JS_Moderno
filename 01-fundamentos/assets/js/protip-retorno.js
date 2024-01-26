function printArguments() {
  console.log(arguments);
}

// Using spread operator to get args array.

const printArguments2 = (...args) => console.log(args);
printArguments2(10, true, false, "Byron", null);

// Separating arguments form the rest parameter.

const printArguments3 = (age, ...args) => args;

const [casado, vivo, nombre, saludo] = printArguments3(
  10,
  true,
  false,
  "Byron",
  "Hola"
);

console.log({ casado, vivo, nombre, saludo });

let peter = {
  name: "Peter Parker",
  codeName: "Spider-Man",
  alive: true,
  age: 19,
  suits: ["Technosuit", "Technosuit v2", "Iron Spider", "Night Monkey"],
};

// ONLY for academic purposes...

const printProperties = ({ name, codeName, alive, age = 18, suits }) => {
  console.log({ name });
  console.log({ codeName });
  console.log({ alive });
  console.log({ age });
  console.log({ suits });
};

printProperties(peter);
