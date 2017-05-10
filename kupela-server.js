/*
* Main server side application file.
* Handles socket connections and messaging
* between clients and server.
*/

var projectId = '';

//Import Socket.IO
var socketio = require('socket.io');

//Initialization of application instance
//Called by app.js after server is created
module.exports.listen = function(app) {
  var io = socketio.listen(app);

  var tike = io.of('/tike');
  tike.on('connection', function(socket){
    console.log("Socket connection ready");
    initTikeApp();
  });
}


function initTikeApp() {

}
