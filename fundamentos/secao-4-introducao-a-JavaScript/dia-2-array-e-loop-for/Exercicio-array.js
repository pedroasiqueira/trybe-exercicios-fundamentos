let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < number.length; i += 1) {
    soma += number[i];
}

let media = soma / number.length

console.log(soma)
console.log(media)

if(media > 20) {
    console.log("valor maior que 20")
} else if (media <= 20){
    console.log("valor menor ou igual a 20")
}

let maiorNumero = number[0];

for (let i = 1; i < number.length; i += 1) {
    if(number[i] > maiorNumero) {
        maiorNumero = number[i]
    }
}
console.log(maiorNumero)



let numerosImpares = 0;

for (let i = 0; i < number.length; i += 1) {
    let checkNumbers = number[i] % 2
    if (checkNumbers % 2 === 1) {
        numerosImpares += 1;
    }
}

if (numerosImpares === 0) {
    console.log('nenhum valor ímpar encontrado')
} else {
    console.log(numerosImpares)
}



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}
