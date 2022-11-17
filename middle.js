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
