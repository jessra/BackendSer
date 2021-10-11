var express = require('express');
const morgan = require('morgan');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

var routes = require("./routes/index");
app.use(routes);

module.exports = app;
