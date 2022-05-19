/**
 * Function in JavaScript
 * - Function Declaration
 * - Function Expression / Variable Function
 * - Arrow Function
 * - Anonymous Function
 */

const DEFAULT = "Andy";

function greet(parameter = DEFAULT) {
  return `Greet: ${parameter}`;
}

console.log(greet()); // Greet: Andy
console.log(greet("Cindy")); // Greet: Cindy

// Function Expression / Variable Function
const greetFuncExpression = function (parameter = DEFAULT) {
  return `Greet: ${parameter}`;
};

console.log(greetFuncExpression()); // Greet: Andy
console.log(greetFuncExpression("Cindy")); // Greet: Cindy

// Arrow Function
const greetArrowFunc = (parameter = DEFAULT) => {
  return `Greet: ${parameter}`;
};

console.log(greetArrowFunc()); // Greet: Andy
console.log(greetArrowFunc("Cindy")); // Greet: Cindy

// Anonymouse Function
const BRANDS = ["Starbucks", "Fore", "J.Co"];

BRANDS.map((brand) => {
  console.log(brand);
});

BRANDS.map(function (brand) {
  console.log(brand);
});
