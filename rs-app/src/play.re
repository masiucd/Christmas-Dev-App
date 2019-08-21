type fruit = {
  sort: string,
  colour: string,
  rank: int,
  delicious: bool,
};

let apple: fruit = {
  sort: "granny smith",
  colour: "green",
  rank: 2,
  delicious: true,
};

// Js.log(apple);

let myList = [1, 2, 3, 4, 5];

let message =
  switch (myList) {
  | [] => "this is an empty list"
  | [a, ...rest] => "The head of the list is the string " ++ string_of_int(a)
  };

let myArr: array(string) = [|"hello", "MArcell", "How are you?"|];

let firstIndex = myArr[0];

let xStart = 1;
let xEnd = 15;

// for (x in xStart to xEnd) {
//   print_int(x);
//   print_string(" ");
// };

Random.self_init();

// let break = ref(false);

// while (! break^) {
//   if (Random.int(10) === 3) {
//     break := true;
//   } else {
//     {
//       // print_string("yooo");
//       // print_string(" ");
//       // print_endline("hello");
//     };
//   };
// };

// mutiable values!

let foo = ref(5);
let five = foo^;
Js.log(five);
foo := 12;
Js.log(foo);

let bar = {contents: 4};
let seven = foo.contents;
foo.contents = 8;
Js.log(seven);

let ten = 10;
let foo2 = true ? ten + 5 : ten;
print_int(foo2);