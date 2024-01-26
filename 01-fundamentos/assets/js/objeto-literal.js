let character = {
  name: "Peter Parker",
  codeName: "Spider-Man",
  alive: true,
  age: 19,
  coords: {
    lat: 40.7279,
    long: -73.7918,
  },
  suits: ["Technosuit", "Technosuit v2", "Iron Spider", "Night Monkey"],
  address: {
    zipCode: "11106",
    ubiGeo: "Queens, NY",
  },
};

console.log({ character });

if (character.alive) {
  console.log(`Coords: ${character.coords.lat}, ${character.coords.long}`);
} else {
  console.log("Coordinates not available.");
}

console.log("N° Trajes: ", character.suits.length);
