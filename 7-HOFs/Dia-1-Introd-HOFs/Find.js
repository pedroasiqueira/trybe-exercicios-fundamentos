//VERIFICA SE NO ARRAY TEM ALGUM NÚMERO DIVISIVEL POR 3 E 5.
// solução do course:
// const verifyNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

const numbers = [19, 21, 30, 3, 45, 22, 15];
const findNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(findNumbers);


//ENCONTRAR O PRIMEIRO NOME COM 5 LETRAS:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNames = names.find((name) => name.length === 5);
console.log(findNames);


//ENCONTRAR MUSICA COM ID IGUAL A '31031685':
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findMusica = musicas.find((musica) => musica.id === '31031685');

// Outra forma de fazer:
// const musica = (musica) => musica.id === '31031685';
// const findMusica = musicas.find(musica);

console.log(findMusica);

