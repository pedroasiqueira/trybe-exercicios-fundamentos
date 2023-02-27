let clientesTrybeBank = ['Ada', 'John', 'Gus'];

const seForString = (cliente) => {
  let position = clientesTrybeBank.indexOf(cliente);
  if(clientesTrybeBank.includes(cliente)){
    clientesTrybeBank.splice(position, 1);
    return `Cliente '${cliente}' removido com sucesso!`;
  } else {
    return `O nome '${cliente}' não está registrado no nosso banco de dados`
  }
}


const removeClienteTB = (clienteTB) => {
  if(typeof clienteTB === 'string'){
    return seForString(clienteTB)
  } else {
    return `Erro: '${clienteTB}' não é uma 'string'`
  }
};

// console.log(clientesTrybeBank);
// console.log(removeClienteTB('Ada'));
// console.log(clientesTrybeBank);

const media = (a, b, c) => (a + b + c) / 3;

console.log(media(10, 15, 20))

const caracteres = (carac, numberOfRepetition) => {
  let arr = [];
  for(let index = 0; index < numberOfRepetition; index += 1){
    arr.push(carac)
  }
  return arr
}

console.log(caracteres('*', 100))