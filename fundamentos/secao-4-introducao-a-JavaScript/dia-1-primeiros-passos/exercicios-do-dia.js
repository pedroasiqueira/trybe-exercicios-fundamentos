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