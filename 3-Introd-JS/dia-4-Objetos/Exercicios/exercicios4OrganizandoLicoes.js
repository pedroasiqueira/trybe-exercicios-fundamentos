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