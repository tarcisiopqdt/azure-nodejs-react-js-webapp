'use strict';
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cursoModuloRoutes = require('./server/routes')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// COnfiguração do Client-Side 
const pathArquivosDoFront = '/client/react-webapp/build'
app.use(express.static("." + pathArquivosDoFront))

// ROTAS
app.use('/api', cursoModuloRoutes)

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: __dirname + pathArquivosDoFront })
})

const { PORT } = process.env;
app.listen(PORT, () => console.log(`API NodeJS está on-line na porta ${PORT}`))