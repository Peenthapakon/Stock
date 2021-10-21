var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('หวัดดีงับ');
});

module.exports = router;
