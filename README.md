# Projeto Full Stack - To Do List

O Projeto To Do List é uma aplicação web que permite aos usuários criar listas de tarefas, marcá-las como concluídas.

## Change Log Frontend v1.0.0
- Adicionado interface para criação de tarefas
- Adicionado interface para alteração de status atual da tarefa
- Adicionado interface para edição do título da tarefa
- Adicionado interface para deletar tarefa

## Change Log Backend v2.0.0 > v2.1.0
- Dependência cors (v2.8.5) adicionada
- Função de validação de token desativada até lançamento da v2.0 do Frontend

## Funcionalidades Atuais - Frontend

- Interface para criação de tarefas
- Interface para alteração de status atual da tarefa
- Interface para edição do título da tarefa
- Interface para deletar tarefa

## Funcionalidades Atuais - Backend

- Criação de tarefas
- Exclusão de tarefas
- Alteração de status atual da tarefa
- Criação de usuários com e-mail e senha
- Login de usuários com e-mail e senha
- Criptografia de senha para armazenamento no banco de dados
- Geração de token para usuários autenticados

## Funcionalidades Futuras - Frontend

- Filtros de ordenação por data de criação, data de modificação e alfabética
- Interface para criação de usuários
- Interface para login de usuários
- Interface para editar informações do usuário

## Funcionalidades Futuras - Backend

- Adicionar relacionamento entre tabelas "tasks" e "users"

## Tecnologias Utilizadas - Frontend

- HTML puro
- CSS puro
- JavaScript puro

## Tecnologias Utilizadas - Backend

- Linguagem JavaScript
- Node.js (v14.16.0)
- Dotenv (v16.3.1)
- Express (v4.18.2)
- MySQL2 (v3.6.5)
- JsonWebToken (v9.0.2)
- Bcrypt (v5.1.1)
- Cors (v2.8.5)

## Dependências Dev Utilizadas - Backend

- Eslint (v8.55.0)
- Nodemon (v3.0.2)

## Instalação

Instale o projeto com npm

```bash
cd backend
npm install
```

Para inicializar o backend, utilize o comando abaixo.

```NPM Config
npm start
```

Ou para iniciar o backend em modo de desenvolvimento, utilize o comando abaixo.
```NPM Config
npm run dev
```
*O modo de desenvolvimento utiliza o nodemon*