// 1. Números Maiores que Dez: Dado um array de números, retorne um novo array com apenas os números que são maiores que dez.

const numbers = [5, 12, 3, 18, 7];

const moreThan = numbers.filter(num => num > 10)

// console.log(moreThan)



// 2. Nomes Curtos: Dado um array de nomes, retorne um novo array com apenas os nomes que têm menos de 5 caracteres.

const names = ["Ana", "Roberto", "Jo", "Fernanda"];

const lessThanFive = names.filter(name => name.length < 5)

// console.log(lessThanFive)



// 3. Produtos Caros: Dado um array de produtos com propriedades name e price, retorne um novo array contendo apenas os produtos que custam mais de R$100.

const products = [
  { name: "Camisa", price: 50 },
  { name: "Computador", price: 1200 },
  { name: "Caneta", price: 2 },
];

const expensiveProducts = products.filter((product, index) => {
  return products[index].price > 100
})

// console.log(expensiveProducts)