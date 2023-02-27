let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index <= 23; index += 1) {
//   console.log(index);
// }

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];


console.log(tasksList.length);
// 3

let ultimoValorDoArray = tasksList[tasksList.length - 1]
console.log(ultimoValorDoArray);

tasksList.push('Estudar e não ficar nada pendente quando começar HOFs')
console.log(tasksList[tasksList.length - 1]);


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');
let addContato = menu.push('Contato');

console.log(indexOfPortfolio);