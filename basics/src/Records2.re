type team = {
  name: string,
  titles: int,
  awsome: bool,
};

type player = {
  name: string,
  team,
  shirtNumber: int,
};

let legia: team = {name: "legia warszawa", titles: 34242342, awsome: true};

let toTeam = ((name, titles, awsome)) => {name, titles, awsome};

toTeam(("legia", 2231312312, true));

type person = {
  name: string,
  age: int,
  cool: bool,
  grade: float,
};

type animal = {
  name: string,
  kind: string,
};

let aleks = {name: "aleks", age: 34, cool: true, grade: 3.3};
let lion = {name: "leo", kind: "lion"};
let getFirstName = mamal => mamal.name;

Js.log(getFirstName(lion));