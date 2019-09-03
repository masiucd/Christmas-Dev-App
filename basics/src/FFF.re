let times2 = x: int => x * 2;

let twice = x: string => x ++ x;

twice(string_of_int(times2(4)));

/* wih piping */
let res = 4 |> times2 |> string_of_int |> twice;

[1, 5, 2, 3, 4] |> List.map(x => x * 2) |> List.filter(x => x < 10);
[1, 5, 2, 3, 4]
|> List.map(x => x * 2)
|> List.filter(x => x < 10)
|> List.sort(compare);

let swapFloatInt = (x: float, y: int): (int, float) => (y, x);
/* alpha ad beta */
/* let's make a swap version here */

let swap = (x: 'a, y: 'b): ('b, 'a) => (y, x);
swap(4, 343.);
swap("hello", 32);
swap("reason", "hello");