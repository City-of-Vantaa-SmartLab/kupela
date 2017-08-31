import { SEND_OZ_COMMAND } from './actions';

const initialState = {
  latestType: '',
  latestCommand: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SEND_OZ_COMMAND:
          console.log("OZ Command sent: " + action.data.command);
          state.latestType = action.data.type;
          state.latestMessage = action.data.command;

          return state;
        default:
            return state;
    }
}
