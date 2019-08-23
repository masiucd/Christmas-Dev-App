let a = 2;
let b: int = 4;
/* Js.log(a); */

let check = 5.3 +. 3.3;
/* print_float(check); */

let array = [|1, 2, 3, 4, 5, 6, 7, 8, 9, 10|];

for (i in 0 to Array.length(array) - 1) {
  print_int(i);
  print_string(" \n");
};



type tesla = {
  .
  color: string
};

type car('a) = {
  ..
  color: string
} as 'a;

let obj: tesla = {
  val red: "Red"
}