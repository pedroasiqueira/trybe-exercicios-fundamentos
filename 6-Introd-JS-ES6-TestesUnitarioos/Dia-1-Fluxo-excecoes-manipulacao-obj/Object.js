let person = {
  firstName: 'Pedro',
  secondName: 'Alexandre',
  lastName: 'Lima',
}

person.born = 'Natal';
// console.log(person);
console.log(Object.keys(person).includes('firstName'));

let arrayKeysPerson = Object.keys(person);
console.log(arrayKeysPerson);

let arrayValuesPerson = Object.values(person);
console.log(arrayValuesPerson);

let arrayEntriesPerson = Object.entries(person);
console.log(arrayEntriesPerson);


let arrayKeysPersonLowerCase = [];
for(let index = 0; index < arrayKeysPerson.length; index += 1){
  arrayKeysPersonLowerCase.push(arrayKeysPerson[index].toLowerCase());
}

console.log(arrayKeysPersonLowerCase.includes('firstname'))