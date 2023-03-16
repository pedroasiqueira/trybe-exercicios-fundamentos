// chave: 'valor'
// a chave pode ser chamada de propriedade também

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    goldem: 2,
    silver: 3
  }
}

let frasePedida = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`;
console.log(frasePedida);
player.fullName = `${player.name} ${player.lastName}`

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
let frasePedida2 = `A jogadora ${player.fullName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`;
console.log(frasePedida2)

console.log(`A jogadora possui ${player.medals.goldem} medalhas de ouro e ${player.medals.silver} medalhas de prata`)