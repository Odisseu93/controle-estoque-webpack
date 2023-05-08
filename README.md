
# ![logo(1)](https://user-images.githubusercontent.com/76600539/236922454-34d0cc49-7376-4d7b-9403-eb2b076e0bf5.png)

**[live website](https://courageous-empanada-c086d1.netlify.app/)**

Controle de estoque de uma loja de periféricos de TI fictícia, a ideia foi baseada no projeto que esta sendo desenvolvido pelo
[Pedro Marins](https://github.com/pedromarins) — Desenvolvedor web sênior e mentor da mentorria: [Conquiste sua vaga como dev](https://conquistesuavaga.com/mentoria) — me propus a construir-lo implementando algumas coisas diferente do projeto base, são elas:
- Implementação do Typescript no projeto.
- Implementação das validações de schema com o [zod]('https://www.npmjs.com/package/zod#introduction')
- Implementação do module bundler [webpack](https://webpack.js.org/)
- Criação uma mock API com o [json-server]('https://www.npmjs.com/package/json-server')
- Implementação do React.js.

O objetivo principal é criar um projeto com React e typescript, sem utilizar alguma das _build tools_ mais comuns para iniciar este tipo de projeto, sendo elas: o [vite](https://vitejs.dev/), [CRA (Create React App)](https://create-react-app.dev/) entre outras. Fiz isso utilizando o webpack para o empacotamento da aplicação  —  _setando_ as configurações deste, manualmente  — , instalando e configurando as dependencias  necessários para  o projeto. Neste processo, fui entendendo alguns conceitos e práticas que são utilizados no React.js (e em alguns dos principais frameworks para desenvolvimento web) na prática, citando alguns:
- o empacotamento de módulos;
- as configurações para realizar o build da aplicação; 
- a resolução de imports ETC.


## Comandos
- Para instalar todas a dependencias : `yarn` ou `yarn install` 
- Para executar o _build_: `yarn build` 
- Para inciar a _server_: `yarn server` 
- Para executar a mock API: `yarn api` 


## Rodando o projeto localmente

Para executar o projeto localmente, siga os seguintes passos:

<details>
<summary>Passo a passo</summary>

    Clone o repositório em sua máquina local.

```

git clone https://github.com/Odisseu93/controle-estoque-webpack.git

```

Instale as dependências do projeto usando o gerenciador de pacotes yarn. Certifique-se de ter o Node.js instalado em sua máquina.

```

cd controle-estoque-webpack
yarn install

```


em [./src/services/axios-config/index.ts](./src/services/axios-config/index.ts)
a atualize o valor do atributo **baseURL** para `http://localhost:3333/products/`

![image](https://user-images.githubusercontent.com/76600539/236917116-27b637a2-fcf2-43a7-a313-0034939d41e7.png)


Inicie a mock api:

```

yarn api

```

Inicie o servido da  aplicação em modo de desenvolvimento com o seguinte comando:

```

yarn server

```


Agora você deve ser capaz de visualizar e interagir com a aplicação em seu ambiente local de desenvolvimento. Para interromper a execução do servidor local, pressione CTRL + C em seu terminal.

</details>

## Tecnologias utilizadas
- [React.js](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- [sass](https://sass-lang.com/)
- [yarn](https://yarnpkg.com/)
### Dependencias/packages
- [Axios](https://axios-http.com/docs/intro)
- [Zod](https://www.npmjs.com/package/zod)
- [json-server](https://www.npmjs.com/package/json-server)

## Licença
[MIT](LICENSE.MD)

## Desenvolvedor

<div align="center">
  <img src="https://user-images.githubusercontent.com/76600539/235897309-88ab21df-d0be-4905-829c-36ab68ebc2e8.png" alt="developer: Ulisses Silvério"    width="200px" align="center"/>
</div>
<br>
<div align="center" margin="50px">
 <a href="https://linktr.ee/ulissessilverio" align="center">
  <img src="https://img.shields.io/badge/linktree-1de9b6?style=for-the-badge&logo=linktree&logoColor=white" alt="linktree shild" />
</a>
</div>
