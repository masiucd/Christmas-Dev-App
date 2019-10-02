type animal =
  | Bear
  | Rabbit
  | Lion;

let isLarger = (animal1, animal2) =>
  switch (animal1, animal2) {
  | (Bear, Bear) => false
  | (Rabbit, Rabbit) => false
  | (Bear, Rabbit) => true
  | (Rabbit, Lion) => false
  | (Rabbit, Bear) => false
  | (Bear, Lion) => false
  | (Lion, _) => true
  };

let quote = "The force is with you!";
let starwars =
  switch (quote) {
  | "I am Your father" => "Nooooooooooo"
  | "The force is with you!" => "is match"
  | "I love candy" => "No match"
  | _ => ""
  };

let fivePlusFive = 10;

let math =
  switch (fivePlusFive) {
  | 5 => "No Match"
  | 10 => "correct"
  | 12 => "nooo"
  | _ => ""
  };