const eqObjects = function (object1, object2) {
  //compare the lengths of the two objects
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const item in object1) {
      //check if item is an array
      // if item is an array then we use the isArray method to test if the values are the same
      if (Array.isArray(object1[item])) {
        return eqArrays(object1[item], object2[item]);
      } else {
        if (object1[item] !== object2[item]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
2;
const cd2 = { c: "1", d: ["2", 3] };
console.log(eqObjects(cd, cd2));
