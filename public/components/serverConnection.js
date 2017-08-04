import * as actions from '../reducer/serverConnection/actions';
import { messages } from '../reducer/serverConnection';
import io from 'socket.io-client';

var socket = null;

export function messageMiddleware(store) {
  return next => action => {
    console.log("Middleware triggered: ", action);
    const result = next(action);

    if(socket && action.type === actions.ADD_MESSAGE) {
      console.log("Message: " + action.message);
      //let messages = store.getState().messages;
      socket.emit('message', action.message);//messages[messages.length-1]);
    }
  };
}

export default function (store) {
  socket = io.connect('localhost:8080');

  socket.on('message', message => {
    store.dispatch(actions.addResponse(message));
  });
}
