/*
* Main server side application file.
* Handles socket connections and messaging
* between clients and server.
*/

//Import Socket.IO
var socketio = require('socket.io');

//Global serverside JSON objects
var messages, images, videos, news;

module.exports.listen = function(server) {

  const socketServer = socketio(server);
  const connections = [];

  //Load JSON data
  loadBackEndData();

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

    socket.on('versionInit', data => {
      console.log("Initializing connection, is TIKE: " + data);
      var type = "field";
      if(data == true){
        type = "tike";
      }
      socket.emit('versionReady', {profiletype: type});
    });

    socket.on('ozCommand', data => {
      console.log("Oz command received!");
      if(data.type == "activation") {
        if(data.command == "mission") {
          console.log("activating mission");
          connections.forEach(connectedSocket => {
            if(connectedSocket !== socket) {
              connectedSocket.emit('dataIncoming', {datatype: "mission", content: loadActiveMission()});
            }
            else {
              socket.emit('message', 'Mission activated');
            }
          });
        }
      }
    });

    socket.on('getSomeMessages', data => {
      console.log("Some messages requested!");
      socket.emit('dataIncoming', {datatype: "someMessages", content: messages});
    });

    socket.on('disconnect', () => {
      const index = connections.indexOf(socket);
      connections.splice(index, 1);
    });
  });

};

function loadBackEndData() {
  messages = '{ "messages" : [' +
      '{ "priority" : "1", "message" : "This is important message!", "sender" : "Matti Testaaja", "time" : "10:35 06/08/2017" }' +
      '{ "priority" : "1", "message" : "This is another very important message!", "sender" : "Matti Testaaja", "time" : "11:35 06/08/2017" }' +
      '{ "priority" : "2", "message" : "This is not an important message!", "sender" : "Matti Testaaja", "time" : "10:37 06/08/2017" }' +
      '{ "priority" : "2", "message" : "Why am I even sending this?", "sender" : "Matti Testaaja", "time" : "14:35 06/08/2017" }' +
      ']}';
}

function loadActiveMission() {
  var missiondata = {
      "id": "1",
      "name": "Tulipalo",
      "location": "Varia, Myyrmäki",
      "priority": "1"
  };

  return missiondata;
}
