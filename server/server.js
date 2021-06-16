'use strict';
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cursoModuloRoutes = require('./routes')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// COnfiguração do Client-Side 
const pathArquivosDoFront = '/client/react-webapp/build'
app.use(express.static("." + pathArquivosDoFront))

// ROTAS
app.use('/api', cursoModuloRoutes)

//Dispensado se não for usar react-router
app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: './client/react-webapp/build' })
})
//Fim Dispensado se não for usar react-router

const { PORT } = process.env;
app.listen(PORT, () => console.log(`API NodeJS está on-line na porta ${PORT}`))