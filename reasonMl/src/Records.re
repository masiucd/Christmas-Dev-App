type person = {
  firstName: string,
  lastName: string,
  personIs: string,
  age: int,
};

let luke: person = {
  firstName: "Luke",
  lastName: "Skywalker",
  personIs: "jedi",
  age: 45354534,
};

let getFirstName = person => person.firstName;

let a = getFirstName(luke);

type doggie = {
  age: int,
  name: string,
  breed: string,
};

let snickers: doggie = {age: 2, name: "Snickers", breed: "pug"};

snickers.age;
snickers.name;
snickers.breed;

let {age, name, breed} = snickers;

type parents = {
  father: string,
  mother: string,
};

type human = {
  first: string,
  last: string,
  city: string,
  parents,
};
let borisParents = {father: "Oleg", mother: "Helga"};
let boris: human = {
  first: "boris",
  last: "Smirinoff",
  city: "Siberia",
  parents: borisParents,
};

let {parents: {father}} = boris;