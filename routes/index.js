var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
  console.log(req.body.token);
  console.log(req.body.message);
  if(req.body.token === 'agral1234')
    res.render('message',{message:req.body.message});
  else
    res.render('index', { title: 'Express',tokenFailed:true});
});
module.exports = router;
