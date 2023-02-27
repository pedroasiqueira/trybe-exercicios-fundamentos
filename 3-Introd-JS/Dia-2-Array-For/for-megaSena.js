// let numero = 4;

// for(let index = 0; index <= 10; index += 1){
//   let tabuada = numero * index
//   console.log(tabuada);
// }


let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let index = 0; index < groceryList.length; index += 1){
  // console.log(groceryList[index])
}


let fruits = [3, 4, 10, 1, 12];
let sumFruits = 0;
for (let soma = 0; soma < fruits.length; soma += 1){
  sumFruits += fruits[soma]
}

if (sumFruits > 15){
  console.log(sumFruits)
} else {
  console.log('Valor menor que 16')
}


let numbersPedro = [1, 2, 3, 4, 5, 6];
// let numbersSorteio = [9, 8, 7, 6, 5, 4];
let numbersSorteio = [];

for (let i = 0; i < 6; i += 1){
  numbersSorteio.push(Math.floor(Math.random() * 60))
}
// console.log(numbersSorteio)

let acertos = 0;

for (let index = 0; index < numbersPedro.length; index += 1){
  for (let value = 0; value < numbersSorteio.length; value += 1){
    if (numbersPedro[index] === numbersSorteio[value]){
      acertos += 1;
    }
  }
}

// console.log(acertos)

