let x = "Legia";
print_string(x);
{
  let x = "Warszawa";
  print_string("\n");
  print_string(x);
};
print_string("\n");
print_string(x);
print_string("\n");
let b = {
  print_string("Hello");
  123;
};

print_int(b);

print_string(
  {
    let s = "ma";
    s ++ s;
  },
);

let t = (56, 43, true, "hi");
let (a, b, c, d) = t;
let (a, b, c, _) = t;