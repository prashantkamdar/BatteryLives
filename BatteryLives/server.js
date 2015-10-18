var http = require('http');
var express = require('express');
var controllers = require('./controllers');
var db = require('./db');

var app = express();
app.set("view engine", "vash");
app.use(express.static(__dirname + "/public"));

controllers.init(app);

db.checkConnected();

var server = http.createServer(app);
server.listen(3000);