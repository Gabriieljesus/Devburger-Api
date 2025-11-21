🍔 DevBurger – Back-end

Este repositório contém o back-end do DevBurger, uma API desenvolvida para dar suporte à interface da aplicação, permitindo que usuários criem contas, realizem autenticação, consultem o cardápio e enviem pedidos.

⚙️ Sobre a API

A API foi construída com foco em:

- Estrutura limpa e organizada

- Segurança e autenticação

- Separação de responsabilidades

- Facilidade de manutenção e escalabilidade

Ela oferece endpoints para:

- Criar usuário

- Login e autenticação com JWT

- Listagem de produtos

- Criação de pedidos

- Atualização e consulta de dados

🧰 Tecnologias Utilizadas

- Node.js

- Express

- PostgreSQL

- Sequelize (ORM)

- JWT para autenticação

- Docker

- Multer para upload de imagens

📦 Estrutura do Projeto

Cada parte cumpre um papel claro:

- models/ – representações das tabelas no banco

- controllers/ – lógica de cada rota

- routes/ – organização dos endpoints

- middlewares/ – validações e interceptações

- config/ – configurações gerais (como DB e JWT)

🗄️ Banco de Dados

A API utiliza PostgreSQL, com tabelas como:

- users

- products

- orders

- order_products

- As migrações e seeds são realizadas via Sequelize.

📡 Integração com o Front-end

A API fornece endpoints consumidos pela interface do DevBurger, como:

- /sessions – autenticação

- /users – cadastro

- /products – listagem de produtos

- /orders – envio de pedidos

Basta apontar a URL da API no front-end para integrar.

🎯 Objetivo do Projeto

O desenvolvimento do back-end do DevBurger me permitiu:

- Entender melhor arquitetura de APIs

- Trabalhar com banco de dados relacional

- Implementar autenticação JWT

- Aplicar boas práticas com Express

- Criar uma aplicação completa Full Stack

🧑‍💻 Autor

Gabriel Jesus
Projeto desenvolvido durante a formação Full Stack no DevClub.





Docker (opcional)

Multer para upload de imagens (se aplicável)
