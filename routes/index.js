var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/first', function(req, res, next) {
  res.render('first');
});

module.exports = router;
