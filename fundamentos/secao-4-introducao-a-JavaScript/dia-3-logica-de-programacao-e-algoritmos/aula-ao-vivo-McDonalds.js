let items = ['Big Mac', 'Big Tasty', 'Batata', 'McFlurry', 'Refrigerante', 'Suco'];
let price = [20, 30, 20, 78, 5, 4];

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