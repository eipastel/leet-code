// 1. Produto dos Números: Dado um array de números, retorne o produto de todos eles.

const numbers = [2, 3, 4];

const product = numbers.reduce((prevNum, nowNumber) => {
  return prevNum * nowNumber
})

// console.log(product)



// 2. Quantidade de Letras a: Dado um array de palavras, determine o total de letras 'a' em todas as palavras.

const words = ["apple", "banana", "avocado"];

const onlyA = words.reduce((accumulator, currValue) => {

  let almostTotal = currValue.match(/a/g)
  const count = almostTotal ? almostTotal.length : 0
  return accumulator += count

}, 0)

//console.log(onlyA)