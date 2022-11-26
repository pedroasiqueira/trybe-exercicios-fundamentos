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
    console.log("Erro: Angulo inválido")
}

//Outra forma de se fazer o if/else do triangulo

const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = -15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}


//Outra forma de se fazer o if/else da questão das vendas


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};




let aliquotOfINSS;
let aliquotOfIR;

let grossSalary = 3000;

if( grossSalary <= 1556.94) {
  aliquotOfINSS = grossSalary * 0.08
} else if (grossSalary <= 2594.92) {
  aliquotOfINSS = grossSalary * 0.09
} else if (grossSalary <= 5189.82) {
  aliquotOfINSS = grossSalary * 0.11
} else {
  aliquotOfINSS = 570.88
}

let salaryDeductedAliquotOfINSS = grossSalary - aliquotOfINSS

//console.log(salaryDeductedAliquotOfINSS)

if(salaryDeductedAliquotOfINSS <= 1903.98) {
  aliquotOfIR = 0
} else if (salaryDeductedAliquotOfINSS <= 2826.65) {
  aliquotOfIR = (salaryDeductedAliquotOfINSS * 0.075) - 142.80
} else if (salaryDeductedAliquotOfINSS <= 3751.05) {
  aliquotOfIR = (salaryDeductedAliquotOfINSS * 0.15) - 354.80
} else if (salaryDeductedAliquotOfINSS <= 4664.68) {
  aliquotOfIR = (salaryDeductedAliquotOfINSS * 0.225) - 636.13
} else {
  aliquotOfINSS = (salaryDeductedAliquotOfINSS * 0.275) - 869.36
}

console.log("Salário liquido será: " + (salaryDeductedAliquotOfINSS - aliquotOfIR))