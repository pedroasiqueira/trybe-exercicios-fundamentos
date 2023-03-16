const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => b.age - a.age);

console.log(people);

console.log(`
----------------------------------
`);

const gamers = [
  {
    nome: 'Eduardo',
    points: [20, 22, 100, 10, 0],
  },
  {
    nome: 'Ana',
    points: [0, 20, 10, 100, 100],
  },
  {
    nome: 'Bob',
    points: [0, 100, 10, 10, 5, 20],
  },
  {
    nome: 'Carlo',
    points: [3, 20, 10, 10, 10],
  }
]
// ordenando pelo nome:
gamers.sort((a, b) => a.nome > b.nome ? 1 : -1)
console.log(gamers);

console.log(`
----------------------------------
`);

// ordenando pelos pontos:
gamers.sort((a, b) => {
  let pointsA = 0;
  let pointsB = 0;
  a.points.forEach((element) => pointsA += element)
  b.points.forEach((element) => pointsB += element)
  return pointsA - pointsB;
})

console.log(gamers);

