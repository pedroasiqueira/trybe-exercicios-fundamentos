let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate']

//let searchForLastPizzas = pizzas[pizzas.length - 1]
//console.log(searchForLastPizzas)

//para adcionar valor em um array:
pizzas[5] = 'Peito de Peru';

//para substituir um valor em um array:
pizzas[3] = 'Duo'

//para adicionar um valor em um array na última posição sem precisar saber quantos valores tem dentro:
pizzas.push('Calabresa cremosa', 'Camarão Cremoso')

//para adicionar uma valor em um array na primeira posição:
pizzas.unshift('Brigadeiro')

//para saber o tamanho de um array:
console.log(pizzas.length)

//para colocar o array em ordem:
console.log(pizzas.sort())

//para chamar um valor só do array:
//console.log(pizzas[4]) //Tá pegando o valor ordenado, já que o sort() tá antes desse console

//para chamar todo os valor sem estar dentro das chaves, por meio de um laço de repetição:
//Observe que o laço vai percorrer o pizzas.lenght, por ele estar ali antes
for (let i = 0; i < pizzas.length; i += 1) {
    console.log(pizzas[i])
}

//para remover algum item do Array:
//.pop() -- para remover o último
//.shift() -- para remover o primeiro

pizzas.pop()
console.log(pizzas)
pizzas.shift()
console.log(pizzas)


//console.log(pizzas)