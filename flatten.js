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

const flatten = (arr) => {
  //Create main array
  let newArr = [];
  //Loop through the main array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
