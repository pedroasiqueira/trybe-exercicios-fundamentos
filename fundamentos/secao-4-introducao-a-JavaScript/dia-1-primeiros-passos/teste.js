const grossSalary = 3000;

if (grossSalary <= 1556.94) {
    let salaryLiquido = grossSalary * 0.92
    console.log("Salário descontado o INSS (alíquota de 8%): " + salaryLiquido)
}
else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    let salaryLiquido = grossSalary * 0.91
    console.log("Salário descontado o INSS (alíquota de 9%) é: " + salaryLiquido)
    if (salaryLiquido >= 1903.99 && salaryLiquido <= 2826.65) {
        let deductedSalaryIR = (salaryLiquido * 0.075) - 142.80
        let salaryLiquidoTotaldeductedIRandINSS = salaryLiquido - deductedSalaryIR
        console.log("Salário Liquido descontado INSS e IR: " + salaryLiquidoTotaldeductedIRandINSS)
    }
}
else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    let salaryLiquido = grossSalary * 0.89
    console.log("Salário descontado o INSS (alíquota de 11%) é: " + salaryLiquido)
    if (salaryLiquido >= 1903.99 && salaryLiquido <= 2826.65) {
        let deductedSalaryIR = (salaryLiquido * 0.075) - 142.80
        let salaryLiquidoTotaldeductedIRandINSS = salaryLiquido - deductedSalaryIR
        console.log("Salário Liquido descontado INSS e IR: " + salaryLiquidoTotaldeductedIRandINSS)
    }
    else if (salaryLiquido >= 2826.66 && salaryLiquido <= 3751.05) {
        let deductedSalaryIR = (salaryLiquido * 0.15) - 354.80
        let salaryLiquidoTotaldeductedIRandINSS = salaryLiquido - deductedSalaryIR
        console.log("Salário Liquido descontado INSS e IR: " + salaryLiquidoTotaldeductedIRandINSS)
    }
    else if (salaryLiquido >= 3751.06 && salaryLiquido <= 4664.68) {
        let deductedSalaryIR = (salaryLiquido * 0.225) - 636.13
        let salaryLiquidoTotaldeductedIRandINSS = salaryLiquido - deductedSalaryIR
        console.log("Salário Liquido descontado INSS e IR: " + salaryLiquidoTotaldeductedIRandINSS.toFixed(2))
    }
}
else if (grossSalary >= 5189.82) {
    let salaryLiquido = grossSalary - 570.88
    console.log("Salário descontado o INSS (alíquota Máxima de 570,88) é: " + salaryLiquido)
    if (salaryLiquido >= 3751.06 && salaryLiquido <= 4664.68) {
        let deductedSalaryIR = (salaryLiquido * 0.225) - 636.13
        let salaryLiquidoTotaldeductedIRandINSS = salaryLiquido - deductedSalaryIR
        console.log("Salário Liquido descontado INSS e IR: " + salaryLiquidoTotaldeductedIRandINSS.toFixed(2))
    }
    else if (salaryLiquido > 4664.68) {
        let deductedSalaryIR = (salaryLiquido * 0.275) - 869.36
        let salaryLiquidoTotaldeductedIRandINSS = salaryLiquido - deductedSalaryIR
        console.log("Salário Liquido descontado INSS e IR: " + salaryLiquidoTotaldeductedIRandINSS.toFixed(2))
    }
}


const n = 100;

let resultado = 0;
for (let index = 0; index <= n; index += 1) {
  resultado += index;
};
console.log(resultado);
