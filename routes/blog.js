var express = require('express');   /* เรียกใช้งาน rxpress โดยต้องเอาเข้ามาทำงาน*/
var router = express.Router();
const { check, validationResult } = require('express-validator');
// const db = require('monk');

// const url = 'localhost:27017/TutorialDB';
const db = require('monk')('localhost:27017/TutorialDB') //วืธีแบบสั้น  *******************

router.get('/', function(req, res, next) {  /* การสร้าง router โดยยังไม่กำหนดอะไรนอกจากหน้าต่างเปล่าๆ */
    var ct = db.get('StockMarket')
    ct.find({}).then((docs) => {
       res.json(docs)
    })
});
router.get('/add', function(req, res, next) {  /* การสร้าง router โดยยังไม่กำหนดอะไรนอกจากหน้าต่างเปล่าๆ */
    res.render('addblog');  
});

router.post('/add',[
    check('name',"กรุณาป้อนชื่อบทความ").not().isEmpty(),
    check('description',"กรุณาป้อนบทความ").not().isEmpty(),
    check('author',"กรุณาป้อนชื่อผู้เขียนบทความ").not().isEmpty()
],  function(req, res, next) {  /* การสร้าง router โดยยังไม่กำหนดอะไรนอกจากหน้าต่างเปล่าๆ */
    const result = validationResult(req);
    let errors = result.errors;
    if (!result.isEmpty()) {
        res.render('addblog',{errors:errors});
    }else{/*หากใส่ข้อมูล ครบจะบันทึกข้อมูล*/
        var ct = db.get('blogs');
        ct.insert({
            name:req.body.name,
            description:req.body.description,
            author:req.body.author
        },function(err,blog) {
            if(err){
                res.send(err);          
            }else{
                res.location('/blog/add');
                res.redirect('/blog/add');
            }
        });
    }
});


module.exports = router;  /* คือการสั่งให้ exports ออกไปทำงาน ห้ามลืม */