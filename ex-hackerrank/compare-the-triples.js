function compareTriplets(a, b) {
    
  let bobPoints = 0
  let alicePoints = 0
  
  for(let index = 0; index < a.length; index++) {
      if (a[index] > b[index]) {
          alicePoints += 1
      } else if(a[index] < b[index]) {
          bobPoints += 1
      }
  }

  return [alicePoints, bobPoints]

}

a = [17, 28, 30]
b = [99, 16, 8]

console.log(compareTriplets(a, b))

