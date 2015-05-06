var express = require('express'),
  mongoskin = require('mongoskin');

var app = express(),
    db  = mongoskin.db('mongodb://localhost:27017/cluep');

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname });
});


// Routes
require('./server/routes.js')(app, db);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});