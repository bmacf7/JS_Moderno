let myArray = ["Byron", 7, true, null, function () {}];

let thingsArray = [
  true,
  123,
  "Byron",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["X", "Megaman", "Zero", "Dr. Light", ["Dr. Willy", "Woodman"]],
];

// console.log({ myArray });
// myArray.forEach((item) => console.log(typeof item));

document.write(`<p>${thingsArray[7][4][1]}</p>`);
console.log(thingsArray[7][1]);
