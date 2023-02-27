let salarioBruto = 3000;
let valorLiquido = null;
let aliquotaINSS = null;

let inss8Porcento = salarioBruto <= 1556.94;
let inss9Porcento = salarioBruto >= 1556.95 && salarioBruto <= 2594.92;
let inss11Porcento = salarioBruto >= 2594.93 && salarioBruto <= 5189.82;
let inssMaxima = salarioBruto >= 5189.82;


if(inss8Porcento){
  aliquotaINSS = salarioBruto * 0.92;
} else if(inss9Porcento){
  aliquotaINSS = salarioBruto * 0.91;
} else if(inss11Porcento){
  aliquotaINSS = salarioBruto * 0.89;
} else if(inssMaxima){
  aliquotaINSS = salarioBruto - 570.88;
}

let ir7MeioPorcento = aliquotaINSS >= 1903.99 && aliquotaINSS <= 2826.65;
let ir15Porcento = aliquotaINSS >= 2826.66 && aliquotaINSS <= 3751.05;
let ir22MeioPorcento = aliquotaINSS >= 3761.06 && aliquotaINSS <= 4664.68;
let irMaximo = aliquotaINSS > 4664.68;
let irAliquota;

if(ir7MeioPorcento){
  irAliquota = (aliquotaINSS * 0.075) - 142.80;
  valorLiquido = aliquotaINSS - irAliquota;
}
else if(ir15Porcento){
  irAliquota = (aliquotaINSS * 0.15) - 354.80;
  valorLiquido = aliquotaINSS - irAliquota;
}
else if(ir22MeioPorcento){
  irAliquota = (aliquotaINSS * 0.225) - 636.13;
  valorLiquido = aliquotaINSS - irAliquota;
}
else if(irMaximo){
  irAliquota = (aliquotaINSS * 0.275) - 869.36;
  valorLiquido = aliquotaINSS - irAliquota;
}
else if(aliquotaINSS <= 1903.98){
  valorLiquido = aliquotaINSS;
}

console.log(valorLiquido)