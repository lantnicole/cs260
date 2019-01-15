
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello Section 2')
})
 
app.listen(4200)