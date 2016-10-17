var express = require('express');
var app = express();

var port = 5133;
var ip = '127.0.0.1'

app.use(express.static(__dirname + '/client'));

app.get('/', function(request, response) {
  response.render('/client/index.html');
});

app.listen(port, function() {
  console.log("app now running on port " + port + "!!");
});