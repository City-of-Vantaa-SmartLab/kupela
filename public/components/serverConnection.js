import * as actions from '../reducer/serverConnection/actions';
import { addMission } from '../reducer/missions/actions';
import { addJournalEntry } from '../reducer/journal/actions';
import { changeArrival } from '../reducer/arrival/actions';
import { setUser } from '../reducer/user/actions';
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
    else if(data.datatype == "arrival") {
      console.log("Arrival changed received");
      store.dispatch(changeArrival());
    }
    else if(data.datatype == "journal") {
      console.log("New journal input received!");
      store.dispatch(addJournalEntry(data));
    }
    else {
      store.dispatch(actions.receiveData(data));
    }
  });
  socket.on('versionReady', data => {
    store.dispatch(setUser(data.profiletype));
  });
}
