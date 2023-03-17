type="module" - serve para dizer que vamos usar a importação/exportação do JS  usando a notação do ESM module.
SEMPRE VER SE NO TERMINAL ESTOU DENTRO DA PASTA DO PROJETO!!!

Configurando/Iniciando ambiente de desenvolvimento:
1- Criar pasta do projeto
*criar pasta src onde vai ficar o .js
*criar arquivo html na pasta raiz do projeto, fora do src

2- "npm init -y"

3- linkar nosso arquivo JS no HTML:
*<script src="./src/main.js" type="module"></script>

4- instalar biblioteca:
* npm install nanoid
* * * npm remove nanoid (para remover)

* PACKAGE-LOCK.JSON é um arquivo que trava todas as versões das depêndencias que temos no nosso projeto para que quando for para produção(máquina de outras pessoas), as verões continuem as mesmas. Não precisa se preocupar em mexer nela

* NODE_MODULES é uma pasta que contém todas as depêndencias das dependências... do nosso projeto. Essa pasta fica pesadae não colocamos ela no nosso controle de versão. Ignoramos essa pasta em .GITIGNORE

5- .GITIGNORE na raiz do nosso projeto, para colocar as coisas que não queremos mandar pro gitHub.
* colocar a NODE_MODULES

6- Importar nossa biblioteca no MAIN.JS
* import { nomeDaBiblioteca } from "nomeDaBiblioteca" Ex:
* * * * * import { nanoid } from "nanoid";

7- Colocar no nosso arquivo PACKAGE.JSON: 
* "type": "module"

8- colocar o bundler:
* npm install vite
* * ir no PACKAGE.JSON em "scripts" e colocar: "dev": "vite --open"
* * * chama no terminal agora npm run dev
* * * * no PACKAGE.JSON em "dependencies" vai ter o nanoid e o vite. Que foram os pacotes que instalei, usando o npm install

9- instalar o lint da trybe:
* npm install @trybe/eslint-config-frontend
* * cria o arquivo .eslintrc.json com oseguinte conteudo:
{
  "extends" : "@trybe/eslint-config-frontend"
}
* * * * pode chamar o lint com o comando npx eslint./src --- O ./SRC é onde está o nosso arquivo .js

10- Caso for criar um .css:
* cria o style.css dentro da pasta src
* * importa o css para o js:
import './style.css'
* * * * só pode fazer isso se tiver com o VITE na aplicação

11- Botar a minha aplicação no ar
* surge.sh - permite publicar sites estáticos
* * npm install --global surge -- instalar globalmente na minha máquina. Vai ficar na minha máquina sempre já, e não só na pasta do meu projeto.
* * * ciar um script chamado "build": "vite build"
* * * * depois do passo anterior, é criado uma pasta dist
