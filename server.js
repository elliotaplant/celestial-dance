var express = require('express');
var app = express();
var server = require('http').createServer(app);

var PORT = process.env.PORT || 8080;
var ENV = process.env.NODE_ENV || 'development';

app.listen(PORT);
console.log('Node environment:', ENV)
console.log('Server listening on port', PORT);
app.use(express.static(__dirname + '/build'));
