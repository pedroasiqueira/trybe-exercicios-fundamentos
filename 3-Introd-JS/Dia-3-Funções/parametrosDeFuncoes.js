let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function cumprimentaCliente(cliente) {
  return 'Olá, ' + cliente + '. Essa é sua conta do TrybeBank'
}
// console.log(cumprimentaCliente(clientesTrybeBank));


let status = 'deslogado'; // o status padrão é deslogado

function logarDeslogar() { // aqui criamos uma função para verificar o status
  if (status === 'deslogado') { // se a pessoa usuária estiver deslogada, alteramos o status para logado
    status = 'logado';
  } else { // caso esteja logado, alteramos para deslogado
    status = 'deslogado';
  }
}
// console.log(status);

logarDeslogar();
// console.log(status);

logarDeslogar();
// console.log(status);


function sacar(valor, saldo) {
  if (valor >= 1 && saldo >= 0) {
      if (valor <= saldo) {
          return "Saque realizado com sucesso. Novo saldo: R$ " + (saldo - valor) + ",00";
      } else {
          return "Saldo insuficiente. Seu saldo atual é: R$ " + saldo + ",00";
      }
  } else {
      return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
  }
}

// console.log(sacar(2, 20));
// console.log(sacar(2, -5));
// console.log(sacar(2, 0));


// ADC CLIENTE AO ARRAY: clientesTrybeBank.push('Pedro')

const adcClienteTB = (nomeClienteTB) => {
  if(typeof nomeClienteTB === 'string'){
    clientesTrybeBank.push(nomeClienteTB)
    return `Cliente '${nomeClienteTB}' adicionado com sucesso!`
  } else {
    return `Erro: ${nomeClienteTB} não é uma 'string'.`
  }
}
// console.log(adcClienteTB('Pedro'))
// console.log(adcClienteTB('Lili'))
// console.log(adcClienteTB('23'))
// console.log(adcClienteTB(23))

const removeClienteTB = (clienteTB) => {
  let position = clientesTrybeBank.indexOf(clienteTB);
  if(typeof clienteTB === 'string'){
    if(clientesTrybeBank.includes(clienteTB)){
      clientesTrybeBank.splice(position, 1);
      return `Cliente '${clienteTB}' removido com sucesso!`;
    } else {
      return `O nome '${clienteTB}' não está registrado no nosso banco de dados`
    }
  } else {
    return `Erro: '${clienteTB}' não é uma 'string'`
  }
};

// console.log(clientesTrybeBank);
// console.log(removeClienteTB('pedro'));
// console.log(clientesTrybeBank);