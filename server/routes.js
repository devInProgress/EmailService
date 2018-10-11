'use strict';

const defineRoutes = (app) => {
  app.use('api/email', require('./api/email'));
  app.use('/', require('./api/view'));
}

module.exports = defineRoutes;