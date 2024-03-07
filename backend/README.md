# Pizzaria Management App

## Overview

Este é um aplicativo de gerenciamento de pizzaria desenvolvido em Node.js, Express e Prisma, proporcionando funcionalidades como registro e autenticação de usuários, criação e modificação de categorias e produtos. A aplicação foi projetada para garantir que apenas usuários autenticados possam acessar determinadas rotas, enquanto garçons têm permissão para criar pedidos de clientes.

## Funcionalidades

### Autenticação de Usuário
- **Registro de Usuário**: A rota `/users` permite o registro de novos usuários com nome, e-mail e senha.
- **Autenticação de Usuário**: A rota `/session` permite que os usuários existentes realizem login e recebam um token de autenticação.
- **Detalhes do Usuário Autenticado**: A rota `/me` retorna informações detalhadas sobre o usuário autenticado.

### Gerenciamento de Categoria
- **Criação de Categoria**: A rota `/category` permite a criação de novas categorias, garantindo que apenas usuários autenticados tenham acesso.

### Gerenciamento de Produtos
- **Criação de Produto**: A rota `/product` permite a criação de novos produtos associados a categorias específicas, além de realizar o upload de uma imagem/banner do produto. A autenticação é necessária para acessar essa rota.

### Gerenciamento de Pedidos
- **Criação de Pedido**: A estrutura do modelo `Order` permite que os garçons criem novos pedidos associados a uma mesa específica, adicionando itens através do modelo `Item`. Os pedidos podem ser marcados como prontos ou em andamento.

## Configuração do Ambiente

1. Clone o repositório.
2. Instale as dependências com `npm install` ou `yarn install`.
3. Configure as variáveis de ambiente, incluindo o `DATABASE_URL`.
4. Execute as migrações do banco de dados com `yarn prisma migrate dev`.

## Execução

1. Inicie o servidor com `yarn dev`.
2. Acesse as rotas conforme necessário para interagir com a aplicação.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework web para Node.js, facilitando a criação de APIs.
- **Prisma**: ORM (Object-Relational Mapping) para interagir com o banco de dados PostgreSQL.
- **Multer**: Middleware para manipulação de uploads de arquivos.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para obter detalhes.

---

**Nota:** Certifique-se de que todas as dependências e configurações do ambiente estão corretas antes de executar a aplicação.
