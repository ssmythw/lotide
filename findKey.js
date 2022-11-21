const findKey = (obj, callback) => {
  //loop over object and check which item returns true when passed to the callback]\
  for (const item in obj) {
    if (callback(obj[item])) {
      return item;
    }
  }
};

console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(
  "noma",
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
);

assertEqual(
  "Bowser",
  findKey(
    {
      Mario: { rating: 452 },
      Bowser: { rating: 666 },
      Toad: { rating: 345 },
      Yoshi: { rating: 401 },
    },
    (char) => char.rating === 666
  )
);
