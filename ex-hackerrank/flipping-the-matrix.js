function flippingMatrix(matrix) {

  let halfMatrix = matrix.length / 2
  let fullLength = matrix.length - 1

  let allMirrorsNumbers = []

  for(let firstIndex = 0; firstIndex < halfMatrix; firstIndex++) {

    for(let secondIndex = 0; secondIndex < halfMatrix; secondIndex++) {

      let mirrorOne = matrix[firstIndex][secondIndex]
      let mirrorTwo = matrix[firstIndex][fullLength - secondIndex]
      let mirrorThree = matrix[fullLength - firstIndex][secondIndex]
      let mirrorFour = matrix[fullLength - firstIndex][fullLength - secondIndex]

      allMirrorsNumbers.push([mirrorOne, mirrorTwo, mirrorThree, mirrorFour])
      // End of 2nd for loop
    }
    // End of 1fr for loop
  }

  let bestNumbers = allMirrorsNumbers.map((element) => {
    let biggest = Math.max(...element)
    return biggest
  })

  return bestNumbers.reduce((accu, current) => {
    accu += current
    return accu
  }, 0)
  // End of function
}

matrix = [
  [112, 42, 83, 119], 
  [56, 125, 56, 49],
  [15, 78, 101, 43], 
  [62, 98, 114, 108]
]


console.log(flippingMatrix(matrix))