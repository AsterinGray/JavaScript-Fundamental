/**
 * Data Types
 * - String
 * - Number
 * - Boolean
 * - Object
 * - Undefined
 */

// String
let string1 = "";
let string2 = "";
let string3 = ``; // backtick (template literal)

// Number
let number1 = 1;
let number2 = 10e1;
let number3 = 1.5;

// Boolean
let boolean1 = true;
let boolean2 = false;

// Object
let object1 = {
  key: "value",
  key1: {
    key11: "value dalam",
  },
};
let arr = ["BNCC", "Si hijo", "Si Merah"];

console.log(object1.key); // 'value'
console.log(objct1.key1.key11); // 'value dalam'

arr = {
  0: "BNCC",
  1: "Si Hijo",
  2: "Si Merah",
};

// Function
function function1() {}
let function2 = function () {};
let function3 = () => {};

// Others
let nullValue = null;
let undefinedValue;
