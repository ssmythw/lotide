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

const middle = (arr) => {
  if (arr.length === 1 || arr.length === 2) return [];
  if (arr.length % 2 === 1) {
    return [arr[Math.floor(arr.length / 2)]];
  } else {
    return [
      arr[Math.floor(arr.length / 2 - 1)],
      arr[Math.floor(arr.length / 2)],
    ];
  }
};

module.exports = middle;
