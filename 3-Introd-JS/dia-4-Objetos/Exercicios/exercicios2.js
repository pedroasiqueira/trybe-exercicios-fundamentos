let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let frase = `O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`
console.log(frase);

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

let frase2 = `${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`
console.log(frase2);