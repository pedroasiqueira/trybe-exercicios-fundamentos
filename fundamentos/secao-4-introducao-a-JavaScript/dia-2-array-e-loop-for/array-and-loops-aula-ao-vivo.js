const pedroGame = [4, 22, 23, 26, 34, 46];
console.log('Jogo de Pedro:', pedroGame)

/*const number1 = 46;
const number2 = 34;
const number3 = 26;
const number4 = 23;
const number5 = 22;
const number6 = 4;

const megaSenaNumbers = [number1, number2, number3, number4, number5, number6];*/

/*const number1 = Math.floor(Math.random() * 60) +1;
const number2 = Math.floor(Math.random() * 60) +1;
const number3 = Math.floor(Math.random() * 60) +1;
const number4 = Math.floor(Math.random() * 60) +1;
const number5 = Math.floor(Math.random() * 60) +1;
const number6 = Math.floor(Math.random() * 60) +1;

const megaSenaNumbers = [number1, number2, number3, number4, number5, number6];*/

let megaSenaNumbers = [];

for (let i = 0; i < 6; i += 1) {
    megaSenaNumbers.push(Math.floor(Math.random() * 60) +1);
}

console.log('Jogo sorteado:', megaSenaNumbers);

let numberOfHits = 0;

for(let i = 0; i < megaSenaNumbers.length; i += 1) {
    let drawnNumber = megaSenaNumbers[i];
    //console.log('Número sorteado', drawnNumber);
    
    for (let cont = 0; cont < pedroGame.length; cont += 1) {
        let studentNumber = pedroGame[cont];
        //console.log('Número Pedro', studentNumber);

        if(drawnNumber === studentNumber) {
            numberOfHits += 1;
        }
    }
}

console.log('Número de acertos', numberOfHits)

/*for (let value of pedroGame) {
    console.log(value)
}*/