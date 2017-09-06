'use strict';

//Import Express module
var express = require('express');
//Import path module (packaged with Node.js)
var path = require('path');
//Import fs-extra
var fse = require('fs-extra');

//Websocket Test
var cfenv = require('cfenv');

//Environment
var environment = cfenv.getAppEnv();
//Create new instance of Express
var app = express();
//Import server side file for avatar app
var kupelaApp = require('./kupela_backend');

//Serve static html page from public directory
//app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static('public'));

//Set up http server and listen to port 80
var server = require('http').createServer(app).listen(process.env.PORT || '80', function(){
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit');
});

kupelaApp.listen(server);
