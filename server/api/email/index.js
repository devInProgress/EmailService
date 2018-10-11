'use strict';

var express = require('express');
var controller = require('./controller');

var router = express.Router();

router.post('/', controller.sendEmail);

module.exports = router;