const animals = ["Dog", "Cat", "Horse", "Lion", "Snail"];

const [animal1, animal2, ...restAnimals] = animals;

console.log(animal1);
console.log(animal2);
console.log(restAnimals);

const car = {
  brand: "Toyoya",
  model: "Avanza",
  transmission: "Manual",
  power: "97 hp",
  capacity: "7 seats",
};

const { power, model, ...restCarSpec } = car;

console.log(power);
console.log(model);
console.log(restCarSpec);

const printLongCarDesc = ({ transmission, power, capacity }) => {
  console.log(
    `This car has ${transmission} transmission with ${power} and ${capacity}`
  );
};

const printCarDesc = (printFullDesc, { brand, model, ...rest }) => {
  console.log(`This is a car by ${brand}, called ${model}`);

  if (printFullDesc) printLongCarDesc(rest);
};

printCarDesc(true, car);
