var express = require('express');
var controller = require('./controller');
var router = express.Router();

router.post('/login', controller.login);

module.exports = router;