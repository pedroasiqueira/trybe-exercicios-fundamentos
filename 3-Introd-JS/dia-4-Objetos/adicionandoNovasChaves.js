let customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
let lastName = 'Ferreira';

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(customer, newKey, lastName);
console.log(customer);

newKey = 'fullName';
let fullName = customer.firstName + ' ' + customer.lastName;

addProperty(customer, newKey, fullName);
console.log(customer);


let student = {};

const addPropriedadesObj = (obj, chave, valor) => obj[chave] = valor;

addPropriedadesObj(student, 'FirstName', 'Pedro');
console.log(student);
addPropriedadesObj(student, 'Email', 'peedro.siqueiraa@hotmail.com')
addPropriedadesObj(student, 'Tel', '(84)99172-7336')
addPropriedadesObj(student, 'GitHub', 'pedroasiqueira')
addPropriedadesObj(student, 'Linkedin', 'Em construção')
console.log(student);