const mamalia = ["Cow", "Horse", "Sheep"];
const pisces = ["Shark", "Dory", "Salmon"];

const animals = [...mamalia, ...pisces];
const seperateAnimal = [mamalia, pisces];
console.log(seperateAnimal);
console.log(animals);

const carMainDesc = {
  brand: "Toyota",
  model: "Avanza",
};

const carDetailDesc = {
  transmission: "Manual",
  power: "97 hp",
  capacity: "7 seats",
};

const carDesc = { ...carDetailDesc, ...carDetailDesc };
console.log(carDesc);

const obj = {
  id: 1,
  name: "Andy",
  todos: [
    {
      id: 1,
      type: "Fun",
      detail: "Play Game",
    },
    {
      id: 1,
      type: "Work",
      detail: "Go To Work",
    },
    {
      id: 1,
      type: "Fun",
      detail: "Rebahan",
    },
  ],
};
