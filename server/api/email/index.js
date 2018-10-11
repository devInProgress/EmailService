'use strict';

var express = require('express');
var controller = require('./controller');

var router = express.Router();

router.post('/send', controller.send);

module.exports = router;