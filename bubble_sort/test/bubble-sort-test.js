var assert = require('chai').assert
var bubbleSort = require('../bubble-sort')

describe('it has functions', function() {
  it('can sort a list', function() {
    assert.deepEqual(bubbleSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
  })
})
