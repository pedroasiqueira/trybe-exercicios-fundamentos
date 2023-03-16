let coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6,
};

// for (let key in coolestTvShow) {
//   console.log(coolestTvShow[key]);
// };

console.log(Object.values(coolestTvShow));

console.log(`
-------------------`)

let student = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskill: 'Ótimo',
};

function listSkillsValuesWithFor(student) {
  let skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

function listSkillsValuesWithValues(student) {
  return Object.values(student);
}

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));