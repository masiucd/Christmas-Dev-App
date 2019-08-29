type player =
  | Cross
  | Circle;

type field =
  | Empty
  | Marked(player);

let toString = (field: field) =>
  switch (field) {
  | Marked(Cross) => "X"
  | Marked(Circle) => "O"
  | Empty => ""
  };

let randomField = Marked(Circle);
toString(randomField);

/* type game =
     | Win
     | Loose;

   type team =
     | Won(game)
     | Lost(game)
     | Draw;

   let checkGame = (team: team) =>
     switch (team) {
     | Won(team) => "Yeeahhhh"
     | Lost(team) => "Booooo"
     | Draw => "It's a draw"
     }; */