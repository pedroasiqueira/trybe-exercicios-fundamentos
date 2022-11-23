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

const primeiroAngulo = 182;
const segundoAngulo = -1;
const terceiroAngulo = -1;

if (primeiroAngulo + segundoAngulo + terceiroAngulo === 180 && primeiroAngulo >= 0 && segundoAngulo >= 0 && terceiroAngulo >= 0) {
    console.log("true")
}
else if (primeiroAngulo + segundoAngulo + terceiroAngulo !== 180 && primeiroAngulo >= 0 && segundoAngulo >= 0 && terceiroAngulo >= 0) {
    console.log("false")
}
/*else if (primeiroAngulo <= -1 || segundoAngulo <= -1 || terceiroAngulo <= -1) {
    console.log("erro")
}*/
else {
    console.log("erro")
}

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