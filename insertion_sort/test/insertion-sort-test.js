var assert = require('chai').assert
var insertionSort = require('../insertion-sort')

describe("it has functions", function() {
  it("can sort a list", function() {
    assert.deepEqual(insertionSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"]);
    assert.deepEqual(insertionSort([6, 3, 9, 4, 8]), [3, 4, 6, 8, 9]);
  })
})
