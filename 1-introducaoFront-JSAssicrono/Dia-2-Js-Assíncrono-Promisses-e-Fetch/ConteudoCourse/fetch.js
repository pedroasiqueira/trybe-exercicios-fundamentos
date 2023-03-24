import fetch from 'node-fetch';

fetch('https://dummyjson.com/quotes/random')
  .then((response) => response.json())
  .then((data) => console.log(data.quote))
  .catch((error) => console.log(`Erro na requisição: ${error.message}`));
