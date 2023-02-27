let cenouras = true;
let leite = true;
let arroz = true;
let feijao = true;
let listaDeCompras = cenouras && leite && arroz && feijao;
// console.log(listaDeCompras);

let currentHour = 23;
let message = '';

if (currentHour >= 22 && currentHour < 24) {
  message = 'Não deveriamos comer nada, é hora de dormir'
} else if (currentHour >= 18 && currentHour < 22){
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18){
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14){
  message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour < 11){
  message = 'Hmmm, cheiro de café recém-passado';
} else if (currentHour >= 0 && currentHour < 4){
  message = 'Vai dormir condenado'
} else {
  message = `${currentHour} é um horário inexistente. Insira um horário correto das 00 às 24`
}

console.log(message)


let weekDay = 'Quarta-feira'.toLocaleLowerCase()

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira'){
  console.log('Oba, mais um dia de aprendizado na Trybe >:D')
} else if (weekDay === 'sabado' || weekDay === 'domingo'){
  console.log('FINALMENTE. descanso merecido! UwU!')
} else {
  console.log(`${weekDay} não é dia de semana. Insira um dia de semana`)
}


console.log(!(2 + 2) === 4);