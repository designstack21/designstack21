var express = require('express');
let router = express.Router();


let AccountController = require('../controller/account/account.controller');
router.get('/account', AccountController.account);


let ServiceController = require('../controller/service/service.controller');
router.post('/service', ServiceController.addService);
router.get('/service', ServiceController.getService);


module.exports = router