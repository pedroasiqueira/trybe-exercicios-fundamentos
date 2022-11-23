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