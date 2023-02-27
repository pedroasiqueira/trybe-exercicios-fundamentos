let nome = null; //Depois testar nos exercicios de for se posso declarar assim para depois jogar o resultado de uma soma dentro

const numbers = [1, 2, 3, 4, 5]
for(let index = 0; index < numbers.length; index += 1) {
  nome += numbers[index];
}
console.log(nome)


// let a = 0;
// console.log(a++); // 0, pois o console.log ocorre antes do incremento.
// menos nítido
// let a = 0;
// console.log(a += 1); // 1, pois a atribuição ocorre antes
let a = 0;
a += 1;
// console.log(a); // leitura mais nítida


let patientId = 50;
let isEnrolled = true;
let patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
let patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientInfo)
console.log(typeof patientEmail)
console.log(typeof patientAge)


let base = 5;
let heigth = 8;
let area = base * heigth;
let perimeter = (base * 2) + (heigth * 2);

console.log(perimeter)