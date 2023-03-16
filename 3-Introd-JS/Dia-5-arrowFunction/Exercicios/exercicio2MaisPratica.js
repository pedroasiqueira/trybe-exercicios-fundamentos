let motorCarro = 'desligado';

const ligaDesliga = () => {
  if(motorCarro === 'desligado'){
    return motorCarro = 'ligado'
  } else if(motorCarro === 'ligado'){
    return motorCarro = 'desligado'
  }
}

// console.log(motorCarro);
// console.log(ligaDesliga());
// console.log(ligaDesliga());
// console.log(ligaDesliga());

const areaCirculo = (raio) => {
  if(typeof raio !== 'number'){
    return `"${raio}" não é um número. Por favor, coloque um valor numérico`
  } else {
  return Math.pow(raio, 2) * Math.PI
  }
}

// console.log(areaCirculo(3));

const longestWord = (frase) => {
  let dividePalavras = frase.split(' ');
  let maiorPalavra = dividePalavras[0];
  let quantidadeLetras = 0;
  for(let index = 1; index < dividePalavras.length; index += 1){
    if(dividePalavras[index].length > maiorPalavra.length){
      maiorPalavra = dividePalavras[index];
      quantidadeLetras = dividePalavras[index].length;
    }
  }

  return `A maior palavra dessa frase é '${maiorPalavra}' e ela tem ${quantidadeLetras} letras`;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));
