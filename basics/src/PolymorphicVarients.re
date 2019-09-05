let swap = (a: 'first, b: 'last): ('last, 'first) => (b, a);

type row('a) = ('a, 'a, 'a, 'a, 'a);

/* tuple of int */
type rowOfInts = row(int);
/* tuple of string */
type stringRow = row(string);

let primeNums: rowOfInts = (2, 3, 5, 7, 11);
let names: stringRow = ("Boris", "Stina", "Tina", "Mark", "Kasia");

/* NO null or undefined in Reason */
type option('a) =
  | None
  | Some('a);

let isMissing = false;
let title =
  if (isMissing) {
    None;
  } else {
    Some("Hola Balola");
  };