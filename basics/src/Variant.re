type gender =
  | Boy
  | Girl;

let karol = Boy;

type player =
  | Cross
  | Circle;

let nextTurn = Circle;

type filed =
  | Empty
  | Marked(player);

type gameState =
  | Playing(player)
  | Winner(player)
  | Draw;