const books = require('./data');

//ENCONTRAR NOME DA PRIMEIRA PESSOA AUTORA DO LIVRO NASCIDA NO ANO DE 1947
// const expectedResult = 'Stephen King';
const authorBornIn1947 = (born) => books.find((element) => element.author.birthYear === born).author.name;
// console.log(authorBornIn1947(1947));


// RETORNE O NOME DO LIVRO COM MENOR NÚMERO DE CARACTERES
const expectedResult = 'Duna';
const smallerName = (array) => {
  let nameBook = array[0].name;
  const callback = (element) => {
    if(element.name.length < nameBook.length){
      nameBook = element.name
    }}
  array.forEach(callback);

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// console.log(smallerName(books));

// ENCONTRE O PRIMEIRO LIVRO CUJO NOME POSSUA 26 CARACTERES.
// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

const getNamedBook = (array, num) =>
  array.find((element) => element.name.length === num)
// console.log(getNamedBook(books, 26));

// FAÇA UMA FUNÇÃO QUE RETORNE 'TRUE' SE TODAS AS PESSOAS AUTORAS TIVEREM NASCIDO NO SÉCULO XX, OU FALSE, CASO CONTRÁRIO. 
// const expectedResult = false;

const everyoneWasBornOnSecXX = (array) => {
  return array.every((element) => element.author.birthYear > 1900 && element.author.birthYear < 2000)
}
// console.log(everyoneWasBornOnSecXX(books));


// FAÇA UMA FUNÇÃO QUE RETORNE TRUE, SE ALGUM LIVRO FOI LANÇADO NA DÉCADA DE 80, E FALSE, CASO CONTRÁRIO.
// const expectedResult = true;

const someBookWasReleaseOnThe80s = (array) => {
  return array.some((element) => element.releaseYear > 1979 && element.releaseYear < 1990)
}
// console.log(someBookWasReleaseOnThe80s(books));

// FAÇA UMA FUNÇÃO QUE RETORNE TRUE, CASO NENHUMA PESSOA AUTORA TENHA NASCIDO NO MESMO ANO, E FALSE, CASO CONTRÁRIO.
// const expectedResult = false;

// const authorUnique = () => {
//   return books.every((book) => 
//     books.some((bookSome) => 
//   (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)))
// }

// const expectedResult = false;

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());