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



for (let i = 0; i < number.length; i += 1) {
    if(number[i] % 2 !== 0 ) {
        console.log(number[i])
    }
}

let array = [];

for (let i = 1; i <= 25; i += 1) {
    array.push(i);
}

for (let i = 0; i < array.length; i += 1) {
    console.log(array[i] / 2)
}

//console.log(array)