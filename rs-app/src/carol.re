type animal =
  | Cat(string)
  | Dog(string);

let speak = a =>
  switch (a) {
  | Cat("Carol") => "omg it is carol!"
  | Cat(name) => name ++ " says: meow"
  | Dog(name) => name ++ " says: woof"
  };

Js.log(speak(Cat("Corol")));
Js.log(speak(Dog("Whieksy")));
Js.log(speak(Cat("bobby")));

let rec gcd = (a, b) =>
  switch (a mod b) {
  | 0 => b
  | r => gcd(b, r)
  };

Js.log(gcd(2, 32));