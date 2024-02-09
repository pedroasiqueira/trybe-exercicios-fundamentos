function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
}
// console.log(userEmail);
// userInfo();
// DECLARANDO LET, VAR, CONST DENTRO DA FUNÇÃO, A FUNÇÃO "SEGURA" ESSA VARIÁVEL E NÃO DEIXA ELA ESCAPAR DO ESCOPO.



if (true) {
    // inicio do escopo do if
    var userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20
//DECLARANDO LET, VAR, CONST DENTRO DO IF/ELSE, O CORPO DO IF/ESLSE "NÃO SEGURA" A VARIÁVEL DECLARADA COM LET/CONST E NÃO DEIXA ELA ESCAPAR DO ESCOPO. ------ JÁ COM O VAR, ELA NÃO SEGURA E PODE SER CHAMADA A VARIÁVEL FORA DO ESCOPO DO IF/ELSE.


age = 23;
console.log(age);

var age;



