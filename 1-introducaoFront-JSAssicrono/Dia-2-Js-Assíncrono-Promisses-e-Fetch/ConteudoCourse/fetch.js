import fetch from 'node-fetch';

fetch('https://dummyjson.com/quotes/random')
  .then((response) => response.json())
  .then((data) => console.log(data));
