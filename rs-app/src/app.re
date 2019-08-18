let mult = (a, b) => a * b;
/* IN JS = let mult = a => b => a * b; */
let times3 = mult(3);
let num = times3(3);

/* labelled arguments */

let addText = (~addition, ~text) => text ++ addition;

let print = addText(~addition="Legia", ~text="Mistrzem polski jest ");

Js.log(print);