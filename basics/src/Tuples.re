let fruitAndAnimal = ("Apple", 4, "Doggie", 2);

Js.log(fruitAndAnimal);
let numsAndFloats = (5, 33.5, 32.7, 3);
let moreNumsWithThePrevious = (1, 2, 2.2, 12.2, numsAndFloats);
let nameAndBool = ("Tim", false);

type person = (string, string, string);

let johnSnow = ("John", "snow", "Soldier");


let num = 6;
// we ignore the value of 6
let _ = 6;


// to ignore the second value
let (x,_) = (10,5);

// Js.log(x)
let myNums = (24,11);

let (_, c) = myNums
// Js.log(c)


let getFirst = ((x,_)) => x;
let getSecond= ((_,y)) => y;
getFirst((5,12));
getSecond((5,12));

let getCharachter = ((a,b,c)) => a;
let getCharachte2 = ((a,b,c)) => a ++ " " ++ b ++ " " ++ c;
 getCharachter(("Luke", "skywalker", "jedi"));
 getCharachter2(("Luke", "skywalker", "jedi"));
