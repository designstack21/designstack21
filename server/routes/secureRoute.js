var express = require('express');
let router = express.Router();


let AccountController = require('../controller/account/account.controller');
router.get('/account', AccountController.account);


module.exports = router