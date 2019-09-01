/* first oreder function */
let add = x => x + x;

/* Higher order function */
List.map(x => x + 1, [23, 74, 21, 32]);

let rec even = x =>
  if (x <= 0) {
    true;
  } else {
    odd(x - 1);
  }
and odd = x =>
  if (x <= 0) {
    false;
  } else {
    even(x - 1);
  };

let rec factorial = x =>
  if (x <= 2) {
    x;
  } else {
    x * factorial(x - 1);
  };

let callFunc = f => f(1) + f(3);
callFunc(x => x);
callFunc(x => x * 2);

let addComps = ((x, y)) => x + y;

let tuple = (4, 5);

addComps(tuple);

let adding2 = (~x, ~y) => x + y;

adding2(~x=4, ~y=7);
adding2(~y=4, ~x=7);

let add = (~x=?, ~y=?, ()) =>
  switch (x, y) {
  | (Some(x'), Some(y')) => x' + y'
  | (Some(x'), None) => x'
  | (None, Some(y')) => y'
  | (None, None) => 0
  };