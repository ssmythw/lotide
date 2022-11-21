const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const { assert } = require("chai");

describe("#middle", () => {
  it("should return [] for [1]", () => {
    assert.deepEqual([], middle([1]));
  });
  it("should return [] for [1,2]", () => {
    assert.deepEqual([], middle([1, 2]));
  });
  it("should return [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual([], middle([1, 2, 3, 4, 5, 6]));
  });
  it("should return [3] for [1,2,3,4,5]", () => {
    assert.deepEqual([], middle([1, 2, 3, 4, 5]));
  });
});
