/*
* Main server side application file.
* Handles socket connections and messaging
* between clients and server.
*/

//Import Socket.IO
/*var socketio = require('socket.io');

//Initialization of application instance
//Called by server.js after server is created
module.exports.listen = function(app) {
  var io = socketio.listen(app);

  var tike = io.of('/tike');
  tike.on('connection', function(socket){
    console.log("Socket connection ready");
    initTikeApp();
  });
};


function initTikeApp() {

}*/
//Import Socket.IO
var socketio = require('socket.io');
//import io from 'socket.io';

module.exports.listen = function(server) {

  const socketServer = socketio(server);
  const connections = [];

  socketServer.on('connection', socket => {
    console.log("Client connected!");
    connections.push(socket);

    socket.on('message', data => {
      console.log("Message received: " + data);
      connections.forEach(connectedSocket => {
        if(connectedSocket !== socket) {
          connectedSocket.emit('message', data);
        }
        else {
          socket.emit('message', 'Default response');
        }
      });
    });

    socket.on('disconnect', () => {
      const index = connections.indexOf(socket);
      connections.splice(index, 1);
    });
  });

};
