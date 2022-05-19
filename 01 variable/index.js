/**
 * JavaScript Variable
 * 1. Var
 * 2. Let
 * 3. Const
 */

// var
var variable = "hello world";
console.log(variable); // Hello World

if (variable === "hello world") {
  var variable = "Halo Dunia";
  console.log(variable); // Halo Dunia
}

/**
 * This will output the string that assign inside the if statement.
 * Because var have no block scope so a variable inside of the
 * if statement.
 */
console.log(variable); // Halo Dunia

// let
let variableLet = "Let it go";
console.log(variableLet); // Let it go

if (variableLet === "Let it go") {
  let variableLet = "Frozen";
  console.log(variableLet); // Frozen
}

/**
 * This will output the string that assign first.
 * Because let have block scope so the variable with the same
 * name that assign inside the if statement will be a completely different
 * variable. Where the variable can only be use inside that if statement or block
 */
console.log(variableLet); // Let it go

// const
const VARIABLE = "JavaScript";
// VARIABLE = 'JS' // Will product an error
