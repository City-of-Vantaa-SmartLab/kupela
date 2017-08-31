import { GET_SOME_MESSAGES, RECEIVE_DATA } from './actions';
import { addMission } from '../missions/actions';

const initialState = {
  latestMessage: '',
  messages : []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SOME_MESSAGES:
          return state;
        case RECEIVE_DATA:
          if(action.data.datatype == "someMessages") {
            state.latestMessage = action.data.content;
            state.messages.push(action.data.content);
          }
          else if(action.data.datatype == "mission") {
            console.log("New mission received");
            console.log(action.data.content);
          }
          return state;
        default:
            return state;
    }
}
