// 1. Quadrado de Números: Dado um array de números, retorne um novo array onde cada elemento é o quadrado do número original.

const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map((num) => {
  return Math.pow(num, 2) 
})

//console.log(squares)


// 2. Nomes Maiúsculos: Dado um array de nomes, retorne um novo array onde todos os nomes estão em letras maiúsculas.

const names = ["Alice", "Bob", "Charlie"];

const allUpper = names.map((lowName) => {
  return lowName.toUpperCase()
})

//console.log(allUpper)


// 3. Comprimento das Palavras: Dado um array de palavras, retorne um novo array que contém o comprimento de cada palavra.

const words = ["hello", "world", "JavaScript", "array"];

const numberOfLetters = words.map((word, index) => {
  return words[index].length
})

// console.log(numberOfLetters)


// 4. Extrair Propriedades: Dado um array de objetos que têm uma propriedade 'name', retorne um novo array contendo apenas os valores dessa propriedade.

const people = [
  { name: "Daniela", age: 28 },
  { name: "Felipe", age: 34 },
  { name: "Mariana", age: 22 },
  { name: "Roberto", age: 45 }
];

const onlyNames = people.map((obj) => {
  return obj.name
})

// console.log(onlyNames)