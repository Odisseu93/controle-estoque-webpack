# Controle de estoque de uma loja de periféricos de TI 

## Dependências
- [yarn](https://yarnpkg.com/)
- Para o front-end deste projeto rodar ele precisa de uma API de dados de produtos. Para gerar uma API local experimental use o projeto que está no repositório https://github.com/FaSn0w/controle-estoque-api criado por @FaSn0w.

## Lista de funcionalidades

### Básico
- [X] Ter uma lista de produtos com um identificador para cada item
- [X] Criar interface para a lista de produtos
- [X] Ler o arquivo da lista de produtos
- [X] Conectar lista de produtos com uma API local
- [X] Poder adicionar um item na lista de produtos
- [ ] Criar interface para poder adicionar um item na lista de produtos
- [ ] Poder remover um item da lista de produtos
- [ ] Criar interface para poder remover um item na lista de produtos
- [ ] Adicionar quantidade de itens na lista de produtos
- [ ] Criar interface para poder adicionar a quantidade de itens na lista de produtos
- [ ] Poder alterar a quantidade de itens de um produto específico
- [ ] Criar interface para poder alterar a quantidade de itens de um produto específico
- [ ] Consultar um item na lista de produtos para saber a quantidade disponível
- [ ] Criar interface para consultar um item na lista de produtos para saber a quantidade disponível

### Adicionais
- [X] Implementar o Typescript no projeto.
- [ ] Implementar validações de schema com o [zod]('https://www.npmjs.com/package/zod#introduction')
- [x] Criar componentes para a composição da aplicação(semelhante a aplicações react)
- [x] Criar uma mock API com o [json-server]('https://www.npmjs.com/package/json-server')
    - [x] Criar método get para listagem geral de produtos
    - [ ] Criar método get por ID
    - [ ] Criar método post
    - [x] Criar método delete
    - [ ] Criar método update

### Comandos
- Para executar o _build_ : `yarn build` 
- Para executar JSON Server localmente: `yarn api` **Porta 3333**
### Avançado
- Poder adicionar um limite mínimo e máximo para cada item da lista de produtos
- Rotina para verificar se alguma quantidade de itens está abaixo do limite mínimo

### Extra
- Armazenar cada transação na lista de produtos
