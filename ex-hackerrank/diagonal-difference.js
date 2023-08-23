function diagonalDifference(arr) {

  rightDiagonal = 0
  leftDiagonal = 0

  for(let index = 0; index < arr.length; index++) {
    leftDiagonal += arr[index][index]

    rightDiagonal += arr[index][arr[index].length - 1 - index]
  }

  let result = Math.abs(leftDiagonal - rightDiagonal)

  return result

}

example = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
]

console.log(diagonalDifference(example))