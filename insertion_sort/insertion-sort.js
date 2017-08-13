var pry = require('pryjs');

var insertionSort = function(list) {
  var sortedList = []
  sortedList.push(list.shift());

  for (i = 0; i < list.length; i) {
    val = list.splice(i, 1)[0];
    // eval(pry.it);

    for (x = 0; x < sortedList.length; x++) {
      eval(pry.it);
      if (sortedList[x] < val) {
        sortedList.splice(x + 1, 0, val);
        break;
      } else {
        sortedList.splice(x - 1, 0, val);
        break;
      }

    }

    // sortedList.forEach(function callback(value, index) {
    //   if (val < value) {
    //     sortedList.splice(index - 1, 0, val);
    //     eval(pry.it);
    //   // } else {
    //   //   return;
    //   }
    // })
  }
  return sortedList;
}

module.exports = insertionSort;
