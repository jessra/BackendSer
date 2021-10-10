const express = require('express');
const morgan = require('morgan')
const Handlebars = require("handlebars");
const collector = express.Router();

collector.use(express.json());
collector.use(morgan('dev'))

/* GET */
collector.get('/get', function(req, res, next) {
});

module.exports = collector;
