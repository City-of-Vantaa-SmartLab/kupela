import * as actions from '../reducer/serverConnection/actions';
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
    }
  };
}

export default function (store) {
  //Connect to socket server, either localhost or bluemix
  socket = io.connect('localhost:8080');
  if(socket == null){
    socket = io.connect('https://kupela.eu-de.mybluemix.net:8080');
  }


  socket.on('message', message => {
    store.dispatch(actions.receiveResponse(message));
  });
  socket.on('dataIncoming', data => {
    store.dispatch(actions.receiveData(data));
  });
}
