import * as actions from '../reducer/serverConnection/actions';
import { addMission, addOldMissions, GET_OLD_MISSIONS } from '../reducer/missions/actions';
import { addJournalEntry, addOldJournal, GET_OLD_JOURNAL } from '../reducer/journal/actions';
import { changeArrival } from '../reducer/arrival/actions';
import { addSharedText } from '../reducer/texts/actions';
import { addSharedImage } from '../reducer/images/actions';
import { addSharedNews } from '../reducer/news/actions';
import { setUser } from '../reducer/user/actions';
import { addNewItems } from '../reducer/tabs/actions';
import { changeUrl } from '../reducer/floorplans/actions';
import io from 'socket.io-client';

var socket = null;

export function messageMiddleware(store) {
  return next => action => {
    console.log("Middleware triggered: ", action);
    const result = next(action);

    if(socket) {
      if(action.type === actions.INIT_SOCKET) {
        socket.emit('versionInit', action.isTike);
        console.log("Initialization sent to socket");
      }
      else if(action.type === GET_OLD_MISSIONS) {
        socket.emit('getMissions', "");
      }
      else if(action.type === GET_OLD_JOURNAL) {
        socket.emit('getJournal', "");
      }
      else if(action.type === actions.SEND_MESSAGE) {
        socket.emit('message', action.message);
        console.log("Message sent to socket!");
      }
      else if(action.type === actions.GET_SOME_MESSAGES) {
        socket.emit('getSomeMessages', action.message);
        console.log('Some messages data request sent to socket');
      }
      else if(action.type === actions.JOURNAL_INPUT_BUTTON_CLICKED) {
        var data = {"input": action.input, "unit": action.unit};
        socket.emit("journalInput", data);
        console.log("Journal input sent to socket!");
      }
      else if(action.type == actions.CONTENT_SHARED) {
        var data = {"contenttype": action.contenttype, "content": action.content};
        socket.emit("share", data);
        console.log("Shared content sent to socket");
      }
      else if(action.type == actions.SEND_OZ_COMMAND) {
        socket.emit('ozCommand', action.data);
        console.log("OZ command sent to socket!");
      }
    }
  };
}

export default function (store) {
  //Connect to socket server, either localhost or bluemix
  //CHANGE THIS TO RUN LOCALLY
  socket = io.connect('localhost:80');
  //socket = io.connect('https://kupela.eu-de.mybluemix.net');


  socket.on('message', message => {
    store.dispatch(actions.receiveResponse(message));
  });

  socket.on('dataIncoming', data => {
    if(data.datatype == "mission") {
      console.log("New mission received");
      store.dispatch(addMission(data.content));
    }
    else if(data.datatype == "oldMissions") {
      console.log("Loaded old missions");
      store.dispatch(addOldMissions(data.content));
    }
    else if(data.datatype == "oldJournal") {
      console.log("Loaded old journal messages");
      store.dispatch(addOldJournal(data.content.journalmessages));
    }
    else if(data.datatype == "arrival") {
      console.log("Arrival changed received");
      store.dispatch(changeArrival());
    }
    else if(data.datatype == "url") {
      console.log("URL change received");
      store.dispatch(changeUrl(data.plantype, data.url));
    }
    else if(data.datatype == "journal") {
      console.log("New journal input received!");
      store.dispatch(addJournalEntry(data));
    }
    else {
      store.dispatch(actions.receiveData(data));
    }
  });

  socket.on('sharedData', data => {
    console.log("Shared data received");
    if(data.datatype == "text"){
      store.dispatch(addSharedText(data.content));
      //store.dispatch(addNewItems("someuutiset", 1));
    }
    else if(data.datatype == "image") {
      store.dispatch(addSharedImage(data.content));
      //store.dispatch(addNewItems("someuutiset", 1));
    }
    else if(data.datatype == "news") {
      store.dispatch(addSharedNews(data.content));
      //store.dispatch(addNewItems("someuutiset", 1));
    }

  });

  socket.on('newItems', data => {
    if(data.tikeOnly == "false"){
      store.dispatch(addNewItems(data.page, 1));
    }
    else {
      if(store.props.user.usertype == "tike") {
        store.dispatch(addNewItems(data.page, 1));
      }
    }
  });

  socket.on('versionReady', data => {
    store.dispatch(setUser(data.profiletype));
  });
}
