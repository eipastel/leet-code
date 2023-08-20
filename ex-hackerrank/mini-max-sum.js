function miniMaxSum(arr) {

  let minMaxArray = arr

  const maxValue = Math.max(...arr)
  const minValue = Math.min(...arr)
  let total = 0

  arr.map((num) => {
    total += num
  })

  let minInput = total - maxValue
  let maxInput = total - minValue
  let finalInput = minInput + " " + maxInput

  console.log(finalInput)

}

let example = [1, 3, 5, 7, 9]

miniMaxSum(example)