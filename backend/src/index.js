const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333);


/**
 * rotas e recursos
 * *
 * Metodos http
 * 
 * Get busca uma informacao no backend
 * POST: Criar uma infomacao no Backend
 * PUT: Alterar informcao no Backend
 * DELETE: delatar informcao no backend
 * 
 * **
 * Tipos de paramento:
 * 
 * Query: Paramentros nomeados enviados na rota apos  "?" (FIltros, paginacao)
 * Rout Params: Parametros utilizados para indentificar recursos 
 * Request Body: Corpo da requisicao utlizados para criar ou alterar recursos 
 * 
 * **
 * SQL: Mysql, SQLite, PostgreSQL, Oracle, Micrisoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * **
 * DRIVER: SELCT * FROM users
 */


