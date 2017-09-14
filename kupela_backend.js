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

    socket.on('getJournal', data => {
      var message = {"datatype": "oldJournal", "content": journal};
      socket.emit('dataIncoming', message);
    });

    socket.on('journalInput', data => {
      console.log("Journal input received: " + data.unit + ": " + data.input);
      var message = {"datatype": "journal", "sender": data.unit, "time": getTime(), "message": data.input};
      addJournalMessage(message);
      connections.forEach(connectedSocket => {
          connectedSocket.emit('dataIncoming', message);
          if(connectedSocket !== socket) {
            connectedSocket.emit('newItems', {"page": "tehtava", "tikeOnly": "false"});
          }
      });
    });

    socket.on('share', data => {
      console.log("Shared content received: " + data.contenttype);
      var data = {"datatype": data.contenttype, "content": data.content};
      connections.forEach(connectedSocket => {
          connectedSocket.emit('sharedData', data);
          if(connectedSocket !== socket) {
            connectedSocket.emit('newItems', {"page": "someuutiset", "tikeOnly": "false"});
          }
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
        else if(data.command == "url") {
          console.log("Changing url");

          connections.forEach(connectedSocket => {
            if(connectedSocket !== socket) {
            connectedSocket.emit('dataIncoming', {datatype: "url", plantype: data.plantype, url: data.url});
            }
            else {
              socket.emit('message', 'URL changed');
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
              connectedSocket.emit('newItems', {"page": "someuutiset", "tikeOnly": "true"});
            }
            else {
              socket.emit('message', 'Message set sent!');
            }
          });
        }
        else if(data.command == "news") {
          console.log("Sending news set " + data.noOfSet);
          var newset = loadSetOfNews(data.noOfSet);

          connections.forEach(connectedSocket => {
            if(connectedSocket !== socket) {
              connectedSocket.emit('dataIncoming', {datatype: "newsset", content: newset});
              connectedSocket.emit('newItems', {"page": "someuutiset", "tikeOnly": "true"});
            }
            else {
              socket.emit('message', 'News set sent!');
            }
          });
        }
        else if(data.command == "images") {
          console.log("Sending image set " + data.noOfSet);
          var newset = loadSetOfImages(data.noOfSet);

          connections.forEach(connectedSocket => {
            if(connectedSocket !== socket) {
              connectedSocket.emit('dataIncoming', {datatype: "imageset", content: newset});
              connectedSocket.emit('newItems', {"page": "someuutiset", "tikeOnly": "true"});
            }
            else {
              socket.emit('message', 'Image set sent!');
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
  addedMissions.unshift(mission);
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
  else if(no == "4"){
    set = messageset4;
  }
  return set;
}

function loadSetOfNews(no) {
  var set = {};
  if(no == "1"){
    set = newsset1;
  }
  else if(no == "2"){
    set = newsset2;
  }
  else if(no == "3"){
    set = newsset3;
  }
  else if(no == "4"){
    set = newsset4;
  }
  else if(no == "5"){
    set = newsset5;
  }
  return set;
}

function loadSetOfImages(no) {
  var set = {};
  if(no == "1"){
    set = imageset1;
  }
  else if(no == "2"){
    set = imageset2;
  }
  return set;
}

function addJournalMessage(message) {
  journal.journalmessages.unshift(message);
}

function getTime() {
  var date = new Date();
  var hours = date.getHours() + 3;
  var time = ((hours < 10) ? "0":"") + hours;
  time += ":" + ((date.getMinutes() < 10) ? "0":"") + date.getMinutes();
  time += ":" + ((date.getSeconds() < 10) ? "0":"") + date.getSeconds();
  console.log(time);
  return time;
}


//MESSAGE DATA

//LAUNCH 12.35
//Vaihe: TIKE vastaanottaa ensihälytyksen tiedot + Siirtyminen: auto 201 + siirtyminen auto P30 (johtoauto) + siirtyminen auto 301
const messageset1 = { "messages" : [
  {"nameId": "teksti11", "sender": "+358501245677 > I <3 Varia, WhatsApp", "message": "Koululla posahti!", "time": "12:32", "location": "Ojahaantie, Vantaa", "priority": "1" },
  {"nameId": "teksti12", "sender": "+358401234567 > I <3 Varia, WhatsApp", "message": "Mitä hittoo siellä tapahtuu?", "time": "12:32", "location": "Kaivokselantie, Vantaa", "priority": "2" },
  {"nameId": "teksti13", "sender": "+358501245668 > I <3 Varia, WhatsApp", "message": "Pitääks huolestuu?", "time": "12:32", "location": "Kaivokselantie, Vantaa", "priority": "2" },
  {"nameId": "teksti14", "sender": "+358457766544 > I <3 Varia, WhatsApp", "message": "Tääl soi hälyt ja ope sano et pitää lähtee pihalle", "time": "12:33", "location": "Kaivokselantie, Vantaa", "priority": "1" },
  {"nameId": "teksti15", "sender": "+358401123455 > I <3 Varia, WhatsApp", "message": "LOL mihkää ulos mee, siel sataa", "time": "12:33", "location": "Kaivokselantie, Vantaa", "priority": "2" },
  {"nameId": "teksti16", "sender": "Opettaja K.A. > I <3 Varia, WhatsApp", "message": "Nyt on parasta kaikkien siirtyä ulos, jotain on tapahtunut.", "time": "12:35", "location": "Kaivokselantie, Vantaa", "priority": "2" },
  {"nameId": "teksti13", "sender": "Kelo Einonen > Vantaan Puskaradio", "message": "Missä palaa? Hälytysajoneuvoja menee vauhdilla ohi Myyrmäessä..", "time": "12:35", "location": "Kaivokselantie, Vantaa", "priority": "2" },
  {"nameId": "teksti13", "sender": "Lea Kolminen > Vantaan Puskaradio", "message": "Tytär laittoi viestiä tapahtumapaikalta, kuulemma jonkinlainen räjähdys kyseessä! Sitä päätyä rakennuksesta tyhjennetään, ilmeisesti nyt vasta tajusivat, että kyseessä oikea hälytys...", "time": "12:35", "location": "Kaivokselantie, Vantaa", "priority": "1" },
  {"nameId": "teksti13", "sender": "Elbi Komma > Vantaan Puskaradio", "message": "Ettei olisi taas joku hullu siellä!!", "time": "12:35", "location": "Kaivokselantie, Vantaa", "priority": "2" },
]};

const newsset1 = { "newsitems" : [
  {"nameId": "news11", "priority": "1", "url": "../resources/images/news/myyrmaessarajahti.png"},
]};

//LAUNCH kun 1. Saapuminen (n. Klo 12.37) + tiedustelu + lukkojen taakse jääneen havaitseminen ja paikallistaminen
const imageset1 = { "images": [
  {"nameId": "image11", "priority": "1", "url": "../resources/images/some/jumissa1.png"},
  {"nameId": "image12", "priority": "1", "url": "../resources/images/some/jumissa2.png"},
  {"nameId": "image13", "priority": "2", "url": "../resources/images/some/jumissa3.png"},
]};

//LAUNCH A. 12.40
//Vaihe: Siirtyminen auto 201 SAAPUU 12.37 + siirtyminen auto P30 SAAPUU 12.40 + siirtyminen auto 301 SAAPUU 12.40
const messageset2 = {"messages" : [
  {"nameId": "teksti21", "sender": "+358441234567 > I <3 Varia, WhatsApp", "message": "Onks joku nähny Tomia? Me oltais koht pihal ja sitä ei nyt ihan näy...", "time": "12:37", "location": "Vaskivuorentie, Vantaa", "priority": "1" },
  {"nameId": "teksti22", "sender": "@tilannehuoneVantaa > Twitter", "message": "VAARATIEDOTE Vantaa, Myyrmäki, Varian ammattikoulu. Tapahtunut pienehkö räjähdys, alueella oleskelevia pyydetään siirtymään sisätiloihin.", "time": "12:37", "location": "Myyrmäki, Vantaa", "priority": "1" },
  {"nameId": "teksti23", "sender": "Jami Korpi > Myyrmäki-liike", "message": "Jo toinen paloauto meni tosta ohi, tietääkö joku mitä on tapahtunut?", "time": "12:38", "location": "Kilterinkaari, Vantaa", "priority": "2" },
  {"nameId": "teksti24", "sender": "Tepa Liukku > Myyrmäki-liike", "message": "Tossa ojahaantiellä tuli vastaan pari, näyttivät menevän koululle päin!", "time": "12:38", "location": "Palotie, Vantaa", "priority": "2" },
  {"nameId": "teksti25", "sender": "Tero Loimu > Myyrmäki-liike", "message": "Toisessa ryhmässä juuri ilmoitettiin samasta asiasta. Siellä ollut joku räjähdys, kuulemma pari kateissa!", "time": "12:38", "location": "Vaskivuorentie, Vantaa", "priority": "1" },
  {"nameId": "teksti26", "sender": "Mauno Jokinen > Myyrmäki-liike", "message": "Jonkin verran savua näyttäisi tulevan sieltä", "time": "12:39", "location": "Vaskivuorentie, Vantaa", "priority": "2" },
  {"nameId": "teksti27", "sender": "+358441234567 > I <3 Varia, WhatsApp", "message": "Tomi on hukassa, missä on Tomi? Me muut seisotaan tääl pihal.", "time": "12:39", "location": "Vaskivuorentie, Vantaa", "priority": "1" },
  {"nameId": "teksti28", "sender": "+358451234567 > I <3 Varia, WhatsApp", "message": "Tomi, eiks se tullu teiän perässä?", "time": "12:39", "location": "Vaskivuorentie, Vantaa", "priority": "2" },
  {"nameId": "teksti29", "sender": "+358501245677 > I <3 Varia, WhatsApp", "message": "No ei ainakaa meiän", "time": "12:39", "location": "Vaskivuorentie, Vantaa", "priority": "2" },
  {"nameId": "teksti210", "sender": "+358507654321 > I <3 Varia, WhatsApp", "message": "Kyl se oli viel hetki sitten messissä", "time": "12:39", "location": "Vaskivuorentie, Vantaa", "priority": "2" },
  {"nameId": "teksti211", "sender": "+358441234567 > I <3 Varia, WhatsApp", "message": "VMP eiks kukaa kattonu et tuliks se sielt", "time": "12:40", "location": "Vaskivuorentie, Vantaa", "priority": "2" },
  {"nameId": "teksti212", "sender": "+358501245677 > I <3 Varia, WhatsApp", "message": "Mä mitää tomii ehtiny tsiigaa ku tuli kiire", "time": "12:40", "location": "Vaskivuorentie, Vantaa", "priority": "2" },
  {"nameId": "teksti213", "sender": "+358507654321 > I <3 Varia, WhatsApp", "message": "Nii en mä tajuu, oli se siin...", "time": "12:40", "location": "Vaskivuorentie, Vantaa", "priority": "2" },
  {"nameId": "teksti215", "sender": "+358507654321 > I <3 Varia, WhatsApp", "message": "Jouni puuttuu myös! Mut hei, ihan ku silt ois tullu snäppi", "time": "12:40", "location": "Vaskivuorentie, Vantaa", "priority": "2" },
]};

//n.12:43, Vaiheet: 1. Saapuminen auto 201 (pääovelle) + 2. Saapuminen
const messageset3 = {"messages" : [
  {"nameId": "teksti31", "sender": "Tero Kerppu > Vantaan Puskaradio", "message": "Meidän lapsi seisoo siellä myös pihalla, sanoo että jotku on vielä kateissa.. Mutta ei kaiketi loimota mitkään liekit kuitenkaan.", "time": "12:40", "location": "Kaivostie, Vantaa", "priority": "2" },
  {"nameId": "teksti32", "sender": "Lea Kolminen > Vantaan Puskaradio", "message": "Nyt ne kuulemma seuraa jotain snäptsättiä, joku laittaa videota sieltä paikan päältä. Osaako joku neuvoa miten sinne pääsee katsomaan?", "time": "12:41", "location": "Kilterinkaari, Vantaa", "priority": "2" },
  {"nameId": "teksti33", "sender": "Milla Kompura > Vantaan Puskaradio", "message": "Lea Kolminen, se on sellainen kuva- ja videopalvelu puhelimelle. Silloinkin tietyllä alueella vain näkyy julkiset videot ehkä, mutta ei kai muuta. Harmi, onneksi teidän tyttö kuitenkin turvassa?", "time": "12:41", "location": "Kuohukuja, Vantaa", "tags": "", "priority": "2" },
  {"nameId": "teksti34", "sender": "Tero Kerppu > Vantaan Puskaradio", "message": "Joo ilmeisesti toinen puuttuvista laittaa viestiä. Ihme, että siellä toimii viel yhteydet. Menin lähemmäs tuijottelemaan kun en ole juuri nyt töissä, näyttää siltä että aikamoiseen ovat varustautuneet.", "time": "12:42", "location": "Kankaankuja, Vantaa", "priority": "2" },
  {"nameId": "teksti35", "sender": "Ralf Engelström > Vantaan Puskaradio", "message": "tottakai toimii koska hyvinvointivaltio eikä mikään kehitysmaa älyhoi", "time": "12:43", "location": "Kaivostie, Vantaa", "priority": "2" },
]};

const newsset2 = { "newsitems" : [
  {"nameId": "news21", "priority": "1", "url": "../resources/images/news/myyrmaessarajahti2.png"},
]};

//n.12:45, Vaiheet: 2. Saapuminen + evakuointipaikka
const messageset4 = {"messages" : [
  {"nameId": "teksti41", "sender": "Opettaja K.A. > I <3 Varia, WhatsApp", "message": "Onko Tomi vieläkin kateissa?", "time": "12:41", "location": "Kaivostie, Vantaa", "priority": "2" },
  {"nameId": "teksti42", "sender": "+358507654321 > I <3 Varia, WhatsApp", "message": "Me oltiin vaihtamassa sähköluokan pukkarissa käsipapereita, se oli kyl siin viel messis", "time": "12:41", "location": "Kilterinkaari, Vantaa", "priority": "1" },
  {"nameId": "teksti43", "sender": "+358441234567 > I <3 Varia, WhatsApp", "message": "VMP eiks kukaa kattonu et tuliks se sielt?", "time": "12:41", "location": "Kuohukuja, Vantaa", "tags": "", "priority": "2" },
  {"nameId": "teksti44", "sender": "Opettaja K.A. > I <3 Varia, WhatsApp", "message": "Milloin joku on viimeksi nähnyt Tomin?", "time": "12:42", "location": "Vaskivuorentie, Vantaa", "priority": "2" },
  {"nameId": "teksti45", "sender": "+358507654321 > I <3 Varia, WhatsApp", "message": "No siin pukkaris! Se vaihto niit papereit ja sit tuli käsky evakuoida", "time": "12:43", "location": "Kaivostie, Vantaa", "priority": "1" },
  {"nameId": "teksti46", "sender": "+358441234567 > I <3 Varia, WhatsApp", "message": "Ei kai se pääli jääny sinne... Mennääks kattoo?", "time": "12:43", "location": "Kaivostie, Vantaa", "priority": "2" },
  {"nameId": "teksti47", "sender": "+358507654321 > I <3 Varia, WhatsApp", "message": "Ei sinne voi mennä ku nyt stondaillaa vaan täs pihal", "time": "12:44", "location": "Kaivostie, Vantaa", "priority": "2" },
  {"nameId": "teksti48", "sender": "+358441234567 > I <3 Varia, WhatsApp", "message": "Nii vattu ei voikaa. Ehk se on vaan tuol kauempana", "time": "12:45", "location": "Kaivostie, Vantaa", "priority": "2" },
]};

const newsset3 = { "newsitems" : [
  {"nameId": "news31", "priority": "1", "url": "../resources/images/news/myyrmaessarajahti3.png"},
]};

//LAUNCH 12:50
const imageset2 = { "images": [
  {"nameId": "image21", "priority": "2", "url": "../resources/images/some/kaatunut.png"},
  {"nameId": "image22", "priority": "2", "url": "../resources/images/some/kaatunut2.png"},
  {"nameId": "image23", "priority": "1", "url": "../resources/images/some/kaatunut3.png"},
]};

const newsset4 = { "newsitems" : [
  {"nameId": "news41", "priority": "2", "url": "../resources/images/news/uutinen1.png"},
  {"nameId": "news42", "priority": "2", "url": "../resources/images/news/uutinen2.png"},
  {"nameId": "news43", "priority": "1", "url": "../resources/images/news/uutinen3.png"},
  {"nameId": "news44", "priority": "2", "url": "../resources/images/news/uutinen4.png"},
]};

const newsset5 = { "newsitems" : [
  {"nameId": "news51", "priority": "1", "url": "../resources/images/news/uutinen5.png"},
]};
