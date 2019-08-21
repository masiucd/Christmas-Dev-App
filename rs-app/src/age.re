let canDring = (age: int) =>
  if (age < 18) {
    print_string("You are to young ");
  } else if (age === 18) {
    print_string("Welcome fresh men ");
  } else if (age >= 18) {
    print_string("Welcome master ");
  };

Js.log(canDring(5));
Js.log(canDring(18));
Js.log(canDring(28));