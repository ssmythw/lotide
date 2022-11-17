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

const without = (arr, unwantedElements) => {
  //loop through the first array
  //if the element is contained in the unwanted elements, splice out current item

  for (let i = 0; i < arr.length; i++) {
    if (unwantedElements.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));
