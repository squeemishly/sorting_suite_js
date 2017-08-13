var assert = require('chai').assert
var bubbleSort = require('../bubble-sort')

describe('it has functions', function() {
  it('can sort a list', function() {
    assert.deepEqual(bubbleSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
    assert.deepEqual(bubbleSort([5, 8, 2, 4, 9]), [2, 4, 5, 8, 9])
  })
})
