let mult = (a, b) => a * b;
/* IN JS = let mult = a => b => a * b; */
let times3 = mult(3);
let num = times3(3);

/* labelled arguments */

let addText = (~addition, ~text) => text ++ addition;

let print = addText(~addition="Legia", ~text="Mistrzem polski jest ");

/* Js.log(print); */

/* RECORDS */

type animal = {
  rank: int,
  age: int,
  art: string,
};

let dog: animal = {rank: 1, age: 5, art: "dog"};

/* List and arrays */
let list = [1, 2, 3, 4];
let addedList = [0, ...list];

let arr = [|"my ", "little ", "Ponny"|];

/* Js.log(addedList);
   Js.log(arr[0]); */

let strangerThings = {|Hello
    Master   *****
   **** \
    How are you?...
    |};

/* VARIANT */

type vehicle =
  | Car(string)
  | Plane
  | Boat;

let mustang = Car("Mustang");

let getTransported = vehicle =>
  switch (vehicle) {
  | Car(make) => "Travelling with a " ++ make ++ " is nice!"
  | Boat => "I getting Sick"
  | Plane => "Its fast and easy"
  };

/* Js.log(getTransported(Car("Mercedes"))); */

let start: int = 0;

let ending: int = 10;

for (x in start to ending) {
  print_int(x);
  print_string(" \n");
};

let teams = [|"manu", "legia", "juve", "porto"|];

for (i in 0 to Array.length(teams) - 1) {
  Js.log(teams[i]);
};