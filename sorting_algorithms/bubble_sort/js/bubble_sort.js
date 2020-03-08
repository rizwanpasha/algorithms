function bubbleSort(items) {
  var itemsLength = items.length;

  for (var i = 0; i < itemsLength; i++) {
    for (var j = 0; j < itemsLength - 1 - i; j++) {
      if (items[j] > items[j + 1]) {
        var temp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = temp;
      }
    }
  }

  return items;
}

(function() {
  var items = [1, 95, 66, 4, 7, 21, 9, 5, 14, 86, 94, 11];
  var sorted_items = bubbleSort(items);
  
  console.log(sorted_items);
})();
