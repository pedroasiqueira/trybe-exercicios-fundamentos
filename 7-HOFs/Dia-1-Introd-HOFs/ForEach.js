const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

console.log(`
-----------------------------
`);

const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins'];

pessoasAprovadas.forEach((nome, index) => {
  pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
});//testar mudar essa função pra não modificar o array pessoasAprovadas e sim armazenar os dados em outro array.

console.log(pessoasAprovadas);

console.log(`
-----------------------------
`);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiply = (element) => console.log(element * 2);
numbers.forEach(multiply);
// numbers.forEach((element) => console.log(element * 2));

console.log(`
-----------------------------
`);

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
})