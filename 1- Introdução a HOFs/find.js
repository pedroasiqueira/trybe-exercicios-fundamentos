// const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

// const a = idades.find((idade) => idade < 20)
// const b = idades.find((idade) => idade > 50)
// const c = idades.find((idade) => idade === 33)

// console.log(a)
// console.log(b)
// console.log(c)


const numbers = [19, 21, 30, 3, 45, 22, 15];

const arrNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0 && number)
console.log(arrNumbers)

// console.log(numbers.find((number) => {
//     if (number % 3 === 0 && number % 5 === 0) {
//         return number
//     }
// }))


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const arrNames = names.find((name) => name.length === 5 && name)
console.log(arrNames)

// console.log(names.find((name) => {
//     if (name.length === 5) {
//         return name
//     }
// }))


const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];

const arrMusicas = musicas.find((music) => music.id === '31031685' && music)
console.log(arrMusicas)
  
//   console.log(musicas.find((music) => {
//     if (music.id === '31031685') {
//         return music
//     }
//   }))
