const geradorEmail = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  
  return {nome, email: `${email}@trybe.com`};
};//porque quando coloquei esse nome, no objeto foi o nome:?

geradorEmail('Pedro Alexandre')
geradorEmail('Lili amor da vida de pedro')
// console.log(geradorEmail('Pedro Alexandre'));

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(geradorEmail));


const callbackSorteador = (myNumber, num) => myNumber === num ? `Parabéns` : `Tente novamente`
const sorteador = (myNumber, callbackSorteador) => {
  const num = Math.floor(Math.random() * 5) + 1;

  return callbackSorteador(myNumber, num);
};

// console.log(Math.floor(Math.random() * 5) + 1);
console.log(sorteador(3, callbackSorteador));