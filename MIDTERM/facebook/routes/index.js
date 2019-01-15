var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

router.get('/products', function(req, res, next) {
  Comment.find(function(err, comments){
    if(err){ return next(err); }
    res.json(comments);
  });
});
router.post('/products', function(req, res, next) {
    console.log(req.body);
  var comment = new Comment(req.body);
  comment.save(function(err, comment){
    if(err){ return next(err); }
    console.log(comment);
    res.json(comment);
  });
});
router.param('product', function(req, res, next, id) {
  Comment.findById(id, function (err, comment){
    if (err) { return next(err); }
    if (!comment) { return next(new Error("can't find comment")); }
    req.comment = comment;
    return next();
  });
});
router.get('/products/:product', function(req, res) {
  res.json(req.comment);
});
router.put('/products/:product/upvote', function(req, res, next) {
  req.products.upvote(function(err, comment){
    if (err) { return next(err); }
    res.json(comment);
  });
});
router.delete('/product/:product', function(req, res) {
  console.log("in Delete");
  req.products.remove();
  res.sendStatus(200);
});

module.exports = router;
