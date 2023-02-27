let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let boasVindas = `Bem-vinda, ${info.personagem}`;
// console.log(boasVindas);

info['recorrente'] = 'sim';
// console.log(info.recorrente)

let chaves = [];
let propriedades = [];
for (let key in info) {
  chaves.push(key)
  let prop = info[key]
  propriedades.push(prop)
}
// console.log(chaves)
// console.log(propriedades)

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'último MacPatinhas',
  recorrente: 'sim'
};


for (let key in info) {
  if(key === 'recorrente' && info[key] === 'sim' && info2[key] === 'sim'){
   console.log('Ambos recorrentes')
  } else {
   console.log(`${info[key]} e ${info2[key]}`)
  }
};