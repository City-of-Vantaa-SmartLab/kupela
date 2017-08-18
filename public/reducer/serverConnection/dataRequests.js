import { GET_SOME_MESSAGES, RECEIVE_DATA } from './actions';

const initialState = {
  messages : {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SOME_MESSAGES:
          return state;
        case RECEIVE_DATA:
          console.log(action.data);
          if(action.data.datatype == "someMessages") {
            state.messages = action.data.content;
          }
          return state;
        default:
            return state;
    }
}
