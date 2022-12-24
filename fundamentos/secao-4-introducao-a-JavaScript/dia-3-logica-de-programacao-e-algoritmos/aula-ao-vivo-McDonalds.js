let items = ['Big Mac', 'Big Tasty', 'Batata', 'McFlurry', 'Refrigerante', 'Suco', 'testeo', 'outro teste', 'vlavlavla'];
let price = [20, 30, 20, 78, 5, 4];

// let itemsMaisValor = [];

// for (let i = 0; i < items.length; i += 1) {
//      if (price[i] === undefined) {
//         itemsMaisValor.push(items[i] + " não possui valor ainda")
//      } else {
//         itemsMaisValor.push(items[i] + " = " + price[i])
//      }
// }
// console.log(itemsMaisValor);

// Eu que fiz essa resolução a cima hehe


let money = 24;
let cart = [];
let bigger = 0;

for( let index = 0; index < price.length; index += 1) {
    //console.log(items[index] + ' = ' + 'R$' + price[index])
    if(price[index] <= money) {
        cart.push(items[index])
    }
    
    for(let indexVerify = 0; indexVerify < price.length; indexVerify += 1) {
        if(index != indexVerify && (price[index] + price[indexVerify] <= money)) {
            cart.push(items[index] + ' e ' + items[indexVerify])
        }
    }
    if(price[index] <= money && price[index] > bigger) {
        bigger = price[index];
    }
}
console.log(cart);
console.log(bigger);
//50min aula 4.3 ao vivo