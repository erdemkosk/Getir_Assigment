/* core modules */
var path = require("path");

/* 3rd party modules */
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors")
var app = express();


const recordRoutes = require("./api/routes/records.route");

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Defult Urls
app.get('/', (req, res) => res.send('Welcome to Getir Assigment Api Service!'));
app.get('/api', (req, res) => res.send('Welcome to Getir Assigment Api Service!'));

app.use('/api/record',recordRoutes)
module.exports = app;
