import * as actions from '../reducer/serverConnection/actions';
import io from 'socket.io-client';

var socket = null;

export function messageMiddleware(store) {
  return next => action => {
    console.log("Middleware triggered: ", action);
    const result = next(action);

    if(socket && action.type === actions.SEND_MESSAGE) {
      socket.emit('message', action.message);
      console.log("Message sent to socket!");
    }
  };
}

export default function (store) {
  socket = io.connect('localhost:8080');

  socket.on('message', message => {
    store.dispatch(actions.receiveResponse(message));
  });
}
