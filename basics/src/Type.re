type animal = string;

let dog: animal = "Doggie";

let duck: animal = "ducky";

let getAnimal = (anim: string) => "this is a " ++ anim;

let getTitle = (cond, exp) =>
  if (cond) {
    // If it is true it will return the expression argumen
    (exp: string);
  } else {
    // return the concatinated verison
    exp ++ " this is title ";
  }

Js.log(getTitle(true, "test"));

let getTitle2 = (cond, exp:string) =>
  if(cond){
    exp
  } else {
    exp ++ "Reason "
  }
Js.log(getTitle2(false, " ML"));

