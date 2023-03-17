CÓDIGO ASSÍNCRONO => Parte do código que vai rodar FORA do fluxo principal da aplicação, fora da sequência da execução original do programa

EX:
Quando o cógigo tiver rodando linha por linha:
1ª linha 
2ª linha Código sincrono
3ª linha 
4ª linha CÓDIGO ASSÍNCRONO
5ª linha 
6ª linha Código sincrono

Quando chegar na 4ª linha que tem o código Assíncrono, esse código vai ser executado fora do fluxo principal.
Fazendo que a aplicação não fique travada esperando a execução desse código (linha "ficar pronta")
E vai continuar executado a 5ª, 6ª linha em diante mesmo a 4ª não ter sido finalizada ainda.
Nas linhas que tiverem o código sincrono, o programa vai esperar finalizar esse código pra passar para outra linha
Nas linhas que tiverem o código Assincrono, o programa vai "passar" para a próxima linha e resolver essa linha com o código Assíncrono fora do fluxo principal e quando ele finalizar, ele volta o retorno dele para o fluxo principal.
Linha 4 tem o retorno depois da linha 6, dependendo de como seja o código Assincrono.




PROMISES (PROMESSA):
Objeto usado para processamento assíncrono. Representa um valor que pode estar disponível agora, no futuro ou nunca.

Estados da Promise:
* pending: estado inicial. Está aguardando o término da execução do código assíncrono
* fulfilled: quando foi realizada com sucesso, quando está resolvida
* rejected: quando termina com algum erro

new Promise((resolve, reject) => {});

Os parâmetros resolve e reject serão usados para definirmos qual estado a promise terá quando for finalizada.
* Quando a promise for resolvida, usamos a função RESOLVE
* Quando a promise for rejeitada, usamos a função REJECT