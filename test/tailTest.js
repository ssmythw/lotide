const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [5,7,9] for [1,5,7,9]", () => {
    assert.deepEqual(tail([1, 5, 7, 9]), [5, 7, 9]);
  });
});
