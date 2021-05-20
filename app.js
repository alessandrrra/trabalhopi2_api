const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');

const rotaAlunos = require('./alunos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname +  '/public/javascript/'));

app.use('/', rotaAlunos);
app.set("view engine", "ejs");


module.exports = app;