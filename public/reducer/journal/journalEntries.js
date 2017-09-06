import { NEW_JOURNAL_ENTRY } from './actions';

const initialState = {
  entries: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case NEW_JOURNAL_ENTRY:

      var newentry = {"sender": action.sender, "time": action.time, "message": action.message};
      console.log("New messages received" + newentry.sender + " " + newentry.time + " " + newentry.message);
      console.log("No of entries: " + state.entries.length);
      return {
        ...state,
        messages: state.entries.push(newentry)
      }
    default:
      return state;
  }
}
