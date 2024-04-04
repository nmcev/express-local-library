var express = require('express');
const { route } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/cool', function(req, res, next) {
  res.render('cool', {cool: 'You are so cool'});
});
module.exports = router;
