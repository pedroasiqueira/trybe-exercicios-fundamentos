let numbersPedro = [1, 2, 3, 4, 5, 6];
let numbersLili = [10, 14, 28, 34 ,56, 23];
let numbersSorteioTestePedro = [9, 8, 7, 6, 5, 4];
let numbersSorteioTesteLili = [9, 34, 7, 14, 5, 10];
let numbersSorteio = [];

for (let i = 0; i < 6; i += 1){
  numbersSorteio.push(Math.floor(Math.random() * 60))
}
// console.log(`Números sorteados: ${numbersSorteio}`)

const functionMegaSena = (a, b) => {
  let acertos = 0;
  for (let index = 0; index < a.length; index += 1){
    for (let value = 0; value < b.length; value += 1){
      if (a[index] === b[value]){
        acertos += 1;        
      }
    }
  }
 return acertos
}

console.log(functionMegaSena(numbersLili, numbersSorteio))

