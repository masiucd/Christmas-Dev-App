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

let sum = (~x: option(int)=?, ~y: option(int)=?, ()) => x;
sum(~x=3, ());
sum(~x=?Some(2), ~y=?Some(6), ());

let aaa = (~x=6, ~y=3, ()) => x + y;
aaa(~x=?Some(5), ~y=?None, ());

/* Why is partial application useful?*/

let add = (x, y) => x + y;
let plus5 = add(5);
plus5(5);

let nums = [1, 2, 3, 4, 5];
let plus2 = x => add(2, x);
List.map(plus2, nums);
List.map(add(2), nums);

let names = ["aleks", "boris", "stina"];
let newName = (x: string, y: string) => x ++ y;
let addName = newName("Ale");
addName("sss");

List.map(newName("first name :"), names);

let summing = (x, y) => x + y;
let curry = (f: (('a, 'b)) => 'c, x, y) => f((x, y));