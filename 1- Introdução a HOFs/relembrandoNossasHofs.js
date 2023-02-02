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