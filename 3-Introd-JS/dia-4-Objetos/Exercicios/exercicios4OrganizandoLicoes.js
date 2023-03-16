let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adcNoObj = (obj, key, value) => obj[key] = value;
adcNoObj(lesson2, 'turno',  'noite');
// console.log(lesson2);

const keysObj = (obj) => Object.keys(obj);
// console.log(keysObj(lesson2));

const tamanhoObj = (obj) => Object.entries(obj).length;
// console.log(tamanhoObj(lesson2))

const valuesObj = (obj) => Object.values(obj);
// console.log(valuesObj(lesson1));

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
}
Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);
// console.log(allLessons);

const numberOfStudent = () => {
  let n1 = allLessons.lesson1.numeroEstudantes;
  let n2 = allLessons.lesson2.numeroEstudantes;
  let n3 = allLessons.lesson3.numeroEstudantes;

  return n1 + n2 + n3;
}
// console.log(numberOfStudent());

const getValueByNumber = (obj, posicao) => Object.values(obj)[posicao];
// console.log(getValueByNumber(lesson1, 1));

const verifyPair = (obj, chave, valor) => {
  let entriesObj = Object.entries(obj);
  let isEqual = false;
  for (let index in entriesObj) {
    let includesChave = entriesObj[index].includes(chave);
    let includesValor = entriesObj[index].includes(valor);
    if(includesChave === true && includesValor === true) isEqual = true;
  }

  return isEqual;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));