type animal =
  | Bear
  | Rabbit
  | Lion;

let isLarger = (animal1, animal2) =>
  switch (animal1, animal2) {
  | (Bear, Bear) => false
  | (Rabbit, Rabbit) => false
  | (Bear, Rabbit) => true
  | (Rabbit, Lion) => false
  | (Rabbit, Bear) => false
  | (Bear, Lion) => false
  | (Lion, _) => true
  };