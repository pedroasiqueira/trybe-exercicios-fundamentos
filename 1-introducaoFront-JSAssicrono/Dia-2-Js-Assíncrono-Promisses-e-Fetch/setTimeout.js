const firstNumber = 9;
const secondNumber = 3;

let thirdNumber = firstNumber + secondNumber;
console.log(thirdNumber);

const time = 1000;
setTimeout(() => {
  thirdNumber = firstNumber - secondNumber;
  console.log(thirdNumber);
}, time);

console.log(thirdNumber);
