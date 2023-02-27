let a = 23;
let b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

let number1 = 17;
let number2 = 15;
let number3 = 25;

// if(number1 > number2){
//   console.log(number1)
// } else if(number2 > number1) {
//   console.log(number2)
// }

if(number1 > number2 && number1 > number3){
  console.log(number1);
} else if(number2 > number1 && number2 > number3){
  console.log(number2);
} else if (number3 > number1 && number3 > number2){
  console.log(number3);
}

let number = 0;

if(number < 0){
  console.log('negativo');
} else if(number > 0){
  console.log('positivo');
} else {
  console.log('zero')
}

let ang1 = 60;
let ang2 = 60;
let ang3 = 60;

let sumOfAngs = ang1 + ang2 + ang3;
let valuesPositives = ang1 > 0 && ang2 > 0 && ang3 > 0;

if(sumOfAngs === 180){
  console.log(true);
} else if(ang1 < 0 || ang2 < 0 || ang3 < 0){
  console.log('Erro. Digite um angulo válido');
} else {
  console.log(false);
}


let peca = 'raInHa'.toLocaleLowerCase();
let movimentacao = '';

switch(peca){
  case 'peão':
    movimentacao = 'Frente, uma casa por vez';
    break;

  case 'bispo':
    movimentacao = 'Diagonal, quantas casas quiser';
    break;

  case 'cavalo':
    movimentacao = 'Movimenta em L';
    break;

  case 'dama':
    movimentacao = 'Movimenta pra frente, trás e lados. Quantas casas quiser';
    break;

  case 'rainha':
    movimentacao = 'Movimenta para qualquer lado e diagonal quantas casas quiser';
    break

  case 'rei':
    movimentacao = 'Movimenta para qualquer lado e diagonal, uma casa.';
    break;

  default:
    movimentacao = 'Digite uma peça correta do Xandrez';
    break;
}

console.log(movimentacao)