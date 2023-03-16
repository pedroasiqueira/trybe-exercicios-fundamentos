const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames);

console.log(`
--------------------------------
`);

const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

const negativeNumbers = [];
numbers.forEach((number) => {
  let multiply = number > 0 ? number * (-1) : number;
  return negativeNumbers.push(multiply);
});
console.log(negativeNumbers);
console.log(numbers);


console.log(`
--------------------------------
`);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => 
  listProducts.map((product, index) => ({[product]: listPrices[index]}));

console.log(updateProducts(products, prices));

console.log(`
--------------------------------
`);

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2));
const paresMenoresQueCincoMap = numeros.map((element) => {
  if (element < 5 && element % 2 === 0) {
    return `'${element}' é menor que 5 e divisível por 2`
  } else {
    return `'${element}' não é menor que 5 e divisível por 2`
  }
})
console.log(paresMenoresQueCincoMap);

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco);
