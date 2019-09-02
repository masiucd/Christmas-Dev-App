let adding = (~x=?, ~y=?, ()) =>
  switch (x, y) {
  | (Some(x'), Some(y')) => x' + y'
  | (Some(x'), None) => x'
  | (None, Some(y')) => y'
  | (None, None) => 0
  };
adding(~x=3, ~y=6);

let mul = ((x, y)) => x * y;

let tuple = (10, 3);

mul(tuple);

let add = (~x as op1, ~y as op2) => op1 + op2;
let add2 = (~x as op1: int, ~y as op2: int) => op1 + op2;

add(~x=56, ~y=12);
add2(~y=56, ~x=12);

let multiply = (~x=3, ~y=5, ()) => x * y;
multiply();
multiply(~x=10);
let a = multiply();
multiply(~x=?Some(14), ~y=?None, ());

let square = (~x=?, ()) => multiply(~x?, ~y=?x, ());

square(~x=?Some(10), ());