import fetch from 'node-fetch';

fetch('https://invalid.dummyjson.com/quotes/random')
  .then((response) => response.json())
  .then((data) => console.log(data.quote))
  .catch((error) => console.log(`Erro na requisição: ${error.message}`));
