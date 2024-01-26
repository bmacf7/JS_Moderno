let a = 5;

if (a >= 10) {
  console.log("A es mayor o igual a 10.");
} else {
  console.log("A es menor que 10.");
}

console.log("Fin de programa.");

const today = new Date(); // Retorna un nuevo objeto Date
let day = today.getDay(); // 0: Domingo, 1: Lunes, 2: Martes... 6: Sabado

console.log({ day });

// El ejemplo se hizo más grande mostrando casos else if anidados para fines didácticos.
// Este conocimiento ya se maneja desde las clases de API.

if (day === 0) {
  console.log("Domingo");
} else {
  console.log("No es Domingo");
}

// Ejercicio Laboratorio:
// Obtener día de la semana por nombre sin utilizar estructuras condicionales:

let days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

console.log(days[day]);
