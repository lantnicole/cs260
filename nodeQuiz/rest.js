var express = require('express');
var url = require('url');
var app = express();
app.listen(80);
console/log("running on port 80");
app.get('/json', function (req, res) {
    console.log("in /json rout");
  app.set('json spaces', 4);
  res.json({name:"Smithsonian", built:'1846', items:'137M',
            centers: ['art', 'astrophysics', 'natural history',
                      'planetary', 'biology', 'space', 'zoo']});
});
app.get('/error', function (req, res) {
  res.json(500, {status:false, message:"Internal Server Error"});
});
app.get('/jsonp', function (req, res) {
  app.set('jsonp callback name', 'cb');
  res.jsonp({name:"Smithsonian", built:'1846', items:'137M',
            centers: ['art', 'astrophysics', 'natural history',
                      'planetary', 'biology', 'space', 'zoo']});

}); 

// http://localhost/json
// http://localhost/error
// http://localhost/jsonp?cb=handleJSONP