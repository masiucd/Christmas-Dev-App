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