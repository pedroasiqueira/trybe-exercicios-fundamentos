// função que gera um número aleatório
const number = 10;
const generateRandomNumber = () => Math.round(Math.random() * number);
const time = 1000;

const randomPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateRandomNumber();
    if (randomNumber % 2 === 0) {
      resolve(randomNumber);
    } else {
      reject(
        new Error(
          `O número ${randomNumber} não é válido`,
        ),
      );
    }
  }, time);
});

randomPromise()
  .then((response) => {
    console.log(`Promise Resolvida. Número gerado é ${response}`);
  })
  .catch((error) => {
    console.log((`Promise rejeitada: ${error.message}`));
  });

// const resolvedPromise = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = generateRandomNumber();
//     resolve(randomNumber);
//   }, time);
// });

// const rejectedPromise = () => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = generateRandomNumber();
//     reject(new Error(`O número ${randomNumber} não é válido`));
//   }, time);
// });

// resolvedPromise().then((response) => {
//   console.log(`resolvedPromise: ${response}`)
// });

// rejectedPromise()
//   .then((response) => {
//     console.log(`rejectedPromise: ${response}`);
//   })
//   .catch((error) => {
//     console.log(`RejectedPromise: ${error.message}`);
//   });
