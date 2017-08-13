var pry = require('pryjs');

var bubbleSort = function(list) {
  count = 0;
  while (count < list.length) {
    list.forEach(function(value, index) {
        if ( value > list[index + 1] ) {
            a = value;
            list.splice(index, 1);
            list.splice(index + 1, 0, a);
        }
    })
    count++;
  }
  return list
}

module.exports = bubbleSort;
