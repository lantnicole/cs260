var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Candidate = mongoose.model('Candidates');

router.get('/voting', function(req, res, next) {
  Candidate.find(function(err, candidates){
    if(err){ return next(err); }
    res.json(candidates);
  });
});
router.post('/voting', function(req, res, next) {
    console.log(req.body);
  var candidate = new Candidate(req.body);
  candidate.save(function(err, candidate){
    if(err){ return next(err); }
    console.log(candidate);
    res.json(candidate);
  });
});
router.param('voting', function(req, res, next, id) {
  Candidate.findById(id, function (err, candidate){
    if (err) { return next(err); }
    if (!candidate) { return next(new Error("can't find candidate")); }
    req.candidate = candidate;
    return next();
  });
});
router.get('/voting/:candidate', function(req, res) {
  res.json(req.candidate);
});
router.put('/voting/:candidate/upvote', function(req, res, next) {
  req.candidate.upvote(function(err, candidate){
    if (err) { return next(err); }
    res.json(candidate);
  });
});
router.delete('/voting/:candidate', function(req, res) {
  console.log("in Delete");
  req.candidate.remove();
  res.sendStatus(200);
});

module.exports = router;
