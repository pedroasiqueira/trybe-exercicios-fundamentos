import fetch from 'node-fetch';

// fetch('https://api.goprogram.ai/inspiration')
//   .then((response) => response.json())
//   .then((data) => console.log(`"${data.quote}" | ${data.author}`));

fetch('https://dummyjson.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data));
