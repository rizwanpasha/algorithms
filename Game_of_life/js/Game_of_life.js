const generationsToRender = 10;
const matrix = [
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function printMatrix(matrixToPrint) {
  for (var i = 0; i < matrixToPrint.length; i++) {
    console.log(matrixToPrint[i].join(","));
  }
}

function computeNextGeneration(matrixToCompute) {
  var nextGenerationMatrix = [];
  for (var i = 0; i < matrixToCompute.length; i++) {
    var row = matrixToCompute[i];
    var newRow = [];
    for (var j = 0; j < row.length; j++) {
      newRow.push(computeNextGenerationStatus(matrixToCompute, i, j));
    }
    nextGenerationMatrix.push(newRow);
  }
  return nextGenerationMatrix;
}

function computeNextGenerationStatus(matrixToCompute, x, y) {
  var neighbours = findNeighbours(matrixToCompute, x, y);
  if (neighbours == 0 || neighbours == 1) {
    return 0;
  }

  if (neighbours == 2) {
    return matrixToCompute[x][y];
  }

  if (neighbours == 3) {
    return 1;
  }

  if (neighbours > 3) {
    return 0;
  }
}

function findNeighbours(matrixToCompute, x, y) {
  var neighbourCount = 0;
  for (var i = x - 1; i <= x + 1; i++) {
    if (i == -1 || i == matrixToCompute.length) {
      continue;
    }

    for (var j = y - 1; j <= y + 1; j++) {
      if (j == -1 || j == matrixToCompute.length) {
        continue;
      }

      if (i == x && j == y) {
        continue;
      }

      if (matrixToCompute[i][j] != undefined) {
        matrixToCompute[i][j] == 1 ? neighbourCount++ : "";
      }
    }
  }

  return neighbourCount;
}

(function() {
  console.log("Initial state.");
  console.log();
  printMatrix(matrix);
  var m = matrix;
  for (var i = 1; i <= generationsToRender; i++) {
    console.log("Generation " + i);
    m = computeNextGeneration(m);
    printMatrix(m);
    console.log();
  }
})();
