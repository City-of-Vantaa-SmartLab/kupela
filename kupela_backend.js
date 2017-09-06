/*
* Main server side application file.
* Handles socket connections and messaging
* between clients and server.
*/

//Import Socket.IO
var socketio = require('socket.io');

//Journal messages
var journal = { "journalmessages": []};

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

    socket.on('versionInit', data => {
      console.log("Initializing connection, is TIKE: " + data);
      var type = "field";
      if(data == "true"){
        type = "tike";
      }
      socket.emit('versionReady', {profiletype: type});
    });

    socket.on('journalInput', data => {
      console.log("Journal input received: " + data.unit + ": " + data.input);
      var message = {"datatype": "journal", "sender": data.unit, "time": getTime(), "message": data.input};
      addJournalMessage(message);
      connections.forEach(connectedSocket => {
          connectedSocket.emit('dataIncoming', message);
      });
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
      if(data.type == "send") {
        if(data.command == "messages") {
          console.log("Sending message set " + data.noOfSet);
          var newset = '';
          if(data.noOfSet == 1){
            newset = loadFirstSetOfMessages();
          }
          connections.forEach(connectedSocket => {
            if(connectedSocket !== socket) {
              connectedSocket.emit('dataIncoming', {datatype: "messageset", content: newset});
            }
            else {
              socket.emit('message', 'Message set sent!');
            }
          });
        }
      }
    });

    socket.on('disconnect', () => {
      const index = connections.indexOf(socket);
      connections.splice(index, 1);
    });
  });

};

/*
 * HARDCODED APPLICATION DATA FOR KUPELA
 */

function loadActiveMission() {
  var missiondata = {
      "id": "1",
      "name": "Tulipalo",
      "location": "Varia, Myyrmäki",
      "priority": "1"
  };

  return missiondata;
}

function loadFirstSetOfMessages() {
  var messages = { "messages" : [
      { "nameId": "teksti11", "sender": "Pekka", "message": "Ajattelin lähettää tällasta spämmiä", "time": "12:47", "location": "Tikkurila", "tags": "Fire", "priority": "2" },
      { "nameId": "teksti12", "sender": "Pekka", "message": "Ajattelin lähettää tällasta spämmiä", "time": "12:47", "location": "Tikkurila", "tags": "Fire", "priority": "2" },
      { "nameId": "teksti13", "sender": "Pekka", "message": "Ajattelin lähettää tällasta spämmiä", "time": "12:47", "location": "Tikkurila", "tags": "Fire", "priority": "2" },
      { "nameId": "teksti14", "sender": "Pekka", "message": "Ajattelin lähettää tällasta spämmiä", "time": "12:47", "location": "Tikkurila", "tags": "Fire", "priority": "2" },
      { "nameId": "teksti15", "sender": "Santeri", "message": "Pekka lopeta spämmi, ei näy muiden viestit!", "time": "12:48", "location": "Tikkurila", "tags": "Fire", "priority": "1" }
  ]};

  return messages;
}

function addJournalMessage(message) {
  journal.journalmessages.push(message);
}

function getTime() {
  var date = new Date();
  var time = ((date.getHours() < 10) ? "0":"") + date.getHours();
  time += ":" + ((date.getMinutes() < 10) ? "0":"") + date.getMinutes();
  time += ":" + ((date.getSeconds() < 10) ? "0":"") + date.getSeconds();
  console.log(time);
  return time;
}
