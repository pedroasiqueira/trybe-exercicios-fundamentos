const myNAme = "Pedro"
const birthCity = "Natal"
let birthYear = 1995

//console.log(myNAme, birthCity, birthYear)

//Tipos primitivos, Tipagem dinâmica e Operações aritméticas

let movie = "Avengers"; //string literal
let score = 10.89 //number literal
let isValid = true; //boolean
let namee; //undefined
let color = null; //redefinição

//console.log(typeof score)

//console.log(2 ** 3)


//IF / ELSE

//Exemplo da aula:
let trybe = 16.42;

if (trybe >= 14 && trybe < 14.40) {
    console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo")
}
else if (trybe >= 19.40 && trybe <= 20) {
    console.log("Fechamento")
}
else {
    console.log("Fora dos momentos síncronos")
}

const aprovado = 80;
const notaMinima = 60;
const pessoa = 79;

if (pessoa >= aprovado) {
    console.log("Parabéns, você foi aprovada(o)")
}
else if (pessoa < aprovado && pessoa > notaMinima) {
    console.log("Você está na nossa lista de espera")
}
else {
    console.log("Você foi reprovado")
}

//Operadores Lógicos

const currentHour = 3;
let message = "";
if (currentHour >= 22) {
    message = console.log("Não deveriamos comer nada, é hora de dormir")
}
else if (currentHour >= 18 && currentHour < 22) {
    message = console.log("Rango da noite, vamos jantar :D")
}
else if (currentHour >= 14 && currentHour < 18) {
    message = console.log("Vamos fazer um bolo pro café da tarde?")
}
else if (currentHour >= 11 && currentHour < 14) {
    message = console.log("Hora do almoço!!!")
}
else if ( currentHour >= 4 && currentHour < 11) {
    message = console.log("Hmmm, cheiro de café recém-passado")
}
else (console.log("Vai dormir morcego"))


let weekDay = "domingo"

if ( weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log ("Oba, mais um dia de aprendizado na Trybe >:D")
}
else if (weekDay === "sabado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU")
}


//switch/case

let resultado ="aprovada"

switch(resultado) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)")
        break;
    case "lista":
        console.log("Você está na nossa lista de espera")
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)")
        break;
    default: console.log("Informação incorreta")
}