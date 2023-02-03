// function printName() {
// const myName = 'Lucas';
//     return myName;
//   };
  
//   console.log(printName());

const printNamee = param => typeof param === 'string' ? `Meu nome é ${param}` : `Digite um nome`

const meuNome = printNamee('Pedro')

const contaPalavras = (frase) => `Quantidade de Palavras: ${frase.split(' ').length}`;
const contaCaracteres = (frase) => `Quantidade de Caracteres: ${frase.split('').length}`

console.log(contaPalavras(meuNome))
console.log(contaCaracteres(meuNome))

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade})

const objetoPessoa1 = objetoPessoa('Alexandre', 9)
console.log(objetoPessoa1)


console.log(objetoPessoa('Pedro', 27))