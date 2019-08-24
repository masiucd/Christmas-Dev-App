let func = x => x + 6;

let rec factorial = n =>
  if (n <= 1) {
    1;
  } else {
    n * factorial(n - 1);
  };

let rec isEven = n =>
  if (n === 0) {
    true;
  } else {
    print_int(n);
    print_string(" \n this is from the isEven function \n");
    isOdd(n - 1);
  }
and isOdd = n =>
  if (n === 0) {
    false;
  } else {
    print_int(n);
    print_string(" \n this is from the isOdd function \n");
    isEven(n - 1);
  };

Js.log(isEven(2));