let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sumOfNumbers = 0;

for(let i of numbers){
  sumOfNumbers += i;
}

let mediaAritmetica = sumOfNumbers / numbers.length;


if(mediaAritmetica > 20){
  console.log('Valor maior que 20')
} else {
  console.log('Valor menor ou igual a 20')
}

let numerosImpares = 0;
for(let i of numbers){
  if (i % 2 != 0){
    numerosImpares += 1
  }
}
// console.log(numerosImpares)

let arrayNovo= []
for(let index = 1; index <= 25; index += 1){
  arrayNovo.push(index / 2);
}
// console.log(arrayNovo);

let word = 'pedro';
let drow = '';

// for(let index = 0; index < word.length; index += 1) {
//   drow += word[word.length - 1 - index];
// }
drow = word.split('').reverse().join('');

console.log(drow);


let array = ['java', 'javascript', 'python', 'html', 'css', 'maiorpalavraparateste'];
let big = array[0];
let small = array[0];

for(let index = 1; index < array.length; index += 1){
  if(array[index].length > big.length){
    big = array[index];
  }
}

for(let index = 1; index < array.length; index += 1){
  if(array[index].length < small.length){
    small = array[index]
  }
}

console.log(big);
console.log(small);