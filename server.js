'use strict';

//Import Express module
var express = require('express');
//Import path module (packaged with Node.js)
var path = require('path');
//Import fs-extra
var fse = require('fs-extra');

//Import express-session
var session = require('express-session');

//Create new instance of Express
var app = express();

//Import server side file for avatar app
var kupelaApp = require('./kupela_backend');

//Session setup
app.use(session({secret: 'secret', key: 'express.sid'}));

//Serve static html page from public directory
app.use('/', express.static(path.join(__dirname, 'public')));

//Respomse for admin calls
app.get('/ozadmin', function(req, res) {
  res.sendfile(path.join(__dirname, 'public/indexadmin.html'));
});

//Set response to all GET calls
app.get('/', function(req,res) {
    res.sendfile(path.join(__dirname, 'public/index.html'));
});

//Set up http server and listen to port 8080
var server = require('http').createServer(app).listen(process.env.PORT || '8080', function(){
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit');
});

kupelaApp.listen(server);
