const quotations = [
  "I have a bad feeling about this.",
  "No, I am your father.",
  "It’s a trap!",
];

const randomIndex = Math.floor(Math.random() * quotations.length);

const selectedQuotation = quotations[randomIndex];

// Print the selected quotation to the console
console.log(`Selected Quotation: ${selectedQuotation}`);

import { flattening } from "./exercises.js";

let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenedArray = flattening(arrays);

console.log(flattenedArray);
// → [1, 2, 3, 4, 5, 6]

import { loop } from "./exercises.js";

// Test the loop function
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

import { everyLoop, everySome } from "./exercises.js";

console.log(everyLoop([1, 3, 5], (n) => n < 10));
// → true
console.log(everyLoop([2, 4, 16], (n) => n < 10));
// → false
console.log(everyLoop([], (n) => n < 10));
// → true

console.log(everySome([1, 3, 5], (n) => n < 10));
// → true
console.log(everySome([2, 4, 16], (n) => n < 10));
// → false
console.log(everySome([], (n) => n < 10));
// → true
