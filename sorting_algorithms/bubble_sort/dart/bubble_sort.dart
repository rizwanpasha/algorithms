List<dynamic> bubbleSort(List<dynamic> list) {
  int listSize = list.length;

  for (int i = 0; i < listSize; i++) {
    for (int j = 0; j < listSize - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        var temp = list[j];
        list[j + 1] = list[j];
        list[j] = temp;
      }
    }
  }

  return list;
}

void main() {
  List<dynamic> list = [1, 4, 24, 8, 33, 14, 2, 9, 17, 95];
  print(bubbleSort(list));
}
