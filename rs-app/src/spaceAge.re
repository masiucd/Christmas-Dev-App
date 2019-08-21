type planet =
  | Mercury
  | Venus
  | Earth
  | Mars
  | Jupiter
  | Saturn
  | Neptune
  | Uranus;

let ageOn = (planet, seconds) => {
  let toEarthYears = factor => seconds /. 31557600.0 /. factor;
  switch (planet) {
  | Mercury => toEarthYears(0.2408467)
  | Venus => toEarthYears(0.61519726)
  | Earth => toEarthYears(1.0)
  | Mars => toEarthYears(1.8808158)
  | Jupiter => toEarthYears(11.862615)
  | Saturn => toEarthYears(29.447498)
  | Neptune => toEarthYears(164.79132)
  | Uranus => toEarthYears(84.016846)
  };
};

let printing = ageOn(Mercury);
Js.log(printing);
Js.log(ageOn(Earth));