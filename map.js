const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
console.log(results1);

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log("Arrays match!");
  } else {
    console.log("Arrays don't match!");
  }
};

assertArraysEqual(
  ["a", "b", "c", "d", "e"],
  map(["ant", "bee", "cat", "dog", "emu"], (word) => word[0])
);
assertArraysEqual(
  [],
  map([], (word) => word[0])
);
assertArraysEqual(
  [8, 12, 16, 24, 30, 40],
  map([4, 6, 8, 12, 15, 20], (num) => num * 2)
);
