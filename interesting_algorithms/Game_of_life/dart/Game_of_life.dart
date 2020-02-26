main() {
  int generationsToRender = 10;
  List<List<int>> matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  renderGeneration(matrix, generationsToRender);
}

void renderGeneration(List<List<int>> matrix, int generatonsToRender) {
  print("Initial state");
  printMartix(matrix);
  print("");

  for (int i = 1; i <= generatonsToRender; i++) {
    matrix = generateNextGenerations(matrix);
    print("Generation ${i}");
    printMartix(matrix);
    print("");
  }
}

void printMartix(List<List<int>> matrixToPrint) {
  matrixToPrint.forEach((List<int> row) => {print(row.join(","))});
}

List<List<int>> generateNextGenerations(List<List<int>> matrix) {
  List<List<int>> nextGenerationMatrix = [];

  for (int x = 0; x < matrix.length; x++) {
    List<int> row = matrix[x];
    List<int> newRow = [];

    for (int y = 0; y < row.length; y++) {
      newRow.add(computeNextGenerationStatus(matrix, x, y));
    }
    nextGenerationMatrix.add(newRow);
  }

  return nextGenerationMatrix;
}

int computeNextGenerationStatus(List<List<int>> matrix, int x, int y) {
  int neighboursCount = findNeighbours(matrix, x, y);

  if (neighboursCount <= 1) {
    return 0;
  }

  if (neighboursCount == 2) {
    return matrix[x][y];
  }

  if (neighboursCount == 3) {
    return 1;
  }

  return 0;
}

int findNeighbours(List<List<int>> matrix, int x, int y) {
  int neighboursCount = 0;
  for (int _x = x - 1; _x <= x + 1; _x++) {
    if (_x == -1 || _x == matrix.length) {
      continue;
    }

    for (int _y = y - 1; _y <= y + 1; _y++) {
      if (_y == -1 || _y == matrix.length || (_x == x && _y == y)) {
        continue;
      }

      matrix[_x][_y] == 1 ? neighboursCount++ : "";
    }
  }

  return neighboursCount;
}
