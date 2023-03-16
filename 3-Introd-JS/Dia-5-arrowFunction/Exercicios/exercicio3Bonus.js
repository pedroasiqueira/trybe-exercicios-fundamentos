const substituaX = (nome) => {
  const frase = 'Tryber x aqui!'
  const fraseArr = frase.split(' ')
  for(let index = 0; index < fraseArr.length; index += 1){
    if(fraseArr[index] === 'x') fraseArr[index] = nome;
  }

  return fraseArr.join(' ')
};


// console.log(substituaX('pedro'));

const minhasSkills = (func) => {
  const skills = ['html', 'css', 'js'];
  let frase = `${func}
  Minhas três principais habilidades são:`
  for(let index = 0; index < skills.length; index += 1){
    frase = `${frase}
    - ${skills[index]}`;
  };
  return frase;
};

console.log(minhasSkills(substituaX('pedro')));