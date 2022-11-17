const assertObjectsEqual = (object1, object2) => {
  const inspect = require("util").inspect;
  //compare the lengths of the two objects
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const item in object1) {
      //check if item is an array
      // if item is an array then we use the isArray method to test if the values are the same
      if (Array.isArray(object1[item])) {
        if (eqArrays(object1[item], object2[item])) {
          console.log(
            `Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`
          );
        }
      } else {
        if (object1[item] !== object2[item]) {
          console.log(
            `Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
          );
        }
      }
    }
  } else {
    console.log(
      `Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
    );
  }
};

assertObjectsEqual({ a: 2, b: 1 }, { b: 1, a: 2 });
