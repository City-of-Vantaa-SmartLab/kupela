import {SEND_MESSAGE, RECEIVE_RESPONSE, INIT_SOCKET } from './actions';

const initialState = {
  latestMessage: '',
  messages: [],
  latestResponse: '',
  responses: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if(action.message.length > 0) {
              console.log("New message saved: " + action.message);
              state.latestMessage = action.message;
              state.messages.push(action.message);
              return state;
            }
            else {
              console.log("Too short message. Cannot send!");
              return state;
            }
        case RECEIVE_RESPONSE:
            if(action.message.length > 0) {
              console.log("New response saved: " + action.message);
              state.latestResponse = action.message;
              state.responses.push(action.message);
              return state;
            }
            else {
              console.log("Weird response received, cannot proceed!");
              return state;
            }
        case INIT_SOCKET:
            console.log("Initializing socket connection based on version");
            if(action.isTike == 'true') {
              console.log("Connecting as TIKE");
            }
            else {
              console.log("Connecting as FieldClient");
            }
            return state;
        default:
            return state;
    }
}
