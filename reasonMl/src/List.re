let myList = [1, 2, 3, 4, 5, 6];
let newList = [(-2), (-1), 0, ...myList];

let intList = [1, 2, 3, 4];
let intList2 = [1, 2, 3, 4];
let stringList = ["a", "b", "c"];
let rec getLength = randomList =>
  switch (randomList) {
  | [] => 0
  | [_, ...tail] => 1 + getLength(tail)
  };
getLength(myList);
getLength(newList);
getLength(stringList);

/* List.length(intList);
   List.length(newList); */

let chars = ["yoda", "anakin", "obi-one"];
let moreChars = ["leia", "solo", ...chars];
let moreChars2 = chars @ ["leia", "solo"];
let fruits = ["apple", "cherry"] @ ["banana", "kiwi"];

let rec append = (list1, list2) =>
  switch (list1) {
  | [] => list2
  | [head, ...tail] => [head, ...append(tail, list2)]
  };
append(moreChars, chars);