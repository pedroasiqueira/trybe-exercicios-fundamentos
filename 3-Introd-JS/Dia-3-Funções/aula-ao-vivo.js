let items = ['Big Mac', 'Big Tasty', 'Batata', 'Refrigerante', 'Suco', 'McFlury'];
let price = [20, 30, 20, 5, 4, 10];

for(let index = 0; index < items.length; index += 1){
  for(let value = 0; value < price.length; value +=1){
    let positionItems = items.indexOf(items[index]);
    let positionPrice = price.indexOf(price[value]);
    
    if(positionItems === positionPrice){
      console.log(`${items[index]} = R$ ${price[value]}`)
    }
  }
}

//Exemplo da aula:
for (let index = 0; index < items.length; index += 1){
  console.log(`${items[index]} = R$ ${price[index]}`)
}


// console.log(`${items[0]} = R$ ${price[0]}`);
// console.log(items.indexOf('Batata'));