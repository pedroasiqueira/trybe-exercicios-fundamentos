// MINHA RESOLUÇÃO:
const substituaX = (nome) => {
    const frase = `Tryber x aqui`;
    return frase.replace('x', `${nome}`);
}


//RESOLUÇÃO DA TRYBE:
// const substituaX = (nome) => {
//     const frase = 'Tryber x aqui!';
//     const fraseArray = frase.split(' ');
//     for (let index = 0; index < fraseArray.length; index += 1) {
//       if (fraseArray[index] === 'x') {
//         fraseArray[index] = nome;
//       }
//     }  
//     return fraseArray.join(' ');
//   };
  
//   console.log(substituaX('pedro'));


// MINHA ROSOLUÇÃO:
// const minhasSkills = (param) => {
//     const skills = ['HTML', 'CSS', 'JavaScript'];
//     let concatenacao = `${param}
//     Minhas três principais habilidades são:
//         ${skills[0]}
//         ${skills[1]}
//         ${skills[2]}`
//     return concatenacao
//   };



// RESOLUÇÃODA TRYBE:
  const minhasSkills = (param) => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    let concatenacao = `${param}
    Minhas três principais habilidades são:`
    for(let index = 0; index < skills.length; index += 1) {
        concatenacao = `${concatenacao}
        -${skills[index]}`
    }
    return concatenacao
  };

  console.log(minhasSkills(substituaX('Pedro')))