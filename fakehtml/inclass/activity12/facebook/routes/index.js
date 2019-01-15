var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Candidate = mongoose.model('Candidate');

router.get('/candidates', function(req, res, next) {
  Candidate.find(function(err, comments){
    if(err){ return next(err); }
    res.json(comments);
  });
});
router.post('/candidates', function(req, res, next) {
    console.log(req.body);
  var comment = new Candidate(req.body);
  comment.save(function(err, comment){
    if(err){ return next(err); }
    console.log(comment);
    res.json(comment);
  });
});
router.param('candidates', function(req, res, next, id) {
  Candidate.findById(id, function (err, comment){
    if (err) { return next(err); }
    if (!comment) { return next(new Error("can't find comment")); }
    req.comment = comment;
    return next();
  });
});
router.get('/candidates/:candidate', function(req, res) {
  res.json(req.comment);
});
router.put('/candidates/:candidate/upvote', function(req, res, next) {
  req.comment.upvote(function(err, comment){
    if (err) { return next(err); }
    res.json(comment);
  });
});
router.delete('/candidates/:candidate', function(req, res) {
  console.log("in Delete");
  req.comment.remove();
  res.sendStatus(200);
});

module.exports = router;
