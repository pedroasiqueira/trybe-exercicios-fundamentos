// acc ou ACUMULADOR: valor que vai ser ACUMULADO a cada iteração
// cur ou VALOR ATUAL: valor atual do item, a ser adc no acumulador
// VALOR INICIAL: valor da primeira iteração e, em geral, ao realizar somas, esse valor é 0

// array.reduce((acc, cur) => {}, valorInicial);
// OU
// const callback = (acc, cur) => {};
// array.reduce(callback, valorInicial)


//SOMA DO ARRAY valorIntens
const valorItens = [1, 32, 44, 2, 3];
valorItens.reduce((acc, curr) => {
  // console.log(`acumulador - acc:`, acc);
  // console.log(`valorAtual - curr:`, curr);
  // console.log(`a soma atual é:`, acc + curr);
  return acc + curr;
}, 0);

//MAIOR NÚMERO DO ARRAY numbers:
const numbers = [50, 85, -30, 3, 15];
const callbackNumbers = (acc, curr) => acc > curr ? acc : curr;
const bigNumber = (array) => array.reduce(callbackNumbers, 0);
// console.log((bigNumber(numbers)));

//SOMANDO OS NÚMEROS PARES DO ARRAY numbers2:
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const callbackNumbers2 = (acc, curr) => (curr % 2 === 0) ? acc + curr : acc;
const sumPar = (array) => array.reduce(callbackNumbers2, 0);
// console.log(sumPar(numbers2));
// console.log(numbers2.reduce((acc, curr) => acc + curr));

const filterPar = (array) => array.filter((element) => element % 2 === 0)
const sumFilterPar = filterPar(numbers2)
console.log(sumFilterPar.reduce((acc, curr) => acc + curr));



const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];
// RETORNE UM RELATÓRIO QUE DIZ QUAL MATERIA A PESSOA FOI MELHOR:
// Minha resolução:
const callbackMateria = (acc, curr) => acc.nota > curr.nota ? acc : curr;
const mapEstudantes = estudantes.map((element) => {
  // let nomes = element.nome
  let materiaMelhor = element.materias.reduce(callbackMateria, 0);
  return {name: element.nome, materia: materiaMelhor.name}
})
// console.log(mapEstudantes);

console.log(`
------------------------------------
`);

// Resolução do gabarito:
const callbackMateria2 = (acc, curr) => acc.nota > curr.nota ? acc : curr;
const melhorMateria = (array) => array.map((element) => ({
  nome: element.nome, materia: element.materias.reduce(callbackMateria2, 0).name,
}))
// console.log(melhorMateria(estudantes));

