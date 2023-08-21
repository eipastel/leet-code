function findMedian(arr) {

  arr.sort((a, b) => a-b)
  let mid = Math.floor(arr.length / 2)
  return arr[mid]
  
}

arr = [1, 2, 4, 5, 6, 3]

findMedian(arr)
