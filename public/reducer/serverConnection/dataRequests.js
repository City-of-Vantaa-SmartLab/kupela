import { GET_SOME_MESSAGES, RECEIVE_DATA } from './actions';

const initialState = {

};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SOME_MESSAGES:
          return state;
        case RECEIVE_DATA:
          if(action.data.datatype == "someMessages") {
            console.log("Test function completed");
          }
          return state;
        default:
          return state;
    }
}
