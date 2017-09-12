/*
* Main server side application file.
* Handles socket connections and messaging
* between clients and server.
*/

//Import Socket.IO
var socketio = require('socket.io');

//Journal messages
var journal = { "journalmessages": []};

var addedMissions = [];

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

    socket.on('getMissions', data => {
      var message = {"datatype": "oldMissions", "content": addedMissions}
      socket.emit('dataIncoming', message);
    });

    socket.on('journalInput', data => {
      console.log("Journal input received: " + data.unit + ": " + data.input);
      var message = {"datatype": "journal", "sender": data.unit, "time": getTime(), "message": data.input};
      addJournalMessage(message);
      connections.forEach(connectedSocket => {
          connectedSocket.emit('dataIncoming', message);
      });
    });

    socket.on('share', data => {
      console.log("Shared content received: " + data.contenttype);
      var data = {"datatype": data.contenttype, "content": data.content};
      connections.forEach(connectedSocket => {
          connectedSocket.emit('sharedData', data);
      });
    });

    socket.on('ozCommand', data => {
      console.log("Oz command received!");
      if(data.type == "activation") {
        if(data.command == "mission") {
          console.log("activating mission");
          var mission = loadActiveMission();
          addMission(mission);
          connections.forEach(connectedSocket => {
            if(connectedSocket !== socket) {
              connectedSocket.emit('dataIncoming', {datatype: "mission", content: mission});
            }
            else {
              socket.emit('message', 'Mission activated');
            }
          });
        }
        else if(data.command == "arrival") {
          console.log("Changing arrival");
          connections.forEach(connectedSocket => {
            if(connectedSocket !== socket) {
            connectedSocket.emit('dataIncoming', {datatype: "arrival", content: "next"});
            }
            else {
              socket.emit('message', 'Arrival changed');
            }
          });
        }
      }
      else if(data.type == "send") {
        if(data.command == "messages") {
          console.log("Sending message set " + data.noOfSet);
          var newset = loadSetOfMessages(data.noOfSet);

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
      else if(data.type == "reset") {
        if(data.command == "hard") {
          resetExercise();

          connections.forEach(connectedSocket => {
            connectedSocket.emit('message', 'Exercise reset!');
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

//RESET EVERYTHING
function resetExercise() {
  addedMissions = [];
  journal = { "journalmessages": []};
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

function addMission(mission) {
  addedMissions.push(mission);
}

function loadSetOfMessages(no) {

  var set = {};
  if(no == "1"){
    set = messageset1;
  }
  else if(no == "2"){
    set = messageset2;
  }
  else if(no == "3"){
    set = messageset3;
  }
  return set;
}

function addJournalMessage(message) {
  journal.journalmessages.push(message);
}

function getTime() {
  var date = new Date();
  var time = ((date.getHours()+3 < 10) ? "0":"") + date.getHours()+3;
  time += ":" + ((date.getMinutes() < 10) ? "0":"") + date.getMinutes();
  time += ":" + ((date.getSeconds() < 10) ? "0":"") + date.getSeconds();
  console.log(time);
  return time;
}


//MESSAGE DATA

//n.12:30, heti alkuun, nopeita viestejä opiskelijoilta, lähialuuelta
const messageset1 = { "messages" : [
  {"nameId": "teksti11", "sender": "+358501245677 > I <3 Varia, WhatsApp", "message": "Koululla posahti!", "time": "12:29", "location": "Ojahaantie, Vantaa", "tags": "", "priority": "1" },
  {"nameId": "teksti12", "sender": "+358401234567 > I <3 Varia, WhatsApp", "message": "Mitä hittoo siellä tapahtuu?", "time": "12:30", "location": "Kaivokselantie, Vantaa", "tags": "", "priority": "2" },
  {"nameId": "teksti13", "sender": "+358501245668 > I <3 Varia, WhatsApp", "message": "Pitääks huolestuu?", "time": "12:30", "location": "Kaivokselantie, Vantaa", "tags": "", "priority": "2" }
]};

//n. 12:35, tieto räjähdyksestä/palosta alkaa leviämään, ensimmäinen vaaratiedote
const messageset2 = {"messages" : [
  {"nameId": "teksti21", "sender": "Kelo Einonen > Vantaan Puskaradio", "message": "Missä palaa? Hälytysajoneuvoja menee vauhdilla ohi Myyrmäessä.", "time": "12:34", "location": "Vaskivuorentie, Vantaa", "tags": "", "priority": "2" },
  {"nameId": "teksti22", "sender": "@tilannehuoneVantaa > Twitter, #vaaratiedote", "message": "VAARATIEDOTE Vantaa, Myyrmäki, 15.9.2017 klo 12:34. Räjähdys Varian Myyrmäen toimipisteessä. Asukkaita pyydetään välttämään alueelle menoa.", "time": "12:34", "location": "Myyrmäki, Vantaa", "tags": "", "priority": "1" },
  {"nameId": "teksti23", "sender": "Lea Kolminen > Vantaan Puskaradio", "message": "Tytär laittoi viestiä tapahtumapaikalta, kuulemma jonkinlainen räjähdys kyseessä..! Sitä päätyä rakennuksesta evakuoidaan juuri.", "time": "12:35", "location": "Kilterinkaari, Vantaa", "tags": "", "priority": "1" },
  {"nameId": "teksti24", "sender": "Elbi Komma > Vantaan Puskaradio", "message": "Ettei olis taas joku hullu siellä!", "time": "12:35", "location": "Palotie, Vantaa", "tags": "", "priority": "2" }

]};

//n.12:39, lisää viestejä, toinen vaaratiedote, ensimmäinen yksikkö kohteessa
const messageset3 = {"messages" : [
  {"nameId": "teksti31", "sender": "Tero Kerppu > Vantaan Puskaradio", "message": "Meidän lapsi seisoo siellä myös pihalla.", "time": "12:36", "location": "Kaivostie, Vantaa", "tags": "", "priority": "2" },
  {"nameId": "teksti32", "sender": "@tilannehuoneVantaa > Twitter, #vaaratiedote", "message": "VAARATIEDOTE Vantaa, Myyrmäki, 15.9.2017 klo 12:37. Vantaan Varian ammattikoulun tiloissa sattunut pieni räjähdys, asukkaita kehotetaan pysymään sisätiloissa tilanteen selviämiseen asti.", "time": "12:37", "location": "Myyrmäki, Vantaa", "tags": "", "priority": "1" },
  {"nameId": "teksti33", "sender": "Eija Kelvonen > Vantaan YH-vanhemmat", "message": "Varialla palaa!!! Onhan kaikkien lapset turvassa?!", "time": "12:37", "location": "Linnoitustie, Espoo", "tags": "", "priority": "2" },
  {"nameId": "teksti34", "sender": "Lea Kolminen > Vantaan Puskaradio", "message": "Nyt ne kuulemma seuraa jotain snäptsättiä, joku laittaa videota sieltä paikan päältä. Osaako joku neuvoa miten sinne pääsee katsomaan?", "time": "12:38", "location": "Kilterinkaari, Vantaa", "tags": "", "priority": "1" },
  {"nameId": "teksti35", "sender": "Milla Kompura > Vantaan Puskaradio", "message": "Lea Kolminen, se on sellainen kuva- ja videopalvelu puhelimelle. Silloinkin tietyllä alueella vain näkyy julkiset videot ehkä, mutta ei kai muuta. Harmi, onneksi teidän tyttö kuitenkin turvassa?", "time": "12:38", "location": "Kuohukuja, Vantaa", "tags": "", "priority": "2" },
  {"nameId": "teksti36", "sender": "Tero Loimu > Vantaan YH-vanhemmat", "message": "Toisessa ryhmässä juuri ilmoitettiin samasta asiasta. Siellä ollut joku räjähdys, kuulemma joku kateissa!", "time": "12:38", "location": "Kankaankuja, Vantaa", "tags": "", "priority": "1" }
]};
