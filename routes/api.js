var express = require('express');
var router = express.Router();
var {
    getBalance
} = require('../api/balanceOf')
/* GET users listing. */
router.post('/get_balance', getBalance)
router.get('/', function (req, res) {
    res.render('index')
})
module.exports = router;