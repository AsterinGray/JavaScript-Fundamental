const FRUITS = ["Apple", "Manggo", "Melon"];

// For loop
for (let i = 0; i < FRUITS.length; i++) {
  console.log(FRUITS[i]);
}

// For of
for (let fruit of FRUITS) {
  console.log(fruit);
}

// For in
for (let fruit in FRUITS) {
  console.log(fruit);
}

// Foreach
FRUITS.forEach((fruit) => {
  console.log(`${fruit} is my favourite fruit.`);
});

const foreach = FRUITS.forEach((fruit) => {
  return `${fruit} is my favourite fruit.`;
});

console.log(foreach);

// Map
FRUITS.map((fruit) => {
  console.log(`${fruit} is my favourite fruit.`);
});

const map = FRUITS.map((fruit) => {
  return `${fruit} is my favourite fruit.`;
});

console.log(map);
