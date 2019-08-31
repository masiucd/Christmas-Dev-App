let a = {
  let greeting = "Hello";
  let world = "world";
  greeting ++ world;
};

{
  let a = "hello";
  print_string(a);
};
let b = (45, 45.4, ("apple", "banana", (43, true, false)));

/* let vector3 = (1, 2, 3); */
let vector3 = (1., 2, 3.);
let value = 1;
let res =
  switch (value) {
  | 1 => "one"
  | 2 => "two"
  | 0 => "zero"
  | _ => ""
  };

let tuple = (true, true);
let res2 =
  switch (tuple) {
  | (false, false) => false
  | (true, false) => false
  | (false, true) => false
  | (true, true) => true
  };

let t = (45, (2, 3));

let r =
  switch (t) {
  | (0, _) => (0, (4, 4))
  | (_, (x, _) as t) => (x, t)
  };

let day = "Monday";
switch (day) {
| "Monday" => "Boooo"
| "Tuesday" => "Okkk"
| "Wednesday" => "better"
| "Thursday" => "more better"
| "Friday" => "weekday"
| "Saturday" => "Halleluja"
| "Sunday" => "weekend"
| day => "Illegal value: " ++ day
};

let zzz = (3, 9);

let resOfZzz =
  switch (zzz) {
  | (x, y) when x < y => x
  | (_, y) => y
  };