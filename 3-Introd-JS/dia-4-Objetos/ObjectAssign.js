let person = {
  name: 'Roberto',
};

let lastName = {
  lastName: 'Silva',
};

let clone = Object.assign(person, lastName);

console.log(clone);
console.log(person);

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone);
console.log(person);
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone);
console.log(person);

console.log('-------')

let person2 = {
  name:'Roberto',
};

let lastName2 = {
  lastName: 'Silva',
};

let newPerson = Object.assign({},person2,lastName2);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person2);
console.log(lastName2);