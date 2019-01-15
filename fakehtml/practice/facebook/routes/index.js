var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Candidate = mongoose.model('Candidate');

router.get('/candidates', function(req, res, next) {
  Candidate.find(function(err, comments) {
    if (err) { return next(err); }
    res.json(comments);
  });
});
router.post('/candidates', function(req, res, next) {
  console.log(req.body);
  var comment = new Candidate(req.body);
  comment.save(function(err, comment) {
    if (err) { return next(err); }
    console.log(comment);
    res.json(comment);
  });
});
router.param('candidate', function(req, res, next, id) {
  Candidate.findById(id, function(err, candidate) {
    if (err) { return next(err); }
    if (!candidate) { return next(new Error("can't find candidate")); }
    req.candidate = candidate;
    return next();
  });
});
router.get('/candidates/:candidate', function(req, res) {
  res.json(req.candidate);
});
router.put('/candidates/:candidate/upvote', function(req, res, next) {
  console.log("Put Route" + req.candidate.name);
  req.comment.upvote(function(err, comment) {
    if (err) { return next(err); }
    res.json(comment);
  });
});
router.delete('/candidates/:candidate', function(req, res) {
  console.log("in Delete");
  console.log(candidate)
  req.candidate.remove();
  res.sendStatus(200);
});

module.exports = router;
