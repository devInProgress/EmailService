'use strict';

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const defineMiddlewares = (app) => {
  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use('/public', express.static(path.join(__dirname, 'public')));
  app.use('api/email', require('./api/email'));
  app.use('/', require('./api/view'));
}

module.exports = defineMiddlewares;