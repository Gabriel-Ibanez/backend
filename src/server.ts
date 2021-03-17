import express from "express";
import path from 'path';
import cors from "cors";

import 'express-async-errors';
import "./database/connection";

import routes from './routes';
import errorHandler from './errors/handler';
const app = express();

app.use(cors()); // liberaro acessopara que todo sos fronteds possa acessar nossa API
app.use(express.json()); //como o express não entende jason, aplicar um 'plug-in'
app.use(routes);

// fazer um endereço para acessar as imagens
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')))
app.use(errorHandler);

app.listen(3333);

// para tornar o erro mais entendível para quem consome nossa API, usamos um Exception Handle, que é uma forma fazer um log dos erros e até de capturar os erros mas não exibí-los ao usuário final


// nossa aplicação será acessada pela porta localhost/3333

//Configuação do banco de dados
// Três formas de lhe dar com banco de dados no backend
//      Driver nativo,      Query Builder,       ORM
//          Driver nativo: SELECT * FROM users WHERE NAME = 'gabriel'
//          Query Builder: usando knex, por exemplo, constróia query cima a partir do comando
// knex('users').select('*').where('name','gabriel')
//ORM (Object Relational Mapping) 3 nível de abstração. Para cada tabela no banco de dados teremos uma classe na aplicação.

// rota: conjundo
// recurso: users

// Métodos HTTP =  GET, POST, PUT, DELETE
// o que mais muda é o significado semântico
// GET = buscar uma informação (Lista, item)
// POST = criar uma informação nova
// PUT = editar uma informação
// DELEE = deletar uma informação

// Parâmetros
// Query Params: http://localhost:3333/users?search=gabriel&page=2
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users

// typeorm:ferramente, biblioteca
// sqlite: banco de dados que não precisa instalar umbanco em nossa máquina, cria um banco de dados físicoemssa aplicação.

//  Quando utilizamos Query Builder ou OR,conseguimos trocar entre bacode dados sem mudar a aplicação. Trocar entre mySql para Postgree ou SqLite.

// formas decirar tabela em umbanco de dados
// usar um softewaque que execute as queries dentro do banco de dados.
// utiliando o conceito de migrations (controle de versão do banco de dados)
