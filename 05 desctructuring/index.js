/**
 * Array Destructuring
 */
const animals = [
  {
    type: "Dog",
    kingdom: "Animalia",
    color: "Brown",
  },
  "Cat",
];

const [dog, cat] = animals;
console.log(dog);
console.log(cat);

/**
 * Object Destructuring
 */

const car = {
  brand: "Toyoya",
  model: "Avanza",
  transmission: "Manual",
  power: "97 hp",
  capacity: "7 seats",
};

console.log(car.brand);
console.log(car.model);

const { transmission, model } = car;
console.log(transmission);
console.log(model);

const { brand: merek, power: tenaga } = car;
console.log(merek);
console.log(tenaga);

const printCarSpecification = (car) => {
  console.log(`
    ${car.brand} a car called ${car.model}. This car has 
    ${car.transmission} with ${car.power} and have ${car.capacity}
    `);
};

const printCarSpecificationDestructuring = ({
  brand,
  model,
  transmission,
  power,
  capacity,
}) => {
  console.log(`
  ${brand} a car called ${model}. This car has 
  ${transmission} with ${power} and have ${capacity}
  `);
};
