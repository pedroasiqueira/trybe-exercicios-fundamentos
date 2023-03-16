const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];
//Verifica se tem alguém com o cargo "Gerência"
const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');

console.log(verificaCargo);

//Verifica se tem alguém com o cargo "Product Owner"
const verificaCargoProductOwner = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');

// console.log(verificaCargoProductOwner);

//Verifica se existe algum nome que comece com a letra desejada
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames));
// console.log(verifyFirstLetter('X', listNames));


// let pedro = 'pedro';
// console.log(pedro[0]);