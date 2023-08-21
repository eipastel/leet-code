function lonelyinteger(a) {

  let result

  a.forEach((value, index, self) => {
    let lengthAll = []
    self.map(x => {
      if(x === value) {
        lengthAll.push(x)
      }
    })
    if(lengthAll.length === 1) {
      result = lengthAll[0]
    }
  })

  return result

}

example = [1, 2, 3, 4, 3, 2, 1]

lonelyinteger(example)