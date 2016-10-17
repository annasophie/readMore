var express = require('express');
var app = express();

var port = 5133;
var ip = '127.0.0.1'

app.use(express.static(__dirname + '/Client'));

app.get('/', function(request, response) {
  response.redirect('/Client/index.html');
});

app.listen(process.env.PORT || port, function() {
  console.log("app now running on port " + port + "!!");
});