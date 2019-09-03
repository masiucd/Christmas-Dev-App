type rocketToMars = {
  rocketType: string,
  mutable currentDestination: string,
  fuel: string,
  luckyNum: int,
};

let eagleX: rocketToMars = {
  rocketType: "EagleX 32323",
  currentDestination: "moon",
  fuel: "power xxx",
  luckyNum: 21,
};

eagleX.currentDestination = "after the moon";

type coords = {
  lat: int,
  lng: int,
};

type rocketdestination = {
  destinationName: string,
  constellation: string,
  coordinates: (int, int),
};

let marsDestination: rocketdestination = {
  destinationName: "On to Mars",
  constellation: "Who knows",
  coordinates: (3232, 342342),
};