import { GET_SOME_MESSAGES, RECEIVE_DATA } from './actions';
import { initialState } from './dataLoaders';

/*const initialState = {
  messages : []
};*/

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SOME_MESSAGES:
          return state;
        case RECEIVE_DATA:
          if(action.data.datatype == "someMessages") {
            console.log("Test function completed");
          }
          else if(action.data.datatype == "messageset") {
            console.log("New messages received");

          }
          return state;
        default:
            return state;
    }
}
