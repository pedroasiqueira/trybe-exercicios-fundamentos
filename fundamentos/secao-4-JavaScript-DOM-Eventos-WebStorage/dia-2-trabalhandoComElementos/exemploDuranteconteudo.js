const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta")

const pai = elementoOndeVoceEsta.parentNode;
pai.style.color = "red"

document.getElementById("primeiroFilhoDoFilho").innerHTML = "Olá"

// criando um irmão para "elementoOndeVoceEsta"

const father = document.getElementById("pai");
const irmaoElementoOndeVoceEsta = document.createElement("section");
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
father.appendChild(irmaoElementoOndeVoceEsta);

// criando um filho para "elementoOndeVoceEsta"
// não precisei criar uma constante pq já tinha criado mais acima

const filhoElementoOndeVoceEsta = document.createElement("section");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta"
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta)

// crie um filho para "primeiroFilhoDoFilho"

const primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const filhoPrimeiroFilhoDoFilho = document.createElement("section");
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho"
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// A partir desse flho criado, acesse 'terceiroFilho

const terceiroFilho = filhoPrimeiroFilhoDoFilho
console.log(terceiroFilho)