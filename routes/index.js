var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/*(----1----) คือเการจัดวางเส้นทาง      เพื่อให้ไปยังหน้าต่างๆ โดยจะต้องไปใส่คำสั่งใน add.js    */