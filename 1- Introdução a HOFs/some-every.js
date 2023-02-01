const pessoass = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];
  
  const verificaCargo = pessoass.some((pessoa) => pessoa.cargo === 'Gerência');
//   const verificaCargo = pessoass.some((pessoa) => pessoa.cargo === 'Product Owner');
  
//   console.log(verificaCargo);



const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames));
// console.log(verifyFirstLetter('X', listNames));


const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado');
  
// console.log(verifyGrades);



const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((value) => value === name);

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));



const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
const verifyAges = (arr, minAge) => arr.every((idade) => idade.age > minAge)
  
//   console.log(verifyAges(people, 18));
//   console.log(verifyAges(people, 14));

const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
    { nome: 'Aline', idade: 40 },
  ];

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`))

const encontrar = pessoas.find((pessoa) => pessoa.nome === 'Aline')
console.log(encontrar)

const someVerifique = pessoas.some((pessoa) => pessoa.idade > 40)
console.log(someVerifique)

const everyVerifique = pessoas.every((pessoa) => pessoa.idade > 30)
console.log(everyVerifique)