criar um arquivo json ( PACOTE )
npm init

//gerencia as requisições,rotas  e urls, entre outras funcionalidades
npm install express

//instalar o módulo para reiniciar o servidor caso tenha alguma alteração no codigo fonte
npm install -D nodemon

//instalar o mongodb
npm install --save mongodb

//instalar o Mongoose  = mongoose traduz os dados do banco  de dados para objeto Javascript para que possa ser ultilizado por sua aplicação
npm install --save mongoose
----------------------------
COMO RODAR O PROJETO ABAIXO
----------------------------

//instalar todas as dependencias indicada pelo package.json
npm install 

//Rodar projeto usando o nodemon 
nodemon app.js

=========================================
comandos para Editar nosso banco de dados
=========================================


//SELECT * FROM contas.users;
este comando ira varrer todo o banco, na tabela contas.

