const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require ('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

// Métodos HTTP:
// GET: Buscar ou listar uma informação do back-end
// Post: Criar uma informação no back - encode
// PUT: Alterar uma informação no back-encode
// Delete: Deletar uma informação no back-end

// Tipos de parâmetros:
// Query Params: parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
// Route Params: Parâmetros utilizados para identificar recursos
// Request Body: Corpo da requisição utilizado para criar ou alterar recursos

// SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
// NoSQL: MongoDB, CouchDB, etc

// Driver: SELECT * FROM users
// Query Builder: table('users').select("*").where() - utiliza JS para crianção de querys



