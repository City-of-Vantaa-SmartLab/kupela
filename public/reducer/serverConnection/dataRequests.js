import { GET_SOME_MESSAGES, RECEIVE_DATA } from './actions';

const initialState = {
  latestMessage: '',
  messages : []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SOME_MESSAGES:
          return state;
        case RECEIVE_DATA:
          console.log("No of Messages: " + state.messages.length);
          if(action.data.datatype == "someMessages") {
            state.latestMessage = action.data.content;
            state.messages.push(action.data.content);
          }
          return state;
        default:
            return state;
    }
}
