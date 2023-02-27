let porcentagem = undefined;
let nota = null;


if(porcentagem > 100 || porcentagem < 0){
  nota = 'insira um valor de 0 a 100';
}
else if(porcentagem >= 90){
  nota = 'A';
}
else if(porcentagem >= 80){
  nota = 'B';
}
else if( porcentagem >= 70){
  nota = 'C';
}
else if( porcentagem >= 60){
  nota = 'D';
}
else if( porcentagem >= 50){
  nota = 'E';
}
else if( porcentagem < 50){
  nota = 'F';
}
else {
  nota = 'insira um valor numérico';
}
// console.log(nota);

let a = 6;
let b = 2;
let c = 1;
let resultado = '';

//SE PELO MENOS UM FOR PAR
// if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//   resultado = true;
// }
// else {
//   resultado = false;
// }

//SE PELO MENOS UM FOR IMPAR
if(a % 2 != 0 || b % 2 != 0 || c % 2 != 0){
  resultado = true;
}
else {
  resultado = false;
}
// console.log(resultado)

let custoProduto = 80;
let custoTotalProduto = custoProduto * 1.2
let valorDeVenda = 150;
let lucro = valorDeVenda - custoTotalProduto;

if(custoProduto < 0 || custoTotalProduto < 0 || valorDeVenda < 0){
  console.log('Insira um valor maior que zero nas opções.')
}
else {
  console.log(lucro * 1000)
}