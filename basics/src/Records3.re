type dog = {
  name: string,
  age: int,
  cool: bool,
};

let bobby: dog = {name: "bobby", age: 3, cool: true};

bobby.age;
let karol = {...bobby, age: bobby.age + 1, cool: false};

let pysia = {...bobby, age: bobby.age * 5 - 1, cool: true};

type rocket = {
  rocket: string,
  mutable destination: string,
  fuelType: string,
};

let rocketToPluto = {
  rocket: "spacX34",
  destination: "Moon",
  fuelType: "poer force x-4344",
};
Js.log(rocketToPluto);

rocketToPluto.destination = "Mars";

Js.log(rocketToPluto);