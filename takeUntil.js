const takeUntil = function (array, callback) {
  let arr = [];
  for (const item of array) {
    if (!callback(item)) {
      arr.push(item);
    }
    if (callback(item)) {
      break;
    }
  }
  return arr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

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
  ["I've", "been", "to", "Hollywood"],
  takeUntil(data2, (x) => x === ",")
);

assertArraysEqual(
  [1, 2, 5, 7, 2],
  takeUntil(data1, (x) => x < 0)
);
