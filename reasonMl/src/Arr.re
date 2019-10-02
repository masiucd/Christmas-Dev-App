let starWarsChars = [|"Solo", "Luke", "Anakin", "Lea"|];

type dog = array(string);

let doggies: dog = [|"snickers", "bobby", "Korek"|];

let createArray = (length, fieldName) => Array.make(length, fieldName);

createArray(5, "korek");
createArray(12, 3);

for (i in 0 to Array.length(doggies)) {
  Js.log(doggies[i]);
};

let getByIndex = (arr, index) => arr[index];
getByIndex(doggies, 0);

let fruits = [|"granny smith", "yellow something", "polish cherries"|];

/* with fixed data this is okey  */
let [|apple, banana, cherry|] = fruits;

apple;
banana;
cherry;

/* let getFruits = ([|a, b, c|]) => [|a, b|];
   getFruits(fruits);

   let myInts = [|1, 2, 3, 4, 5, 6, 7|];

   for (i in 0 to Array.length(myInts)) {
     Js.log(myInts[i]);
   }; */