// TODOS los primitivos se pasan por VALOR

let a = 10;
let b = a;
a = 30;

console.log({a,b});

let john = { name: "John" };

// Se pasa por valor el objeto utilizando el spread operator {...}
let hannah = { ...john };

// TODOS los objetos se pasan por REFERENCIA

console.log({ john, hannah });
hannah.name = "Hannah";

// Paso por valor el argumento (person) utilizando el spread operator {...}
const nameChanger = ( { ...person } ) => {
    person.name = "Tony";
    return person;
}

let peter = { name: "Peter"};
let tony = nameChanger(peter);

console.log({ peter, tony });

// NOTA: El spread operator {...} es diferente al parámetro rest (...) y el primero rompe las referencias entre los
// objetos al hacer que apunten a diferentes lugares de la memoria.

// Utilizando arreglos

let fruits = ["Apple", "Pear", "Pineapple"];

// Romper relación utilizando el operador spread [...] (utilizando corchetes porque es un array).
// OTRA MANERA de romper la relación entre el apuntador a espacio en memoria: otherFruits = fruits.spread()
// El segundo método puede requerir más tiempo para procesar la información (el operador spread tiende a ser más rápido).
let otherFruits = [...fruits];

otherFruits.push("Mango");

console.table({fruits, otherFruits});