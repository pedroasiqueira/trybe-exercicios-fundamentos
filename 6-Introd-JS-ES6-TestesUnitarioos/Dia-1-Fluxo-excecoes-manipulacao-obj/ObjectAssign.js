let person = {
  firstName: 'Pedro',
  secondName: 'Alexandre',
  lastName: 'Lima',
}

person.born = 'Natal';
console.log(person);

const rioGrandeDoNorte = {
  state: 'Rio Grande do Norte',
}

const statesObj = {
  state1: {state: 'Ceara'},
  state2: {state: 'Rio de Janeiro'},
  state3: {state: 'São Paulo'},
  state4: {state: 'Belo Horizonte'},
  state5: {state: 'Rio Grande do Norte'},
  state6: {state: 'Paraiba'},
}

// let adcState = Object.assign(person, statesObj.state5);
// console.log(adcState);
// console.log(person);

let personClone = Object.assign({}, person, statesObj.state5);
console.log(personClone);
console.log(person);