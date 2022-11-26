const a = 0;
const b = 37;
const c = 51;

/*if (a > b) {
    console.log(a)
}
else {
    console.log(b)
}

if (a > b && a > c) {
    console.log(a)
}
else if (b > a && b > c) {
    console.log(b)
}
else {
    console.log(c)
}

if (a > 0) {
    console.log("positive")
}
else if (a < 0) {
    console.log("negative")
}
else if (a === 0) {
    console.log("zero")
}*/


let peça = "CAVAlo".toLowerCase()

switch(peça) {
    case "bispo":
        console.log("diagonal")
        break;
    case "cavalo":
        console.log("movimentos em L")
        break;
    default: console.log("peça não encontrada no sistema")
}

let nota = 90;

if (nota >= 90 && nota <= 100) {
    console.log("A")
}
else if (nota >= 80 && nota < 90) {
    console.log("B")
}
else if (nota >= 70 && nota < 80) {
    console.log("C")
}
else if (nota >= 60 && nota < 70) {
    console.log("D")
}
else if (nota >= 50 && nota < 60) {
    console.log("E")
}
else if (nota < 50 && nota === 0) {
    console.log("F")
}
else if (nota < 0 || nota > 100) {
    console.log("erro")
}


const d = 1;
const e = 1;
const f = 1;

if (d % 2 === 1 || e % 2 === 1 || f % 2 === 1) {
    console.log("true")
} else {
    console.log(false)
}

const cost = 10;
const resale = 20;
let tax = 1.2
let totaCost = cost * tax
let saleQuantity = 10;
let totalProfit = (resale * saleQuantity) - (totaCost * saleQuantity);

if ( cost >= 0 && resale >= 0 && saleQuantity >= 0) {
    console.log(totalProfit)
} else {
    console.log("erro: valores não podem ser negativos")
}


const grossSalary = 10000;

if (grossSalary <= 1556.94) {
    console.log("Salário descontado o INSS (alíquota de 8%): " + (grossSalary * 0.92))
}
else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    console.log("Salário descontado o INSS (alíquota de 9%) é: " + (grossSalary * 0.91))
}
else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    console.log("Salário descontado o INSS (alíquota de 11%) é: " + (grossSalary * 0.89))
}
else if (grossSalary >= 5189.82) {
    console.log("Salário descontado o INSS (alíquota Máxima de 570,88) é: " + (grossSalary - 570.88))
}