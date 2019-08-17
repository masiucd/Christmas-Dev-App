let test: string = "Reason1";
if (true) {
  let test: string = "Reason2";
  ();
};

Js.log(test);

if (10 > 5) {
  Js.log("yo");
} else {
  Js.log("NOOO");
};

let word = "Master";

Js.log(word === "Master" ? "Happy" : "Sad");

Js.log(word === "!Master" ? "Happy" : "Sad");