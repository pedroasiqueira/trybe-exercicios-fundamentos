// let list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];

// function getAverageAge(list) {
//   let mediumAge = 0;
//   list.forEach((pessoa) => {
//     mediumAge += pessoa.age;
//   })
//   return Math.round(mediumAge / list.length);
//   // thank you for checking out the Coding Meetup kata :)
// }

// console.log(getAverageAge(list1))

let list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];


function isSameLanguage(list) {
  return list.every((dev) => dev.language === 'JavaScript')
  // thank you for checking out the Coding Meetup kata :)
}


