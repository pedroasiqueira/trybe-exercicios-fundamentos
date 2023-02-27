let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const habilidades = (obj) => {
  let skills = [];
  for(let index in obj){
    skills.push(`${index}, Nível: ${obj[index]}`);
  }
  return skills;
}


console.log('Estudante 1');
console.log(habilidades(student1));

console.log('Estudante 2');
console.log(habilidades(student2));